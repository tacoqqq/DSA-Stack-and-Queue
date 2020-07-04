/*
1. Create a stack class
*/

class _Node {
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push(data){
        //if empty stack
        if (this.top == null){
            this.top = new _Node(data , null)
            return this.top
        }

        //if the stack alreay has something
        const node = new _Node(data, this.top)
        this.top = node;
    }

    pop(){
        //if empty stack
        if (this.top == null){
            return null
        }

        //if the stack has something
        const originalTop = this.top
        this.top = originalTop.next
        return originalTop.value
    }
}

/*
2. Useful methods for a stack
Using the Stack class above, implement the following helper functions outside of the class:
peek(): allows you to look at the top of the stack without removing it
isEmpty(): allows you to check if the stack is empty or not
display(): to display the stack - what is the 1st item in your stack?
Remove McCoy from your stack and display the stack
*/

function peek(stack){
    return stack.top.data
  }
  
  function isEmpty(stack){
    if (stack.top == null){
      return true
    } else return false
  }
  function display(stack){
    //if empty stack
    if (!stack.top){
      return null
    }
  
    //if already has something
    let currentNode = stack.top
    while (currentNode !== null){
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }


/*
3. Check for palindromes using a stack
A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
*/

function is_palindrome(str){
    const stack = new Stack()
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    for (let i = 0 ; i < str.length ; i++){
      stack.push(str[i]) // ['d','a','d']
    }
  
    let backwardStr = ''
    for (let i = 0 ; i < str.length ; i++){
      backwardStr = backwardStr + stack.pop()
    }
  
    if (backwardStr === str){
      return true
    } else return false
  }
    

/*
4. Matching parentheses in an expression
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).
*/

function parenthesisChecker(str){
    let stack = new Stack()
    
    //loop through the string
    for (let i = 0 ; i < str.length ; i++){
      //if '(' , put it in the stack
      if ( str[i] == '(' ){
        stack.push(i)
      } 
      
      if (str[i] == ')'){
        if (stack.top !== null){
            stack.pop()
        } else {
            return `Error: you are missing a (. Location of the close is at index ${i} `
        }
      } 
    }

    let location = ''

    while (stack.top !== null){
        let index = stack.pop()
        location = location + '\n' + `Error: you are missing a ). Location of the open is at index ${index} ; `
        return location
    }

    return 'it passes the test!'
  }

/*
 try {
  try_statements
}
[catch (exception_var_1 if condition_1) { // non-standard
  catch_statements_1
}]

...
[catch (exception_var_2) {
  catch_statements_2
}]
[finally {
  finally_statements
}]
*/ 


/*
5. Sort stack
Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).
*/

function sortStack(stack){
//if empty stack
if (!stack.top){
    return null
}

//if only one item in stack
if (stack.top.next == null){
    return stack
}

//2 or more items in stack
let currentTop = stack.top
while (currentTop !== null){
    let currentNode = currentTop.next
    while (currentNode !== null){
    if (currentTop.data < currentNode.data){
        let temp = currentTop.data
        currentTop.data = currentNode.data
        currentNode.data = temp
    }
    currentNode = currentNode.next
    }
    currentTop = currentTop.next
}

const answerStack = new Stack()
while (stack.top !== null){
    answerStack.push(stack.pop())
}
return answerStack
}

sortStack(starTrek)