// Merge two array
// search about median
const findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let size = nums1.length + nums2.length;
    for (let n1 = 0; n1 < nums1.length; n1++) {
        arr.push(nums1[n1])
    }
    for (let n2 = 0; n2 < nums2.length; n2++) {
        arr.push(nums2[n2])
    }   
    for (let ar = 0; ar < size; ar++) {
        
    }
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
    
    // find median
    const start = 0;
    const end = arr.length;
    let mid = 0;
    if(arr.length%2===0){
        mid = (arr[(end/2)] + arr[(end/2 - 1)])/2;
        return mid;
        
    }else{
        mid = Math.floor((start + end)/2);;
        return arr[mid]
    }

};

let nums1 = [1,3];
let nums2 = [2];

