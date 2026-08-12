/* ===== Lightbox: click any [data-zoom] image to view large, arrow-key / swipe nav ===== */
(function(){
  var imgs = [], idx = 0, box, imgEl, capEl;

  function build(){
    box = document.createElement('div');
    box.className = 'lb-overlay';
    box.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>' +
      '<figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
      '<button class="lb-nav lb-next" aria-label="Next">&#8250;</button>' +
      '<div class="lb-count"></div>';
    document.body.appendChild(box);
    imgEl = box.querySelector('.lb-img');
    capEl = box.querySelector('.lb-cap');
    box.querySelector('.lb-close').onclick = close;
    box.querySelector('.lb-prev').onclick = function(e){e.stopPropagation();go(-1);};
    box.querySelector('.lb-next').onclick = function(e){e.stopPropagation();go(1);};
    box.onclick = function(e){ if(e.target===box) close(); };
    // swipe
    var x0=null;
    box.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
    box.addEventListener('touchend',function(e){
      if(x0===null) return; var dx=e.changedTouches[0].clientX-x0;
      if(Math.abs(dx)>40) go(dx<0?1:-1); x0=null;
    });
  }

  function open(i){
    idx=i; show();
    box.classList.add('on'); document.body.style.overflow='hidden';
  }
  function close(){ box.classList.remove('on'); document.body.style.overflow=''; }
  function go(d){ idx=(idx+d+imgs.length)%imgs.length; show(); }
  function show(){
    var el=imgs[idx];
    imgEl.src = el.getAttribute('data-zoom') || el.src;
    var cap = el.getAttribute('data-cap') || el.alt || '';
    capEl.textContent = cap; capEl.style.display = cap ? '' : 'none';
    box.querySelector('.lb-count').textContent = imgs.length>1 ? (idx+1)+' / '+imgs.length : '';
    box.querySelector('.lb-prev').style.display = imgs.length>1 ? '' : 'none';
    box.querySelector('.lb-next').style.display = imgs.length>1 ? '' : 'none';
  }

  document.addEventListener('keydown',function(e){
    if(!box || !box.classList.contains('on')) return;
    if(e.key==='Escape') close();
    else if(e.key==='ArrowRight') go(1);
    else if(e.key==='ArrowLeft') go(-1);
  });

  document.addEventListener('DOMContentLoaded',function(){
    imgs = Array.prototype.slice.call(document.querySelectorAll('[data-zoom]'));
    if(!imgs.length) return;
    build();
    imgs.forEach(function(el,i){
      el.style.cursor='zoom-in';
      el.addEventListener('click',function(){ open(i); });
    });
  });
})();
