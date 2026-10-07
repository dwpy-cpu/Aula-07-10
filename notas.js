const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

async function main() {
  let quantidadeEstudantes = parseInt(await rl.question('Digite a quantidade de estudantes que serão cadastrados: '));
  let quantidadeAprovados = 0;
  let quantidadeRecuperacao = 0;
  let quantidadeReprovados = 0;
    
  if (isNaN(quantidadeEstudantes) || quantidadeEstudantes <= 0) {
    console.log('Quantidade de estudantes inválida. Por favor, insira um número positivo.');
    rl.close();
    return;
  }

  for (let i = 0; i < quantidadeEstudantes; i++) {
    const nome = await rl.question(`\nDigite o nome do estudante ${i + 1}: `);
    
    let nota1;
    while (true) {
        const inputNota1 = await rl.question(`Digite a primeira nota do estudante ${nome} (0 a 10): `);
        nota1 = parseFloat(inputNota1);
        if (!isNaN(nota1) && nota1 >= 0 && nota1 <= 10) {
            break;
        } else {
            console.log('Nota inválida. Por favor, insira uma nota entre 0 e 10.');
        }
    }

    let nota2;
    while (true) {
        const inputNota2 = await rl.question(`Digite a segunda nota do estudante ${nome} (0 a 10): `);
        nota2 = parseFloat(inputNota2);
        if (!isNaN(nota2) && nota2 >= 0 && nota2 <= 10) {
            break;
        } else {
            console.log('Nota inválida. Por favor, insira uma nota entre 0 e 10.');
        }
    }

    const media = (nota1 + nota2) / 2;
    console.log('\n-----------------------------------');
    if (media >= 7) {
      console.log(`Estudante: ${nome}, Média: ${media.toFixed(2)}, Situação: Aprovado`);
      quantidadeAprovados++;
    } else if (media >= 5) {
      console.log(`Estudante: ${nome}, Média: ${media.toFixed(2)}, Situação: Recuperação`);
      quantidadeRecuperacao++;
    } else {
      console.log(`Estudante: ${nome}, Média: ${media.toFixed(2)}, Situação: Reprovado`);
      quantidadeReprovados++;
    }
    console.log('-----------------------------------');
  } 
  console.log(`\n===================================`);
  console.log(`Resultados finais:`);
  console.log(`Quantidade total de estudantes: ${quantidadeEstudantes}`);
  console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);
  console.log(`Quantidade em recuperação: ${quantidadeRecuperacao}`);
  console.log(`Quantidade de reprovados: ${quantidadeReprovados}`);
  console.log(`===================================`);

  rl.close(); 
}
main();
