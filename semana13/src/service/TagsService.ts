import { prisma } from "../prisma/client";
import {Tag as TagPrisma} from '@prisma/client'


class TagsServices {
    public async create(name: string): Promise<void> {
        const tag: TagPrisma = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await prisma.tag.create({ data: tag});
    }
}

export const tagService = new TagsServices();