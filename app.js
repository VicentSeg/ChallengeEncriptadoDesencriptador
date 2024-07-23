const letras=['a','e','i','o','u'];
const reemplazo=['ai','enter','imes','ober','ufat'];
// e=enter
//i=imes
//a=ai
//o=ober
//u=ufat
function encriptadorDeTexto () {
    let texto = document.getElementById('valorUsuario').value;
    let textoEncriptado ='';
    if (texto.trim() !== '') {
        for (let cadena of texto) {
        let compara = letras.indexOf(cadena);
        if (compara !== -1){
            textoEncriptado += reemplazo[compara];
            } else {
            textoEncriptado += cadena;
            }
        } 
        limpiarCaja();
        document.getElementById('textoMensaje').textContent = textoEncriptado;
    } else {
        condicionInicial();
        }
    return;
}
function desencriptadorDeTexto(){
    var textoOriginal = document.getElementById('valorUsuario').value;
    if (textoOriginal.trim() !== ''){
        for ( let i=0; i<reemplazo.length; i++){
            textoOriginal = textoOriginal.split(reemplazo[i]).join(letras[i]);
            }
            document.getElementById('textoMensaje').textContent = textoOriginal;
            limpiarCaja();
    } else {
        condicionInicial();
        }
    return;
}
function condicionInicial () {
    texto = document.getElementById('valorUsuario').value;
    document.getElementById('segundaPantalla').style.display =`none`;
    document.getElementById('primerPantalla').style.display = `flex`;
    document.getElementById('botoncolor').style.background= `#898989`
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    document.getElementById('primerPantalla').style.display = `none`;
    document.getElementById('segundaPantalla').style.display=`flex`;
    document.getElementById('botoncolor').style.background= `rgb(179, 228, 245)`
}
function botonCopiar(){

    let textoACopiar = document.getElementById('textoMensaje').textContent;
    navigator.clipboard.writeText(textoACopiar);
};
condicionInicial();
