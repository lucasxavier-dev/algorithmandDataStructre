// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Algorithm and Data Structure</h1>`;

//stack - principle LIFO (last in, First Out)

const queue = [];
//push - acrescenta um elemento no final da array aumentando o seu tamanho
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6); //Last item in queue, First Out

queue.pop(); //-1 - esta removendo o 6
queue.push(7); //+1 - esta acrescentando o 7 no final do array

console.log(queue);
//shift - retira o primeiro elemento de um array, ou seja, retira o primeiro elemento colocado que representa o último a ser retirado

queue.shift(); //remove -1

//implementando lógica própria caso não tivesse os métodos

/* 
function Queue() {
    this.queue = [];
    this.insertQueue = param => this.queue[this.queue.length] = param;
    this.removeQueue = () => {
        if (this.queue.length > 0) {
            let obj = this.queue[0];
            this.queue.splice(0, 1);
            return obj;
        } else {
            return "Sem elementos na fila";
        }
    }
}

let q = new Queue();

q.insertQueue(1);
q.insertQueue(2);
q.insertQueue(3);

console.log(q.queue);

q.insertQueue(4);
q.insertQueue(5);
q.insertQueue(6);

q.removeQueue();
q.removeQueue();

console.log(q.queue);
console.log(q.removeQueue());


 */
