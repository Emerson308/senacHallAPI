// // src/models/user.model.ts
import { error } from "console";
import { db } from "../config/db.config";

export const get_users = async (): Promise<any[]|null> => {
    try {
        const users = await db`SELECT * FROM Professores`;
        console.log(users);
        return users
    } catch(error: any){

        console.error('Erro ao buscar usuários erro', error)
        return null
    }
}
