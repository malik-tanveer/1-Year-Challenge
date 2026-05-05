/* ===== INIT AOS (slow & sequential feel) ===== */
AOS.init({
  duration: 2000,   // slow
  once: true,
  delay: 120,
  offset: 120,
  easing: 'ease-out-cubic'
});

/* ===== Simple cart data management ===== */
const products = {
  p1:{id:'p1',name:'Orbit Sneakers',price:99,img:'https://picsum.photos/seed/p1/200/200'},
  p2:{id:'p2',name:'Holo Jacket',price:149,img:'https://picsum.photos/seed/p2/200/200'},
  p3:{id:'p3',name:'Nebula Watch',price:199,img:'https://picsum.photos/seed/p3/200/200'},
  p4:{id:'p4',name:'Echo Buds',price:89,img:'https://picsum.photos/seed/p4/200/200'},
  p5:{id:'p5',name:'Solar Backpack',price:79,img:'https://picsum.photos/seed/p5/200/200'},
  p6:{id:'p6',name:'Recycled Tee',price:29,img:'https://picsum.photos/seed/p6/200/200'}
};

let cart = {}; // id -> qty

const cartCountEl = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

function updateCartUI(){
  // count
  const count = Object.values(cart).reduce((s,q)=>s+q,0);
  cartCountEl.textContent = count;
  // items
  cartItemsEl.innerHTML = '';
  let total=0;
  for(const id in cart){
    const qty = cart[id];
    const p = products[id];
    if(!p) continue;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div style="flex:1">
        <div style="font-weight:700">${p.name}</div>
        <div style="opacity:.8">${qty} × $${p.price}</div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:800;color:var(--accent)">$${(p.price*qty).toFixed(2)}</div>
        <div style="margin-top:6px" class="qty">
          <button class="small-btn" data-act="dec" data-id="${id}">-</button>
          <button class="small-btn" data-act="inc" data-id="${id}">+</button>
        </div>
      </div>`;
    cartItemsEl.appendChild(row);
    total += p.price*qty;
  }
  cartTotalEl.textContent = '$' + total.toFixed(2);

  // hook qty buttons
  cartItemsEl.querySelectorAll('[data-act]').forEach(btn=>{
    btn.onclick = () => {
      const id = btn.dataset.id;
      const act = btn.dataset.act;
      if(act==='inc') cart[id] = (cart[id]||0)+1;
      else {
        cart[id] = Math.max(0,(cart[id]||0)-1);
        if(cart[id]===0) delete cart[id];
      }
      updateCartUI();
    };
  });
}

// Add to cart handlers + GSAP hover tilt
document.querySelectorAll('.add-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const id = e.currentTarget.dataset.id;
    cart[id] = (cart[id]||0)+1;
    updateCartUI();
    // small flying add-to-cart animation
    const productCard = e.currentTarget.closest('.product');
    const img = productCard.querySelector('img');
    if(img){
      const fly = img.cloneNode(true);
      fly.style.position='fixed'; fly.style.width='90px'; fly.style.height='60px'; fly.style.borderRadius='8px';
      const r = img.getBoundingClientRect();
      fly.style.left = r.left + 'px'; fly.style.top = r.top + 'px'; fly.style.zIndex=9999;
      document.body.appendChild(fly);
      gsap.to(fly, {duration:0.9, x:window.innerWidth - 120 - r.left, y: - (r.top-40), scale:0.5, rotation:20, ease:'power2.inOut', onComplete: ()=>fly.remove()});
    }
  });

  // hover tilt using GSAP
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {scale:1.03, duration:0.25, boxShadow: '0 12px 30px rgba(0,0,0,0.45)'});
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {scale:1, duration:0.25, boxShadow: 'none'});
  });
});

// tilt product on hover (3D subtle)
document.querySelectorAll('.product').forEach(card=>{
  card.addEventListener('mousemove', (ev)=>{
    const bounds = card.getBoundingClientRect();
    const cx = bounds.left + bounds.width/2;
    const cy = bounds.top + bounds.height/2;
    const dx = (ev.clientX - cx) / (bounds.width/2); // -1..1
    const dy = (ev.clientY - cy) / (bounds.height/2);
    gsap.to(card, {rotationY: dx * 8, rotationX: -dy * 6, scale:1.01, duration:0.4, ease:'power2.out'});
  });
  card.addEventListener('mouseleave', ()=>{
    gsap.to(card, {rotationY:0, rotationX:0, scale:1, duration:0.6, ease:'elastic.out(1,0.6)'});
  });
});

/* ===== Cart open/close & misc UI ===== */
document.getElementById('openCart').addEventListener('click', ()=>{
  if(cartPanel.style.display==='none'){
    cartPanel.style.display='block';
    gsap.fromTo(cartPanel, {x:120,opacity:0}, {x:0,opacity:1,duration:0.6,ease:'power3.out'});
  } else {
    gsap.to(cartPanel, {x:120,opacity:0,duration:0.4,onComplete: ()=> cartPanel.style.display='none'});
  }
});

document.getElementById('clearCart').addEventListener('click', ()=>{
  cart = {}; updateCartUI();
});

document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  alert('Checkout demo — integrate payment flow here.');
});

/* ===== small interactions (theme toggle, subscribe, shop now) ===== */
document.getElementById('themeToggle').addEventListener('click', ()=>{
  // purely visual demo toggle
  gsap.to('body', {background: 'linear-gradient(180deg,#08121a,#0b1e2b)', duration:0.8});
  gsap.fromTo('.hero h1', {y: -8, opacity:0}, {y:0, opacity:1, duration:0.7, ease:'power2.out'});
});

document.getElementById('subscribeBtn').addEventListener('click', ()=>{
  const email = document.getElementById('emailInput').value;
  if(!email){ alert('Please enter an email'); return; }
  gsap.to('#subscribeBtn', {scale:0.98, duration:0.12, yoyo:true, repeat:1});
  alert('Subscribed: ' + email + ' (demo)');
});

document.getElementById('shopNow').addEventListener('click', ()=> {
  // scroll to products slowly
  gsap.to(window, {duration:1.2, scrollTo: '#products', ease:'power2.inOut'});
});

/* ===== initial UI update ===== */
updateCartUI();

/* NOTE: this is a self-contained demo. Replace placeholder images with your own assets and wire up backend for production. */
