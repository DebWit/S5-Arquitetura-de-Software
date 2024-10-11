//____________ 1. declaração
v1 = [];

//____________ 2. acessar uma posição, começando de zero
v1[0] = 3.4;
v1[10] = 2;
v1[2] = "abc"
//como criamos um valor na posição 10, nesse caso, v1 tem comprimento igual a 11
// mas inicialmente, quando criado vazio, por padrao, seu tamnaho é 0
console.log(v1.length) // imprime 11

//____________ 3. inicializando na declaração
v2 = [2, "abc", true]
console.log(v2) // imprime [ 2, 'abc', true ]

//____________ 4. iterando
for (let i = 0; i < v2.length; i++){
console.log(v2[i])
} // imprime cada elemento da lista

//____________ 5. adicionando elementos ao vetor

//a. podemos adicionar acessando a posição que desejamos que ele seja alocado
v1[3] = 7;
console.log(v1) // devolve [ 3.4, <1 empty item>, 'abc', 7, <6 empty items>, 2 ]

//b. podemos adicionar no final do vetor ou da lista
v1.push("batata")
console.log(v1) // devolve [ 3.4, <1 empty item>, 'abc', 7, <6 empty items>, 2, 'batata' ]

//c. podemos adicionar no inicio do vetor ou da lista
v1.unshift("batata")
console.log(v1) // devolve [ 'batata', 3.4, <1 empty item>, 'abc', 7, <6 empty items>, 2, 'batata' ]

//____________ 6. removendo elementos

//a. remover o ultimo elemento
let v = [1, 2, 3];
v.pop(); // Remove o último elemento (3)
console.log(v); // Saída: [1, 2]

//b. remover o primeiro elemento
// v = [1, 2]
v.shift(); // Remove o primeiro elemento (1)
console.log(v); // Saída: [2]

//____________ 7. encontrar a posição de um elemento
let v3 = [10, 20, 30, 20];
console.log(v3.indexOf(20)); // Saída: 1 (índice da primeira ocorrência de 20)

//____________ 8. verificar se o elemento existe
let v4 = [10, 20, 30];
console.log(v4.includes(20)); // Saída: true
console.log(v4.includes(40)); // Saída: false

//____________ 9. Copiar uma parte de um vetor em um outro novo vetor
let vetor = [10, 20, 30, 40, 50];
let vetor2 = vetor.slice(1, 4); // Copia os elementos dos índices 1 a 3
console.log(vetor2); // Saída: [20, 30, 40]

//____________ 10. Combinar dois ou mais vetores
let ve1 = [1, 2, 3];
let ve2 = [4, 5, 6];
let ve3 = ve1.concat(ve2);
console.log(ve3); // Saída: [1, 2, 3, 4, 5, 6]

//____________ 11. Inverter a ordem de um vetor
let v5 = [1, 2, 3];
v5.reverse();
console.log(v5); // Saída: [3, 2, 1]

//____________ 12. Percorrer vetores
let vetor3 = [10, 20, 30];
vetor3.forEach((item)=> {
    console.log(item); // Saída: 10, 20, 30
})

//____________ 13. Criar um novo vetor transformando os elementos
vetor = [1, 2, 3];
let vetorDobro = vetor.map(item => item*2);
console.log(vetorDobro); // Saída: [ 2, 4, 6]