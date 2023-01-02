import { Model } from 'sequelize-typescript';
export declare class Todo extends Model<Todo> {
    title: string;
    description: string;
    dueDate: Date;
    priority: string;
}
