// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }
//     // add node to the end of the list
//     add(data){ 
//         // create new node
//         const node = new Node(data);        
//         // if the list is empty, set the head to the new node.
//         if(this.head === null){
//             this.head = node;
//         }else{
//             this.tail.next = node;
//         }
//         // set the tail to the new node
//         this.tail = node;
//     }
//     // get a node at the specified index
//     get(index){
//         let current = this.head;
//         let i = 0;
//         while(i<index){
//             current = current.next;
//             i++;
//         }
//         return current.data;
//     }
//     // remove a node at the specified index
//     // The removeFrom method will remove the node at the specified index. It takes in an index value and checks to see if the index is 0. 
//     // If it is, it sets the head property to the next property of the head node. If it isn't, it loops through the linked list until it reaches the node at the specified index. 
//     // It then sets the next property of the previous node to the next property of the current node.
//     removeForm(index){
//         if(index === 0){
//             this.head = this.head.next;
//         }else{
//             let current = this.head;
//             let previous = null;
//             let i = 0;
//             while(i<index){
//                 previous = current;
//                 current = current.next;
//                 i++;
//             }
//             previous.next = current.next;
//         }
//     }
//     // insert a node at the specified index
//     // The insertAt method will insert a new node at the specified index. It takes in an index value and a data value. It then checks to see if the index is 0. 
//     // If it is, it creates a new node and sets the next property of the new node to the head node. It then sets the head property to the new node. If the index is not 0, it loops through the linked list until it reaches the node at the specified index. 
//     // It then creates a new node and sets the next property of the new node to the node at the specified index. It then sets the next property of the previous node to the new node. The time complexity of this method is O(n) because it has to loop through the linked list to find the node at the specified index. 
//     // Arrays are better for this because they have constant time access. The time complexity of accessing an element in an array is O(1).
//     // print all nodes in the list
//     insertAt(index,data){
//         if(index === 0){
//             const node = new node(data);
//             node.next = this.head;
//             this.head = node;
//         }else{
//             let current = this.head;
//             let previous = current.next;
//             let i = 0;
//             while(i<index){
//                 previous = current;
//                 current = current.next;
//                 i++;
//             }
//         }
//     }
//     printAll(){
//         let current = this.head;
//         while(current !== null){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     getLength(){
//         let current = this.head;
//         let count = 0;
//         while(current !== null){
//             current = current.next;
//             count++;
//         }
//         return count
//     }
// }

// let list1 = new LinkedList();
// let list2 = new LinkedList();
// let newList = new LinkedList();

// list1.add(1);
// list1.add(2);
// list1.add(4);
// list1.add(5);

// list2.add(1);
// list2.add(3);
// list2.add(4);

// newList.printAll();
 
// hasCycle in linkedList?
// references
// Floyd’s Cycle Finding Algorithm => https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/
// How does Floyd’s slow and fast pointers approach work? => https://www.geeksforgeeks.org/how-does-floyds-slow-and-fast-pointers-approach-work/ 
// let hasCycle = function(head){    
//     if(!head||!head.next){
//         return false;
//     }
//     let fastPointer = head.next;
//     let slowPointer = head;
//     while(fastPointer !== slowPointer){
//         if(!fastPointer || !fastPointer.next){
//             return false;
//         }
//         console.log(fastPointer.val);
//         console.log(slowPointer.val);
//         slowPointer = slowPointer.next;
//         fastPointer = fastPointer.next.next;
//     }
//     return true
// }

// console.log(hasCycle(head));

class ListNode{
    constructor(val=null,next = null){
        this.val = val;
        this.next = next;
    }
}

// Input: l1 = [2,4,3], l2 = [5,6,4]
// 342 + 465 = 807 => [7,0,8]
// 9999999 + 9999 = 10009998 => [8,9,9,9,0,0,0,1]
// list => [0,next=[7,null]]   
// current.next = [7,null] <= current
// const addTwoNumber = function(l1,l2){
//     let dummyHead = new ListNode(0);    
//     let current = dummyHead;
//     let carry = 0;
//     // console.log(list);
//     while(l1||l2||carry>0){
//         console.log("dsf");
        
