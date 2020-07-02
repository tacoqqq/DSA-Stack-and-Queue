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