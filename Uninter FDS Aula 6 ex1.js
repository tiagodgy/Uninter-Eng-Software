let botao = document.querySelector("#p2");

botao.style.backgroundColor="blue";
botao.addEventListener("mouseout",setblue);
botao.addEventListener("mouseover",setgreen);
botao.addEventListener("click",crash);
let quebrado = false;


function setblue(){
    if (quebrado == false){
        botao.style.backgroundColor="blue";
    }
}

function setgreen(){
    if (quebrado == false){
        botao.style.backgroundColor="green";
    }
    
}
function crash(){
    botao.style.backgroundColor="red";
    window.alert("Quebrei!");  
    quebrado = true;
}
