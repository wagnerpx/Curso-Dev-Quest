let usuario = {
    nome: 'Wagner',
    excluir: function(){
        console.log('usuario: ' + this.nome + ' foi excluido!')
    }
}
usuario.excluir()