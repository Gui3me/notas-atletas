let atletas = [
{
nome: "Cesar Abascal",
notas: [10, 9.34, 8.42, 10, 7.88]
},
{
nome: "Fernando Puntel",
notas:  [8, 10, 10, 7, 9.33]
},
{
nome: "Daiane Jelinsky",
notas: [7, 10, 9.5, 9.5, 8]
},
{
nome: "Bruno Castro",
notas: [10, 10, 10, 9, 9.5]
}
];

function notasOrdenadas(notas) {
  let copia = notas.map(function(nota) {
    return nota
  })

  return copia.sort(function(a, b) {
    return a - b
  })
}

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i]

    let notasOrdenadasFinais = notasOrdenadas(atleta.notas)

    let notasFeitas = notasOrdenadasFinais.slice(1, notasOrdenadasFinais.length - 1)

    let soma = 0
    let cont = 0
    notasFeitas.forEach(function(nota) {
        soma += nota
        cont++
    })

    let media = soma / cont

    console.log("Atleta:", atleta.nome) 
    console.log("Notas obtidas:", atleta.notas.join(","))
    console.log("Média das notas:", media)
    console.log("------------")
}