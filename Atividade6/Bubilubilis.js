const nome = prompt("Digite o seu nome: ");
let n1, n2, n3,n4;

n1 = parseFloat(prompt("Nota 1: "));
n2 = parseFloat(prompt("Nota 2: "));
n3 = parseFloat(prompt("Nota 3: "));
n4 = parseFloat(prompt("Nota 4: "));

let calc = (n1 + n2 + n3 + n4)/4.0;

alert("Nome: " + nome + "\nMedia notas: " + calc);