// Remove Duplicates from Sorted Array
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

// 27. Remove Element [3,2,2,3] 
// for each to elements there are four status
// first == val, end != val => swap, first++ , end--
// first != val ,end == val => not swap , first++, end--
// first == val ,end == val => not swap ,first same, end--
// first != val ,end != val => not swap ,first ++ , same
// will stop the loop when start>end

let nums = [0,1,2,2,3,0,4,2]; 
let val = 2;
let removeElement = (nums,val)=>{
    let startPointer = 0;
    let endPointer = nums.length - 1;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(startPointer>endPointer){
            break;
        }
        if(nums[startPointer] === val && nums[endPointer] !== val){
            let temp = nums[endPointer];
            nums[endPointer] = "_";
            nums[startPointer] = temp;
            startPointer++;
            endPointer--;
            k++
        }
        else if(nums[startPointer] !== val && nums[endPointer] === val){
            nums[endPointer] = "_";
            k++;
            startPointer++;
            endPointer--;
        }
        else if(nums[startPointer] === val && nums[endPointer] === val){
            nums[endPointer] = "_";
            k++;
            endPointer--;
        }
        else{
            startPointer++;
        }
        
    }
    
    k = nums.length - k;
    return k;
    
}

