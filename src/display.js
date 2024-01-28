import AllToDo from "./alltodo";
import ToDo from "./todo";
import {isToday, isBefore, format, isAfter} from 'date-fns';
import ToDoList from "./list";
import RadioBlank from './radiobox-blank.svg';
import RadioFilled from './radiobox-marked.svg';
import Trash from './trash-can.svg';
import Edit from './square-edit-outline.svg';
import Cancel from './close.svg';
import Check from './check.svg';
import Add from './plus.svg';

const Display = function(){

    //general menu 
    const all = document.querySelector('#all');
    const today = document.querySelector('#today');
    const scheduled = document.querySelector('#scheduled');
    const completed = document.querySelector('#completed');

    //dom element to add a new list to
    const lists = document.querySelector('#list-view');

    //add new list button
    const addList = document.querySelector('#add-list');

    //dom element to populate the title
    const listName = document.querySelector('.name-list');

    //dom element to change the title
    const changeListName = document.querySelector('.change-lname');

    //dom element to populate the list
    const display = document.querySelector('#display');

    //dom element to add new todo
    const addToDo = document.querySelector('#add-todo');

    const project = new AllToDo();

    //samples
    const todoLists = project.getAll();
    /* project.getList().add(new ToDo('Toothpaste','buy some toothpaste from Walmart',new Date(addDays(new Date(), 10)), 'Med'));
    project.getList().add(new ToDo('Doctor Appointment','appointment with Dr. Patel for annual checkup',new Date(addDays(new Date(), 1)), 'High'));
    project.getList().add(new ToDo('Interview', 'job interview', new Date(), 'high'));
    project.getList().get(2).complete(); */

    function addModal(){
        if(document.querySelector('.modal'))
            document.querySelector('.modal').remove();

        const div = document.createElement('div');
        div.classList.add('modal');

        
        const title = document.createElement('input');
        title.id = 'title';
        title.placeholder = 'Title';


        const description = document.createElement('input');
        description.id = 'description';
        description.placeholder = 'Description';


        const duedate = document.createElement('input');
        const duetime = document.createElement('input');
        duetime.id = 'time';
        duedate.id = 'date';

        duetime.type = 'time';
        duedate.type = 'date';

        duedate.min = new Date();
        duedate.value = new Date();

        const radios = document.createElement('div');
        radios.classList.add('radios');

        const low = document.createElement('input');
        low.id = 'low';
        const med = document.createElement('input');
        med.id = 'med';
        const high = document.createElement('input');
        high.id = 'high';

        const l1 = document.createElement('label');
        const l2 = document.createElement('label');
        const l3 = document.createElement('label');


        low.name = 'priority';
        low.value = 'Low';
        low.type = 'radio';
        l1.textContent = 'Low';
        l1.for = 'Low';

        med.name = 'priority';
        med.value = 'Med';
        med.type = 'radio';

        l2.textContent = 'Med';
        l2.for = 'Med';


        high.name = 'priority';
        high.value = 'High';
        high.type = 'radio';
        l3.textContent = 'High';

        l3.for = 'High';


        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(duedate);

        div.appendChild(duetime);

        radios.appendChild(l1);
        radios.appendChild(low);
        
        radios.appendChild(l2);
        radios.appendChild(med);
        
        radios.appendChild(l3);
        radios.appendChild(high);
        div.appendChild(radios);

        const buttons = document.createElement('div');

        const img = document.createElement('img');
        img.src = Cancel;
        img.classList.add('modal-button');

        const img2 = document.createElement('img');
        img2.src = Check;
        img2.classList.add('modal-button');

        buttons.appendChild(img2);
        buttons.appendChild(img);
        buttons.classList.add('buttons');
        div.appendChild(buttons);

        img.addEventListener('click', (e)=>{
            div.remove();
            e.target.remove();
        });

        img2.addEventListener('click', (e)=>{
            //const target = e.target.parentElement.parentElement;

            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value.trim() === '' ? '00:00:00' : document.getElementById('time').value.trim();
            const low = document.getElementById('low');
            const med = document.getElementById('med');
            const high = document.getElementById('high');

            if(title.trim() === '' || description.trim() === '' || date.trim() === ''  || (!low.checked && !med.checked && !high.checked)){
                alert('Invalid! Please Fill in the inputs!');
            }
            else{
                const dateTime = `${date}T${time}`;
                const myDateTime = new Date(dateTime);
                var priority = '';
                if(low)
                    priority = 'Low';
                else if(med)
                    priority = 'Med';
                else
                    priority = 'High';

                const addTodo = new ToDo(title,description,myDateTime,priority);
                if(listName.value === 'All ToDo' || listName.value === 'Today' || listName.value === 'Scheduled' || listName.value === 'Completed' || listName.value === 'Default'){
                    project.getList().add(addTodo)
                }
                else{
                    project.getList(listName.value).add(addTodo);
                }
                
                populate(addTodo);
                e.target.parentElement.parentElement.remove();
            }
        });

        display.append(div);
    }

    function getToDo(e){
        const id = e.target.parentElement.parentElement.id;
        
        for(let i=0;i<todoLists.length;i++){
            if(todoLists[i].viewList().has(parseInt(id))){
                return todoLists[i].get(parseInt(id));
            }
        }

        return null;
    }

    function viewToDo(e){
        const todo = getToDo(e);
        if(todo !== null){

            if(document.querySelector('.view-modal'))
                document.querySelector('.view-modal').remove();

            const div = document.createElement('div');
            div.classList.add('view-modal');

            const img = document.createElement('img');
            img.src = Cancel;
            img.classList.add('view-modal-button');

            img.addEventListener('click', (e)=>{
                div.remove();
            });

            const th4 = document.createElement('h4');
            th4.textContent = 'Title:';
            const dh4 = document.createElement('h4');
            dh4.textContent = 'Description:';
            const ddh4 = document.createElement('h4');
            ddh4.textContent = 'Due:';
            const ph4 = document.createElement('h4');
            ph4.textContent = 'Priority:';


            
            const title = document.createElement('p');
            title.textContent = todo.getTitle;

            const description = document.createElement('p');
            description.textContent = todo.getDescription;

            const due = document.createElement('p');
            due.textContent = format(todo.getDue, 'MM-dd-yyyy HH:mm');
            
            const priority = document.createElement('p');
            priority.textContent = todo.getPriority;

            div.appendChild(img);
            div.appendChild(th4)
            div.appendChild(title);
            div.appendChild(dh4)

            div.appendChild(description);
            div.appendChild(ddh4)

            div.appendChild(due);
            div.appendChild(ph4)
            
            div.appendChild(priority);

            display.append(div);
        }
    }

    function editToDo(e){
        const todo = getToDo(e);
        if(todo !== null){

            if(document.querySelector('.view-modal'))
                document.querySelector('.view-modal').remove();



            const div = document.createElement('div');
            div.classList.add('view-modal');
            div.id = todo.id;

            const img = document.createElement('img');
            img.src = Cancel;
            img.classList.add('view-modal-button');

            img.addEventListener('click', (e)=>{
                div.remove();
            });

            const th4 = document.createElement('h4');
            th4.textContent = 'Title:';
            const dh4 = document.createElement('h4');
            dh4.textContent = 'Description:';
            const ddh4 = document.createElement('h4');
            ddh4.textContent = 'Due:';
            const ph4 = document.createElement('h4');
            ph4.textContent = 'Priority:';


            
            const title = document.createElement('input');
            title.value = todo.getTitle;
            title.id = 'title';

            const description = document.createElement('input');
            description.value = todo.getDescription;
            description.id = 'description';

            const duedate = document.createElement('input');
            const duetime = document.createElement('input');
            duetime.id = 'time';
            duedate.id = 'date';

            duetime.type = 'time';
            duedate.type = 'date';

            duedate.value = todo.getDue.toISOString().split('T')[0];

            const hours = todo.getDue.getHours() < 10 ? `0${todo.getDue.getHours()}` : todo.getDue.getHours();
            const minutes = todo.getDue.getMinutes() < 10 ? `0${todo.getDue.getMinutes()}` : todo.getDue.getMinutes();

            duedate.value = todo.getDue.toISOString().split('T')[0];
            duetime.value = `${hours}:${minutes}`;

            const radios = document.createElement('div');
            radios.classList.add('radios');

            const low = document.createElement('input');
            low.id = 'low';
            const med = document.createElement('input');
            med.id = 'med';
            const high = document.createElement('input');
            high.id = 'high';

            const l1 = document.createElement('label');
            const l2 = document.createElement('label');
            const l3 = document.createElement('label');


            low.name = 'priority';
            low.value = 'Low';
            low.type = 'radio';
            l1.textContent = 'Low';
            l1.for = 'Low';

            med.name = 'priority';
            med.value = 'Med';
            med.type = 'radio';

            l2.textContent = 'Med';
            l2.for = 'Med';


            high.name = 'priority';
            high.value = 'High';
            high.type = 'radio';
            l3.textContent = 'High';

            l3.for = 'High';

            if(todo.getPriority === 'Low')
                low.checked = true;
            else if(todo.getPriority === 'Med')
                med.checked = true;
            else if(todo.getPriority === 'High')
                high.checked = true;

            const edit = document.createElement('img');
            edit.src = Check;
            edit.classList.add('edit-button');

            edit.addEventListener('click', (e)=>{
                const id = parseInt(e.target.parentElement.id);

                const title = document.getElementById('title').value;
                const description = document.getElementById('description').value;
                const date = document.getElementById('date').value;
                const time = document.getElementById('time').value.trim() === '' ? '00:00:00' : document.getElementById('time').value.trim();
                const low = document.getElementById('low');
                const med = document.getElementById('med');
                const high = document.getElementById('high');

                if(title.trim() === '' || description.trim() === '' || date.trim() === ''  || (!low.checked && !med.checked && !high.checked)){
                    alert('Invalid! Please Fill in the inputs!');
                }
                else{
                    const dateTime = `${date}T${time}`;
                    const myDateTime = new Date(dateTime);
                    var priority = '';
                    if(low)
                        priority = 'Low';
                    else if(med)
                        priority = 'Med';
                    else
                        priority = 'High';


                    for(let i=0;i<todoLists.length;i++){
                        if(todoLists[i].viewList().has(id)){
                            todoLists[i].viewList().get(id).setTitle = title;
                            todoLists[i].viewList().get(id).setDescription =  description;
                            todoLists[i].viewList().get(id).setDue =  myDateTime;
                            todoLists[i].viewList().get(id).setPriority = priority;
                            break;
                        }
                    }

            
                    if(isAfter(myDateTime, new Date())){
                        document.getElementById(`${id}`).querySelector('h4').classList.remove('overdue');
                    }
                    else{
                        document.getElementById(`${id}`).querySelector('h4').classList.add('overdue');

                    }
                    
                    
                    document.getElementById(`${id}`).querySelector('.title').textContent = title;
                    document.getElementById(`${id}`).querySelector('h4').textContent = myDateTime.toDateString();
                    e.target.parentElement.remove();
                }

            });

            div.appendChild(img);
            div.appendChild(th4)
            div.appendChild(title);
            div.appendChild(dh4)

            div.appendChild(description);

            div.appendChild(ddh4)

            div.appendChild(duedate);
            div.appendChild(duetime);

            div.appendChild(ph4)
            radios.appendChild(l1);
            radios.appendChild(low);
            radios.appendChild(l2)
            radios.appendChild(med);
            radios.appendChild(l3)

            radios.appendChild(high);
            div.appendChild(radios);
            div.appendChild(edit);
            

            display.append(div);
        }
    }

    function start(){
        retrieve();

        listName.value = 'All ToDo';
        todoLists.forEach((list) => populateList(list));
        todoLists.forEach((list) => populateMap(list));
    }

    function retrieve(){
        const storedLists = localStorage.getItem('lists');
        const storedToDos = localStorage.getItem('todos');

        if(storedLists !== null && storedToDos !== null){
            const lists = JSON.parse(storedLists);
            const todos = JSON.parse(storedToDos);

            lists.forEach((list) => project.add(list.name));
            for(let i=0;i<todoLists.length;i++){
                for(let j=0;j<todos[i].length;j++){
                    todoLists[i].add(new ToDo(todos[i][j].title, todos[i][j].description, new Date(todos[i][j].due), todos[i][j].priority, todos[i][j].completed));
                }
            }
        }
        
    }

    function storeToDo(list){
        const todos = [];
        list.forEach((value, key) => {
            todos.push(value);});
    
        return todos;
    }

    function store(){
        const list_names = [];
        const todos = [];
        todoLists.forEach((list) => {
            list_names.push(list);
            todos.push(storeToDo(list.viewList()));
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("lists", JSON.stringify(list_names));
        
    }

    function populateList(list){
        const div = document.createElement('div');
        div.classList.add('list-div');

        const img = document.createElement('img');
        img.classList.add('cancel-button');
        img.id = list.name;
        img.src = Cancel;

        const input = document.createElement('input');
        input.id = list.name;
        input.value = list.name;
        input.readOnly = true;
        input.classList.toggle('list-toggle');

        input.addEventListener('click', (e)=>{
            resetToDoDisplay();
            listName.value = e.target.value;
            listName.id = list.name;
            if(listName.value !== 'Default'){
                document.querySelector('.change-lname').classList.add('change-list-name');
            }
            else{
                listName.readOnly = true;
                listName.style.outline = '';
                listName.style.backgroundColor = '';
                listName.style.borderRadius = '';
                document.querySelector('.change-lname').classList.remove('change-list-name');
            }
            populateMap(project.getList(e.target.value));
        })

        img.addEventListener('click', (e)=>{
            project.remove(e.target.id);
            img.remove();
            input.remove();
        });

        div.appendChild(input);
        if(list.name != 'Default')
            div.appendChild(img);

        lists.appendChild(div);
    }

    function resetToDoDisplay(){
        display.innerHTML = '';
    }


    function removeToDo(e){
        const id = e.target.parentElement.parentElement.id;
        
        for(let i=0;i<todoLists.length;i++){
            if(todoLists[i].viewList().has(parseInt(id))){
                todoLists[i].remove(parseInt(id));
                e.target.parentElement.parentElement.nextElementSibling.remove();
                e.target.parentElement.parentElement.remove();
                break;
            }
        }
    }

    function softRemove(e){
        const id = e.target.parentElement.parentElement.id;
        
        for(let i=0;i<todoLists.length;i++){
            if(todoLists[i].viewList().has(parseInt(id))){
                e.target.parentElement.parentElement.nextElementSibling.remove();
                e.target.parentElement.parentElement.remove();
                break;
            }
        }
    }


    const setComplete = (e) => {
        const id = e.target.parentElement.parentElement.id;

        for(let i=0;i<todoLists.length;i++){
            if(todoLists[i].viewList().has(parseInt(id))){
                todoLists[i].viewList().get(parseInt(id)).complete();
                e.target.src = todoLists[i].viewList().get(parseInt(id)).completion ? RadioFilled : RadioBlank;
                softRemove(e);
                break;
            }
        }
    }


    function populate(todo){
        
        const div = document.createElement('div');
        div.classList.add('todoitem');
        const img = document.createElement('img');
        img.classList.add('completion');
        img.src = todo.completion ? RadioFilled : RadioBlank;

        img.addEventListener('click', setComplete.bind(this));

        const h4 = document.createElement('h4');
        h4.textContent = todo.getDue.toDateString();

        if(isBefore(todo.getDue, new Date()) && !todo.completion){
            h4.classList.add('overdue');
        }

        const main = document.createElement('div');
        main.classList.add('todomain');

        const edition = document.createElement('div');
        edition.classList.add('edition');

        const edit = document.createElement('img');
        edit.src = Edit;

        edit.addEventListener('click', editToDo)
        

        const trash = document.createElement('img');
        trash.src = Trash;
        trash.addEventListener('click', removeToDo);

        const h3 = document.createElement('h3');
        h3.textContent = todo.getTitle;
        h3.classList.add('title');
        h3.addEventListener('click', viewToDo);

        const addLine = document.createElement('hr');
        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(h4);
        edition.appendChild(edit);
        edition.appendChild(trash);
        div.setAttribute("id", todo.id);
        div.appendChild(main);
        div.appendChild(edition);
        
        display.appendChild(div);
        display.appendChild(addLine);
        
    }

    function populateMap(list){
        
        list.viewList().forEach((value, key) => {
            if(!value.completion){
                populate(value);
            }
        });
    }

    function populateToday(list){
        list.viewList().forEach((value,key) => {
            if(isToday(value.getDue) && !value.completion){
                populate(value);
            }
        } );
    }

    function populateScheduled(list){
        list.viewList().forEach((value,key) => {
            if(!value.completion){
                populate(value);
            }
        });
    }

    function populateCompleted(list){
        list.viewList().forEach((value,key) => {
            if(value.completion){
                populate(value);
            }
        });
    }

    // function resetDisplay(){
    //     display.innerHTML = '';
    //     lists.innerHTML = '';
    // }


    function bindEvents(){
        changeListName.addEventListener('click', ()=>{
            listName.readOnly = false;
            listName.style.outline = '1px solid #393E41';
            listName.style.backgroundColor = 'white';
            listName.style.borderRadius = '5px';
        });

        listName.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter' || e.keyCode === 13){
                if(listName.value.trim() === ''){
                    alert("Can't be empty!");
                }
                else if(listName.value.trim() === 'Default' || listName.value.trim() === 'All ToDo' || listName.value.trim() === 'Today' || listName.value.trim() === 'Completed' || listName.value.trim() === 'Scheduled'){
                    alert("Invalid Changes");
                }
                else{
                    project.edit(e.target.id.toString(), listName.value.trim());
                    document.querySelector(`#${e.target.id}`).value = listName.value.trim();
                    document.querySelector(`#${e.target.id}`).id = listName.value.trim();
                    document.querySelector(`#${e.target.id}`).id = listName.value.trim();
                    e.target.id = listName.value.trim();
                    

                    listName.readOnly = true;
                    listName.style.outline = '';
                    listName.style.backgroundColor = '';
                    listName.style.borderRadius = '';
                }
                
            }
        });

        all.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'All ToDo';
            todoLists.forEach((list) => populateMap(list));
            listName.readOnly = true;
            listName.style.outline = '';
            listName.style.backgroundColor = '';
            listName.style.borderRadius = '';
            document.querySelector('.change-lname').classList.remove('change-list-name');

        });

        today.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'Today';
            todoLists.forEach((list) => populateToday(list));
            listName.readOnly = true;
            listName.style.outline = '';
            listName.style.backgroundColor = '';
            listName.style.borderRadius = '';
            document.querySelector('.change-lname').classList.remove('change-list-name');

        });

        scheduled.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'Scheduled';
            todoLists.forEach((list) => populateScheduled(list));
            listName.readOnly = true;
            listName.style.outline = '';
            listName.style.backgroundColor = '';
            listName.style.borderRadius = '';
            document.querySelector('.change-lname').classList.remove('change-list-name');

        });

        completed.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'Completed';
            todoLists.forEach((list) => populateCompleted(list));
            listName.readOnly = true;
            listName.style.outline = '';
            listName.style.backgroundColor = '';
            listName.style.borderRadius = '';
            document.querySelector('.change-lname').classList.remove('change-list-name');

        });

        addToDo.addEventListener('click', addModal);

        addList.addEventListener('click', ()=>{
            if(document.querySelector('.new-field'))
                document.querySelector('.new-field').remove();

            const div = document.createElement('div');
            div.classList.toggle('new-field');
            div.classList.add('list-div');
            const input = document.createElement('input');
            input.classList.toggle('toggle-list-input');

            const image = document.createElement('img');
            image.classList.add('cancel-button');
            image.src = Cancel;

            
            input.addEventListener('keydown', (e)=>{
                if(e.key === 'Enter' || e.keyCode === 13){
                    if(project.add(input.value)){
                        input.classList.toggle('toggle-list-input');
                        document.querySelector('.change-lname').classList.add('change-list-name');
                        input.readOnly = true;
                        input.id = input.value;
                        input.classList.toggle('list-toggle');
                        image.id = input.value;
                        div.classList.toggle('new-field');
                        div.addEventListener('click', (e)=>{
                            resetToDoDisplay();
                            listName.id = e.target.value;
                            listName.value = e.target.value;
                            populateMap(project.getList(e.target.value));
                        });
                    }
                    else{
                        alert(`${input.value} already exists!`);
                        image.remove();
                        input.remove();
                    }
                }
            });


            image.addEventListener('click', (e)=>{
                project.remove(e.target.id);
                image.remove();
                input.remove();
                div.remove();
            });

            
        
            div.appendChild(input);
            div.appendChild(image);
            lists.appendChild(div);
            //create an input field under 'Lists'
        });
    }

    return {
        start: start,
        bindEvents: bindEvents,
        store: store
    }
}

export default Display;