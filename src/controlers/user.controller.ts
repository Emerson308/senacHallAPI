// // src/controllers/user.controller.ts
import { Request, Response } from 'express';
import bcrypt, { genSalt } from 'bcryptjs'
import bodyParser from 'body-parser'
import { Users } from '../models/user.model'
import { newAdmin, newUser, userData } from '../types/userTypes';

export const list_users = async (req: Request, res: Response) => {
  try {
    const users:userData[]|null = await Users.getAllUsers();
    if(!users){
        throw new Error('Erro ao buscar usuários')
    }
    
    res.json(users);
  } catch (error: any) {
    // const erroMessage = ``
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async(req: Request, res: Response) => {
  try{
    const newUserData:newUser = req.body;

    const {username, email, password} = newUserData;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(newUserData.password, salt)

    const hashedNewUserData:newUser = {username, email, password: hashedPassword}
    
    
    
    
    Users.createUser(hashedNewUserData)
    res.send('Usuário criado')





  } catch(error: any){
    res.status(400).json({message: error.message})
  }
}

export const createAdmin = async(req: Request, res: Response) => {
  try{
    const newUserData:newUser = req.body;

    const {username, email, password} = newUserData;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(newUserData.password, salt)

    const hashedNewUserData:newAdmin = {username, email, password: hashedPassword, is_staff:true}
    
    
    
    
    const result = await Users.createAdmin(hashedNewUserData)
    if(result){
      res.send('Usuário criado')

    }else{
      res.status(400).json({message: 'Não foi possivel criar usuário'})

    }





  } catch(error: any){
    res.status(400).json({message: error.message})
  }
}