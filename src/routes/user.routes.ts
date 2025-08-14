// // src/routes/user.routes.ts
import { Router } from 'express';
import { list_users, createUser, createAdmin } from '../controlers/user.controller';
import { auth, authAdmin, authSuperuser } from '../middleware/auth.middleware';

const router = Router();

router.get('/list_users/', authAdmin, list_users); //Com o auth essa rota verica token antes de continuar
router.post('/user/', authAdmin, createUser)
router.post('/create_admin/', authSuperuser, createAdmin)

export default router;