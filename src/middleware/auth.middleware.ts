import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { userData } from '../types/userTypes';

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

export const authAdmin = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).send('Acesso negado. Nenhum token fornecido.');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Formato do token inválido.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as userData;
        
        if(decoded.is_staff || decoded.is_superuser){
            req.user = decoded;
    
            
            next();

        }else{
            res.status(401).send('Requer permissão de admin');
        }

    } catch (error) {
        res.status(401).send('Token inválido.');
    }
};

export const authSuperuser = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).send('Acesso negado. Nenhum token fornecido.');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Formato do token inválido.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as userData;
        
        if(decoded.is_superuser){
            req.user = decoded;
    
            
            next();

        }else{
            res.status(401).send('Requer permissão de SuperAdmin');
        }

    } catch (error) {
        res.status(401).send('Token inválido.');
    }
};