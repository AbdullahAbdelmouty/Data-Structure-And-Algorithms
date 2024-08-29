// Remove Duplicates from Sorted Array
// 1- replace all duplicated elements with "_"
// let nums = [0,0,1,1,1,2,2,3,3,4]; => [0,_,1,_,_,2,_,3,_,4]
let nums = [0,0,1,1,1,2,2,3,3,4];
let removeDuplicates = (nums)=>{
    let k = 0;
    let pointer = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (pointer === nums[i]){
            nums[i] = "_";
        }else{
            pointer = nums[i];
        }
    }
    
    console.log(nums);
    
}
    
removeDuplicates(nums)

