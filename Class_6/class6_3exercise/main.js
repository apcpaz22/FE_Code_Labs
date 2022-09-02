function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log(counter());
  console.log(counter());

 console.log(counter2());
 console.log(counter2());

 // Both counter and counter 2 do the same thing but they are two different instances so they operate independently 
 //like two people are both counting (doing the same thing) but those people can start/stop at different times, count for different durations etc. 

  