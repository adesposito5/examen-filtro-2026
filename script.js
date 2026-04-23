// ===============================
// Variables del personaje
// ===============================

const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;

let health = 120;
let mana = 80;

const attack = 45;
const defense = 20;


// ===============================
// Funciones
// ===============================

// Función declarada
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage < 0 ? 0 : damage;
}

// Arrow function
const isAlive = (health) => health > 0;

// Arrow function
const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

// Función declarada
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}


// ===============================
// Pruebas en consola
// ===============================

console.log("Presentación:", getPresentation(name, characterClass, level));

console.log("Daño causado:", calculateDamage(attack, defense));

console.log("¿Está vivo?:", isAlive(health));

console.log(
  "¿Puede lanzar hechizo?:",
  canCastSpell(mana, 30, false)
);