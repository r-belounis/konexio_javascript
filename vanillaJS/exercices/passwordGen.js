// function passwordGen(num) {
//     var password = '';

//     if(num < 6 || num > 15) {
//         return 'erreur de taille';
//     } else {
//         while (password.length < num) {
//             return password += Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase();
//         }
//     }
// }

function passwordGen(num) {
    var password = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var strLength = str.length;
    for (i = 0; i < num; i++ ) {
       password += str.charAt(Math.floor(Math.random() * strLength));
    }
    return password;
 }

console.log(passwordGen(15));