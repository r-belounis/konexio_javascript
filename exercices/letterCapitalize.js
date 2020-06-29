function letterCapitalize(sentence) {

    var test = sentence.split(' ');

    for (var i = 0; i < test.length; i++) {
        test[i] = test[i].substring(0, 1).toUpperCase() + test[i].substring(1);
    }
    return test.join(' ');
}

console.log(letterCapitalize('what a wonderful world'));