import { Prisma } from "@prisma/client"
import { prisma } from "../libs/prisma"
import { createMany } from "../repositories/createMany"

export const createUser = async (data: Prisma.UserCreateInput) =>{
    try{
        return await prisma.user.create({ data })
    }catch(error){
        return false
    }    
}

export const createUsers = async (users : Prisma.UserCreateInput[]) =>{
    try{
        return await createMany(users)
    }catch(error){
        return false
    }
}