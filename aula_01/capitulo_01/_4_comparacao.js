// _______________ Tipos de comparadores

// Javascript possui dois operadores de comparação:
//1. == A comparação leva em conta somente os valores envolvidos. Isso quer dizer que, caso sejam de tipos diferentes, ocorrerão coerções implícitas, as quais nem sempre têm o funcionamento mais intuitivo.

// 2. === Este operador não realiza coerções. O resultado da comparação é true caso os valores e seus respectivos tipos forem iguais. Caso contrário, o resultado é false.

// exemplo
console.log(1 == 1)       // true
console.log(1 == "1")     // true (coerção implícita)
console.log(1 === 1)      // true
console.log(1 === "1")    // false (sem coerção, tipos diferentes)
console.log(true == 1)    // true (coerção implícita, transformou 1 em booleano)
console.log(1 == [1])     // true (array é convertido para número)

// comparações entre null, undefined, e arrays
const j = undefined
console.log(null == null)             // true
console.log(null == undefined)        // true
console.log([] == false)              // true (array vazio é convertido para 0 e depois para booleano, false)
console.log([] == [])                 // false (não é o mesmo objeto)

