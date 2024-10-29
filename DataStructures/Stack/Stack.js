// // 20. Valid Parentheses
// let isValid = function(s) {
//     if(s.length<2)return false
//     class Stack{
//         constructor(){
//             this.items = [];
//         }
//         push(element){
//             this.items.push(element)
//         }
//         pop(){
//             if(this.items.length === 0){
//                 return "Underflow";
//             }
//             return this.items.pop();
//         }
//         peek(){
//             return this.items[this.items.length - 1];
//         }
//         isEmpty(){
//             return this.items.length == 0;
//         }
//     }
//     const stk = new Stack();
//     for (let char = 0; char < s.length; char++) {

//         if(s[char] === '(' || s[char] === "[" || s[char] === "{"){
//             stk.push(s[char]);
//         }else if(s[char] === ')'){
//             if("("===stk.peek()){
//                 stk.pop()
//             }else{
//                 return false;
//             }
//         }else if(s[char] === ']'){
//             if("["===stk.peek()){
//                 stk.pop()
//             }else{
//                 return false;
//             }
//         }
//         else if(s[char] === '}'){
//             if("{"===stk.peek()){
//                 stk.pop()
//             }else{
//                 return false;
//             }
//         }

   
        
//     }
//     if(stk.isEmpty()){
//         return true;
//     }else{
//         return false;
//     }
// };
// const s = "(("

// console.log(isValid(s));

// let simplifyPath = function(path) {
//     class Stack{
//     constructor(){
//         this.items = [];
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         if(this.items.length === 0){
//             return "Underflow";
//         }
//         return this.items.pop();
//     }
//     peek(){
//         return this.items[this.items.length - 1];
//     }
//     isEmpty(){
//         return this.items.length == 0;
//     }
//    }
//    let stk = new Stack()
//    stk.push(path[0]);
//    for (let char = 0; char < path.length; char++) {
       
//        // check if the first char is /

//    }
// };

// const path = "/home/";
// simplifyPath(path)

// 155. Min Stack
// stack => -3 0 -2
// minStack 
// let MinStack = function() {
//     this.stack = [];
//     this.minStack = [];
//     this.push = function(val){
//         this.stack.push(val);
//         if (this.minStack.length === 0) {
//             this.minStack.push(val);
//         }else if(this.minStack[this.minStack.length - 1]>=val){
//             this.minStack.push(val);
//         }else if(this.minStack[this.minStack.length - 1]<val){
//             let temp = this.minStack.pop(); 
//             this.minStack.push(val);
//             this.minStack.push(temp);
//         }
//     }
//     this.pop = function(){
//         if(this.stack.length === 0){
//             return "Underflow";
//         }
//         let poped = this.stack.pop();
//         // remove element from minStack 
//         let indexOfPoped = this.minStack.indexOf(poped);
//         if (indexOfPoped>-1) {
//             this.minStack.splice(indexOfPoped,1)
//         }
//     }
//     this.top = function(){
//         return this.stack[this.stack.length - 1];
//     }
//     this.getMin = function(){
//         return this.minStack[this.minStack.length - 1]
//     }
// };