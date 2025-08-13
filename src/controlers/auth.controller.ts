
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {Users} from '../src/models/user.model'

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body

    try{
        const user = await Users.getUsersByCredencials({email});
        if (!user){
            return res.status(404).send('Usuário não encontrado.')
        }

        const isMatch = bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).send('Credenciais inválidas.')
        }

        const payload = {
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: '72h'})

        res.status(200).json({ token });

    }catch (error) {
        res.status(500).send('Erro no servidor.');
    }

}





