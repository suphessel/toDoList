import { Request, Response } from "express";
import updateUser from "./updateUser";

export default async function editUser( req: Request, res: Response){
    try{

        if(
            req.body.name === ""||
            req.body.nickname === "" ||
            req.body.email === ""
        ){
            res.status(400).send({
                message: "Nenhum dos campos pode estart em branco"
            })

            return
        }
        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message: "Escolha ao menos um valor para alterar"
            })

            return
        }
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({message: "Usuário editado com sucesso!"})

  
    }catch(error){
        res.status(400).send({message: error.message || error.sqlMessage})
    }
    


}