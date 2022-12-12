// const res=new XMLHttpRequest()
// res.onreadystatechange=function(){
//     if(res.readyState==4){
//         let JsonRes=JSON.parse(res.response)
//         console.log(JsonRes)
//     }
// }
// res.open('GET','https://pokeapi.co/api/v2/pokemon/ditto')
// res.send()

// function Cachorro(nome,peso,raca){
//     const dog={}
//     dog.nome=nome
//     dog.peso=peso
//     dog.raca=raca
//     function latir(){
//         return `${dog.nome}: auau`
//     }
//     dog.latir=latir
//     function rosnar(){
//         return `${dog.nome}: grrrrr`
//     }
//     dog.rosnar=rosnar
//     return dog
// }
// let cachorro1=Cachorro('Max',35.2,'Labrador')
// let cachorro2=Cachorro('Mel',18.6,'Vira Latas')
// console.log(cachorro1.latir())
$('body').css('background','grey')
const h3=document.createElement('h3')
const img=document.createElement('img')
$('form').submit((e)=>{//form.addeventListener('submit', (e)=>{ })
    let entrada=$('#poke').val()//let entrada=document.querySelector('#poke').value
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${entrada}`,
        success:function (resposta){
            $('body').append(h3)
            h3.innerText=`Pokemon: ${resposta.name}
            Peso: ${resposta.weight}
            Altura: ${resposta.height}
            Id: ${resposta.id}`
            $('body').append(img)
            img.width=200
            img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${resposta.id}.gif`
        },
        error:function(erro){
            console.log(`erro: ${erro}`)
        }
    })
    e.preventDefault()
})