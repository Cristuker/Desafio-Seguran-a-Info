import { Router } from 'express';

const routes = Router();

routes.post('/cadastro', (req,res) => {
    return res.send('cadastro');
});

export default routes;