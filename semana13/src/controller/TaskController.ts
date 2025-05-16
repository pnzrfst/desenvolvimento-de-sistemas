import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";
import { generalTaskSchema } from "../config/schema/task.schema";

export async function taskController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate)

    app.post("/task", async (request: FastifyRequest, reply) => {
        const body = request.body as { text: string};
        const userId = request.user.id;
        console.log(userId)

        try {
            await taskService.create(body.text, userId);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.get("/task", {schema: generalTaskSchema} ,async (request: FastifyRequest, reply) => {
        const id = request.user.id
        const list = await taskService.getAll(id);
        return reply.code(200).send(list);
    })

    app.patch("/task/:id/completed", {schema: generalTaskSchema} ,async (request : FastifyRequest, reply) => {
        // CAPTURA INFORMAÇÃO
        const { id } = request.params as { id: string };
        const userId = request.user.id
        try {
            // RAPASSA INFO RECEBIDA E RECEBE INFORMAÇÃO PROCESSADA
            const task = await taskService.updateCompleted(id, userId);
            // RETORNA UMA RESPONSE PARA QUEM CHAMOU A ROTA
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.message })
        }
    });

    app.delete('/task/:id', {schema: generalTaskSchema} ,async (request: FastifyRequest, reply) => {
        const userId = request.user.id
        const { id } = request.params as { id: string };
        await taskService.deleteTask(id, userId);
        return reply.code(200).send();
    })

}