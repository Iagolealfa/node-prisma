import { Request, Response } from 'express';
import { createUser,createUsers } from '../services/user';

export const userCreate = async function(req: Request, res : Response) {
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
    
}

export const userCreateMany = async(req : Request,res : Response) =>{
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
    
}