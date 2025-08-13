// // src/routes/user.routes.ts
import { Router } from 'express';
import { list_users } from '../controlers/user.controller';
import { auth } from '../middleware/auth.middleware';

const router = Router();

router.use('/list_users/', auth, list_users); //Com o auth essa rota verica token antes de continuar

export default router;