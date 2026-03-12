// ══════════════════════════════════════════
//  MercadoLibre Clon — main.js
// ══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Category filter pills ──────────────────
  const pills = document.querySelectorAll('.cat-pill');
  const cards = document.querySelectorAll('.product-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Update active pill
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });





















































  
  });