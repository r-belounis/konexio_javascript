function vowelCount(str) {
    var vowel = 0;
    var string = str.toString();

    for (i=0; i < string.length; i++) {

      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i) == "y") {
        console.log(string[i]);
        vowel += 1;
      }
    }
    return vowel;
}

console.log(vowelCount('konexio'));