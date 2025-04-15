function getRandomOffset() {
  // Génère un décalage aléatoire entre ...
  return Math.floor(Math.random() * 40) - 20;
}

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll("#back-end span");

  letters.forEach((letter) => {
    letter.addEventListener("mouseover", () => {
      // Génère un décalage aléatoire
      const offsetX = getRandomOffset();
      const offsetY = getRandomOffset();
      letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    letter.addEventListener("mouseleave", () => {
      // Réinitialise la position
      letter.style.transform = `translate(0, 0)`;



      
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll("#Front-end span");

  letters.forEach((letter) => {
    letter.addEventListener("mouseover", () => {
      // Génère un décalage aléatoire
      const offsetX = getRandomOffset();
      const offsetY = getRandomOffset();
      letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    letter.addEventListener("mouseleave", () => {
      // Réinitialise la position
      letter.style.transform = `translate(0, 0)`;
    });
  });
});
