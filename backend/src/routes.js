import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/preCadastro', UserController.preCreate);
routes.patch('/cadastro', UserController.create);

export default routes;