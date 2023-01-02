"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosProviders = void 0;
const todo_entity_1 = require("./todo.entity");
const constants_1 = require("../../core/constants");
exports.todosProviders = [{
        provide: constants_1.TODO_REPOSITORY,
        useValue: todo_entity_1.Todo,
    }];
//# sourceMappingURL=todos.providers.js.map