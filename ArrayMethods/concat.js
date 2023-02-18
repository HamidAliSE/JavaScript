const sons = ["Hassan", "Hussain"];
const daughters = ["Tehzeeb", "Anaya"];

console.log(`Children: ${JSON.stringify(sons.concat(daughters))}`);
console.log(`Sons after concat: ${JSON.stringify(sons)}`);
console.log(`Daughters after concat: ${JSON.stringify(daughters)}`);

console.log(`Children: ${JSON.stringify(daughters.concat(sons))}`);
console.log(`Daughters after concat: ${JSON.stringify(daughters)}`);
console.log(`Sons after concat: ${JSON.stringify(sons)}`);
