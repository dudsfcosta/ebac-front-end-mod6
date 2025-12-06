// Gera um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
let chances = 0;
console.log(chances)
let flag = false;

function chutar() {
    
    // Entrada do usuário
    const tentativa = parseInt(document.getElementById('number').value);
    // Resultado
    const resultado = document.getElementById('resultado');

    if (chances < 10) {
        
        // Compara se o resultado é igual, maior ou menor
        if (tentativa === randomNumber) {

            resultado.textContent = 'Parabéns! Você acertou o número!';
            flag = true;
            chances = 9;
        } else if (tentativa < randomNumber) {

            resultado.textContent = `O seu número é menor. Tente novamente. \n Tentativas restantes: ${10-chances}`;
        } else {

            resultado.textContent = `O seu número é maior. Tente novamente. \n Tentativas restantes: ${10-chances}`;
        }
        chances++;
        console.log(chances);
    } else {
        
        if (flag) {
            
            resultado.textContent = 'Você já acertou o número. Recarregue a página para recomeçar.'
            return;
        }
        resultado.textContent = 'Você não tem mais tentativas. Recarregue a página para recomeçar.'
    }
}