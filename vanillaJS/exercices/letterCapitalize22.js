function letterCapitalize2(sentence) {
    var letter = sentence.toLowerCase();
    var replace = letter.replace(/(^|\s)[a-z]|[\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F]/g, function(c) {
        return c.toUpperCase();
    });
    return replace;

}

console.log(letterCapitalize2('what a wonderful world'));