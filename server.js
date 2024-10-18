
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/cantor', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createcantor(body);
    return reply.status(201).send();
})

// READE
server.get('/cantor', async () => {
    const cantor = await databasePostgres.listcantor();
    return cantor;
});

// UPDATE
server.put('/cantor/:id', async (request, reply) => {
    const cantorID = request.params.id;
    const body = request.body;
    await databasePostgres.updatecantor(cantorID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/cantor/:id', async (request, reply) => {
    const cantorID = request.params.id;
    await databasePostgres.deletecantor(cantorID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
