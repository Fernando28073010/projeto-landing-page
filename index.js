var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita() {
    Leonardo.style = "display:none"// pegar o elemento Leonardo no estilo e mudar o display para nome(desaparecer)
    Bruna.style = "display:flex"// pegar o elemento Bruna no estilo e mudar para flex(aparecer) no display aparecendo na pagina
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
  
}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style = "display: flex"
    setaEsquerda.style = "display: nome"
}
