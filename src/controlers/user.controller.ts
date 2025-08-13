// // src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { Users } from '../models/user.model'

export const list_users = async (req: Request, res: Response) => {
  try {
    const users:any[]|null = await Users.getAllUsers();
    if(!users){
        throw new Error('Erro ao buscar usuários')
    }
    res.json(users);
  } catch (error: any) {
    // const erroMessage = ``
    res.status(500).json({ message: error.message });
  }
};