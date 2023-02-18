const professions = ["Engineer", "Doctor", "Teacher", "Lawyer"];

console.log(`Professions: ${JSON.stringify(professions)}`);
console.log(
  `New professions length: ${JSON.stringify(professions.push("Businessman"))}`
);
console.log(`New professions: ${JSON.stringify(professions)}`);
