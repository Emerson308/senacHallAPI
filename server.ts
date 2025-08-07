import dotenv from 'dotenv';
import app from './app'; // Importa a instância do Express configurada
import {sql, requestHandler} from './config/db.config';

dotenv.config();

const PORT = process.env.PORT || 5000;
(
  async () => {
    await requestHandler()
  }
    
)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// Conecta ao banco de dados antes de iniciar o servidor
