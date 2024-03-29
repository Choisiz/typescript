import { BaseComponent } from "../component.js";
export class TodoComponent extends BaseComponent {
    constructor(title, todo) {
        super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo-checkbox"></input>
           </section>`);
        const titleElement = this.element.querySelector(".todo__title");
        titleElement.textContent = title;
        console.log(title);
        const todoElement = this.element.querySelector(".todo-checkbox");
        todoElement.textContent = todo;
    }
}
