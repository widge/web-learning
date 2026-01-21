
let creatureColor = '#00d4ff';
document.documentElement.style.setProperty('--creature-color', creatureColor);

let creatureName = 'Forest Spirit';
document.getElementById('creatureName').innerHTML = creatureName;

let hasWings = false;
const wings = document.getElementById('wings');
if (hasWings) {
  wings.classList.add('visible');
}

let hasTail = false;
const tail = document.getElementById('tail');
if (hasTail) {
  tail.classList.add('visible');
}

let showGlow = false;
const glowRing = document.getElementById('glowRing');
if (showGlow) {
  glowRing.classList.add('visible');
}

const creature = document.getElementById('creature');
creature.addEventListener('click', () => {
 // click event here
});