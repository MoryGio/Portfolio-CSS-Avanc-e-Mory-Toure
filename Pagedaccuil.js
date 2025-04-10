function createFallingStar() {
  const star = document.createElement("div");
  star.classList.add("falling-star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 5000);
}

setInterval(createFallingStar, 100);

// script.js
function goToHome() {
  window.location.href = "Homepage.html";
}

function goToLogin() {
  window.location.href = "index.html";
}
