// Gera um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

// Variáveis de controle
let chances = 10;
console.log(chances)
let flag = false;

function chutar() {
    
    // Entrada do usuário
    const tentativa = parseInt(document.getElementById('number').value);
    // Resultado
    const resultado = document.getElementById('resultado');
    
    if (tentativa < 1 || tentativa > 100) {
        
        resultado.textContent = 'Forneça um número entre 1 e 100.';
        return;
    }

    while(chances >= 0) {
        
        // Compara se o resultado é igual, maior ou menor
        if (tentativa === randomNumber) {

            resultado.textContent = 'Você acertou! Recarregue a página para recomeçar.';
            flag = true;
            chances = -1;
        } else if (tentativa < randomNumber) {

            resultado.textContent = `O número secreto é maior. Tente novamente. \n Tentativas restantes: ${chances-1}`;
            chances--;
        } else {

            resultado.textContent = `O número secreto é menor. Tente novamente. \n Tentativas restantes: ${chances-1}`;
            chances--;
        }
        document.getElementById('number').value = '';
        return;
    }
    if (flag) {

        resultado.textContent = 'Você já acertou o número. Recarregue a página para recomeçar.'
    } else if (!flag && chances === 0) {

        resultado.textContent = 'Você não tem mais tentativas. Recarregue a página para recomeçar.'
    }
}