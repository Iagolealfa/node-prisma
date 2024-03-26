import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser,createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user',async (req, res) =>{
    const user = await createUser({
        name : 'Teste 2',
        email : 'testador2@gmail.com',
        posts : {
            create: {
                title : 'Meu primeiro post',
                body : 'Meu primeiro corpo'
            }
        }
    })
    if (user){
        res.status(201).json({user})
    }else{
        res.status(500).json({ error : 'E-mail já cadastrado'})
    }
    
});

mainRouter.post('/users',async(req,res) =>{
    const result = await createUsers([
        {name : 'João 2', email : 'joao2@hotmail.com'},
        {name : 'João 2', email : 'joao@hotmail.com'},
        {name:'Ciclano 2', email : 'ciclano2@gmail.com'},
        {name : 'Fulano 2', email: 'fulano2@hotmail.com'}
    ],);
    if(result){
        res.json({result})
    }else{
        res.json({error : 'Aconteceu um erro'})
    }
    
})