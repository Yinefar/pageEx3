const texto =  "Visit to  islas Paracas"
const elemento = document.getElementById("title");  
let indice = 0; 
 function mostrarTexto() {
    if (indice < texto.length) {
        elemento.innerHTML += texto.charAt(indice); 
        indice++;
        setTimeout(mostrarTexto, 100); 
    } else {
        setTimeout(() => {
            elemento.innerHTML =""; 
            indice=0; 
            mostrarTexto(); 
        }, 1000); 

    }
 }
 mostrarTexto();
