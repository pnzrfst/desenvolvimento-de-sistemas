import fastify from "fastify";
import { Task } from "./entity/Task";
import { taskController } from "./controller/TaskController";

const app = fastify();

app.register(taskController);

app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333!")
})
