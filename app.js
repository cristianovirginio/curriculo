function mostrarTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'BrazilianPortugueseFemale',{rate: 1.2});
}