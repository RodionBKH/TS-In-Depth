import {book, totalPages} from './tasks/tasks';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 1

console.log(totalPages);
console.log(book);
