import { Router } from 'express';
import { userCreate, userCreateMany } from '../controller/userController';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user',userCreate);

mainRouter.post('/users',userCreateMany)