import express, { Application } from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import userRoutes from './routes/user.routes';
// import errorMiddleware from './middleware/error.middleware';
// import otherRoutes from './routes/other.routes'; // Exemplo de outras rotas

const app: Application = express();

// Middlewares de segurança e utilitários
app.use(express.json()); // Para fazer o parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(helmet());

// Rotas da API
// app.use('/api/users', userRoutes);
// app.use('/api/other', otherRoutes);

// Middleware de tratamento de erros (deve ser o último a ser chamado)
// app.use(errorMiddleware);

export default app;