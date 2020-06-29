function exOh(str) {

    str = str.toLowerCase(); // juste pour s'assurer qu'ils soient bien en minuscule on sait jamais
    var arr = str.split('');

    var stringX = arr.reduce( function( acc, val ) {
        return acc + (val === 'x');
      }, 0);

    console.log(stringX);

    var stringO = arr.reduce( function( acc, val ) {
        return acc + (val === 'o');
      }, 0);

    console.log(stringO);

    if( stringX === stringO ) {
        return true;
    } else {
        return false
    }

}

console.log(exOh('xooxxo'));