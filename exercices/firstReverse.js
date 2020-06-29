function firstReverse(str) {
   return (str === "") ? "" : firstReverse(str.substr(1)) + str.charAt(0);
}

console.log(firstReverse('hello'));