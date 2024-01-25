import Display from "./display";


const display = Display();



display.start();
display.bindEvents();

window.addEventListener('beforeunload', display.store);
