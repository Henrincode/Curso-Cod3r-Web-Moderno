// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal
const nome = "Carla";
const pessoa = {
  nome,
  ola() {
    return "Oi gente!";
  },
};
console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal {
  nome = "nome";

  constructor(nome = "sem nome") {
    super();
    this.nome = nome;
  }

  falar() {
    return "Au au!";
  }
}

const dogs = [];
dogs.push(new Cachorro("Pirata"));
console.log(dogs[0]);
// console.log(new Cachorro().falar());
