import { Task } from "@/models/task";

class TaskService {

    private taskList: Task[] = [];


    public create(text: string): void {
        const newTask = new Task(text);


        const textAlreadyExist = this.taskList.find(task => task.getText() == text);

        if (textAlreadyExist) {
            throw new Error("Tarefa já cadastrada.")
        }

        this.taskList.push(newTask)

        console.log(newTask);
        console.log(this.taskList.length);
    }

    public getAll(): Task[] {
        return this.taskList;
    }
}


export const taskService = new TaskService()