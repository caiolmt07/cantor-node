import { sql } from './db.js'

sql`
  CREATE TABLE cantor (
      id text PRIMARY KEY,
      nome character varying(255),
      shows  character varying(255),
      idade character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})