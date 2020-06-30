function letterCapitalize(sentence) {

    var arr = sentence.split(' ').map(function(item) {
        return item = item.substring(0, 1).toUpperCase() + item.substring(1);
    }).join(' ');

    return arr;
}

console.log(letterCapitalize('bring your umbrella'))