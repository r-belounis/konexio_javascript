function timeConvert(num) {
    // var time = num;
    num = 126;
    var getSeconds = num % 60;
    console.log(getSeconds);
    var getMinutes = Math.floor(num / 60);
    console.log(getMinutes);
    var getHours = Math.floor(num / 60 / 60);
    console.log(getHours);

    // return getHours + ':' + getMinutes + '+' + getSeconds;

}

// console.log(126);