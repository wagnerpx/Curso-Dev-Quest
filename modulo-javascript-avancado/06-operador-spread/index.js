const veteranos = ['Pedro', 'Paulo', 'Caninde']
const calouros = ['Manoel', 'Jocasta', 'Manuella']

//CONCATENAR 2 OU MAIS ARREIS

//console.log(...veteranos, ...calouros);

const pessoas = {nome: 'Roberto', idade: 41, cidade: 'Garulhos'}

const objetoClonado = {...pessoas, ...veteranos}
console.log(objetoClonado);
console.log(pessoas);