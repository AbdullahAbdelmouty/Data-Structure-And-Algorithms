// DataStructure => Array, Algorithm => Two Pointers 
// 1. Remove Duplicates from Sorted Array
// 1- replace all duplicated elements with "_"
// let nums = [0,0,1,1,1,2,2,3,3,4]; => [0,_,1,_,_,2,_,3,_,4]
// let nums = [0,0,1,1,1,2,2,3,3,4];
// let removeDuplicates = (nums)=>{
//     let k = 0;
//     let pointer = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (pointer === nums[i]){
//             nums[i] = "_";
//         }else{
//             pointer = nums[i];
//             k++
//         }
//     }
//     k++
//     let pointer2 = 1;
//     for (let d = 1; d < nums.length; d++) {
//         if(nums[d]==="_"){
//             for (let j = d+1; j < nums.length; j++) {
//                 if(nums[j]!=="_"){
//                     nums[d] = nums[j];
//                     nums[j] = "_";
//                     break
//                 }
//             }
//         }   
//     }
//     return k
    
// }
    
// console.log(removeDuplicates(nums));
//.............................................................
// 2. Remove Element [3,2,2,3] 
// brainstorming:
// for each to elements there are four status
// startPointer == val, endPointer != val => swap, startPointer++ , endPointer--
// startPointer != val ,endPointer == val => not swap , startPointer++, endPointer--
// startPointer == val ,endPointer == val => not swap ,startPointer same, endPointer--
// startPointer != val ,endPointer != val => not swap ,startPointer ++ , same
// will stop the loop when startPointer>endPointer
// count removed elements and in the end assign k = nums length - count
// let nums = [0,1,2,2,3,0,4,2]; 
// let val = 2;
// let removeElement = (nums,val)=>{
//     let startPointer = 0;
//     let endPointer = nums.length - 1;
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if(startPointer>endPointer){
//             break;
//         }
//         if(nums[startPointer] === val && nums[endPointer] !== val){
//             let temp = nums[endPointer];
//             nums[endPointer] = "_";
//             nums[startPointer] = temp;
//             startPointer++;
//             endPointer--;
//             k++
//         }
//         else if(nums[startPointer] !== val && nums[endPointer] === val){
//             nums[endPointer] = "_";
//             k++;
//             startPointer++;
//             endPointer--;
//         }
//         else if(nums[startPointer] === val && nums[endPointer] === val){
//             nums[endPointer] = "_";
//             k++;
//             endPointer--;
//         }
//         else{
//             startPointer++;
//         }
        
//     }
    
//     k = nums.length - k;
//     return k;
// }

// ---------------------------------------------------------------
// DataStructure => Array, Algorithm => Two Pointers, Sorting
// 1. Minimum Average of Smallest and Largest Elements
// brainstorming:
// first sort the nums array
// compute the average of first start and end elements of nums 
// and add the average to the average array
// remove min and max for each cycle
// when nums array become empty return the smallest element of average array
// let nums = [7,8,3,4,15,13,4,1];

// let minimumAverage = (nums)=>{
//     let average = [];
//     // sort nums
//     for (let min = 0; min < nums.length; min++) {
//         for (let d = min+1; d < nums.length; d++) {
//             if(nums[min]>nums[d]){
//                 let temp = nums[min];
//                 nums[min] = nums[d];
//                 nums[d] = temp;
//             }
//         }
        
//     }
//     for (let j = 0; j < nums.length / 2; j++) {
//         average[j] = (nums[j] + nums[nums.length - j - 1]) / 2;
//     }
//     // find minimum value of average
//     let minimum = average[0];
//     for (let d = 1; d < average.length; d++) {
//         if(minimum>average[d]){
//             minimum = average[d]
//         }
//     } 
//     return minimum
    
// }

// console.log(minimumAverage(nums));

// Contains Duplicate II
