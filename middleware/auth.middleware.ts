import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: {
        id: string;
        email: string;
    };
}

export const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).send('Acesso negado. Nenhum token fornecido.');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Formato do token inválido.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string };
        
        req.user = decoded;
        
        next();
    } catch (error) {
        res.status(401).send('Token inválido.');
    }
};