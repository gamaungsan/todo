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
        
        this.#list.set(todo.id, todo);
        return true;    
    }

    remove(id){
        return this.#list.delete(id);
    }

    editTitle(id, newTitle){

        const toEdit = this.#list.get(id);
        toEdit.setTitle = newTitle;
        return true;
    }
    editDue(id, newDue){
        const toEdit = this.#list.get(id);
        toEdit.setDue = newDue;
        return true;
    }
    editDescription(id, newDescription){

        const toEdit = this.#list.get(id);
        toEdit.setDescription = newDescription;
        return true;
    }
    editPriority(id, newPriority){
        const toEdit = this.#list.get(id);
        toEdit.setPriority = newPriority;
        return true;
    }


    viewList(){
        //later to be handled with ui class
        return this.#list;
    }
}