const nome = 'Joâo';
console.log(nome);

// O que não pode ser feito numa constante declarar uma constante e inicializar ela sem dar um valor a ela  ex :
// const nome;  -> Aqui vai dar erro de sintaxe , pois eu inicializei a constate mas não declarei um valor para ela .
// Não posso modificar o valor dela ex -> 
//nome = 'Pedro'; Aqui vai dar erro , pois eu estou tentnado modificar o valor da constante , mas constante é um valor que não pode ser modificado.
// Eu também posso pegar o valor de  uma constante e atribuir para outra variavel ex :
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);