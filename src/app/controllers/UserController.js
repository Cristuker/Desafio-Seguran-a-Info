import { generate } from "generate-password";
import { 
    createUser, 
    findUser, 
    updateUser, 
    sendEmailTemp 
} from "../services/";

class UserController {
    async preCreate(req, res) {
        try {
            const requirements = ["email", "nome"];
            for (const property of requirements) {
                if (!req.body[property]){
                    return res.status(400).send(`${property.charAt(0).toUpperCase() + property.slice(1, property.length)} is required!`);
                }
            }

            const tempPassword = generate({
                length: 10,
                lowercase: true,
                uppercase: true,
                symbols: true,
            });

            const { nome, email } = req.body;

            await createUser(nome, email, tempPassword);
            await sendEmailTemp(nome, email, tempPassword)
            return res.status(201).json({
                message: "Senha válida por 5 minutos...",
                tempPassword: tempPassword,
                createdAt: new Date(),
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal server error.');
        }
    }

    async create(req, res) {
        try {
            const requirements = ["email", "password", "createdAt"];
            for (const property of requirements) {
                if (!req.body[property]){
                    return res.status(400).send(`${property.charAt(0).toUpperCase() + property.slice(1, property.length)} is required!`);
                }
            }
            const { email, password } = req.body;
            // Data atual
            const actualTime = new Date();
            const actualHour = actualTime.getHours();
            const actualMinute =  actualTime.getMinutes();
            // Data da senha temporaria
            const dateOfTempPassword = new Date(req.body.createdAt);
            const hourTempPass = dateOfTempPassword.getHours();
            const minuteTempPass = dateOfTempPassword.getMinutes();
            const diferenceInMinutes = actualMinute - minuteTempPass;
            const timeToNewPassIsValid = actualHour === hourTempPass && !(diferenceInMinutes > 5);

            if(!timeToNewPassIsValid) {
                return res.status(406).send('Tempo limite expirado!');
            }
            const user = await findUser(email);
            await updateUser(user.id, password);
            return res.status(200).send('Usuario atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal server error.');
        }
    }
}

export default new UserController();
