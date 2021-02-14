import { generate } from 'generate-password';
import { createUser } from '../services/UserService';

class UserController {
    async create(req, res) {
        try {
            const requirements = ['email', 'nome'];
            for (const property of requirements) {
                if (!req.body[property]) return res.status(400).send(`${property.charAt(0).toUpperCase() + property.slice(1, property.length)} is required!`);
            }

            const tempPassword = generate({
                length: 10,
                lowercase: true,
                uppercase: true,
                symbols: true,
            });

            const { nome, email } = req.body;

            await createUser(nome, email, tempPassword);

            return res.status(201).json({
                message: 'Senha válida por 3  minutos...',
                tempPassword: tempPassword,
                createdAt: new Date()
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export default new UserController();