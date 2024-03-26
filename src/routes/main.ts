import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user',async (req, res) =>{
    const user = await createUser({
        name : 'Teste',
        email : 'testador1@gmail.com'
    })
    if (user){
        res.status(201).json({user})
    }else{
        res.status(500).json({ error : 'E-mail já cadastrado'})
    }
    
});