function colocarAguaPraFerver(){
    console.log('colocar água pra ferver');
    setTimeout(() => {
        console.log('águe ferveu');
        
        passarOCafe()
    }, 2000);
}

function prepararPraPassarOCafe(){
    console.log('pregar o pó do café');
    console.log('pegar o filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xícara');
}

function passarOCafe(){
    console.log('passando o café');   
}

colocarAguaPraFerver()
prepararPraPassarOCafe()