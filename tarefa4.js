
// Exercício 4
// Utilize o método .map( ) para transformar cada array 
// que você criou num objeto da classe Map( ), 
// de modo que as respectivas chaves e valores sejam os que se seguem:
// Cliente: cpf -> [ nome, datanascimento ]
// Produto: codigo -> [ descricao, qtdestoque ]
// Venda: codigo -> [ datahora, cliente, produto ]
// Map(5) {
//   'Harry Potter' => [ 7, 'Aprovado' ],
//   'Hermione Granger' => [ 10, 'Aprovado' ],
//   'Ronald Weasley' => [ 8, 'Aprovado' ],
//   'Draco Malfoy' => [ 6.3, 'Reprovado' ],
//   'Luna Lovegood' => [ 10, 'Aprovado' ]
// }

class Cliente {
    constructor(cpf, nome, datanascimento) {
        this.cpf = cpf
        this.nome = nome
        this.datanascimento = datanascimento
    }

}
class Produto {
    constructor(codigo, descricao, qtdestoque) {
        this.codigo = codigo
        this.descricao = descricao
        this.qtdestoque = qtdestoque
    }

}
class Venda {
    constructor(codigo, datahora, cliente, produto) {
        this.codigo = codigo
        this.datahora = datahora
        this.cliente = cliente
        this.produto = produto
    }

}

const cliente1 = new Cliente('12345678901', 'João', '1990-01-01');
const cliente2 = new Cliente('98765432101', 'Maria', '1995-05-10');
const cliente3 = new Cliente('55555555501', 'Pedro', '1985-12-20');

const produto1 = new Produto('P001', 'Produto 1', 10);
const produto2 = new Produto('P002', 'Produto 2', 5);
const produto3 = new Produto('P003', 'Produto 3', 8);
const produto4 = new Produto('P004', 'Produto 4', 15);
const produto5 = new Produto('P005', 'Produto 5', 20);
const produto6 = new Produto('P006', 'Produto 6', 3);
const produto7 = new Produto('P007', 'Produto 7', 12);
const produto8 = new Produto('P008', 'Produto 8', 7);

const venda1 = new Venda('V001', '2023-06-27 10:00', cliente1, produto1);
const venda2 = new Venda('V002', '2023-06-28 15:30', cliente2, produto3);
const venda3 = new Venda('V003', '2023-06-29 09:45', cliente1, produto6);
const venda4 = new Venda('V004', '2023-06-29 14:20', cliente3, produto2);
const venda5 = new Venda('V005', '2023-06-30 11:10', cliente2, produto5);

let clientes = [
    cliente1, cliente2, cliente3
]


let produtos = [
    produto1,
    produto2,
    produto3,
    produto4,
    produto5,
    produto6,
    produto7,
    produto8

]

let vendas = [
    venda1,
    venda2,
    venda3,
    venda4,
    venda5
]
// for(let i =0;)
// console.log("Clientes")
// clientes.forEach(cliente => {
//     console.log(cliente.nome)
// })

// console.log("\nProdutos")
// produtos.forEach(produto => {
//     console.log(produto.descricao)
// })

// console.log("\nVendas")
// vendas.forEach(vendas => {
//     console.log(vendas.datahora)
// })

// tarefa 4


