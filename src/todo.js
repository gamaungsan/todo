export default class ToDo {
    //Check later for persistent storage
    static #idgenerator = 0;
    #id;

    constructor(title, description, due, priority, completed=false){
        this.#id = ToDo.#idgenerator++;
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.completed = completed;
    }

    get id(){
        return this.#id;
    }

    get getTitle(){
        return this.title;
    }

    set setTitle(title){
        this.title = title
    }

    get getDescription(){
        return this.description; 
    }

    set setDescription(description){
        this.description = description;
    }

    get getDue(){
        return this.due;
    }

    set setDue(due){
        this.due = due;
    }

    get getPriority(){
        return this.priority;
    }

    set setPriority(priority){
        this.priority = priority;
    }

    complete(){
        this.completed = true;
    }

    get completion(){
        return this.completed;
    }

    static continueID(id){
        ToDo.#idgenerator = id;
    }

}