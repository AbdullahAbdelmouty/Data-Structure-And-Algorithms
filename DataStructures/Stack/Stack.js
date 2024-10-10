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
