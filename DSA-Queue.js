class _Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/*
6. Create a queue using Singly linked list
*/

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(data){
        const node = new _Node(data);

        if (this.first == null){
            this.first = node
        }

        if (this.last){
            this.last.next = node
        }

        this.last = node
    }

    dequeue(){
        //if empty queue
        if (this.first == null){
            return null
        }

        const node = this.first
        this.first = node.next
        //if this is the last item in the queue
        if (node == this.last){
            this.last = null
        }

        return node.value
    }
}

function peek(queue){
    return queue.first.value
}

function isEmpty(queue){
    if (queue.first == null){
        return true
    } else return false
    }

    function display(queue){
    //if empty queue
    if (!queue.first){
        return null
    }

    let currentNode = queue.first
    while (currentNode !==  null){
        console.log(currentNode.value)
        currentNode = currentNode.next
    }
}

/*
7. Create a queue class using Doubly linked List
*/

class _Node {
    constructor(value,prev){
        this.value = value;
        this.prev = prev
        this.next = null;
    }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(item){
    //if empty queue
    if (this.first == null){
      let firstNode = new _Node(item,this.first)
      this.first = firstNode
      this.last = firstNode
    }

    if (this.last){
      let newNode = new _Node(item,this.last)
      this.last.next = newNode
      this.last = newNode
    }
  }

  dequeue(){
    //if empty queue
    if (this.first == null){
      return null
    }

    //if something already in queue
    let node = this.first
    this.first = node.next
    this.first.prev = null

    if (node == this.last){
      this.last == null
    }
    return node.value
  }
}

/*
8. Queue implementation using a stack
There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)
*/

/*
8. Queue implementation using a stack
There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)
*/

class Queue{
    constructor(){
      this.stack1 = new Stack()
      this.stack2 = new Stack()
    }
  
    enqueue(item){    
      this.stack1.push(item)
    }
  
    dequeue(){
      let currentNode = this.stack1.top
      while (currentNode !== null){
        this.stack2.push(this.stack1.pop())
        currentNode = currentNode.next
      }
  
      let value = this.stack2.pop()

      let currentNode2 = this.stack2.top
      while (currentNode2 !== null){
        this.stack1.push(this.stack2.pop())
        currentNode2 = currentNode.next
      }
      
      return value
    }
}

/*
9. Square dance pairing
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

F Jane

M Frank

M John

M Sherlock

F Madonna

M David

M Christopher

F Beyonce

Female dancer is Jane, and the male dancer is Frank
Female dancer is Madonna, and the male dancer is John
Female dancer is Beyonce, and the male dancer is Sherlock
There are 2 male dancers waiting to dance
*/

let spares = new Queue()
spares.enqueue('F Jane')
spares.enqueue('M Frank')
spares.enqueue('M John')
spares.enqueue('M Sherlock')
spares.enqueue('F Madonna')
spares.enqueue('M David')
spares.enqueue('M Christopher')
spares.enqueue('F Beyonce')

function pairDance(queue){
  let femaleQueue = new Queue()
  let maleQueue = new Queue()

  let currentNode = queue.first
  while (currentNode !== null){
    if (currentNode.value.split(' ')[0] === 'F'){
      femaleQueue.enqueue(currentNode.value)
    } else {
      maleQueue.enqueue(currentNode.value)
    }
    currentNode = currentNode.next
  }

  let pairs = []
  while (femaleQueue.first !== null && maleQueue.first !== null){
    let female = femaleQueue.dequeue().split(' ')[1]
    let male = maleQueue.dequeue().split(' ')[1]
    pairs.push(`Female dancer is ${female}, and the male dancer is ${male}`)
  }

  let spareFemale = 0;
  let spareMale = 0;
  if (femaleQueue.first !== null || maleQueue.first !== null){
    while (femaleQueue.first !== null){
      spareFemale++
      femaleQueue.first == femaleQueue.first.next
    } 
    while(maleQueue.first !== null){
      spareMale++
      maleQueue.first = maleQueue.first.next
    }    
  }

  return pairs.join('\n') + '\n' + `There are ${spareMale} male dancers waiting to dance`
}

pairDance(spares)

/*
10. The Ophidian Bank
At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.
*/


let theQueue = new Queue()
theQueue.enqueue('A')
theQueue.enqueue('B')
theQueue.enqueue('C')
theQueue.enqueue('D')
theQueue.enqueue('E')
theQueue.enqueue('F')
theQueue.enqueue('G')
theQueue.enqueue('H')
theQueue.enqueue('I')
theQueue.enqueue('J')
theQueue.enqueue('K')

function bankQueue(queue){
  //dealing with customers from customer 1
  let currentNode = queue.first
  let lastNode = queue.last
  while (currentNode !== null && currentNode !== lastNode){
    let paperworkAccuracy = ['ok','no','ok','ok'][Math.floor(Math.random()*4)]
    if (paperworkAccuracy == 'no'){
      queue.dequeue()
      queue.enqueue(currentNode.value)
    } else {
      queue.dequeue()
    }
    currentNode = currentNode.next
  }

  return queue
}

console.log(bankQueue(theQueue))