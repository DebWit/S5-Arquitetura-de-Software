// 3.2 O Inferno de Callbacks
// Antes de Promises e async/await existirem, a forma mais comum de lidar com tarefas assíncronas era através de callbacks. Um callback é uma função que é passada como argumento para outra função e é executada quando a primeira função termina sua tarefa. O problema é que, ao lidar com muitas operações assíncronas, o código pode ficar difícil de ler e manter. Esse problema é conhecido como o "inferno dos callbacks" ou "callback hell".

// exemplo 
// Importa o módulo 'fs' (File System) do Node.js para permitir a leitura e escrita de arquivos.
const fs = require('fs');

// Declara a função 'abrirArquivo', que recebe o nome de um arquivo como argumento.
const abrirArquivo = function(nomeArquivo) {
  // Exibe uma mensagem no console indicando que a função começou.
  console.log('Começou a função abrirArquivo..');
  // Função 'exibirConteudo' será chamada após a leitura do arquivo.
  // Ela recebe dois parâmetros: 'erro' (caso ocorra um erro) e 'conteudo' (conteúdo do arquivo).
  const exibirConteudo = function(erro, conteudo) {
    // Se houver erro na leitura do arquivo, exibe o erro no console.
    if (erro) {
      console.log(`Erro: ${erro}`);
    } else {
      // Se não houver erro, exibe o conteúdo do arquivo no console.
      console.log(`Conteúdo: ${conteudo.toString()}`);
      // Converte o conteúdo para número (o operador + é uma forma rápida de converter uma string em um número em JavaScript. Ele força a conversão do valor da string para um tipo numérico) e multiplica por 2.
      const dobro = +conteudo.toString() * 2;
      // Função 'finalizar' será chamada após tentar salvar o arquivo com o dobro.
      // Ela recebe um parâmetro 'erro' para verificar se a operação de escrita foi bem-sucedida.
      const finalizar = function(erro) {
        // Se não houver erro na gravação do arquivo, exibe uma mensagem de sucesso.
        if (!erro) console.log('Salvou o dobro com sucesso');
        // Se houver erro, exibe uma mensagem de falha.
        else console.log('Coisas ruins aconteceram..');
      };
      
      // Usa 'fs.writeFile' para criar ou sobrescrever o arquivo '_3_2_2_dobro.txt' com o valor calculado (dobro), no local indicado.
      fs.writeFile('C:/Users/debor/OneDrive/Documentos/Faculdade/IMT/Semestre 5/arquitetura_de_software/de_novo/aula_01/capitulo_03/_3_2_2_dobro.txt', dobro.toString(), finalizar);
    }
  };
  
  // Lê o arquivo cujo nome foi passado como argumento para 'abrirArquivo'.
  // Quando a leitura terminar, chama a função 'exibirConteudo'.
  fs.readFile(nomeArquivo, exibirConteudo);
  
  // Exibe uma mensagem no console indicando que a função terminou.
  // No entanto, isso acontece antes da leitura do arquivo ser concluída, pois é uma operação assíncrona.
  console.log('Terminou a função abrirArquivo...');
};

// Chama a função 'abrirArquivo', indicando o local onde ele está, com o nome do arquivo '_3_2_1_arquivo.txt'.
abrirArquivo('C:/Users/debor/OneDrive/Documentos/Faculdade/IMT/Semestre 5/arquitetura_de_software/de_novo/aula_01/capitulo_03/_3_2_1_arquivo.txt');

// Saídas:
// Começou a função abrirArquivo..
// Terminou a função abrirArquivo...
// Conteúdo: 2
// Salvou o dobro com sucesso


// Nesse exemplo, há um encadeamento de callbacks, cada um dependente da conclusão do anterior. Isso pode rapidamente se tornar complexo quando mais operações são adicionadas. Por isso, as Promises foram introduzidas para melhorar a legibilidade do código.