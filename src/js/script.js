const bntValor = document.querySelectorAll('.button-valor');
const contValor = document.querySelectorAll('.conteudo-valor')

for(let i=0; i < bntValor.length; i++) {
    bntValor[i].onclick = function(){

        for(let j=0; j < bntValor.length; j++){
            bntValor[j].classList.remove("bnt-ativo");
            contValor[j].classList.remove("aba-ativa");
        }

        bntValor[i].classList.add("bnt-ativo");
        contValor[i].classList.add("aba-ativa");
    }
}


const bntTitulo = document.querySelectorAll('.sub-titulo-area');
const contTitulo = document.querySelectorAll('.paragrafo-area');
const imgTitulo = document.querySelectorAll('.img-cont-area');

for(let i=0;i < bntTitulo.length; i++) {
    bntTitulo[i].onclick = function(){

        for(let j=0; j < bntTitulo.length; j++){
            contTitulo[j].classList.add("p-sumir");
        }

        contTitulo[i].classList.remove("p-sumir");
    }
}