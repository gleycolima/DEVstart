class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;

    // Já calcula tudo no momento que o atleta é criado
    this.categoria = this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.mediaValida = this.calculaMediaValida();
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) return "Infantil";
    if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
    if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
    if (this.idade >= 16 && this.idade <= 30) return "Adulto";
    return "Sem categoria";
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    // Copia o array pra não mexer no original, depois ordena do menor pro maior
    let ordenadas = [...this.notas].sort((a, b) => a - b);

    // Pega só as 3 do meio, ignorando a menor (índice 0) e a maior (índice 4)
    let notasComputadas = ordenadas.slice(1, 4);

    let soma = 0;
    notasComputadas.forEach(nota => soma += nota);

    return soma / notasComputadas.length;
  }

  // Getters — cada um devolve um atributo do atleta
  obtemNomeAtleta()    { return this.nome; }
  obtemIdadeAtleta()   { return this.idade; }
  obtemPesoAtleta()    { return this.peso; }
  obtemNotasAtleta()   { return this.notas; }
  obtemCategoria()     { return this.categoria; }
  obtemIMC()           { return this.imc; }
  obtemMediaValida()   { return this.mediaValida; }
}

// --- Teste com o atleta do enunciado ---

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);