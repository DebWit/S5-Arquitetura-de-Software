// ______________ 1. o que é coerção? 
// Algumas linguagens de programação possuem um mecanismo conhecido como coerção, do inglês cast. 
// Quando dois primitivos de tipos diferentes estão envolvidos em uma expressão, um deles pode ter seu tipo alterado1 para que a expressão faça sentido. A coerção se refere a essa troca de tipo. Ela pode ocorrer de maneira explícita ou implícita. Exemplo:

const n1 = 2;
const n2 = '3';

// coerção implícita de n1, concatenação acontece
const n3 = n2 + n1
console.log(n3); // devolve 32

// coerção explicita de n2, soma acontece
const n4 = n1 + Number (n2); 
// explícita porque voce literamente pede explicitamente ao js para transformar n2 em numero
console.log(n4); // devolve 5

// PS: o js tenta inferir quando você colocou ; para separar as instruções, mas é boa prática sempre colocar após o fim da instrução, pois ele pode errar durante suas induções