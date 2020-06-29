function squareRoot(num) {
    for (var i = 0; i * i <= num; i++) {
        if (i * i === num)
            return i;
   }
   return 0;
}

console.log(squareRoot(12));