// // src/models/user.model.ts
import { error } from "console";
import { db } from "../config/db.config";
import { userCredencials } from "../types/userTypes";


export class Users {
    constructor() {
        // ...
    }

    static async getAllUsers(): Promise<any[] | null> {
        try {
            const users = await db`SELECT * FROM Professores`;
            console.log(users);
            return users;
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return null;
        }
    }

    static async getUsersByCredencials(credenciais: userCredencials){
        try{
            const user = await db`SELECT * FROM Professores WHERE email = ${credenciais.email}`;
            console.log(user)
            return user[0]

        } catch(error){
            console.error(`Erro ao buscar usuário com as credenciais enviadas:`, error);
            return null
        }
    }

    static async getUserById(id: number): Promise<any | null> {
        try {
            const user = await db`SELECT * FROM Professores WHERE id = ${id}`;
            return user.length > 0 ? user[0] : null;
        } catch (error) {
            console.error(`Erro ao buscar usuário com ID ${id}:`, error);
            return null;
        }
    }

}

