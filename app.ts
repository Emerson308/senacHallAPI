import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './src/routes/user.routes';
import authRoutes from './src/routes/auth.routes'
// import { auth } from './middleware/auth.middleware';
// import errorMiddleware from './middleware/error.middleware';
// import otherRoutes from './routes/other.routes'; // Exemplo de outras rotas

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes)
app.use('/api/accounts', userRoutes);
// app.use('/api/other', otherRoutes);

// app.use(errorMiddleware);

export default app;