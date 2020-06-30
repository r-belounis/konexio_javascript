function powerFuncIter(num, power) {
    var total = 1;
    for(i = 0; i < power; i++) {
        total *= num;
    }
    return total;
}

console.log(powerFuncIter(3, 4));