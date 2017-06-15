/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length===0)
    return 0;
    let max=0;
    let flag=new Array();
    for (let i=0;i<s.length;i++){
        flag[i]=[];
        for (let j=i;j<s.length;j++){
            if (contains(flag[i],s[j]) ){
                flag[i].push(s[j])
            if (flag[i].length>max)
                max=flag[i].length;
            }
            else{
            if (flag[i].length>max)
                max=flag[i].length;
                break;
            }
        }
    }
    return max;
};
function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return false;
    }
  }
  return true;
}
