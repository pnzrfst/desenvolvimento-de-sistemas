
import { taskService } from "@/services/TaskService";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export async function taskController(app: FastifyInstance) {

    app.get('/tasks', (_, reply: FastifyReply) => {
        const list = taskService.getAll();
        return reply.code(200).send(list);
    })


    app.post('/task', (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as { text: string };
        // if (text) {
        //     return reply.code(400).send({ erro: "Você não enviou a propriedade text" });
        // }
        try {
            taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({error: error.message})
        }

    })
}