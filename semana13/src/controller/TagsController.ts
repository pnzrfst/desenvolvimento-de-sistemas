import { FastifyInstance } from "fastify";
import { tagService } from "../service/TagsService";


export default async function TagsController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate);


    app.post("/tags", async(request, reply) =>{
        const tagContent = request.body as {name: string};

        try {
            await tagService.create(tagContent.name);
            reply.code(201).send()
        } catch (error : any) {
            reply.code(409).send({error: error.message})
        }
    })
}