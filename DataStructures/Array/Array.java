package Array;

/**
 * Array
 */
public class Array {
    // DataStructure => Array, Algorithm => Sliding Window
    // Alternating Groups I
    // public int numberOfAlternatingGroups(int[] colors) {
    //     int count = 0;
    //     if(colors.length<3)
    //     return 0;
    //     else if(colors.length == 3 && colors[0]!=colors[1] && colors[1]!=colors[2])
    //     return 1;
    //     else{
    //         if(colors[0]!=colors[1] && colors[1]!=colors[2])
    //           count++;
    //         if(colors[0]!=colors[colors.length - 1] && colors[colors.length - 1]!=colors[colors.length - 2])
    //           count++;
    //         if(colors[0]!=colors[1] && colors[0]!=colors[colors.length - 1])
    //           count++;
    //         for(int d=1;d<colors.length;d++){
    //             if (d==colors.length-2){
    //                 break;
    //             }
    //             if(colors[d]!=colors[d+1] && colors[d+1]!=colors[d+2])
    //               count++;

    //         }
    //     }
    //     return count;
    // }

    // Merge Sorted Array
    //     public void merge(int[] nums1, int m, int[] nums2, int n) {
    //         int pointer = 0;
    //         if(m>0){
    //             for(int i=m;i<nums1.length;i++){
    //                 if(n==0)
    //                 break;
    //                 nums1[i]=nums2[pointer++];
    //             }
    //         }
    //         else if(m==0&&n>=1){
    //             for(int rr=0;rr<nums1.length;rr++){
    //                 nums1[rr] = nums2[rr];
    //             }
    //         }
    //         // sort nums
    //         for (int min = 0; min < nums1.length; min++) {
    //             for (int d = min+1; d < nums1.length; d++) {
    //                 if(nums1[min]>nums1[d]){
    //                     int temp = nums1[min];
    //                     nums1[min] = nums1[d];
    //                     nums1[d] = temp;
    //                 }
    //             }
    //         }
            
    //     }
    // }
    
    // public int removeDuplicates(int[] nums) {
    //     int k = 0;
    //     int pointer = nums[0];
    //     int count = 2;
    //     for (int i = 1; i < nums.length; i++) {
    //         if (pointer == nums[i]){
    //             count--;
    //             if(count <=0 ){
    //                 nums[i] = 99;
    //                 k++;
    //             }
    //         }else{
    //             pointer = nums[i];
    //             count=2;
    //         }
    //     }

    //     for (int d = 1; d < nums.length; d++) {
    //         if(nums[d]==99){
    //             for (int j = d+1; j < nums.length; j++) {
    //                 if(nums[j]!=99){
    //                     nums[d] = nums[j];
    //                     nums[j] = 99;
    //                     break;
    //                 }
    //             }
    //         }   
    //     }
    //     for(int test=0;test<nums.length;test++){
    //         System.out.println(nums[test]);
    //     }
    //     return k=nums.length - k;
    // }
    public static void main(String[] args) {
        Array array = new Array();
        int [] nums = {-1,-100,3,99};
        int k = 2;
        array.rotate(nums, k);
    }
    // [1,2,3,4,5,6,7] , k=3 
    // rotate 1 steps to the right: [7,1,2,3,4,5,6]
    // rotate 2 steps to the right: [6,7,1,2,3,4,5]
    // rotate 3 steps to the right: [5,6,7,1,2,3,4]
    // --------------------------------------------
    // Input: nums = [-1,-100,3,99], k = 2 =>nums[i+k] = nums[i] 
    // if i+k> length -1 => i+k = 0;
    // Explanation: [-1,-100,3,99]
    // [99,3,-100,-1]
    // [3,99,-1,-100]
    // rotate 1 steps to the right: [99,-1,-100,3]
    // rotate 2 steps to the right: [3,99,-1,-100]
    
    public void rotate(int[] nums, int k) {
        k = k%nums.length;
        int n = nums.length;
        // for(int i=0;i<k;i++){
        //     int end = nums[nums.length-1];
        //     for(int ele=nums.length-1;ele>0;ele--){
        //         nums[ele] = nums[ele-1];
        //     }
        //     nums[0] = end;
        // }

        // for(int test=0;test<nums.length;test++){
        //     System.out.println(nums[test]);
        // }
        // Reverse the entire array
        reverse(nums, 0, n - 1);

        // Reverse the first k elements
        reverse(nums, 0, k - 1);

        // Reverse the remaining n-k elements
        reverse(nums, k, n - 1);
    }
    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}