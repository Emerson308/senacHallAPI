

import { Router } from 'express';
import { login } from '../controlers/auth.controller';

const router = Router();

router.post('/login/', login); //Com o auth essa rota verica token antes de continuar

export default router;