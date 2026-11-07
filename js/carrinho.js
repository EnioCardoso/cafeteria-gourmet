const getCart=()=>JSON.parse(localStorage.getItem('cafe_cart')||'[]');
const saveCart=c=>{localStorage.setItem('cafe_cart',JSON.stringify(c));updateCartBadge()};
function addCart(p,q=1){const c=getCart(), i=c.find(x=>x.id===p.id);if(i)i.quantidade+=q;else c.push({...p,quantidade:q});saveCart(c);alert('Produto adicionado ao carrinho!')}
function renderCart(){const c=getCart(), box=document.querySelector('#cart-items');if(!box)return; if(!c.length){box.innerHTML='<p>Seu carrinho está vazio. <a href="index.html">Ver cardápio</a></p>';return}box.innerHTML=c.map((i,x)=>`<article class="cart-item"><img src="${i.foto_url}" alt=""><div><h3>${i.nome}</h3><b>${money(i.preco)}</b></div><div><button onclick="changeQty(${x},-1)">−</button> ${i.quantidade} <button onclick="changeQty(${x},1)">+</button><button class="link-danger" onclick="removeCart(${x})">Remover</button></div></article>`).join(''); const total=c.reduce((a,i)=>a+i.preco*i.quantidade,0);document.querySelector('#cart-total').textContent=money(total)}
function changeQty(i,d){let c=getCart();c[i].quantidade+=d;if(c[i].quantidade<1)c.splice(i,1);saveCart(c);renderCart()};function removeCart(i){let c=getCart();c.splice(i,1);saveCart(c);renderCart()}

document.addEventListener('DOMContentLoaded',()=>{if(document.querySelector('#cart-items'))renderCart()});
