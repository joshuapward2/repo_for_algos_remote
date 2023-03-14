var removeDuplicates = function(nums) {
    let n = nums.length;
    if(n === 0) {
        return 0;
        }

        let insertIndex = 1;
        for(i = 1; i < n; i++) {
            if(nums[i] != nums[i - 1]) {
               nums[insertIndex] = nums[i]
               insertIndex ++;
            }
        }
        return insertIndex;
    
    
};