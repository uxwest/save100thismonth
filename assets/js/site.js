/* Single source of truth for header/footer. Every page loads this; menu identical everywhere. */
(function(){
  const ROOT = document.documentElement.dataset.root || '';
  const links = [
    ['Money', ROOT+'money/index.html'],
    ['Shopping', ROOT+'shopping/index.html'],
    ['Bills', ROOT+'bills/index.html'],
    ['Subscriptions', ROOT+'subscriptions/index.html'],
    ['Tools', ROOT+'tools/index.html'],
    ['Search', ROOT+'search/index.html']
  ];
  const h = document.getElementById('site-header');
  if(h){ h.innerHTML = `<div class="hd"><a class="logo" href="${ROOT}index.html">Save<b>100</b>ThisMonth</a><nav id="site-nav" aria-label="Main">${links.map(l=>`<a href="${l[1]}">${l[0]}</a>`).join('')}</nav></div>`; }
  const f = document.getElementById('site-footer');
  if(f){ f.innerHTML = `<div class="ft"><div><b>Sections</b><br>${links.map(l=>`<a href="${l[1]}">${l[0]}</a>`).join('<br>')}</div><div><b>Trust</b><br><a href="${ROOT}about/index.html">About</a><br><a href="${ROOT}editorial-policy/index.html">Editorial Policy</a><br><a href="${ROOT}fact-checking/index.html">Fact-Checking</a><br><a href="${ROOT}corrections/index.html">Corrections</a><br><a href="${ROOT}advertising-disclosure/index.html">Disclosure</a></div><div><b>Legal</b><br><a href="${ROOT}privacy/index.html">Privacy</a><br><a href="${ROOT}cookies/index.html">Cookies</a><br><a href="${ROOT}terms/index.html">Terms</a><br><a href="${ROOT}sitemap/index.html">Sitemap</a><br><a href="${ROOT}contact/index.html">Contact</a></div></div>`; }
})();
