// setTimeout(() => {
//     alert('Impressão do seTimeout no tempo estimado!')
// }, 3000);

// setInterval(() => {
//     console.log('Imprimindo a cada 2s');
// }, 2000);

const idDoIntervalo = setInterval(() => {
    console.log('execultando a cada 2 s');
    
}, 2000);
console.log(idDoIntervalo);
clearInterval(idDoIntervalo);
