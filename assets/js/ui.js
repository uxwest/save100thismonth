/* Save100ThisMonth — progressive enhancement only.
   Adds an accessible mobile menu toggle to any page that has a .nav.
   If JavaScript is unavailable, the navigation simply stays visible. */
(function () {
  function init() {
    var nav = document.querySelector('.nav');
    if (!nav || document.querySelector('.menu-toggle')) return;

    var wrap = nav.parentNode;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'menu-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'site-nav');
    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.innerHTML = '<span></span><span></span><span></span>';

    nav.id = 'site-nav';
    wrap.insertBefore(btn, nav);

    function close() {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggle() {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !btn.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
    // Reset the menu if the viewport grows past the breakpoint
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) close();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
