// Report Spam Message
// const reportSpam = function(message,bannedWord){
//     const bannedSet = new Set(bannedWord);
//     let count = 0;
//     for(const word of message){
//         if(bannedSet.has(word)){
//             count++;
//             if(count===2){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// const message = ["hello","programming","fun"];
// const bannedWords = ["world","programming","leetcode"];

// console.log(reportSpam(message,bannedWords));

// Longest Substring Without Repeating Characters
// const lengthOfLongestSubstring = function(s) {
//     let right = 0;
//     let left = 0;
//     let maxLength = 0;
//     let set = new Set();
//     while(right<s.length) {
//         if(set.has(s[right])){
//             set.delete(s[left]);
//             left++;
//         }else{
//             set.add(s[right]);
//             maxLength = Math.max(maxLength, right - left + 1);
//             right++;

//         }
//     }   
//     return maxLength;
// };
// const str = "abcabcbb";
// console.log(lengthOfLongestSubstring(str));
