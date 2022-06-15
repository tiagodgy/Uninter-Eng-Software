const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

num1.addEventListener("keyup", calcular);
num2.addEventListener("keyup", calcular);
seletor.addEventListener("change", calcular);

function calcular(){
    const valor1= parseInt(num1.value);
    const valor2= parseInt(num2.value);
    const operacao= seletor.value;
    if (operacao === "Somar"){
        resposta.innerHTML = valor1 + valor2;
    }
    if (operacao === "Subtrair"){
        resposta.innerHTML = valor1 - valor2;
    }
    if (operacao === "Multiplicar"){
        resposta.innerHTML = valor1 * valor2;
    }
    if (operacao === "Dividir"){
        resposta.innerHTML = valor1 / valor2;
    }
    
    
}
