

// Menu Principal

let option = Number(prompt(`Selecione uma opção:
1 - Mensagem 'Hello Wold'.
2 - Imprimir soma de duas variáveis
3 - Descobrir se uma variável é um número
4 - Descobrir se uma variável é uma string
5 - Descobrir se uma variável é um booleano
6 - Imprimir subtração de duas variáveis
7 - Imprimir multiplicação de duas variáveis
8 - Imprimir divisão de duas variáveis
9 - Descobrir se um número é par
10 - Descobrir se um número é ímpar`));


//Programa

let num1
let num2

switch(option) {
  case 1:
    alert("Hello World!");
    break

  case 2:
    num1 = Number(prompt("Digite o primeiro número: "));
    num2 = Number(prompt("Digite o segundo número: "));

    sum = num1 + num2;

    alert(`A soma entre os números é ${sum}.`);

    break

  case 3:
    let possibleNumber = prompt("Digite alguma coisa: ");
    if(isNaN(possibleNumber)) {
      alert("Não é um número!");
    } else {
      alert("É um número!");
    }

    break

  case 4:
    let possibleString = prompt("Digite alguma coisa: ");
    
    let firstChar = possibleString[0];
    let lastChar = possibleString[possibleString.length - 1];
    
    if(firstChar == "'" && lastChar == "'") {
      alert("É uma string!");
    } if(firstChar == '"' && lastChar == '"') {
      alert("É uma string!");
    } if(firstChar == '`' && lastChar == '`') {
      alert("É uma string!");
    } else {
      alert("Não é uma string");
    }  

    break

    case 5:
    let possibleBoolean = prompt("Digite alguma coisa: ");
    
    
    if(possibleBoolean == 'true' || possibleBoolean == 'false') {
      alert("É uma booleano!");
      possibleBoolean = Boolean(possibleBoolean)
      
    } else {
      alert("Não é um booleano");
      
    }  

    break

    case 6:
    num1 = Number(prompt("Digite o primeiro número: "));
    num2 = Number(prompt("Digite o segundo número: "));

    sub = (num1 - num2).toFixed(2);

    alert(`A subtração entre os números é ${sub}.`);
    
    break

    case 7:
    num1 = Number(prompt("Digite o primeiro número: "));
    num2 = Number(prompt("Digite o segundo número: "));

    multp = (num1 * num2).toFixed(2);

    alert(`A multiplicação entre os números é ${multp}.`);
    
    break

    case 8:
    num1 = Number(prompt("Digite o primeiro número: "));
    num2 = Number(prompt("Digite o segundo número: "));

    div = (num1 / num2).toFixed(2);

    alert(`A divisão entre os números é ${div}.`);
    
    break

    case 9:
    let possibleNumberEven = prompt("Digite um número: ");
    if(isNaN(possibleNumberEven)) {
      alert("Digite um número real!");
    } else {
      if(possibleNumberEven % 2 == 0) {
        alert("É um número par!");
      } else {
        alert("Não é um número par!");
      }
    }

    break

    case 10:
    let possibleNumberOdd = prompt("Digite um número: ");
    if(isNaN(possibleNumberOdd)) {
      alert("Digite um número real!");
    } else {
      if(possibleNumberOdd % 2 != 0) {
        alert("É um número ímpar!");
      } else {
        alert("Não é um número ímpar!");
      }
    }

    break

  default:
    alert('Tchau mundo!');
}



