function incentivarQuester(mensagem, ...nomesQuesters) {
  nomesQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`));
}

incentivarQuester(
  "Parabens por ter chegado ao modulo de javaScript avançado,",
  "Ismael",
  "Rafael",
  "Samuel"
);
