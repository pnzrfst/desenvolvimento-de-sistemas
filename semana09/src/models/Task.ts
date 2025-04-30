
import {v4 as uuid} from 'uuid'

export class Task {
    private id : string;
    private text : string;
    private completed : boolean;
    private createdAt: Date;
    private updateAt: Date;


    constructor(text : string) {
        this.id = uuid();
        this.text = text;
        this.completed = false;
        this.createdAt = new Date();
        this.updateAt = new Date();
    }


    public getId() {
        return this.id;
    }

    public getText() {
        return this.text;
    }

    public getCompleted(){
        return this.completed;
    }

    public getCreatedAt(){ 
        return this.createdAt;
    }

    public getUpdateAt(){
        return this.updateAt
    }

    public setText(text: string) {
        this.text = text;
    }

    public setCompleted(completed: boolean) {
        this.completed = completed
    }

    public setUpdateAt(date: Date) {
        this.updateAt = date;
    }


}