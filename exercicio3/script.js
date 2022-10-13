let numerais = [28, 24, 3, 5, 9];
let strings = ["Raoni", "Gabriela", "Luisa", "Bebe"];
let mix = [5, "Vera", true];

let numeraisCopia = [28, 24, 3, 5, 9];
numeraisCopia.push(15);
console.log(numerais, numeraisCopia);

let stringsCopia = ["Raoni", "Gabriela", "Luisa", "Bebe"]
stringsCopia.pop();
console.log(strings, stringsCopia);

let mixCopia = [8, "Sebastião", false];
mixCopiaCortado = mixCopia.slice(1, 3);
console.log(mix, mixCopiaCortado);