// Gera um número aleatório entre 1 e 100
const ranNum = Math.floor(Math.random() * 100) + 1;

// Variáveis de controle
let chances = 10;
let flag = false;

// console.log("chances restantes: " + chances)
// console.log("número gerado:" + ranNum)

function chutar() {
    
    // Entrada do usuário
    const tentativa = parseInt(document.getElementById('number').value);
    // Resultado
    const resultado = document.getElementById('resultado');

    if (tentativa < 1 || tentativa > 100) {
        
        resultado.textContent = 'O número não está entre 1 e 100. Forneça um número válido.'
    }
    else {
        while (chances > 0) {

            // Compara se o resultado é igual, maior ou menor
            if (tentativa === ranNum) {

                resultado.textContent = 'Parabéns! Você acertou o número!';
                flag = true;
                chances = 1;
            } else if (tentativa < ranNum) {

                resultado.textContent = `O seu número é menor. Tente novamente. \nTentativas restantes: ${chances}`;
            } else {

                resultado.textContent = `O seu número é maior. Tente novamente. \nTentativas restantes: ${chances}`;
            }
            chances--;
            // console.log(chances);
        }
        if (flag) {

                resultado.textContent = 'Você já acertou o número. Recarregue a página para recomeçar.'
                return;
            }
        resultado.textContent = `Você perdeu! O número secreto era ${ranNum}.\nRecarregue a página para recomeçar.`
    }
}