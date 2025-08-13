import dotenv from 'dotenv';
import app from './app'; // Importa a instância do Express configurada
import {db} from './src/config/db.config';

dotenv.config();

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
