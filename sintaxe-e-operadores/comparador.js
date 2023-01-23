function comparador(primeiroValor, segundoValor) {
    if (!primeiroValor || !segundoValor) return "Defina dois valores validos!"
    const fasePrimaria = criarFasePrimaria(primeiroValor, segundoValor);
    const faseSecundaria = criarFaseSecundaria(primeiroValor, segundoValor);
    return `${fasePrimaria} ${faseSecundaria}`
}
   
function criarFasePrimaria(primeiroValor, segundoValor) {
    let fasePrimaria =  `Os números informados são ${primeiroValor} e ${segundoValor}`;
    let simeNao = 'não';

    if (primeiroValor === segundoValor) {
            simeNao = ''
    }
    
    return `${fasePrimaria} ${simeNao} são números iguais.`
}

function criarFaseSecundaria(primeiroValor, segundoValor) {
    const soma = primeiroValor + segundoValor;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `A soma dos valores são ${soma},  que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparador())