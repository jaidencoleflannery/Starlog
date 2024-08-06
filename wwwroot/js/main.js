import { title } from './modules/title.js';
import { nav } from './modules/nav.js';
import { loadTasks } from './modules/loadTasks.js';

window.onload = function() {

    title();
    nav();
    loadTasks();

  };