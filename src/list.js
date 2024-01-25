import ToDo from "./todo";

export default class ToDoList {
    #list;


    constructor(name="Default"){
        this.#list = new Map();
        this.name = name;
    }

    get(id){
        return this.#list.get(id);
    }

    add(todo){
        if(!(todo instanceof ToDo))
            return false;
        
        this.#list.set(todo.id, todo);
        return true;    
    }

    remove(id){
        return this.#list.delete(id);
    }

    editTitle(todo, newTitle){
        if(!(todo instanceof ToDo))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setTitle = newTitle;
        return true;
    }
    editDue(todo, newDue){
        if(!(todo instanceof ToDo))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setDue = newDue;
        return true;
    }
    editDescription(todo, newDescription){
        if(!(todo instanceof ToDo))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setDescription = newDescription;
        return true;
    }
    editPriority(todo, newPriority){
        if(!(todo instanceof ToDo))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setPriority = newPriority;
        return true;
    }


    viewList(){
        //later to be handled with ui class
        return this.#list;
    }
}