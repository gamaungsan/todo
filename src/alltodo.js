import ToDoList from "./list";

export default class AllToDo{
    #todos

    constructor(){
        this.#todos = []
        this.#todos.push(new ToDoList());
    }

    #getIndex(name="Default"){
        for(let i=0;i<this.#todos.length;i++){
            if(this.#todos[i].name === name)
            {
                return i;
            }
        }
        return -1;
    }

    getAll(){
        return this.#todos;
    }

    getList(name="Default"){
        const index = this.#getIndex(name);
        if(index === -1)
            return null;

        return this.#todos[index];
    }


    remove(name){
        const index = this.#getIndex(name);
        if(index === -1 || index === 0)
            return false;
        
        this.#todos.splice(index, 1);
        return true;
    }

    add(name){
        if(this.#getIndex(name) !== -1)
            return false;

        this.#todos.push(new ToDoList(name));
        return true;
    }

    edit(name, newName){
        const index = this.#getIndex(name);
        if(index === -1 || index === 0)
            return false;

        this.#todos[index].name = newName;
        return true;
    }
}