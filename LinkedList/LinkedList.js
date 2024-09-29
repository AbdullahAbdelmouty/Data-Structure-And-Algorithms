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

// const mergeTwoLists = (list1,list2)=>{
//     let current1 = list1.head;
//     let current2 = list2.head;
//     console.log(newList);
//     let diff = list2.getLength() - list1.getLength()<0? -(list2.getLength() - list1.getLength()):list2.getLength() - list1.getLength();
//     let count = list1.getLength() > list2.getLength()? list1.getLength() - diff : list2.getLength() - diff;
//     console.log(count,"count");
    
//     while(current1 !== null && current2 !==null){
//         if(current1.data>=current2.data){
//             newList.add(current2.data)
//             newList.add(current1.data)            
//         }else{
//             newList.add(current1.data)
//             newList.add(current2.data)            
//         }
//         current1 = current1.next;
//         current2 = current2.next;
//     }


// }

// mergeTwoLists(list1,list2)

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
    constructor(val=null){
        this.val = val;
        this.next = null;
    }
}

const head = new ListNode(2);
const l1 = new ListNode(4);
head.next = l1;
const l2 = new ListNode(3);
l1.next = l2;

const head2 = new ListNode(5);
const l11 = new ListNode(6);
head2.next = l11;
const l22 = new ListNode(4);
l11.next = l22;

// 342 + 465 = 807
const addTwoNumber = function(l1,l2){
    let pointer1 = l1;
    let pointer2 = l2;
    let carry = 0;
    let list = new ListNode();
    if(!pointer1.next && !pointer2.next){
        list.val = pointer1.val + pointer2.val;
        return list;
    }
    while(pointer1&&pointer2){
        if((pointer1.val + pointer2.val)-10==0){
            carry = carry + 1;     
            list.val = 0;       
        }else if((pointer1.val + pointer2.val)-10>0){
            carry = carry + 1;
            list.val = (pointer1.val + pointer2.val)-10;
        }else{
            list.val = pointer1.val + pointer2.val;
        }
        console.log(carry,"carry");
        // list.val = pointer1.val + pointer2.val;
        if(!pointer1.next || !pointer2.next){
            list.val =  pointer1.val + pointer2.val + carry;
            // should handle if the sum over the 9
        }
    
        console.log(list.val,"list.val");
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;


    }
    return list;
}

console.log(addTwoNumber(head,head2));





