/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newa=new Array();
        let flag=0;
    for (let i=0;i<=nums1.length;i++){
        for (let j=flag;j<=nums2.length;j++){
            if (!nums1[i] && !nums2[j])
                break;
            if (nums1[i]<=nums2[j] || nums2[j] ===undefined){
                newa.push(nums1[i])
                break;
            }
            else
            {
                newa.push(nums2[j]);
                flag++;
                continue;
            }
        }
    }
    
        if ((nums1.length+nums2.length)/2 === Math.floor ((nums1.length+nums2.length)/2))
        return (newa[(nums1.length+nums2.length)/2]+newa[(nums1.length+nums2.length)/2-1])/2;
        else
        return newa[(nums1.length+nums2.length)/2-0.5]
};
