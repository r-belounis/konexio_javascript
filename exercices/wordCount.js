function wordCount(str) {
    var string = str.split(' ');
    var count = 0;

    for (i=0; i < string.length; i++) {
        count++;
        // console.log(count);
    }

    return count;
}

console.log(wordCount('Never eat shredded wheat or cake'));