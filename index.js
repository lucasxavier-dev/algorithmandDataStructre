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

// console.log(queue); ----

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

//LinkedList - nível de complexidade: O(length - n) - cresce em O de (n)

// #nó head

function LinkedList() {
  let head = null;
  length = 0;
  const Node = value => {
    return {
      value,
      next: null
    };
  };

  const add = value => {
    if (!head) {
      head = Node(value);
      length++;
      return head;
    }
    // o bloco while dita o número de vezes que a lista cresce -

    // 1 while = O(n)
    // 2 while = O(n²)...

    let node = head;
    while (node.next) {
      node = node.next;
    }

    node.next = Node(value);
    length++;
    return node.next;
    console.log(node);
  };
  return {
    length: () => length,
    add: value => add(value),
    print: () => console.log(head)
  };
}

const list = LinkedList();
console.log(list.length());
list.add(1);
list.add(2);
list.add(3);
console.log(list.length());
list.print();

// tree = arvore

/*
1. A regra de navegação encontrada nas arvores é baseada em como se passa pelos nós da arvore
1. Saber a ordem de execução
2. Saber o passo base de navegação
*/

//#  preOrder = 10, 2, 3

let tree = {
  left: {
    left: undefined,
    right: {
      value: 3
    },
    value: 2
  },

  right: undefined,
  value: 10
};
//preOrder - Escreve primeiro - primeiro de tudo. Antes de navegar
//anterior a order - primeiro imprime o value, vai para left, vai para right
//preOrder - Escreve primeiro

function preOrder(tree) {
  console.log(tree.value);

  tree.left && preOrder(tree.left);
  tree.right && preOrder(tree.right);
}

function inOrder(tree) {
  tree.left && inOrder(tree.left);
  console.log(tree.value);
  tree.right && inOrder(tree.right);
}

function posOrder(tree) {
  tree.left && posOrder(tree.left);
  tree.right && posOrder(tree.right);
  console.log(tree.value);
}

console.log("#preOrder"); //preOrder - Escreve primeiro
preOrder(tree);

console.log("#inOrder"); //inOrder - Escreve no meio
inOrder(tree);

console.log("#posOrder"); //posOrder - Escreve depois/por último
posOrder(tree);
