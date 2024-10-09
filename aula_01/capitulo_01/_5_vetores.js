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
