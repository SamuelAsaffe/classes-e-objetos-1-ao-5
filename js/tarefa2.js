
// Exercício 3
// Crie 3 arrays, cada um para guardar os objetos de determinada classe. 
// Em seguida, percorra cada um dos arrays exibindo os seguintes atributos:
// Cliente - nome
// Produto - descricao
// Venda - datahora
let array1 = []
let array2 = []
let array3 = []

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
