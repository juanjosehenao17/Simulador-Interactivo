
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;


let adivinanza = Number(prompt("Adivina el número del 1 al 100:"));


while (adivinanza !== numeroAleatorio) {
  if (adivinanza > numeroAleatorio) {
    alert("El número es demasiado grande, intenta de nuevo.");
  } else {
    alert("El número es demasiado pequeño, intenta de nuevo.");
  }
  adivinanza = Number(prompt("Adivina el número del 1 al 100:"));
}


alert("¡Felicidades adivinaste el numero!");
