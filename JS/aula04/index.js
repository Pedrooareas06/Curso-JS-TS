// Variáveis servem para armeznar , manipular e recuperadr dados 
// Temos 3 tipos de declarar uma variável : let , var e const . 
// let -> Define uma variável que pode ter seu valor alterarado posteriomente . 
// const -> constante , ou seja , um valor que não pode ser reatribuido.
// var -> Forma antiga de declar uma variavel .

/* Obs -> Eu não posso redeclarar uma variavel com o mesmo nome ex -> Se eu já tenho uma variavel cujo eu declarei como "nome" e depois eu criar uma outra variavel e tentar declarar como "nome"
vai dar erro , pois eu já declarei uma variável o chamando de nome , vai dar erro de sintaxe . 
*/

let nome = 'João'; // Aqui eu declarei uma variavel e atribui um valor a ela . "let" -> Variavel , "nome" -> E o nome que eu dei para essa variavel " = " -> Sinal de atribuição , 'João' -> Valor que eu dei para essa variavel.

console.log(nome, 'nasceu em 1984.');
console.log(nome, 'conheceu Maria em 2000.');
console.log(nome, 'se casou-se com Maria em 2012.');
console.log(' Maria teve um filo com João em 2015.', nome );
console.log('O filho de', nome , 'se chama Eduardo.');

/* Regras para criar uma variavel , na hora de definir um nome para variavel ,temos algumas regras para seguir 

 1 - Não podemos criar com palavras reservadas. Ex -> let , "let " é uma paralavra reservada da linguagem JavaScript, logo vai dar erro de sintaxe.  
 2- Variaveis precisam ter nomes significativos. Ex -> let nome = 'Joao' , faz sentido , pois a variavel nome , recebe um nome de uma pessoa . 
 3- Não pode começar o nome de uma variavel com números. Ex -> let 1nome = 'Joao' , vai dar erro de sintaxe.
 4- Não pode coneter espaços ou traços. Ex -> let nome-cliente , let nome cliente , vai dar erro , o correto é let nomeCliente.
 5- Utilizamos camelCase para nomes compostos. Ex -> let nomeCliente , primeira letra da primeira palavra minuscula e a segunda letra da primeira palavra maiuscula.
 6- Essas variaveis são case sensitive, ou seja , a variavel "nome" é diferente da variavel "Nome".
*/