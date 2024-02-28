/*3 - Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é par ou ímpar.*/

let x=prompt("Entre com um número inteiro","");
let aux = x%2;
switch(aux){
    case 0:
        alert("Número par");
        break;
    case 1:
        alert("Número ímpar");
        break;
        default:
        alert("Valor inválido");

}
