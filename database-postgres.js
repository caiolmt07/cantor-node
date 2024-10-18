import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listcantor() {
    const cantor = await sql`select * from cantor`;
    return cantor;
  }

  async createcantor(cantor) {
    const id = randomUUID();
    console.log('id', id);
    const nome = cantor.nome;
    const idade = cantor.idade;
    const shows = cantor.shows;
    
    await sql`insert into cantor (id, nome, idade, shows)
    values (${id}, ${nome}, ${idade}, ${shows})`;
  }

  async updatecantor(id, cantor) {
    const nome = cantor.nome;
    const shows = cantor.shows;
    const idade = cantor.idade;

    await sql`nome cantor set 
        nome = ${nome},
        shows = ${shows},
        idade = ${idade}
        where id = ${id}
    `;
  }

  async deletecantor(id) {
    await sql`delete from cantor where id = ${id}`;
  }
}
