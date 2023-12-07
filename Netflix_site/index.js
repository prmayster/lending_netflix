const arr = [1, 4, 6, 7, 8, 9, 11, 23];
for(let i = arr.length; i > 0; i-- ) {
    console.log(arr[i - 1]);
}


let x = 0
while(x <= 5) {
    console.log(x);
    x++;
}


let word = '';
while(word.length < 5) {
   const value =  prompt('Vvedite bukvu')
   if(value != Number) {
    prompt('Vvedite bukvu')
   }
   if(value.length == 0 || value != Number) {
    break;
   }
   word = word + value;
   console.log(word);
}


let 