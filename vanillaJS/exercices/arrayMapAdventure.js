//Map1.js
var arr1 = [1, 2, 3, 4];
var arr11 = arr1.map(function(num){
    return num += 1;
});
console.log(arr11);


// Map3.js
var arr3 = ['m', 'n', 'o', 'p'];

var arr33 = arr3.map(function(upper) {
    return upper.toUpperCase();
});
console.log(arr33);

//Map4.js
var arr4 = ['1', '2', '3', '4'];

var arr44 = arr4.map(function(num) {
    if (num % 2 === 0){
        console.log('This is true');
        return true;
     } else {
       console.log('This is false');
       return false;
     }
});
// console.log(arr44);

//Map5.js
var arr5 = ['pan', 'top', 'pal', 'tool'];

var arr55 = arr5.map(function(word){
    return word.split('').reverse().join('');
}).join(' ');
console.log(arr55);

//Map6.js
var arr6 = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr66 = arr6.map(function(item){
    return item.firstName + ' ' + item.surname;
});
console.log(arr66);

//map7.js
var arr7 = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

// var arr77 = arr7.map(function(item){
//     var fullname.item = {
//         firstname,
//         surname
//     }
// })