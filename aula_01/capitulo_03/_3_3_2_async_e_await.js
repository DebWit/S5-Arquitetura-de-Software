// __________________________________________ ASYNC E AWAIT ____________________________________________________

// Vantagens de async/await
//1. Simplicidade: O código fica mais fácil de ler e entender, pois evita o encadeamento de .then() e .catch().
//2. Manejo de Erros: Você pode usar try/catch para capturar erros, assim como em código síncrono.

// -----------------------------------------------------------------------------------------------------------
// Async: A palavra-chave async é usada para declarar uma função assíncrona. Ao fazer isso, você está dizendo que a função pode realizar operações assíncronas e, independentemente de como ela se comporta internamente, ela sempre retornará uma Promise

// Exemplo
async function hello(nome) {
    return "Oi, " + nome;  // Ao usar a palavra async, ele inferiu que essa função devolvera uma promise. Essa promise, se resolvida, terá um valor encapsulado do tipo string que será "Oi, " + nome
}

const boasVindas = hello("João");  // Aqui, boasVindas é uma Promise, que, quando resolvida, contém "João"

// Resolvendo a promise: Usando .then para tratar o valor resolvido da Promise
boasVindas.then((res) => { 
    console.log(res);  // Aqui, res terá o valor "Oi, João"
}); // sendo resolvida, o then manda a promise imprimir seu valor

// -----------------------------------------------------------------------------------------------------------
// Await: Dentro de uma função assíncrona, você pode usar await antes de uma chamada de função que retorna uma Promise. O uso de await faz com que a execução da função assíncrona pause até que a Promise seja resolvida ou rejeitada. Isso permite que você escreva código que parece síncrono, mas que na verdade é assíncrono. 


//De forma mais rabiscada: usada dentro de uma função assíncrona para pausar a execução da função até que uma Promise seja resolvida. Quando você utiliza await, a função "aguarda" a resolução da Promise e, em seguida, continua sua execução.
// exemplo

async function chamadaComAwait() {
    const f1 = await fatorial(5);  // Aguarda a Promise ser resolvida
    console.log(f1);  // Imprime o resultado
}


// ---------------------------------------------------------------------------------------------------------


// Para ilustrar o uso da palavra await, vamos utilizar uma função assíncrona que calcula o fatorial de um número inteiro recebido como parâmetro. Ela toma o cuidado de verifcar se o valor passado é negativo. 

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res);
}

// Como vimos, ela pode ser chamada e ter seu resultado tratado com as funções then e catch.
function chamadaComThenCatch() {
    fatorial(5)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));

    fatorial(-1)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
}
chamadaComThenCatch();

//Usando a palavra await, podemos fazer chamadas mais simples, sem utilizar then e catch.
// No caso, para tratar os dados, vamos usar o try catch :D
async function chamadaComAwait() {
    //note que não há paralelismo implícito
    //somente haverá paralelismo se a função chamada utilizar explicitamente
    try {
        const f1 = await fatorial(5); // Aguarda a Promise ser resolvida
        console.log(f1); // Imprime: 120
    } catch (erro) {
        console.log(erro); // Se rejeitada, imprime a mensagem de erro
    }

    try {
        const f2 = await fatorial(-1); // Aguarda a Promise ser rejeitada
        console.log(f2); // Esta linha não será executada
    } catch (erro) {
        console.log(erro); // Imprime: "Valor não pode ser negativo"
    }
}
chamadaComAwait()

