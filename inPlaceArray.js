var removeElement = function(nums, val) {
    
    let writer = 0;
    let n = nums.length;

    for(let reader = 0; reader < n; reader++) {
        if(nums[reader] != val) {
            nums[writer++] = nums[reader];
        }
    }  
     
    
    return writer;
    
};