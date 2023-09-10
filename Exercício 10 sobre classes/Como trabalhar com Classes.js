//funcionário
class Funcionario {
        constructor(nome, idade, cargo){
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
    }

    seApresentar() {
        console.log(`olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho ${this.cargo}`)
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando`);
    }
}
//Gerente
class Gerente extends Funcionario {
    constructor (nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gerenciar (){
        console.log(`${tihis.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}
//Desenvolvedor
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
  }
  //Instâncias
  const gerente = new Gerente('Rod', 27, 'Gerente', 'Vendas');
  const desenvolvedor = new Desenvolvedor('Igor', 28, 'Desenvolvedor', 'JavaScript');
  
  //Chamando os métodos
  gerente.seApresentar();   
  gerente.trabalhar();     
  gerente.gerenciar();     
  
  desenvolvedor.seApresentar();   
  desenvolvedor.trabalhar();     
  desenvolvedor.programar();     