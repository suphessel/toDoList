import { Request, Response } from "express";
import insertTask from "../data/insertTask";
import moment from "moment"

export default async function createTask( req: Request, res: Response){
    try{

        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.deadline ||
            !req.body.authorId
        ){
            res
            .status(400)
            .send ('Preencha os campos "title", "description", "deadline" e "authorId"')
        
            return
        }

        const dateDiff: number = moment(req.body.deadline, "DD/MM/YYYY").unix() - moment().unix()

        if(dateDiff <= 0){
            res.status(400).send({message: '"Deadline deve ser uma data futura!"'})

            return
        }

        const id = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
           moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.authorId
        )

        res.status(200).send({
            message: "Tarefa criada com sucesso!", 
            id
    })

       
    }catch(error){
        res.status(400).send({message: error.message || error.sqlMessage})
    }
    


}