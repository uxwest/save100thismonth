/* Mobile menu toggle. Progressive enhancement: without JS the nav scrolls horizontally. */
(function(){
 function init(){
  var nav=document.querySelector('.nav');
  if(!nav||document.querySelector('.menu-toggle'))return;
  var b=document.createElement('button');
  b.type='button';b.className='menu-toggle';
  b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');
  b.innerHTML='<span></span><span></span><span></span>';
  nav.id='site-nav';b.setAttribute('aria-controls','site-nav');
  nav.parentNode.insertBefore(b,nav);
  function close(){nav.classList.remove('open');b.setAttribute('aria-expanded','false')}
  b.addEventListener('click',function(e){e.stopPropagation();var o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
  document.addEventListener('click',function(e){if(!nav.contains(e.target))close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  window.addEventListener('resize',function(){if(window.innerWidth>860)close()});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
