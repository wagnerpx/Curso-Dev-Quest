function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario');

    let textoDigitado = inputComentario[0].Value;

    let novosComentarios = document.getElementById('novos-comentarios');

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}