import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/preCadastro', UserController.preCreate);
routes.patch('/cadastro', UserController.create);
routes.post('/novaSenha', UserController.updateSenha);
routes.get('/esqueci', UserController.forgotPassword);

export default routes;