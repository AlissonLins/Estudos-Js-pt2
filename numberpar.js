function paresSubstitucion(numbers) {
    if(!numbers) return -1;
    if(!numbers.length) return -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            console.log('Seu valor já é zero!');
        } else if (numbers[i] % 2 === 0){
            console.log(`Substituindo ${numbers[i]} por 0...`);
            numbers[i] = 0;
        } 
    }

    return numbers;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(numberpar([]));