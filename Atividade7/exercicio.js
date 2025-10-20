function jokenpo(jogada){
    const maos = ["pedra", "papel", "tesoura"];
    const pc = maos[Math.floor(Math.random() * 3)];
    let resultado;

    if(!(jogada != pc)){
        resultado = "Empate";
    } else if(
        (jogada === "pedra" && pc === "tesoura") ||
        (jogada ==="tesoura" && pc ==="papel") ||
        (jogada ==="papel" && pc ==="pedra")){
            resultado = "O jogador venceu";
        } else {
            resultado = "O pc venceu";
        }
    alert("O jogador escolheu " + jogada + "\nO pc escolheu " + pc + "\n\n" + resultado);
}