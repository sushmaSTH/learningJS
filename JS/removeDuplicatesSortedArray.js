/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let obj ={};
    for(let i of nums){
        obj[i]=true;
    }
    let b=Object.keys(obj);
  return b;
};


removeDuplicates([1,1,2]);
