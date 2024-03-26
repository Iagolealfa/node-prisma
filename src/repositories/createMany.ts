import { Prisma } from "@prisma/client"
import { prisma } from "../libs/prisma"


export async function createMany( users : Prisma.UserCreateInput[]){
    try{
        return await prisma.user.createMany({
        data : users,
        skipDuplicates: true
    })
    }catch(error){
        return false
    }
}