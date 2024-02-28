/*4. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido calcule o fatorial do
mesmo e exiba o resultado em uma janela de alerta.*/

function calcularFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calcularFatorial(num - 1);
    }
}


function exibirFatorial() {
    let num = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(num) || num < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        let resultado = calcularFatorial(num);
        alert("O fatorial de " + num + " é: " + resultado);
    }
}

exibirFatorial();