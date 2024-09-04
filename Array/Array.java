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
    
    public static void main(String[] args) {
        Array array = new Array();
    }
}