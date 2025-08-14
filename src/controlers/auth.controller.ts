
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {Users} from '../models/user.model'
import { userCredencials, userData } from "../types/userTypes";

export const login = async (req: Request, res: Response) => {
    const userData:userCredencials = req.body

    try{

        const user = await Users.getUsersByCredencials(userData);
        if (!user){
            return res.status(404).send('Usuário não encontrado.')
        }

        const isMatch = bcrypt.compare(userData.password, user.password)
        if(!isMatch){
            return res.status(401).send('Credenciais inválidas.')
        }

        const userCompleteData = user as userData

        const payload = {
            id: userCompleteData.id,
            username: userCompleteData.username,
            email: userCompleteData.email,
            password: userData.password,
            is_staff: userCompleteData.is_staff,
            is_superuser: userCompleteData.is_superuser
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: '72h'})

        res.status(200).json({ token });

    }catch (error) {
        res.status(500).send('Erro no servidor.');
    }

}





