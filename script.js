// let nome = prompt("Qual é o seu nome?");

// let idade = prompt("Quantos anos você tem?");

// alert (`Olá, ${nome}! Você tem ${idade} anos!`);

// confirm()

// let resposta = confirm("Você tem certeza que deseja sair?")
// console.log(resposta)


// const nomeDoUsuario = prompt("Qual é seu nome?")
// const profissaoDoUsuario = prompt("Com o quê você trabalha?")

// alert(`Olá, ${nomeDoUsuario} que interessante saber que você trabalha com${profissaoDoUsuario}`)

// let idade = 16

// if (idade >= 18) {
//     console.log("Você é maior de idade");
// }else{
//     console.log("Você é menor de idade!")
// }

// let nota = 90;

// if (nota >= 90){
//     console.log("Aprovado com excelência")
// } else if (nota >= 60){
//     console.log("Você foi aprovado")
// } else{
//     console.log("Você foi reprovado")
// }

// let idade = 20;
// let possuiCarteira = true;

// if(idade => 18){
//     if (possuiCarteira){
//         console.log("pode dirigir.");
//     }else {
//         console.log("precisa tirar a carteira.");
//     }
// }else{
//     console.log("Menor de idade!");
// }
// let idade = 20;
// let possuiCarteira = true;

// if(idade => 18 && possuiCarteira){
    
//         console.log("pode dirigir.");
//     }else if (idade >=18){
//         console.log("Precisa tirar carteira")
//     }
//     else{
//         console.log("Menor de idade")
//     }

// let nome = prompt("Qual é o seu nome?")
// let idade = Number(prompt("Qual é a sua idade?"));

// if (idade >= 18){
//     alert(`Olá ${nome}, você tem ${idade} anos, você já está apto para dirigir `)
// }else {
//     alert(`Olá ${nome}, Você ainda tem ${idade} anos, infelizmente não é o suficiente para dirigir`)
// }
    
// let temperatura = 25

// if (temperatura > 35){
//     console.log("Calor Extremo")
// }else if (temperatura <= 35 && temperatura >= 25){
//     console.log("Clima Quente")
// }else if (temperatura <=24 && temperatura >=15) {
//     console.log("Clima agradável")
// }else if (temperatura <=14 && temperatura >=5) {
//     console.log("Clima frio")
// }else {
//     console.log("Frio intenso")
// }

// let temperatura = Number(prompt("Qual a temperatura?"))

// if (temperatura > 35){
//     alert("Calor Extremo")
// }else if (temperatura <= 35 && temperatura >= 25){
//     alert("Clima quente")
// }else if (temperatura <= 24 && temperatura >= 15){
//     alert("Clima agradável")
// }else if (temperatura <= 14 && temperatura >= 5){
//     alert("Clima frio")
// }else{
//     alert("Frio intenso")
// }

// let numero = Number(prompt("Digite um número"))

// if (numero % 2 === 0){
//     alert("Seu número é par")
// } else {
//     alert("seu número é impar")
// }

// let cor = "azul";

// switch (cor){
//     case "vermelho":
//         console.log('Pare!');
//         break;
//      case "amarelo":
//         console.log("Atenção");
//         break;
//     case "verde":
//         console.log('Pode passar');
//         break;
//      default:
//         console.log('Cor inválida');
//         break

// }


// let cor = prompt("Digite uma cor do semáforo(vermelho, amarelo ou verde):").toLowerCase();

// switch (cor){
//     case "vermelho":
//         alert('Pare!');
//         break;
//      case "amarelo":
//         alert("Atenção");
//         break;
//     case "verde":
//         alert('Pode passar');
//         break;
//      default:
//         alert('Cor inválida');
//         break

// }

// let number = prompt("Escolha uma opção(1 - saque, 2 - transferência, 3 - extrato, 4 -saldo):").toLowerCase();

// switch (number){
//     case '1':
//         alert("Saque Efetuado");
//     case '2':
//         alert("Transferência feita");
//     case '3':
//         alert("Seu extrato é de");
//     case '4':
//         alert("Seu saldo atual é de 00,00");
//     default:
//         alert("Opção inválida");    
// }

let operação = prompt("Escolha uma operação: +, -, *, ou /");
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

switch (operação){
    case '+':
        resultado = n1 + n2
        break
    case '-':
        resultado = n1 - n2
        break
    case '*':
         resultado = n1 * n2
         break
    case '/':
         resultado = n2 !== 0 ? n1/n2 : "Erro de divisão por zero!";
         break
         default:
            resultado = "Operação inválida!";
            break
}
alert("Resultado: " + resultado);