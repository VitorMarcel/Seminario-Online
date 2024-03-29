const bntAs6 = document.querySelectorAll('.bnt-s6');
const conteudo = document.querySelectorAll('.aba-cont-graf-s6');

for(let i=0;i < bntAs6.length; i++) {
    bntAs6[i].onclick = function(){

        for(let j=0; j < bntAs6.length; j++){
            bntAs6[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo-cont");
        }

        bntAs6[i].classList.add("ativo");
        conteudo[i].classList.add("ativo-cont");
    }
}

const bntAs4 = document.querySelectorAll('.h2-t1-s4');
const contS4 = document.querySelectorAll('.p1-s4');

for(let i=0;i < bntAs4.length; i++) {
    bntAs4[i].onclick = function(){

        for(let j=0; j < bntAs4.length; j++){
            contS4[j].classList.add("sumir");
        }

        contS4[i].classList.remove("sumir");
    }
}