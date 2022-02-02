import connection from "../connection";

export default async function inserTask(

    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
    
    ) {

        await connection('ToDoListTasks').insert(
            {
                id,
               title,
                description,
                deadline,
                author_id: authorId
            })
}