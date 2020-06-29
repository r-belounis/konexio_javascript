function isEven (num) {
    if (num % 2 === 0){
       console.log('This is true');
       return true;
    } else {
      console.log('This is false');
      return false;
    }
};

console.log(isEven(5));