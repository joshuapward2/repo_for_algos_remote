var fizzBuzz = function(n) {
    let answers = [];
    
   

    for(i = 1; i <= n; i++) {
        divisibleBy3 = i % 3 == 0;
        divisibleBy5 = i % 5 == 0;

       

    if(divisibleBy3 && divisibleBy5) {
        answers[i] = "FizzBuzz";
        continue
    }

    else if(divisibleBy3 && !divisibleBy5) {
         answers[i] = "Fizz";
         continue
    }

    else if(divisibleBy5 && !divisibleBy3) {
       answers[i] = "Buzz";
       continue
    }

    else{
         answers[i] =  `${i}`;
    }

    }

    answers.shift();
    return answers
};