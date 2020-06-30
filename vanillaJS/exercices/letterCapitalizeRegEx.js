function letterCapitalizeRegex(str) {
    var letter = str.toLowerCase();
    var RegEx = letter.replace(/(^|\s)[a-z]|[\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F]/g, function(c) {
        return c.toUpperCase();
    });
    return RegEx;

}

console.log(letterCapitalizeRegex('what a wonderful world'));