function letterCount(str, search) {
    var string = str;
    var search = new RegExp(search, "gi");
    return string.match(search).length;
}

console.log(letterCount('Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this', 'i'))