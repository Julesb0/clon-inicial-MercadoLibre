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


  // ── Smooth scroll for anchor links ─────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // ── Search bar focus highlight ──────────────
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Buscando: "${query}"`);
      } else {
        searchInput.focus();
      }
    });

    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchBtn.click();
    });
  }


  // ── Promo button feedback ───────────────────
  const promoBtn = document.querySelector('.promo-btn');
  if (promoBtn) {
    promoBtn.addEventListener('click', () => {
      promoBtn.textContent = '¡Cupón aplicado! ✓';
      promoBtn.style.background = '#00a650';
      promoBtn.style.color = '#fff';
      promoBtn.disabled = true;
    });
  }


  // ── Hero button scroll to products ─────────
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

});















































  
  });