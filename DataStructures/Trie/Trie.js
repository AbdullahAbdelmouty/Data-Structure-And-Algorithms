// 14. Longest Common Prefix
class TrieNode{
    constructor(){
        this.childNode = new Array(26).fill(null);
        this.wordCount = 0;
    }
}
const longestCommonPrefix = function(strs) {
    const root = new TrieNode();
    console.log(root,"root");
    
};
const strs = ["flower","flow","flight"];
longestCommonPrefix(strs);