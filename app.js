// Perguntar o nome e sobrenome
let theName = prompt("Qual seu nome e sobrenome?")
// Pegar a incial do nome
let firstInitial = theName.slice(0,1);
// // Pegar a posição da primeira letra do sobrenome
let secondInitialPosition = theName.indexOf(" ") + 1;
// Pegar a primeira letra do sobrenome
let secondInitial = theName.slice(secondInitialPosition, secondInitialPosition + 1);
// Mostrar no site as iniciais
document.write("Suas inicias são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
