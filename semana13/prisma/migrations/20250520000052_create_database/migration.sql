-- CreateTable
CREATE TABLE "tag_task" (
    "tagId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "tag_task_pkey" PRIMARY KEY ("tagId","taskId")
);
