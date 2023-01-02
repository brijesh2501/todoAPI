import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo.dto';
export declare class TodosService {
    private readonly todoRepository;
    constructor(todoRepository: typeof Todo);
    create(todo: TodoDto): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOneById(id: number): Promise<Todo>;
    delete(id: any): Promise<number>;
}
