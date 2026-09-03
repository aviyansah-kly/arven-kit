const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.site-menu');
if(toggle&&menu){
  toggle.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.add('is-loaded')));

const revealItems=document.querySelectorAll('.reveal,.reveal-scale');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
revealItems.forEach((el,index)=>{
  el.style.transitionDelay=`${Math.min(index%4,3)*55}ms`;
  observer.observe(el);
});

const parallaxTargets=[...document.querySelectorAll('.hero-image img,.work-image img,.founder-image img')];
let ticking=false;
function renderMotion(){
  const vh=window.innerHeight;
  parallaxTargets.forEach((img,i)=>{
    const host=img.parentElement;
    const rect=host.getBoundingClientRect();
    if(rect.bottom>0&&rect.top<vh){
      const progress=(vh-rect.top)/(vh+rect.height);
      const travel=i===0?4:7;
      const y=(progress-.5)*travel;
      img.style.transform=`scale(1.05) translateY(${y}%)`;
    }
  });
  ticking=false;
}
window.addEventListener('scroll',()=>{
  if(!ticking){requestAnimationFrame(renderMotion);ticking=true;}
},{passive:true});
window.addEventListener('resize',renderMotion);
renderMotion();