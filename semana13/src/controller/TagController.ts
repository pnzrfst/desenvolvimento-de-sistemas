import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { tagService } from "../service/TagService";

export async function tagController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate)

    app.post("/tag", async (request: FastifyRequest, reply) => {
        const body = request.body as { name: string };
      
        try {
            await tagService.create(body.name);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.post("/tag/relation", async(request: FastifyRequest, reply: FastifyReply) =>{
        const {tagId, taskId } = request.body as {tagId: string, taskId: string};

        try {
            await tagService.relation(tagId, taskId);
            return reply.code(200).send()
        } catch (error: any) {
            return reply.code(400).send({error: error.message})
        }
    })
}