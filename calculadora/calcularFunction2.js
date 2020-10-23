console.log("***** Calculadora usando função v2.0 *****");

function soma(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

function multi(num1, num2){
    return num1 * num2;
}

console.log(`A soma dos números ${num1} e ${num2} é ${soma(num1, num2)}`);
console.log(`Agora, subtraindo de ${num1} o valor de ${num2}, temos ${subtracao(num1, num2)}`);
console.log(`Dividindo ${num1} por ${num2}, temos ${(divisao(num1, num2)).toFixed(2)}`);
console.log(`e multiplicando ${num1} por ${num2} temos ${multi(num1, num2)}`);
