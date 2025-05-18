// script.js – vorbereitete JS-Datei für Interaktionen

document.addEventListener("DOMContentLoaded", () => {
  // Beispiel: CTA-Button Interaktion
  const ctaBtn = document.querySelector(".cta-button");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      alert("Die erste Ausgabe erscheint bald – stay tuned!");
    });
  }

  // Weitere Funktionen können hier ergänzt werden
});
