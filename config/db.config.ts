// src/config/db.config.ts

import 'dotenv/config';
// import http from 'http';
import { neon } from '@neondatabase/serverless';

const connectionString: string | undefined = process.env.DATABASE_URL;
if(!connectionString){
  throw new Error('DATABASE_URL is not set in the environment variables')
}
export const db = neon(connectionString)
// export const requestHandler = async () => {
//     const result = await sql`SELECT version()`;
//     const { version } = result[0];
//     console.log(version)
//   };

  