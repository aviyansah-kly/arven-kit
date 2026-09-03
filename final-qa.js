(()=>{
  const menuButton=()=>document.querySelector('.hero-v2-menu');
  const existing=document.querySelector('.arven-menu-panel');
  if(existing)return;

  const panel=document.createElement('div');
  panel.className='arven-menu-panel';
  panel.id='arven-menu-panel';
  panel.setAttribute('aria-hidden','true');
  panel.innerHTML=`<div class="arven-menu-panel__inner"><nav aria-label="Primary"><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#insights">Brief</a><a href="#contact">Contact</a></nav><button class="arven-menu-close" type="button" aria-label="Close menu">×</button><div class="arven-menu-meta"><span>Fractional CFO & Strategic Finance</span><span>New York / Global</span></div></div>`;
  document.body.appendChild(panel);

  const focusable=()=>[...panel.querySelectorAll('a[href],button:not([disabled])')].filter(el=>el.offsetParent!==null);
  const setInert=(value)=>{if('inert' in panel)panel.inert=value};
  setInert(true);

  const open=()=>{
    const btn=menuButton();
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden','false');
    setInert(false);
    document.body.classList.add('arven-menu-open');
    if(btn){btn.setAttribute('aria-expanded','true');btn.setAttribute('aria-controls','arven-menu-panel')}
    requestAnimationFrame(()=>focusable()[0]?.focus());
  };

  const close=(restoreFocus=true)=>{
    const btn=menuButton();
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden','true');
    setInert(true);
    document.body.classList.remove('arven-menu-open');
    if(btn)btn.setAttribute('aria-expanded','false');
    if(restoreFocus&&btn)btn.focus({preventScroll:true});
  };

  const bind=()=>{
    const btn=menuButton();
    if(!btn||btn.dataset.qaMenuBound==='true')return !!btn;
    btn.dataset.qaMenuBound='true';
    btn.setAttribute('type','button');
    btn.setAttribute('aria-expanded','false');
    btn.setAttribute('aria-controls','arven-menu-panel');
    btn.addEventListener('click',open);
    return true;
  };

  if(!bind()){
    const mo=new MutationObserver(()=>{if(bind())mo.disconnect()});
    mo.observe(document.body,{childList:true,subtree:true});
  }

  panel.querySelector('.arven-menu-close').addEventListener('click',()=>close(true));
  panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>close(false)));
  panel.addEventListener('click',e=>{if(e.target===panel)close(true)});
  document.addEventListener('keydown',e=>{
    if(!panel.classList.contains('is-open'))return;
    if(e.key==='Escape'){e.preventDefault();close(true);return}
    if(e.key==='Tab'){
      const items=focusable();
      if(!items.length)return;
      const first=items[0],last=items[items.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  });
})();

(()=>{
  const section=document.querySelector('.section4-ref');
  if(!section)return;
  section.setAttribute('role','region');
  section.setAttribute('aria-label','Founder testimonials');
  const stack=section.querySelector('.s4-card-stack');
  if(stack){stack.setAttribute('aria-live','polite');stack.setAttribute('aria-atomic','false')}

  const syncAvatars=()=>{
    section.querySelectorAll('.s4-card').forEach(card=>{
      const avatar=card.querySelector('.s4-avatar');
      const name=card.querySelector('.s4-author-text strong');
      if(!avatar||!name)return;
      const initials=name.textContent.trim().split(/\s+/).slice(0,2).map(part=>part[0]||'').join('');
      avatar.textContent=initials;
      avatar.setAttribute('aria-hidden','true');
    });
  };
  syncAvatars();
  if(stack){new MutationObserver(syncAvatars).observe(stack,{childList:true,subtree:true,characterData:true})}

  section.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'){e.preventDefault();section.querySelector('.s4-prev')?.click()}
    else if(e.key==='ArrowRight'){e.preventDefault();section.querySelector('.s4-next')?.click()}
  });
})();