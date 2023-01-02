import { TodosService } from './todos.service';
import { Todo as TodoEntity } from './todo.entity';
import { apiResponse } from './interfaces/apiResponse.interface';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    findAll(): Promise<TodoEntity[]>;
    create(req: any): Promise<TodoEntity>;
    findOneById(id: number): Promise<TodoEntity>;
    remove(id: number): Promise<apiResponse>;
}
