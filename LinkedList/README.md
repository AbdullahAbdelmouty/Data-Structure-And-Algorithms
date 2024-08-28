# What is Linked List?
is a linear data structure similar to an array,However,Unlike arrays,elements are not stored in a particular memory location or index.
Rather each element is a separate object that contain a pointer or link to the next object in the list.
## An advantage of linked lists
Dynamic Size: Linked lists can easily grow or shrink in size as elements are added or removed, as they do not require contiguous memory allocation.
Insertion and Deletion: Inserting or deleting elements at the beginning or end of a linked list is efficient, as it involves updating the references in the affected nodes.
Flexible Memory Allocation: Linked lists can be used when the memory allocation is not known in advance or needs to be managed dynamically.
Implementation of Other Data Structures: Linked lists serve as a foundation for implementing other complex data structures, such as stacks, queues, and graphs.
## Disadvantages of Linked lists
Sequential Access: Unlike arrays, linked lists do not offer direct random access to elements. Accessing a specific element requires traversing the list from the beginning until the desired node is reached.
Additional Memory Overhead: Linked lists require additional memory to store the references between nodes, which can result in higher memory usage compared to arrays for the same number of elements.
Reverse Traversal: While singly linked lists (with references to the next node only) can be traversed in one direction, reverse traversal or accessing the previous node requires a doubly linked list (with references to both the next and previous nodes).
# Types of Linkd Lists
Singly Linked lists: Each node contain only one pointer to the next node.
Doubly Linked Lists: Each node cotain two pointer on to the next node and other to the previous node.
Circular Linked List: Circular Linked Lists are a variation of a linked list in which the last node point to first node or any other node before it.