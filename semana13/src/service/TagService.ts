import { Tag, TagTask } from "@prisma/client";
import { prisma } from "../prisma/client";

class TagService {
    public async create(name: string): Promise<void> {
        const tag: Tag = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await prisma.tag.create({ data: tag });
    }

    public async relation(tagId: string, taskId: string){

        const tag = await prisma.tag.findUnique({where: {id: tagId}});

        if(!tag){
            throw new Error("Tag não existe");
        }

        const task = await prisma.task.findUnique({where: {id: taskId}});

        if(!task){
            throw new Error("Task não existe");
        }


        const tagTask : TagTask = {
            tagId : tagId,
            taskId : taskId
        }

        await prisma.tagTask.create({data: tagTask})
    }

}

export const tagService = new TagService();

