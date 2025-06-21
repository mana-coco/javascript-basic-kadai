//変数numにランダムな整数を代入//
let num = Math.floor(Math.random() * 15) + 1;

//変数numの値を出力//
console.log(num);

//変数numの値が3と5の倍数の場合//
if(num % 5 == 0 && num % 3 == 0) {
    console.log('3と5の倍数です');
}

//変数numの値が3の倍数の場合//
else if(num % 3 == 0) {
    console.log('3の倍数です');
}

//変数numの値が5の倍数の場合//
else if(num % 5 == 0) {
    console.log('5の倍数です');
}

//変数numの値が上記以外の場合//
else {
    console.log(num);
}