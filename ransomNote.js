var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i ++) {
        let r = Array.from(ransomNote[i]);
    
            let matchingIndex = magazine.indexOf(r);
    
            if(matchingIndex == -1) {
                return false
            }
            magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex +1)
         
    }
    return true
    };