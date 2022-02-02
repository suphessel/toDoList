import connection from "../connection";

export default async function selectTaskById (
    id: string
): Promise<any>
{
    const result = await connection.raw(`
        SELECT tasks.*, users.nickname FROM ToDoListTasks AS tasks
        JOIN ToDoListUser AS users
        ON author_id = users.id
        WHERE tasks.id = ${id};
        
    `)

    return result[0][0]
}
