function firstFactorial(num){
    var factorialCount = num;

    while(num > 1) {
        num--;
        // console.log(factorialCount *= num );
        factorialCount *= num ;
    }
    return factorialCount;
}

console.log(firstFactorial(8));