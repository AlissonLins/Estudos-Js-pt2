/* var preco = 2;
var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;*/

/*function soma(a, b){
    return a + b; //8
}
soma(3, 5);*/


function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i <array.legth; i++) {
        if (array[i] % 2 === 0) {
        }
        else {
            console.log(`$array[i] não é par!`);
        }
    }
    console.log('Os números pares são', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];