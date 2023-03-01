var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0;
    let maxOutPut = 0;
  
    
    
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i]) {
            count ++;
  
        }
        else {
             maxOutPut = Math.max(maxOutPut,count);
            count = 0;
            
        }

        
    }
    return Math.max(maxOutPut, count);
    
};