//         let nodeSum = 0;
//         let val1 = l1 !==null ?l1.val: 0;
//         let val2 = l2 !==null ?l2.val: 0;
//         // // calculate carry
//         if( val1 + val2 + carry <= 9){
//             nodeSum = val1 + val2  + carry;
//             console.log("Sdf",nodeSum);
            
//             carry = 0;
            
//         }else if( val1 + val2  + carry === 10){
//             carry = 1;
//             nodeSum = 0;
//         }else if( val1 + val2 + carry >= 10){
//             nodeSum =  val1 + val2 + carry - 10;
//             carry = 1;
//         }
//         current.next = new ListNode(nodeSum);     
//         current = current.next;
        
//         if (l1 !== null) l1 = l1.next;
//         if (l2 !== null) l2 = l2.next;
//     }

//     return dummyHead.next
    
// }

// let l1 = new ListNode(4)

// let l2 = new ListNode(5);                        

// console.log(addTwoNumber(l1,l2));
// let head = new ListNode(1, new ListNode(2));

// let removeNthFromEnd = function(head, n) {
//     // let pointer = head;
//     // let size = 0;
//     // if(head.next === null && n===1){
//     //     return null;
//     // }
//     // // calculate size of linkedList
//     // while(pointer){
//     //     pointer = pointer.next;
//     //     size++;
//     // }
//     // let count = size;
//     // let pointer2 =head;
//     // if(size === n){
//     //     return head.next;
//     // }
//     // while(count>n){
//     //     console.log(pointer2.val);
//     //     if(count === n+1){
//     //         console.log("done");
//     //         console.log(pointer2.val);
//     //         console.log(pointer2.next.next);
//     //         pointer2.next = pointer2.next.next;
//     //     }
//     //     pointer2 = pointer2.next;
//     //     count--;
//     // }
    
//     // return head;
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let first = dummy;
//     let last = dummy;
//     for (let i = 0; i <= n; i++) {
//         first = first.next;
//     }
//     while(first){
//         first = first.next;
//         last = last.next;
//     }
//     second.next = second.next.next;
//     return dummy.next

// };

// const res = removeNthFromEnd(head,2);
// console.log(res,"res");

// mergeTwoLists
// const mergeTwoLists = (list1,list2)=>{
//     let dummyHead = new ListNode(0);
//     let current = dummyHead;

//     // Continue while both lists have nodes
//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//             current.next = list1; 
//             list1 = list1.next; 
//         } else {
//             current.next = list2; 
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     if (list1 !== null) {
//         current.next = list1;  // Attach remaining nodes from list1
//     } else {
//         current.next = list2;  // Attach remaining nodes from list2
//     }

//     return dummyHead.next;
// }

// let l1 = new ListNode(5);

// let l2 = new ListNode(1, 
//             new ListNode(2, 
//                 new ListNode(4)));        

// let res = mergeTwoLists(l1,l2);

// 24 Swap Nodes in Pairs [1,2,3]
// index = 1 => temp = 2; index[1] = 2,index[2] = 1; index +=2;
// let swapPairs = function(head) {
//     let dummyHead = new ListNode(0);
//     dummyHead.next = head;
//     let current = dummyHead;
//     if(!head){
//         return null;
//     }
//     if(!head.next){
//         return head;
//     }
//     while(current.next !== null && current.next.next !== null){
//         let first = current.next;
//         let second = current.next.next;
//         first.next = second.next;
//         second.next = first;
//         current.next = second;
//         current = current.next.next
//     }
//     return dummyHead.next;
// };

// let head = new ListNode(1, 
//             new ListNode(2, 
//                 new ListNode(3,
//                     new ListNode(4,
//                         new ListNode(5)
//                     )
//                 )));   

// let res = swapPairs(head);
// console.log(res,"Res");

// while(res){
//     console.log(res.val);
//     res = res.next;
    
// }