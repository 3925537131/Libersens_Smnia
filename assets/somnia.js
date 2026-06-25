/* SOMNIA — scroll reveal + light interactions */
(function () {
  function initReveal() {
    var els = document.querySelectorAll('.som-reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  function initMenu() {
    var burger = document.querySelector('[data-som-burger]');
    var nav = document.querySelector('[data-som-mobilenav]');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      nav.toggleAttribute('hidden');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initReveal();
      initMenu();
    });
  } else {
    initReveal();
    initMenu();
  }
})();
