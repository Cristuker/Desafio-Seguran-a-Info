import { generate } from "generate-password";
import { 
    createUser, 
    findUser, 
    updateUser, 
    sendEmailTemp,getCreatedAt,
    setTempPassword
} from "../services/";
import { passwordHash } from "../utils/passwordHash";

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
            await sendEmailTemp(nome, email, tempPassword);
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
            const requirements = ["usuario", "senha"];
            for (const property of requirements) {
                if (!req.body[property]){
                    return res.status(400).send(`${property.charAt(0).toUpperCase() + property.slice(1, property.length)} is required!`);
                }
            }
            const { usuario, senha } = req.body;
            const userExist = await findUser(usuario);
            if(!userExist) {
                return res.status(404).send(`User not found!`);
            }
            const { created_at: createdAt } = await getCreatedAt(usuario);
            // Data atual
            const actualTime = new Date();
            const actualHour = actualTime.getHours();
            const actualMinute =  actualTime.getMinutes();
            // Data da senha temporaria
            const dateOfTempPassword = new Date(createdAt);
            const hourTempPass = dateOfTempPassword.getHours();
            const minuteTempPass = dateOfTempPassword.getMinutes();
            const diferenceInMinutes = actualMinute - minuteTempPass;
            const timeToNewPassIsValid = actualHour === hourTempPass && !(diferenceInMinutes > 5);

            if(!timeToNewPassIsValid) {
                return res.status(406).send('Tempo limite expirado!');
            }
            const user = await findUser(usuario);
            await updateUser(user.id, senha);
            return res.status(200).send('Usuario atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal server error.');
        }
    }

    async updateSenha(req, res) {
        try {
            const requirements = ["usuario", "senha"];
            for (const property of requirements) {
                if (!req.body[property]){
                    return res.status(400).send(`${property.charAt(0).toUpperCase() + property.slice(1, property.length)} is required!`);
                }
            }
            const { usuario, senha } = req.body;

            const { id } = await findUser(usuario);
            const hash = await passwordHash(senha);
            await updateUser(id, hash);
            return res.status(200).send();
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal server error.');
        }
    }

    async forgotPassword(req, res) {
        try {
            const { usuario } = req.query;
            const usuarioInfo = await findUser(usuario);
            if(!usuarioInfo) {
                return res.status(404).send(`User not found!`);
            }
            const tempPassword = generate({
                length: 10,
                lowercase: true,
                uppercase: true,
                symbols: true,
            });
    
            await updateUser(usuario.id, tempPassword);
            await sendEmailTemp(usuarioInfo.name, usuarioInfo.email, tempPassword);
            return res.status(200).send();
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal server error.');
        }
    }

    async setForgotPass(req, res) {
        try {
            const { usuario } = req.query;
            const usuarioInfo = await findUser(usuario);
            if(!usuarioInfo) {
                return res.status(404).send(`User not found!`);
            }
            const tempPassword = generate({
                length: 10,
                lowercase: true,
                uppercase: true,
                symbols: true,
            });
    
            await updateUser(usuario.id, tempPassword);
            await sendEmailTemp(usuarioInfo.name, usuarioInfo.email, tempPassword);
            return res.status(200).send();
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal server error.');
        }
    }
}

export default new UserController();
