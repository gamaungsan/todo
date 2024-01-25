/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alltodo.js":
/*!************************!*\
  !*** ./src/alltodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllToDo)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");


class AllToDo{
    #todos

    constructor(){
        this.#todos = []
        this.#todos.push(new _list__WEBPACK_IMPORTED_MODULE_0__["default"]());
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

        this.#todos.push(new _list__WEBPACK_IMPORTED_MODULE_0__["default"](name));
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

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _alltodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alltodo */ "./src/alltodo.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _radiobox_blank_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radiobox-blank.svg */ "./src/radiobox-blank.svg");
/* harmony import */ var _radiobox_marked_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radiobox-marked.svg */ "./src/radiobox-marked.svg");
/* harmony import */ var _trash_can_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trash-can.svg */ "./src/trash-can.svg");
/* harmony import */ var _square_edit_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./square-edit-outline.svg */ "./src/square-edit-outline.svg");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./close.svg */ "./src/close.svg");
/* harmony import */ var _check_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check.svg */ "./src/check.svg");











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
    const listName = document.querySelector('#name-list');

    //dom element to change the title
    const changeListName = document.querySelector('#change-lname');

    //dom element to populate the list
    const display = document.querySelector('#display');

    //dom element to add new todo
    const addToDo = document.querySelector('#add-todo');

    const project = new _alltodo__WEBPACK_IMPORTED_MODULE_0__["default"]();

    //samples
    const todoLists = project.getAll();
    project.getList().add(new _todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Toothpaste','buy some toothpaste from Walmart',new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addDays)(new Date(), 10)), 'Med'));
    project.getList().add(new _todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Doctor Appointment','appointment with Dr. Patel for annual checkup',new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addDays)(new Date(), 1)), 'High'));
    project.getList().add(new _todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Interview', 'job interview', new Date(), 'high'));
    project.getList().get(2).complete();

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
        img.src = _close_svg__WEBPACK_IMPORTED_MODULE_7__;
        img.classList.add('modal-button');

        const img2 = document.createElement('img');
        img2.src = _check_svg__WEBPACK_IMPORTED_MODULE_8__;
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
                    priority = 'Medium';
                else
                    priority = 'High';

                const addTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](title,description,myDateTime,priority);
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

    function start(){
        listName.value = 'All ToDo';
        retrieve();
        todoLists.forEach((list) => populateList(list));
        todoLists.forEach((list) => populateMap(list));
    }

    function retrieve(){
        const storedLists = localStorage.getItem('lists');
        const storedToDos = localStorage.getItem('todos');

        if(storedLists !== null && storedToDos !== null){
            const lists = JSON.parse(storedLists);
            const todos = JSON.parse(storedToDos);
            console.log(todos);

            lists.forEach((list) => project.add(list.name));
            for(let i=0;i<todoLists.length;i++){
                for(let j=0;j<todos[i].length;j++){
                    todoLists[i].add(new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](todos[i][j].title, todos[i][j].description, new Date(todos[i][j].due), todos[i][j].priority, todos[i][j].completed));
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
        img.src = _close_svg__WEBPACK_IMPORTED_MODULE_7__;

        const input = document.createElement('input');
        input.value = list.name;
        input.readOnly = true;
        input.classList.toggle('list-toggle');

        input.addEventListener('click', (e)=>{
            resetToDoDisplay();
            listName.value = e.target.value;
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

    const setComplete = (e) => {
        const id = e.target.parentElement.parentElement.id;

        for(let i=0;i<todoLists.length;i++){
            if(todoLists[i].viewList().has(parseInt(id))){
                todoLists[i].viewList().get(parseInt(id)).complete();
                e.target.src = todoLists[i].viewList().get(parseInt(id)).completion ? _radiobox_marked_svg__WEBPACK_IMPORTED_MODULE_4__ : _radiobox_blank_svg__WEBPACK_IMPORTED_MODULE_3__;
                removeToDo(e);
                break;
            }
        }
    }


    function populate(todo){
        
        const div = document.createElement('div');
        div.classList.add('todoitem');
        const img = document.createElement('img');
        img.classList.add('completion');
        img.src = todo.completion ? _radiobox_marked_svg__WEBPACK_IMPORTED_MODULE_4__ : _radiobox_blank_svg__WEBPACK_IMPORTED_MODULE_3__;

        img.addEventListener('click', setComplete.bind(this));

        const h4 = document.createElement('h4');
        h4.textContent = todo.getDue.toDateString();

        if((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.isBefore)(todo.getDue, new Date()) && !todo.completion){
            h4.classList.add('overdue');
        }

        const main = document.createElement('div');
        main.classList.add('todomain');

        const edition = document.createElement('div');
        edition.classList.add('edition');

        const edit = document.createElement('img');
        edit.src = _square_edit_outline_svg__WEBPACK_IMPORTED_MODULE_6__;
        

        const trash = document.createElement('img');
        trash.src = _trash_can_svg__WEBPACK_IMPORTED_MODULE_5__;
        trash.addEventListener('click', removeToDo);

        const h3 = document.createElement('h3');
        h3.textContent = todo.getTitle;

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
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isToday)(value.getDue) && !value.completion){
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

    function resetDisplay(){
        display.innerHTML = '';
        lists.innerHTML = '';
    }


    function bindEvents(){
        all.addEventListener('click', ()=>{
            resetDisplay();
            start();

        });

        today.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'Today';
            todoLists.forEach((list) => populateToday(list));
        });

        scheduled.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'Scheduled';
            todoLists.forEach((list) => populateScheduled(list));
        });

        completed.addEventListener('click', ()=>{
            resetToDoDisplay();
            listName.value = 'Completed';
            todoLists.forEach((list) => populateCompleted(list));
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
            image.src = _close_svg__WEBPACK_IMPORTED_MODULE_7__;

            
            input.addEventListener('keydown', (e)=>{
                if(e.key === 'Enter' || e.keyCode === 13){
                    if(project.add(input.value)){
                        input.classList.toggle('toggle-list-input');
                        input.readOnly = true;
                        input.classList.toggle('list-toggle');
                        image.id = input.value;
                        div.classList.toggle('new-field');
                        div.addEventListener('click', (e)=>{
                            resetToDoDisplay();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class ToDoList {
    #list;


    constructor(name="Default"){
        this.#list = new Map();
        this.name = name;
    }

    get(id){
        return this.#list.get(id);
    }

    add(todo){
        if(!(todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__["default"]))
            return false;
        
        this.#list.set(todo.id, todo);
        return true;    
    }

    remove(id){
        return this.#list.delete(id);
    }

    editTitle(todo, newTitle){
        if(!(todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__["default"]))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setTitle = newTitle;
        return true;
    }
    editDue(todo, newDue){
        if(!(todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__["default"]))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setDue = newDue;
        return true;
    }
    editDescription(todo, newDescription){
        if(!(todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__["default"]))
            return false;

        const toEdit = this.#list.get(todo.id);
        toEdit.setDescription = newDescription;
        return true;
    }
    editPriority(todo, newPriority){
        if(!(todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__["default"]))
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

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
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
        return this.due;
    }

    set setPriority(due){
        this.due = due;
    }

    complete(){
        this.completed = !this.completed;
    }

    get completion(){
        return this.completed;
    }

    static continueID(id){
        ToDo.#idgenerator = id;
    }

}

/***/ }),

/***/ "./src/check.svg":
/*!***********************!*\
  !*** ./src/check.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddce2e1e5ef60024f029.svg";

/***/ }),

/***/ "./src/close.svg":
/*!***********************!*\
  !*** ./src/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/radiobox-blank.svg":
/*!********************************!*\
  !*** ./src/radiobox-blank.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3b6ef0fc8b1ecd5d1a9.svg";

/***/ }),

/***/ "./src/radiobox-marked.svg":
/*!*********************************!*\
  !*** ./src/radiobox-marked.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fe3d32b0bacf395316b.svg";

/***/ }),

/***/ "./src/square-edit-outline.svg":
/*!*************************************!*\
  !*** ./src/square-edit-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8421b7fc701a0f1a93be.svg";

/***/ }),

/***/ "./src/trash-can.svg":
/*!***************************!*\
  !*** ./src/trash-can.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");



const display = (0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])();



display.start();
display.bindEvents();

window.addEventListener('beforeunload', display.store);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUN6RHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQmdDO0FBQ2hDO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FsbHRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGREYXlzLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNCZWZvcmUubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGxUb0Rve1xyXG4gICAgI3RvZG9zXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLiN0b2RvcyA9IFtdXHJcbiAgICAgICAgdGhpcy4jdG9kb3MucHVzaChuZXcgVG9Eb0xpc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgI2dldEluZGV4KG5hbWU9XCJEZWZhdWx0XCIpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy4jdG9kb3MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuI3RvZG9zW2ldLm5hbWUgPT09IG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdChuYW1lPVwiRGVmYXVsdFwiKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2dldEluZGV4KG5hbWUpO1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiN0b2Rvc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbW92ZShuYW1lKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2dldEluZGV4KG5hbWUpO1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSB8fCBpbmRleCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuI3RvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUpe1xyXG4gICAgICAgIGlmKHRoaXMuI2dldEluZGV4KG5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiN0b2Rvcy5wdXNoKG5ldyBUb0RvTGlzdChuYW1lKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdChuYW1lLCBuZXdOYW1lKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2dldEluZGV4KG5hbWUpO1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSB8fCBpbmRleCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLiN0b2Rvc1tpbmRleF0ubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQWxsVG9EbyBmcm9tIFwiLi9hbGx0b2RvXCI7XHJcbmltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IHtpc1RvZGF5LCBpc0JlZm9yZSwgYWRkRGF5c30gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5pbXBvcnQgUmFkaW9CbGFuayBmcm9tICcuL3JhZGlvYm94LWJsYW5rLnN2Zyc7XHJcbmltcG9ydCBSYWRpb0ZpbGxlZCBmcm9tICcuL3JhZGlvYm94LW1hcmtlZC5zdmcnO1xyXG5pbXBvcnQgVHJhc2ggZnJvbSAnLi90cmFzaC1jYW4uc3ZnJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9zcXVhcmUtZWRpdC1vdXRsaW5lLnN2Zyc7XHJcbmltcG9ydCBDYW5jZWwgZnJvbSAnLi9jbG9zZS5zdmcnO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSAnLi9jaGVjay5zdmcnO1xyXG5cclxuY29uc3QgRGlzcGxheSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy9nZW5lcmFsIG1lbnUgXHJcbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XHJcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xyXG4gICAgY29uc3Qgc2NoZWR1bGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlZCcpO1xyXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpO1xyXG5cclxuICAgIC8vZG9tIGVsZW1lbnQgdG8gYWRkIGEgbmV3IGxpc3QgdG9cclxuICAgIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtdmlldycpO1xyXG5cclxuICAgIC8vYWRkIG5ldyBsaXN0IGJ1dHRvblxyXG4gICAgY29uc3QgYWRkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbGlzdCcpO1xyXG5cclxuICAgIC8vZG9tIGVsZW1lbnQgdG8gcG9wdWxhdGUgdGhlIHRpdGxlXHJcbiAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWxpc3QnKTtcclxuXHJcbiAgICAvL2RvbSBlbGVtZW50IHRvIGNoYW5nZSB0aGUgdGl0bGVcclxuICAgIGNvbnN0IGNoYW5nZUxpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5nZS1sbmFtZScpO1xyXG5cclxuICAgIC8vZG9tIGVsZW1lbnQgdG8gcG9wdWxhdGUgdGhlIGxpc3RcclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xyXG5cclxuICAgIC8vZG9tIGVsZW1lbnQgdG8gYWRkIG5ldyB0b2RvXHJcbiAgICBjb25zdCBhZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10b2RvJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBBbGxUb0RvKCk7XHJcblxyXG4gICAgLy9zYW1wbGVzXHJcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBwcm9qZWN0LmdldEFsbCgpO1xyXG4gICAgcHJvamVjdC5nZXRMaXN0KCkuYWRkKG5ldyBUb0RvKCdUb290aHBhc3RlJywnYnV5IHNvbWUgdG9vdGhwYXN0ZSBmcm9tIFdhbG1hcnQnLG5ldyBEYXRlKGFkZERheXMobmV3IERhdGUoKSwgMTApKSwgJ01lZCcpKTtcclxuICAgIHByb2plY3QuZ2V0TGlzdCgpLmFkZChuZXcgVG9EbygnRG9jdG9yIEFwcG9pbnRtZW50JywnYXBwb2ludG1lbnQgd2l0aCBEci4gUGF0ZWwgZm9yIGFubnVhbCBjaGVja3VwJyxuZXcgRGF0ZShhZGREYXlzKG5ldyBEYXRlKCksIDEpKSwgJ0hpZ2gnKSk7XHJcbiAgICBwcm9qZWN0LmdldExpc3QoKS5hZGQobmV3IFRvRG8oJ0ludGVydmlldycsICdqb2IgaW50ZXJ2aWV3JywgbmV3IERhdGUoKSwgJ2hpZ2gnKSk7XHJcbiAgICBwcm9qZWN0LmdldExpc3QoKS5nZXQoMikuY29tcGxldGUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRNb2RhbCgpe1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XHJcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBkdWV0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkdWV0aW1lLmlkID0gJ3RpbWUnO1xyXG4gICAgICAgIGR1ZWRhdGUuaWQgPSAnZGF0ZSc7XHJcblxyXG4gICAgICAgIGR1ZXRpbWUudHlwZSA9ICd0aW1lJztcclxuICAgICAgICBkdWVkYXRlLnR5cGUgPSAnZGF0ZSc7XHJcblxyXG4gICAgICAgIGR1ZWRhdGUubWluID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkdWVkYXRlLnZhbHVlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmFkaW9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmFkaW9zLmNsYXNzTGlzdC5hZGQoJ3JhZGlvcycpO1xyXG5cclxuICAgICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxvdy5pZCA9ICdsb3cnO1xyXG4gICAgICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbWVkLmlkID0gJ21lZCc7XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaGlnaC5pZCA9ICdoaWdoJztcclxuXHJcbiAgICAgICAgY29uc3QgbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblxyXG5cclxuICAgICAgICBsb3cubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICAgICAgbG93LnZhbHVlID0gJ0xvdyc7XHJcbiAgICAgICAgbG93LnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgIGwxLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgICAgICAgbDEuZm9yID0gJ0xvdyc7XHJcblxyXG4gICAgICAgIG1lZC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgICAgICBtZWQudmFsdWUgPSAnTWVkJztcclxuICAgICAgICBtZWQudHlwZSA9ICdyYWRpbyc7XHJcblxyXG4gICAgICAgIGwyLnRleHRDb250ZW50ID0gJ01lZCc7XHJcbiAgICAgICAgbDIuZm9yID0gJ01lZCc7XHJcblxyXG5cclxuICAgICAgICBoaWdoLm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgICAgIGhpZ2gudmFsdWUgPSAnSGlnaCc7XHJcbiAgICAgICAgaGlnaC50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICBsMy50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuXHJcbiAgICAgICAgbDMuZm9yID0gJ0hpZ2gnO1xyXG5cclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkdWVkYXRlKTtcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGR1ZXRpbWUpO1xyXG5cclxuICAgICAgICByYWRpb3MuYXBwZW5kQ2hpbGQobDEpO1xyXG4gICAgICAgIHJhZGlvcy5hcHBlbmRDaGlsZChsb3cpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJhZGlvcy5hcHBlbmRDaGlsZChsMik7XHJcbiAgICAgICAgcmFkaW9zLmFwcGVuZENoaWxkKG1lZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmFkaW9zLmFwcGVuZENoaWxkKGwzKTtcclxuICAgICAgICByYWRpb3MuYXBwZW5kQ2hpbGQoaGlnaCk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHJhZGlvcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IENhbmNlbDtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcyLnNyYyA9IENoZWNrO1xyXG4gICAgICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoaW1nMik7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGltZzIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgLy9jb25zdCB0YXJnZXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUudHJpbSgpID09PSAnJyA/ICcwMDowMDowMCcgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdycpO1xyXG4gICAgICAgICAgICBjb25zdCBtZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlnaCcpO1xyXG5cclxuICAgICAgICAgICAgaWYodGl0bGUudHJpbSgpID09PSAnJyB8fCBkZXNjcmlwdGlvbi50cmltKCkgPT09ICcnIHx8IGRhdGUudHJpbSgpID09PSAnJyAgfHwgKCFsb3cuY2hlY2tlZCAmJiAhbWVkLmNoZWNrZWQgJiYgIWhpZ2guY2hlY2tlZCkpe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQhIFBsZWFzZSBGaWxsIGluIHRoZSBpbnB1dHMhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gYCR7ZGF0ZX1UJHt0aW1lfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBteURhdGVUaW1lID0gbmV3IERhdGUoZGF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByaW9yaXR5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZihsb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkgPSAnTG93JztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYobWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gJ01lZGl1bSc7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkgPSAnSGlnaCc7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkVG9kbyA9IG5ldyBUb0RvKHRpdGxlLGRlc2NyaXB0aW9uLG15RGF0ZVRpbWUscHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgaWYobGlzdE5hbWUudmFsdWUgPT09ICdBbGwgVG9EbycgfHwgbGlzdE5hbWUudmFsdWUgPT09ICdUb2RheScgfHwgbGlzdE5hbWUudmFsdWUgPT09ICdTY2hlZHVsZWQnIHx8IGxpc3ROYW1lLnZhbHVlID09PSAnQ29tcGxldGVkJyB8fCBsaXN0TmFtZS52YWx1ZSA9PT0gJ0RlZmF1bHQnKXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmdldExpc3QoKS5hZGQoYWRkVG9kbylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5nZXRMaXN0KGxpc3ROYW1lLnZhbHVlKS5hZGQoYWRkVG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBvcHVsYXRlKGFkZFRvZG8pO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kKGRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKXtcclxuICAgICAgICBsaXN0TmFtZS52YWx1ZSA9ICdBbGwgVG9Ebyc7XHJcbiAgICAgICAgcmV0cmlldmUoKTtcclxuICAgICAgICB0b2RvTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4gcG9wdWxhdGVMaXN0KGxpc3QpKTtcclxuICAgICAgICB0b2RvTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4gcG9wdWxhdGVNYXAobGlzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJldHJpZXZlKCl7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkTGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMnKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRUb0RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xyXG5cclxuICAgICAgICBpZihzdG9yZWRMaXN0cyAhPT0gbnVsbCAmJiBzdG9yZWRUb0RvcyAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RzID0gSlNPTi5wYXJzZShzdG9yZWRMaXN0cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb0Rvcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcclxuXHJcbiAgICAgICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHByb2plY3QuYWRkKGxpc3QubmFtZSkpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8dG9kb3NbaV0ubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3RzW2ldLmFkZChuZXcgVG9Ebyh0b2Rvc1tpXVtqXS50aXRsZSwgdG9kb3NbaV1bal0uZGVzY3JpcHRpb24sIG5ldyBEYXRlKHRvZG9zW2ldW2pdLmR1ZSksIHRvZG9zW2ldW2pdLnByaW9yaXR5LCB0b2Rvc1tpXVtqXS5jb21wbGV0ZWQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9yZVRvRG8obGlzdCl7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBbXTtcclxuICAgICAgICBsaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgdG9kb3MucHVzaCh2YWx1ZSk7fSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcmUoKXtcclxuICAgICAgICBjb25zdCBsaXN0X25hbWVzID0gW107XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBbXTtcclxuICAgICAgICB0b2RvTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0X25hbWVzLnB1c2gobGlzdCk7XHJcbiAgICAgICAgICAgIHRvZG9zLnB1c2goc3RvcmVUb0RvKGxpc3Qudmlld0xpc3QoKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RfbmFtZXMpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUxpc3QobGlzdCl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZGl2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgaW1nLmlkID0gbGlzdC5uYW1lO1xyXG4gICAgICAgIGltZy5zcmMgPSBDYW5jZWw7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGxpc3QubmFtZTtcclxuICAgICAgICBpbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnbGlzdC10b2dnbGUnKTtcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgcmVzZXRUb0RvRGlzcGxheSgpO1xyXG4gICAgICAgICAgICBsaXN0TmFtZS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBwb3B1bGF0ZU1hcChwcm9qZWN0LmdldExpc3QoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PnsgXHJcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBpZihsaXN0Lm5hbWUgIT0gJ0RlZmF1bHQnKVxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICAgICAgbGlzdHMuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFRvRG9EaXNwbGF5KCl7XHJcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9EbyhlKXtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodG9kb0xpc3RzW2ldLnZpZXdMaXN0KCkuaGFzKHBhcnNlSW50KGlkKSkpe1xyXG4gICAgICAgICAgICAgICAgdG9kb0xpc3RzW2ldLnJlbW92ZShwYXJzZUludChpZCkpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0b2RvTGlzdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRvZG9MaXN0c1tpXS52aWV3TGlzdCgpLmhhcyhwYXJzZUludChpZCkpKXtcclxuICAgICAgICAgICAgICAgIHRvZG9MaXN0c1tpXS52aWV3TGlzdCgpLmdldChwYXJzZUludChpZCkpLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSB0b2RvTGlzdHNbaV0udmlld0xpc3QoKS5nZXQocGFyc2VJbnQoaWQpKS5jb21wbGV0aW9uID8gUmFkaW9GaWxsZWQgOiBSYWRpb0JsYW5rO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9EbyhlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZSh0b2RvKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb2l0ZW0nKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnY29tcGxldGlvbicpO1xyXG4gICAgICAgIGltZy5zcmMgPSB0b2RvLmNvbXBsZXRpb24gPyBSYWRpb0ZpbGxlZCA6IFJhZGlvQmxhbms7XHJcblxyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldENvbXBsZXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgaDQudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZS50b0RhdGVTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYoaXNCZWZvcmUodG9kby5nZXREdWUsIG5ldyBEYXRlKCkpICYmICF0b2RvLmNvbXBsZXRpb24pe1xyXG4gICAgICAgICAgICBoNC5jbGFzc0xpc3QuYWRkKCdvdmVyZHVlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCd0b2RvbWFpbicpO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWRpdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0aW9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlZGl0LnNyYyA9IEVkaXQ7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgdHJhc2guc3JjID0gVHJhc2g7XHJcbiAgICAgICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUb0RvKTtcclxuXHJcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaDQpO1xyXG4gICAgICAgIGVkaXRpb24uYXBwZW5kQ2hpbGQoZWRpdCk7XHJcbiAgICAgICAgZWRpdGlvbi5hcHBlbmRDaGlsZCh0cmFzaCk7XHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHRvZG8uaWQpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWRpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkTGluZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVNYXAobGlzdCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlzdC52aWV3TGlzdCgpLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYoIXZhbHVlLmNvbXBsZXRpb24pe1xyXG4gICAgICAgICAgICAgICAgcG9wdWxhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVUb2RheShsaXN0KXtcclxuICAgICAgICBsaXN0LnZpZXdMaXN0KCkuZm9yRWFjaCgodmFsdWUsa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzVG9kYXkodmFsdWUuZ2V0RHVlKSAmJiAhdmFsdWUuY29tcGxldGlvbil7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVTY2hlZHVsZWQobGlzdCl7XHJcbiAgICAgICAgbGlzdC52aWV3TGlzdCgpLmZvckVhY2goKHZhbHVlLGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZighdmFsdWUuY29tcGxldGlvbil7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUNvbXBsZXRlZChsaXN0KXtcclxuICAgICAgICBsaXN0LnZpZXdMaXN0KCkuZm9yRWFjaCgodmFsdWUsa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmNvbXBsZXRpb24pe1xyXG4gICAgICAgICAgICAgICAgcG9wdWxhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXREaXNwbGF5KCl7XHJcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBsaXN0cy5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpe1xyXG4gICAgICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHJlc2V0RGlzcGxheSgpO1xyXG4gICAgICAgICAgICBzdGFydCgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICByZXNldFRvRG9EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIGxpc3ROYW1lLnZhbHVlID0gJ1RvZGF5JztcclxuICAgICAgICAgICAgdG9kb0xpc3RzLmZvckVhY2goKGxpc3QpID0+IHBvcHVsYXRlVG9kYXkobGlzdCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzY2hlZHVsZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICByZXNldFRvRG9EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIGxpc3ROYW1lLnZhbHVlID0gJ1NjaGVkdWxlZCc7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0cy5mb3JFYWNoKChsaXN0KSA9PiBwb3B1bGF0ZVNjaGVkdWxlZChsaXN0KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHJlc2V0VG9Eb0Rpc3BsYXkoKTtcclxuICAgICAgICAgICAgbGlzdE5hbWUudmFsdWUgPSAnQ29tcGxldGVkJztcclxuICAgICAgICAgICAgdG9kb0xpc3RzLmZvckVhY2goKGxpc3QpID0+IHBvcHVsYXRlQ29tcGxldGVkKGxpc3QpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1vZGFsKTtcclxuXHJcbiAgICAgICAgYWRkTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZmllbGQnKSlcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZmllbGQnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmV3LWZpZWxkJyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWRpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS1saXN0LWlucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IENhbmNlbDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0LmFkZChpbnB1dC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUtbGlzdC1pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2xpc3QtdG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLmlkID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKCduZXctZmllbGQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFRvRG9EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVNYXAocHJvamVjdC5nZXRMaXN0KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgJHtpbnB1dC52YWx1ZX0gYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbW92ZShlLnRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgICAgICBsaXN0cy5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICAvL2NyZWF0ZSBhbiBpbnB1dCBmaWVsZCB1bmRlciAnTGlzdHMnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgYmluZEV2ZW50czogYmluZEV2ZW50cyxcclxuICAgICAgICBzdG9yZTogc3RvcmVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheTsiLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgICAjbGlzdDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT1cIkRlZmF1bHRcIil7XHJcbiAgICAgICAgdGhpcy4jbGlzdCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChpZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQodG9kbyl7XHJcbiAgICAgICAgaWYoISh0b2RvIGluc3RhbmNlb2YgVG9EbykpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLiNsaXN0LnNldCh0b2RvLmlkLCB0b2RvKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGlkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jbGlzdC5kZWxldGUoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUaXRsZSh0b2RvLCBuZXdUaXRsZSl7XHJcbiAgICAgICAgaWYoISh0b2RvIGluc3RhbmNlb2YgVG9EbykpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9FZGl0ID0gdGhpcy4jbGlzdC5nZXQodG9kby5pZCk7XHJcbiAgICAgICAgdG9FZGl0LnNldFRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlZGl0RHVlKHRvZG8sIG5ld0R1ZSl7XHJcbiAgICAgICAgaWYoISh0b2RvIGluc3RhbmNlb2YgVG9EbykpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9FZGl0ID0gdGhpcy4jbGlzdC5nZXQodG9kby5pZCk7XHJcbiAgICAgICAgdG9FZGl0LnNldER1ZSA9IG5ld0R1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVkaXREZXNjcmlwdGlvbih0b2RvLCBuZXdEZXNjcmlwdGlvbil7XHJcbiAgICAgICAgaWYoISh0b2RvIGluc3RhbmNlb2YgVG9EbykpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9FZGl0ID0gdGhpcy4jbGlzdC5nZXQodG9kby5pZCk7XHJcbiAgICAgICAgdG9FZGl0LnNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlZGl0UHJpb3JpdHkodG9kbywgbmV3UHJpb3JpdHkpe1xyXG4gICAgICAgIGlmKCEodG9kbyBpbnN0YW5jZW9mIFRvRG8pKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvRWRpdCA9IHRoaXMuI2xpc3QuZ2V0KHRvZG8uaWQpO1xyXG4gICAgICAgIHRvRWRpdC5zZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2aWV3TGlzdCgpe1xyXG4gICAgICAgIC8vbGF0ZXIgdG8gYmUgaGFuZGxlZCB3aXRoIHVpIGNsYXNzXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xpc3Q7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICAgIC8vQ2hlY2sgbGF0ZXIgZm9yIHBlcnNpc3RlbnQgc3RvcmFnZVxyXG4gICAgc3RhdGljICNpZGdlbmVyYXRvciA9IDA7XHJcbiAgICAjaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBjb21wbGV0ZWQ9ZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuI2lkID0gVG9Eby4jaWRnZW5lcmF0b3IrKztcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFRpdGxlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNldFRpdGxlKHRpdGxlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RGVzY3JpcHRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldER1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0RHVlKGR1ZSl7XHJcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFByaW9yaXR5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRQcmlvcml0eShkdWUpe1xyXG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbXBsZXRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnRpbnVlSUQoaWQpe1xyXG4gICAgICAgIFRvRG8uI2lkZ2VuZXJhdG9yID0gaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBOYU4pO1xuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gX2RhdGU7XG4gIH1cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkRGF5cztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBEaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcclxuXHJcblxyXG5jb25zdCBkaXNwbGF5ID0gRGlzcGxheSgpO1xyXG5cclxuXHJcblxyXG5kaXNwbGF5LnN0YXJ0KCk7XHJcbmRpc3BsYXkuYmluZEV2ZW50cygpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGRpc3BsYXkuc3RvcmUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=