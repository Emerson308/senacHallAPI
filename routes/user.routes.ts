// // src/routes/user.routes.ts
import { Router } from 'express';
import { list_users } from '../controlers/user.controller';

const router = Router();

router.get('/list_users/', list_users);

export default router;