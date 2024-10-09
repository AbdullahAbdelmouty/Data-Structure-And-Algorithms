# what is Sorting Algorithm:
is a method or a process for arranging elements in array or list in a particular order(ascending or descending). Sorting algorithm is a fundamental operation in computer science because it optimizes the efficiency of other algorithms that require sorted data (like search algorithm).
There are various sorting algorithm, each with its own advantages, disadvantages and use cases.
# Common sorting algorithms:
1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort
6. Heap Sort

2- Selection Sort:
    //selection sort for arr
    for (let min = 0; min < arr.length; min++) {
        for (let index = min+1; index < arr.length; index++) {
            if(arr[min]>arr[index]){
                let temp = arr[index];
                arr[index] = arr[min];
                arr[min] = temp;

            }
        }
    }