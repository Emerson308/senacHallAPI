// // src/models/user.model.ts
import { error } from "console";
import { db } from "../config/db.config";
import { newAdmin, newUser, userCredencials } from "../types/userTypes";


export class Users {
    constructor() {
        // ...
    }

    static async getAllUsers(): Promise<any[] | null> {
        try {
            const users = await db`SELECT id, username, email, created_at, is_staff, is_superuser FROM usuarios`;
            // console.log(users);
            return users;
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return null;
        }
    }

    static async getUsersByCredencials(credenciais: userCredencials){
        try{
            if(credenciais.username){
                const user = await db`SELECT * FROM usuarios WHERE username = ${credenciais.username}`;
                console.log(user)
                return user[0]
                
            }
            if(credenciais.email){
                const user = await db`SELECT * FROM usuarios WHERE email = ${credenciais.email}`;
                console.log(user)
                return user[0]
                
            }

        } catch(error){
            console.error(`Erro ao buscar usuário com as credenciais enviadas:`, error);
            return null
        }
    }

    static async getUserById(id: number): Promise<any | null> {
        try {
            const user = await db`SELECT * FROM usuarios WHERE id = ${id}`;
            return user.length > 0 ? user[0] : null;
        } catch (error) {
            console.error(`Erro ao buscar usuário com ID ${id}:`, error);
            return null;
        }
    }
    
    static async createUser(newUser: newUser){
        try{
            await db`INSERT INTO usuarios (username, email, password) VALUES (${newUser.username}, ${newUser.email}, ${newUser.password})`;

            return true
            
        } catch(error){
            // console.error(`Erro ao criar usuário:`, error);
            return false;
        }
    }

    static async createAdmin(newAdmin: newAdmin){
        try{
            await db`INSERT INTO usuarios (username, email, password, is_staff) VALUES (${newAdmin.username}, ${newAdmin.email}, ${newAdmin.password}, ${newAdmin.is_staff})`;

            return true
            
        } catch(error){
            // console.error(`Erro ao criar usuário:`, error);
            return false;
        }
    }

}

