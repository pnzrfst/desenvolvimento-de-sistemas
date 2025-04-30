import fastify from 'fastify';

import { taskController } from '@/controllers/TaskController';

const app = fastify();

app.register(taskController);

app.listen({port: 3333}).then(() => {
    console.log("Backend na porta 3333")
})