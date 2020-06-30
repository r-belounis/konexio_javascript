function powerFuncRec(num, power) {

    if (power === 0) {
        return 1;
    } else {
        return num * powerFuncRec(num, power - 1);
    }
}

console.log(powerFuncRec(-2,2));