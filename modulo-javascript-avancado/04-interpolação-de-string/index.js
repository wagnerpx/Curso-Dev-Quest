// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//   return (
//     "Primeiro Nome: " +
//     primeiroNome +
//     " Ultimo Nome: " +
//     ultimoNome +
//     ". Idade: " +
//     idade
//   );
// };
// console.log(imprimirInformacoesPessoa("Wagner", "Alexandre", 43));

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return `Primeiro Nome: ${primeiroNome}, Ultimo Nome: ${ultimoNome}, Idade: ${idade}`;
};
// console.log(imprimirInformacoesPessoa("Wagner", "Alexandre", 43));
console.log(
  `${imprimirInformacoesPessoa("wagner", "Alexandre", 43)}, ele é um DevQuester`
);
