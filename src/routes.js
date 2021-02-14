import { Router } from 'express';
import UserController from './app/controllers/UserController';
import LoginController from './app/controllers/LoginController';

const routes = Router();

routes.post('/cadastro', UserController.create);
routes.post('/login', LoginController.store);

export default routes;