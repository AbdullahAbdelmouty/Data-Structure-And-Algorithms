// 225. Implement Stack using Queues
// stack = 4,3,2,1
// q1 = 1,2,3,4
// var MyStack = function() {
//     this.queue1 = [];
//     this.pop = function(){
//         return this.queue1.pop();
//     }
//     this.push = function(x){
//         this.queue1.push(x)
//     }
//     this.top = function(){
//         return this.queue1[this.queue1.length - 1]
//     }
//     this.empty = function(){
//         return this.queue1.length === 0;
//     }

// };

// let stk = new MyStack();
// console.log(stk.pop());

// 232. Implement Queue using Stacks

// let MyQueue = function() {
//    this.stack = [];
//    this.push = function(x){
//       this.stack.push(x)
//    } 
//    this.pop = function(){
//       return this.stack.shift();
//    }
//    this.peek = function(){
//       return this.stack[0]
//    }
//    this.empty = function(){
//      return this.stack.length === 0;
//    }
// };