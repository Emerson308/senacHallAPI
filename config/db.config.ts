// src/config/db.config.ts

import { Pool } from 'pg';
import 'dotenv/config';
import http from 'http';
import { neon } from '@neondatabase/serverless';

// A string de conexão é lida do arquivo .env
const connectionString: any = process.env.DATABASE_URL;

export const sql = neon(connectionString)

export const requestHandler = async (req, res) => {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(version);
  };
  

// if (!connectionString) {
//   throw new Error('DATABASE_URL is not set in the environment variables');
// }

// // Cria um pool de conexões. O pool gerencia a criação e o reuso de conexões
// // com o banco de dados, o que é mais eficiente para aplicações web.
// const pool = new Pool({
//     connectionString: connectionString,
//     // A partir da versão 8.x da pg, o SSL é habilitado por padrão
//     // quando a string de conexão inclui o sslmode, mas é bom
//     // garantir.
//     // Você pode tentar as seguintes opções:
  
//     // Opção 1: Deixar a biblioteca pg lidar com a string de conexão
//     // A string já tem sslmode=require, então ela deve funcionar.
//     // pool.connect()
  
//     // Opção 2: Explicitamente habilitar o SSL
//     ssl: true,
  
//     // Opção 3: Usar uma configuração mais permissiva (útil para desenvolvimento)
//     // ssl: {
//     //   rejectUnauthorized: false // Isso ignora a verificação do certificado
//     // }
//   });
  
// // Uma função para testar a conexão.
// const connectToDatabase = async () => {
//   try {
//     await pool.connect();
//     console.log('Conectado com sucesso ao banco de dados Neon!');
//   } catch (err) {
//     console.error('Falha ao conectar ao banco de dados', err);
//     process.exit(1); // Encerra o processo se a conexão falhar
//   }
// };

// // Exporta o pool para ser usado em outras partes da sua aplicação
// export { pool, connectToDatabase };




// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI as string);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;