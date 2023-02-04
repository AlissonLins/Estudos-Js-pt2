// Primeira solução

/*function palindromoVerify(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}
console.log(palindromoVerify(ama))*/

// Segunda solução

function verificationPalindromo(string) {
    if (!string) return 'sting inexistente';
    
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verificationPalindromo('gato'))