// ______________________________ 1.1 Declaração de variáveis e constantes ________________________________

//_______________ 1. declarando constantes


const nome = "Jose";
const idade = 27;
// aspas simples e duplas têm o mesmo efeito
const sexo = "M";
const endereco = 'Rua K, 12'


//______________ 2. declarando variáveis


// a. let: variável local com escopo de bloco
let a = 2;
let b = "abc";

// b. var: seu escopo é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd"


//______________ 3. escopo funcional

// Escopo funcional refere-se ao contexto em que uma variável é declarada e acessível dentro de uma função. Em JavaScript, cada função cria seu próprio escopo, o que significa que as 

// ########## variáveis declaradas dentro de uma função não são acessíveis fora dela. ##########

    // Características do Escopo Funcional
        // Isolamento: Variáveis definidas dentro de uma função são isoladas das variáveis definidas fora dela. Isso ajuda a evitar conflitos entre variáveis com o mesmo nome em diferentes partes do código.
        // Acesso: Dentro de uma função, você pode acessar variáveis definidas na própria função e também variáveis definidas em escopos externos (como escopos globais ou de função pai). No entanto, as variáveis definidas dentro da função não podem ser acessadas fora dela.
        // Closures: Quando uma função é definida dentro de outra função, a função interna tem acesso às variáveis da função externa, mesmo depois que a função externa já foi executada. Isso é chamado de closure.

// Para o JS, caso você tente acessar uma variável definida dentro de uma função, dará erro, porque como ele não tem acesso fora, para ele, aquela variável não existe. É como você ter uma piada interna com um amigo A, mas tentar referencia-la com o amigo B, vai dar erro de execução.

//______________ 4. algumas observações

const nome2 = "Luiz"
console.log(nome)                      // "Luiz"
// nome = "João"                      // Erro, não pode ser reatribuído, porque foi declarado como const

let aa = 2
console.log(a)                        // 2
console.log(typeof(a))                // "number"
aa = "João"                           // `let` permite reatribuição
console.log(a)                        // "João"
console.log(typeof(a))                // "string"

// Aqui, const é usado para declarar uma constante que não pode ser reatribuída. 
// let permite reatribuição, enquanto var pode ser redeclarado e tem escopo funcional.

//______________ 5. Hoisting

    // 1. O que é Hoisting?
    // Hoisting é um comportamento em JavaScript onde as declarações de variáveis e funções são "içadas" (ou seja, movidas) para o topo do seu contexto de execução antes de o código ser executado. Isso significa que você pode usar uma variável ou função antes de sua declaração no código.


    // 2.Hoisting com var
    // Quando você declara uma variável com var, a declaração é içada para o topo do seu contexto (função ou escopo global). No entanto, a inicialização (atribuição de valor) não é içada. Veja um exemplo:

    console.log(aaa); // Saída: undefined, mesmo que eu ainda nem declarei essa variável
    // ele apenas viu que o tipo de aaa é var, e por isso, viu e deu como undefined.
    var aaa = 5;
    console.log(aaa); // Saída: 5

    // 3. Hoisting com let
    // Por outro lado, variáveis declaradas com let têm um comportamento diferente. Embora a declaração ainda seja içada, elas não estão acessíveis até que sejam declaradas, o que resulta em um erro de referência se você tentar acessá-las antes de sua declaração.
    console.log(bbb); // Erro: Cannot access 'bbb' before initialization -> ele consultou que bbb é let, e não deixou fazer esse acesso antes da inicialização, diferentemente de quando usamos o var
    let bbb = 10;
    console.log(bbb); // Não será executado devido ao erro anterior


//______________ 6. Redefinindo variáveis

// 1. var permite redeclarações.
var linguagem = "Javascript"
console.log("Aprendendo " + linguagem) // "Javascript"
var linguagem = "Java"
console.log("Aprendendo " + linguagem) // "Java"



// 2. let não permite fazer redeclarações mas permite alterar a variavel
let linguagem = "Javascript";
console.log("Aprendendo " + linguagem); // Saída: "Aprendendo Javascript"

    // redeclarar vai dar em um erro -> Erro: Identifier 'linguagem' has already been declared
let linguagem = "Java";
console.log("Aprendendo " + linguagem); // Saída: "Aprendendo Javascript"

    // não redeclarar o tipo, mas apenas trocar o valor, ele permite
linguagem = "Java"; // Isso é válido, apenas estamos atribuindo um novo valor
console.log("Aprendendo " + linguagem); // Saída: "Aprendendo Java"



// 3. const não permite fazer redeclarações muito menos alterar o valor da variavel, desde que a variavel nao seja um objeto ou um array, porque, nesse caso, é possivel modificar certas propriedades ou elementos


