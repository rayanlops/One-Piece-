const botoes = document.querySelectorAll('.botao')
const person = document.querySelectorAll('.personagem')
    
botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {
       const botaoselecionado = document.querySelector('.botao.selecionado')
       botaoselecionado.classList.remove('selecionado')
       botao.classList.add('selecionado')
        
       const imagemselecionada = document.querySelector('.personagem.selecionado')
       imagemselecionada.classList.remove('selecionado')
           
       person[indice].classList.add('selecionado')
       
    })
})

