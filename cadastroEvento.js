let dataAtual = new Date () //data atual
let dataEvento = new Date ("jan 1 2022") // data do evento
let nParticipantes = ['José',18,'Maria',27,'Rodolfo',32,'Angelina',44,'Jorge',37] //lista dos participantes

//compara data atual e data do evento
if (dataEvento > dataAtual) {
    console.log("Pode Cadastrar Evento")
}else{
    console.log("Data Inválida.Cadastro não permitido")
}
//para cadastrar até 100 participantes
let qtdDeParticipantes = 100
cont = 0;
while (cont <= qtdDeParticipantes ) {
    nParticipantes.push('Participante n'+ cont)
    cont++
}
console.log(nParticipantes)

// Para verificação de idade
let idade = 18
    if(idade >= 18){
        console.log("Permitido o Cadastro para o evento")
    }else{
        console.log("Não Permitido o Cadastro")
    }
