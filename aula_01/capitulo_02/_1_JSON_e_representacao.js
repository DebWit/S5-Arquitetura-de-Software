// JSON - Javascript Object Notation

// O JSON (JavaScript Object Notation) é uma forma leve de representar e organizar dados usando pares chave/valor. Ele é amplamente utilizado para transferir informações entre sistemas, como enviar dados entre um servidor e um navegador. O JSON é muito parecido com os objetos JavaScript, mas tem algumas regras próprias, como o uso de aspas duplas ao redor das chaves.

// segundo o professor dessa matéria, Rodrigo Bossini, JSON é um formato para representação de dados independent de tecnologia. Nos dias atuais, é de longe o mais utilizado na troca de mensagens (feitas por requisições HTTP, por exemplo) entre sistemas computacionais. A ideia é representar dados como coleções de pares chave/valor. Veja alguns exemplos de representações de "coisas" do mundo real usando JSON.

// ________________________________ Exemplos de representações em JSON   ______________________________________

// ------------------------------------------------------------------------------------------ 
//Exemplo 1: uma pessoa se chama João e tem 17 anos
let pessoa = {
    nome: "João",
    idade: 17,
}

// o acesso a essas propriedades pode ser feito com
// - ponto
console.log("Me chamo " + pessoa.nome); // Saída: Me chamo João
// - []
console.log("Tenho " + pessoa["idade"] + " anos"); // Saída: Tenho 17 anos

// ------------------------------------------------------------------------------------------ 
// Exemplo 2: Uma pessoa se chama Maria, tem 21 anos e mora na rua B, número 121
let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};

console.log(`Meu nome é ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade} anos, e moro na ${pessoaComEndereco.endereco.logradouro}, número ${pessoaComEndereco.endereco.numero}.`) 
// Saída: Meu nome é Maria, tenho 21 anos, e moro na Rua B, número 121.

// ------------------------------------------------------------------------------------------
// Exemplo 3: Uma concessionária tem CNPJ e endereço. Ela possui alguns carros em estoque. Cada um deles tem marca, modelo e ana de fabricação.

let concessionaria = {
    cnpj: "00011122210001-45",     // item do objeto concessionaria
    endereco: {                   // item do objeto concessionaria
        logradouro: "Rua A",      // item de endereco que pertende a concessionaria
        numero: 10,               // item de endereco que pertende a concessionaria
        bairro: "Vila J",        // item de endereco que pertende a concessionaria
    },
    veiculos: [ // item de concessionaria, que é uma lista
        {   // carro 1 da lista de veiculos do objeto concessionaria
            marca: "Ford",
            modelo: "Ecosport",
            ano: 2018
        },
        {   // carro 2 da lista de veiculos do objeto concessionaria
            marca: "Chevrolet",
            modelo: "Onix",
            ano: 2020
        },
        {   // carro 3 da lista de veiculos do objeto concessionaria
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};

// ---------- procura um carro de um modelo especifico -------------
for (const veiculos of concessionaria.veiculos){
       if(veiculos.modelo === "Onix")
         console.log(veiculos);
} // Saída: { marca: 'Chevrolet', modelo: 'Onix', ano: 2020 }


// ------------------ Função que encontra veículos de uma marca específica ------------
const encontraVeiculos = (marca) => {
    // Usamos o método 'filter' para filtrar os carros com base na marca
    return concessionaria.veiculos.filter(veiculos => veiculos.marca === marca);
};
  
// Testando a função
console.log(encontraVeiculos("Volkswagen")); // Devolve um array com os veículos da marca 'Toyota'
console.log(encontraVeiculos("Ford"));     // Devolve um array com os veículos da marca 'VW'