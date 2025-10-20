function maxNum() {
    let numeros = [];
    for (i = 0; i < 3; i++) {
        numeros[i] = parseFloat(prompt("Insira um numero"));
    }
    let max = Math.max(...numeros);
    alert("Maior numero: " + max);
}

function sortNum() {
    let numeros = [];
    for (i = 0; i < 3; i++) {
        numeros[i] = parseFloat(prompt("Insira um numero"));
    }
    alert("Numeros em ordem: " + numeros.sort());
}

function palindrome() {
    const palavra = prompt("Insira uma palavra");
    const revertido = palavra.split("").reverse().join("");

    if (palavra === revertido) {
        alert("É Palindromo");
    } else {
        alert("Não é Palindromo")
    }
}

function triangle() {
    const lado1 = parseFloat(prompt("Digite o lado 1"));
    const lado2 = parseFloat(prompt("Digite o lado 2"));
    const lado3 = parseFloat(prompt("Digite o lado 3"));

    if (!(lado1 + lado2 > lado3) ||
        !(lado1 + lado3 > lado2) ||
        !(lado2 + lado3 > lado1)) {
        alert("Não é um triangulo")
    } else if (lado1 === lado2 && lado1 === lado3) {
        alert("Triangulo Equilatero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Triangulo Isósceles");
    } else {
        alert("Triangulo Escaleno");
    }

}
