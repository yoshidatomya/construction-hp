(function(){
  var b=document.querySelector('.menu-btn'),n=document.querySelector('.sp-nav');
  if(b&&n){
    b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.style.overflow='';});});
  }
  document.querySelectorAll('form').forEach(function(f){
    f.addEventListener('submit',function(){var s=f.querySelector('button[type=submit]');if(s){s.disabled=true;s.textContent='送信しています…';}});
  });
})();
