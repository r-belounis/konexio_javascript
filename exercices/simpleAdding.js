function simpleAdding (num) {
    var result = 0;
    var i = 1;
    while (i <= num) {
        result += i;
        i++;
    }
    return result;
}

console.log(simpleAdding(4));