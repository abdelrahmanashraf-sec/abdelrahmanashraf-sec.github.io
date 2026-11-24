import './fonts.css';
import './style.css';
import './identity.css';
import './graphite.css';

const concept='hybrid';
const email='abdelrahman.a.moustfa@gmail.com';
const github='https://github.com/abdelrahmanashraf-sec';
const linkedin='https://www.linkedin.com/in/abdelrahman-ashraf1/';
const cv=new URL('./assets/Abdelrahman_Ashraf_Penetration_Testing_Intern_CV.pdf',import.meta.url).href;
const projects=[
 {id:'network',n:'01',category:'Network',title:'Network & host security',short:'Follow the attack path.',desc:'From host discovery and service enumeration to validation and privilege escalation in intentionally vulnerable machines.',tools:['Nmap','Wireshark','Metasploit','Linux & Windows'],notes:[['Environment','Kioptrix Level 1, Metasploitable 2, Moria 1.1, and Tomghost.'],['Approach','Connect exposed services to a testable attack path. Validate the result within scope, then record the steps.'],['Evidence','Includes the Ban-Win7 internal assessment documented in my CV. Public walkthroughs are being prepared.'],['Scope','Isolated, intentionally vulnerable environments. This is lab practice, not a client or production assessment.']]},
 {id:'web',n:'02',category:'Web',title:'Web application security',short:'Question the request.',desc:'Using HTTP analysis to investigate authentication, access control, and input handling—and reproduce the result.',tools:['Burp Suite','HTTP','SQLMap','ffuf'],notes:[['Environment','Authorized web-security training labs, including OWASP Juice Shop, DVWA, and PortSwigger Academy.'],['Approach','Intercept a request, understand its behavior, change one assumption, and compare the response.'],['Topics','Authentication and JWT, SQL injection, XSS, SSRF, and file uploads.'],['Evidence','Practice focuses on reproducible steps and remediation notes, rather than scanner output alone. Individual walkthroughs are not published yet.']]}
];
const skills=[
 {id:'web',n:'01',name:'Web security',label:'Read between the requests.',tools:['Burp Suite','SQLMap','ffuf','dirsearch'],desc:'HTTP analysis, authentication, access control, and input validation.',symbol:'W'},
 {id:'mobile',n:'02',name:'Mobile security',label:'Look beneath the interface.',tools:['JADX','ADB','APK reverse engineering','Static & dynamic analysis'],desc:'Android testing and understanding what an application does beyond its UI.',symbol:'M'},
 {id:'network',n:'03',name:'Network security',label:'Find the path through.',tools:['Nmap','Metasploit','Wireshark'],desc:'Service enumeration, network traffic, and host security in controlled labs.',symbol:'N'},
 {id:'ad',n:'04',name:'Active Directory',label:'Understand the relationships.',tools:['BloodHound','Mimikatz','pypykatz'],desc:'Domain fundamentals, enumeration, and attack-path analysis.',symbol:'AD'},
 {id:'code',n:'05',name:'Code & systems',label:'Know your instruments.',tools:['Python','PHP','JavaScript','SQL','Linux','Windows','Git'],desc:'Programming, operating systems, and version control for practical security work.',symbol:'{}'}
];
const journey=[
 {date:'SEP — NOV 2026',org:'TIPS Hindawi',type:'Penetration Testing Intern',title:'Penetration Testing Internship',desc:'Assessed web applications through reconnaissance, manual vulnerability validation, and documentation of findings and recommended fixes. Co-authored the NileCare assessment report with evidence, risk ratings, and remediation guidance.'},
 {date:'JUL 2026 — PRESENT',org:'DEPI',type:'VAPT trainee',title:'Vulnerability Analysis & Penetration Testing',desc:'Network penetration-testing practice, vulnerability validation, and Active Directory security fundamentals.'},
 {date:'JAN — SEP 2026',org:'Instant',type:'Completed diploma',title:'Cybersecurity & Penetration Testing Diploma',desc:'Hands-on web-security training using HTTP analysis, Burp Suite, and controlled vulnerability labs.'},
 {date:'NOV — DEC 2025',org:'Archon Security',type:'SOC analyst intern',title:'SOC Analyst Internship',desc:'Alert triage, suspicious endpoint and network activity, IOC documentation, and incident notes.'}
];
const navItems=[['about','About'],['map','Explore map'],['projects','Work'],['toolkit','Toolkit'],['journey','Journey'],['writeups','Notes'],['contact','Contact']];
const arrow='';
const mark='<span class="core-monogram" aria-hidden="true">0x</span>';
function diagram(kind){return kind==='network'?`<div class="diagram diagram-network" aria-hidden="true"><span class="diagram-label">CONTROLLED LAB</span><svg viewBox="0 0 500 280"><path class="diagram-grid" d="M0 70H500M0 140H500M0 210H500M100 0V280M200 0V280M300 0V280M400 0V280"/><path class="wire" d="M90 140H250V75H410M250 140V215H410"/><path class="packet" d="M90 140H250V75H410"/><circle cx="90" cy="140" r="25"/><circle cx="250" cy="140" r="32"/><rect x="389" y="54" width="42" height="42" rx="5"/><rect x="389" y="194" width="42" height="42" rx="5"/><path d="m82 140 6 6 12-13m142 6 8-8 8 8m-16 8 8 8 8-8"/></svg><span class="diagram-foot">DISCOVER → ENUMERATE → VALIDATE</span></div>`:`<div class="diagram diagram-web" aria-hidden="true"><span class="diagram-label">REQUEST / RESPONSE</span><div class="http-slip"><span><i></i> request.http</span><code><em>GET</em> /account<br> <small>Host: lab.local</small><br> <small>Session: ••••</small></code></div><div class="http-slip response-slip"><span><i></i> observation.md</span><code>One request.<br> One assumption.<br> <em>A clear finding.</em></code></div><span class="diagram-foot">OBSERVE / QUESTION / DOCUMENT</span></div>`;}
function external(url,label,cls=''){return `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label} ${arrow}</a>`;}
function nav(){return navItems.map(([id,label])=>`<a href="#${id}" data-nav="${id}">${label}</a>`).join('');}
function footer(){return `<footer class="page-footer"><span>0xTitan / ABDELRAHMAN ASHRAF</span><span>CYBERSECURITY / PERSONAL PORTFOLIO</span><a href="#home">Back to top</a></footer>`;}
function filter(){return `<div class="project-filters" role="group" aria-label="Filter projects"><button data-filter="all" aria-pressed="true">All work <small>02</small></button><button data-filter="web" aria-pressed="false">Web</button><button data-filter="network" aria-pressed="false">Network</button></div>`;}
function stats(){return `<div class="team-record"><span>XREFctf <small>TEAM PLACEMENTS</small></span>${external(github+'/CSCTF-2026',`<b>4<sup>th</sup></b><span>CSCTF 2026<small>/ 74 JUNIORS</small></span>`)}${external(github+'/CSCTF-2026#-0x04--selected-team-results--archive-',`<b>55<sup>th</sup></b><span>CyCTF 2026<small>/ TEAM RESULT</small></span>`)}</div>`;}
function chapter(n,label,extra=''){return `<div class="chapter-label"><span>${label}</span><span>${extra||'0xTitan / PERSONAL LAB'}</span></div>`;}
function contacts(){return `<div class="contact-links"><a href="mailto:${email}">Email ${arrow}</a>${external(github,'GitHub')}${external(linkedin,'LinkedIn')}<button data-action="copy">Copy email <span>＋</span></button></div>`;}
function notes(){return `<div class="notes-card"><span class="micro">WORK IN PROGRESS / FIELD NOTES</span><h3>Good notes take<br> more than a flag.</h3><p>Lab walkthroughs and technical notes are being prepared. No articles are published on the portfolio yet.</p><div class="note-tags"><span>Machine walkthroughs</span><span>Web security</span><span>Mobile & AD</span></div>${external(github+'/CSCTF-2026','Explore the CTF archive','underlink')}</div>`;}

function networkMap(){return `<div class="network-universe"><div class="orbit orbit-one" aria-hidden="true"></div><div class="orbit orbit-two" aria-hidden="true"></div><svg class="universe-wires" viewBox="0 0 1000 410" preserveAspectRatio="none" aria-hidden="true"><path d="M500 205 190 110M500 205 790 90M500 205 170 315M500 205 805 310"/><path class="moving-packet" d="M190 110 500 205 790 90"/><circle cx="500" cy="205" r="75"/><circle cx="500" cy="205" r="120" stroke-dasharray="2 10"/></svg><div class="map-core"><span>${mark}</span><b>0xTitan</b><small>ABDELRAHMAN ASHRAF</small></div>${[['web','WEB SECURITY','01'],['mobile','MOBILE SECURITY','02'],['network','NETWORK SECURITY','03'],['ad','ACTIVE DIRECTORY','04']].map(([id,name,n])=>`<button class="map-node map-${id}" data-map="${id}" aria-pressed="false"><span class="node-glyph">${skills.find(s=>s.id===id).symbol}</span><span><small>DISCIPLINE</small><b>${name}</b></span><i aria-hidden="true">+</i></button>`).join('')}<span class="universe-caption">AN INTERACTIVE MAP OF MY PRACTICE</span><div class="map-hint"><i></i> SELECT A NODE TO EXPLORE</div></div>`;}
function skillExplorer(){return `<div class="skill-explorer"><div class="skill-tabs" role="tablist" aria-label="Explore security disciplines" aria-orientation="vertical">${skills.map((s,i)=>`<button role="tab" id="skill-tab-${s.id}" data-skill="${s.id}" aria-selected="${i===0}" aria-controls="skill-detail" tabindex="${i===0?0:-1}">${s.name}<i aria-hidden="true">+</i></button>`).join('')}</div><div class="skill-detail" id="skill-detail" role="tabpanel" aria-labelledby="skill-tab-web" tabindex="0"></div></div>`;}


function hybrid(){return `<div class="reading-progress" aria-hidden="true"></div><div class="night-ambient" aria-hidden="true"></div><div class="page-wrap"><header class="site-header"><a href="#home" class="site-brand" aria-label="Abdelrahman Ashraf, home">Abdelrahman Ashraf<span>0xTitan</span></a><nav id="main-nav" aria-label="Main navigation">${[['projects','Work'],['map','Explore'],['toolkit','Toolkit'],['journey','Journey'],['contact','Contact']].map(([id,label])=>`<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}</nav><button class="mobile-menu" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav">Menu <span aria-hidden="true">+</span></button></header><main id="main-content"><section class="hero cyber-home" id="home">
  <div class="hero-atmosphere" aria-hidden="true"><div class="hero-raven"></div><div class="scene-grid"></div></div>
  <div class="identity-intro">
    <span class="identity-alias">0xTitan</span>
    <h1 class="identity-name-display">ABDELRAHMAN<br><span>ASHRAF</span></h1>
    <p class="identity-specialty">CYBERSECURITY</p>
  </div>
  <div class="hero-foot"><span>XREFctf <i>/</i> SECURITY COMMUNITY <i>/</i> CTF</span><a href="${cv}" download="Abdelrahman_Ashraf_CV.pdf">Download CV</a></div>
</section>${stats()}<section class="section about-section" id="about">${chapter('','BEHIND 0xTitan','ABDELRAHMAN ASHRAF')}<div class="about-layout"><h2>SECURITY<br><em>PROFILE.</em></h2><div class="about-copy"><p class="lead">I’m Abdelrahman, a cybersecurity student and VAPT trainee building a practical foundation in offensive security.</p><p>My SOC internship shaped how I investigate: follow the evidence, test the assumptions, and leave clear technical notes.</p><div class="education"><span class="micro">EDUCATION</span><strong>B.Eng. / Electronic Engineering</strong><p>Cyber Security & Data Analysis<br>Menoufia University · 2023–2028</p></div></div></div></section><section class="section map-section" id="map">${chapter('','THE DOMAIN MAP','INTERACTIVE MAP')}<div class="section-heading"><h2>SECURITY<br><em>DOMAINS.</em></h2><p>Choose a discipline to explore<br>the thinking and tools behind it.</p></div><div class="map-surface">${networkMap()}</div><div class="map-selection" aria-live="polite" hidden></div></section><section class="section" id="projects">${chapter('','SELECTED WORK','CONTROLLED LAB PRACTICE')}<div class="section-heading"><h2>SECURITY<br><em>IN PRACTICE.</em></h2>${filter()}</div><div class="project-gallery">${projects.map(p=>`<article class="project-card reveal" data-category="${p.id}"><button class="project-visual-button" data-project="${p.id}" aria-label="Open ${p.title} project">${diagram(p.id)}<span class="visual-open">Inspect project</span></button><div class="project-meta"><span>${p.category.toUpperCase()} SECURITY</span><span>AUTHORIZED LAB</span></div><button class="project-title-button" data-project="${p.id}"><h3>${p.title}</h3><span aria-hidden="true">+</span></button><p>${p.desc}</p><div class="chips">${p.tools.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('')}</div><p class="scope">Practice in controlled, intentionally vulnerable environments.</p></section><section class="section" id="toolkit">${chapter('','THE WORKING TOOLKIT','HANDS-ON PRACTICE')}<div class="section-heading"><h2>METHOD<br><em>& TOOLS.</em></h2><p>Select a discipline.<br>Explore the instruments.</p></div>${skillExplorer()}<div class="practice-platforms"><span class="micro">PRACTICE GROUNDS</span><p>OWASP Juice Shop / DVWA / PortSwigger Academy / HTB Academy</p></div></section><section class="section" id="journey">${chapter('','EXPERIENCE & LEARNING','STILL BUILDING')}<div class="section-heading"><h2>TRAINING<br><em>& EXPERIENCE.</em></h2><p>Choose a chapter<br>in the learning journey.</p></div><div class="journey-switcher" role="tablist" aria-label="Learning journey">${journey.map((j,i)=>`<button id="journey-tab-${i}" role="tab" data-journey="${i}" aria-selected="${i===0}" aria-controls="journey-detail" tabindex="${i===0?0:-1}"><b>${j.org}</b><small>${j.type}</small></button>`).join('')}</div><div class="journey-detail" id="journey-detail" role="tabpanel" aria-labelledby="journey-tab-0" tabindex="0"></div></section><section class="section notes-section" id="writeups">${chapter('','FIELD NOTES','WRITING & REASONING')}<div class="notes-layout"><h2>FIELD<br><em>NOTES.</em></h2><div class="notes-copy"><span class="micro">IN PROGRESS</span><h3>Notes worth keeping.</h3><p>Walkthroughs and technical notes are being prepared. No articles are published on the portfolio yet.</p>${external(github+'/CSCTF-2026','Explore the CTF archive','text-link')}</div></div></section><section class="section contact-section" id="contact">${chapter('','COMMUNITY / CTF / OPPORTUNITIES','0xTitan')}<h2>LET’S<br><em>CONNECT.</em></h2><div class="contact-bottom"><p>For the security community. For the next CTF.<br>Open to internships and useful collaborations.</p>${contacts()}</div></section></main>${footer()}</div>`;}

document.querySelector('#app').innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a>${hybrid()}<div class="toast" role="status" aria-live="polite"></div><dialog class="project-dialog" aria-label="Project details"></dialog>`;
initialize();

function initialize(){
 const main=document.querySelector('main');main.id='main-content';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const dialog=document.querySelector('.project-dialog');
 let previousFocus;
 function openDialog(el){previousFocus=document.activeElement;document.body.classList.add('dialog-open');el.showModal();if(!reduced.matches)el.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:260,easing:'cubic-bezier(.22,1,.36,1)'});}
 function closeDialog(el){el.close();document.body.classList.remove('dialog-open');previousFocus?.focus();}
 for(const el of [dialog]){
  el.addEventListener('click',e=>{if(e.target===el){const r=el.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog(el);}});
  el.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
 }
 document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const p=projects.find(p=>p.id===button.dataset.project);
  dialog.innerHTML=`<div class="project-dialog-head"><span>PROJECT NOTES / ${p.category.toUpperCase()}</span><button data-close aria-label="Close project details">✕</button></div><div class="project-dialog-body"><span class="micro">AUTHORIZED LAB PRACTICE</span><h2>${p.title}</h2><p class="dialog-lead">${p.desc}</p>${diagram(p.id)}<div class="dialog-notes">${p.notes.map(([label,text])=>`<div><h3>${label}</h3><p>${text}</p></div>`).join('')}</div><div class="chips">${p.tools.map(t=>`<span>${t}</span>`).join('')}</div><a class="dialog-cv" href="${cv}" download="Abdelrahman_Ashraf_CV.pdf">Download CV for full background</a></div>`;
  dialog.querySelector('[data-close]').addEventListener('click',()=>closeDialog(dialog));openDialog(dialog);
 }));
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelectorAll('[data-category]').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;});
  if(!reduced.matches)document.querySelectorAll('[data-category]:not([hidden])').forEach(p=>{p.classList.add('is-visible');p.animate([{opacity:.2,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:320,easing:'ease-out'});});
 }));
 let toastTimeout;
 document.querySelectorAll('[data-action="copy"]').forEach(button=>button.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(email);button.innerHTML='Email copied <span>✓</span>';const t=document.querySelector('.toast');t.textContent='Email address copied.';t.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>{t.classList.remove('show');button.innerHTML='Copy email <span>＋</span>';},2300);}catch{location.href='mailto:'+email;}
 }));
 const mobile=document.querySelector('.mobile-menu');
 mobile?.addEventListener('click',()=>{const open=mobile.getAttribute('aria-expanded')!=='true';mobile.setAttribute('aria-expanded',String(open));mobile.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.body.classList.toggle('mobile-nav-open',open);});
 document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{document.body.classList.remove('mobile-nav-open');mobile?.setAttribute('aria-expanded','false');mobile?.setAttribute('aria-label','Open navigation');}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('mobile-nav-open')){document.body.classList.remove('mobile-nav-open');mobile?.setAttribute('aria-expanded','false');mobile?.setAttribute('aria-label','Open navigation');mobile?.focus();}});
 matchMedia('(min-width: 901px)').addEventListener('change',e=>{if(e.matches){document.body.classList.remove('mobile-nav-open');mobile?.setAttribute('aria-expanded','false');mobile?.setAttribute('aria-label','Open navigation');}});
 const sections=[...document.querySelectorAll('main section[id]')];
 let ticking=false;
 function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--reading',`${max>0?scrollY/max*100:0}%`);let active='home';for(const section of sections){if(section.getBoundingClientRect().top<innerHeight*.4)active=section.id;}document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});ticking=false;}
 addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});updateScroll();
 if(!reduced.matches){const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveals.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');reveals.observe(el);});}
 document.querySelectorAll('.skill-tabs [role="tab"]').forEach((b,i,arr)=>{
  b.addEventListener('click',()=>selectSkill(b.dataset.skill));
  b.addEventListener('keydown',e=>tabKeys(e,i,arr));
 });
 if(concept==='hybrid'){
  selectSkill('web');
  document.querySelectorAll('[data-map]').forEach(b=>b.addEventListener('click',()=>{
   document.querySelector('.map-selection').hidden=false;selectSkill(b.dataset.map);
  }));
  const scene=document.querySelector('.cyber-home');
  let scenePending=false,sceneX=0,sceneY=0;
  scene.addEventListener('pointermove',e=>{
   if(reduced.matches||!matchMedia('(pointer:fine)').matches)return;
   const rect=scene.getBoundingClientRect();sceneX=((e.clientX-rect.left)/rect.width-.5)*18;sceneY=((e.clientY-rect.top)/rect.height-.5)*12;
   if(!scenePending){scenePending=true;requestAnimationFrame(()=>{scene.style.setProperty('--scene-x',sceneX+'px');scene.style.setProperty('--scene-y',sceneY+'px');scenePending=false;});}
  },{passive:true});
  scene.addEventListener('pointerleave',()=>{scene.style.setProperty('--scene-x','0px');scene.style.setProperty('--scene-y','0px');});
  const ambient=document.querySelector('.night-ambient');let pending=false;let px=50,py=25;
  document.addEventListener('pointermove',e=>{if(reduced.matches||!matchMedia('(pointer:fine)').matches)return;px=e.clientX/innerWidth*100;py=e.clientY/innerHeight*100;if(!pending){pending=true;requestAnimationFrame(()=>{ambient.style.setProperty('--px',px+'%');ambient.style.setProperty('--py',py+'%');pending=false;});}},{passive:true});
 }
 if(concept==='hybrid'){
  selectJourney(0);document.querySelectorAll('[data-journey]').forEach((b,i,arr)=>{b.addEventListener('click',()=>selectJourney(Number(b.dataset.journey)));b.addEventListener('keydown',e=>tabKeys(e,i,arr));});
 }
}
function tabKeys(e,i,arr){const keys={ArrowRight:(i+1)%arr.length,ArrowDown:(i+1)%arr.length,ArrowLeft:(i-1+arr.length)%arr.length,ArrowUp:(i-1+arr.length)%arr.length,Home:0,End:arr.length-1};if(e.key in keys){e.preventDefault();arr[keys[e.key]].click();arr[keys[e.key]].focus();}}
function enterPanel(panel){if(!matchMedia("(prefers-reduced-motion: reduce)").matches)panel.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:300,easing:"cubic-bezier(.22,1,.36,1)"});}
function selectSkill(id){const s=skills.find(s=>s.id===id);const panel=document.querySelector('#skill-detail');if(!panel||!s)return;document.querySelectorAll('[data-skill]').forEach(b=>{const active=b.dataset.skill===id;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});panel.setAttribute('aria-labelledby','skill-tab-'+id);panel.innerHTML=`<span class="skill-glyph" aria-hidden="true">${s.symbol}</span><span class="micro">SECURITY DOMAIN / ${s.name.toUpperCase()}</span><h3>${s.label}</h3><p>${s.desc}</p><div class="chips">${s.tools.map(t=>`<span>${t}</span>`).join('')}</div><span class="skill-detail-foot">LEARNING THROUGH CONTROLLED, HANDS-ON PRACTICE.</span>`;enterPanel(panel);syncDomains(id);}
function selectJourney(i){const j=journey[i];document.querySelectorAll('[data-journey]').forEach(b=>{const active=Number(b.dataset.journey)===i;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});const panel=document.querySelector('#journey-detail');panel.setAttribute('aria-labelledby','journey-tab-'+i);panel.innerHTML=`<div><span class="micro">${j.date}</span><h3>${j.title}</h3><span>${j.org} / ${j.type}</span><p>${j.desc}</p></div>`;enterPanel(panel);}

function syncDomains(id){
 const s=skills.find(s=>s.id===id);if(!s)return;
 document.querySelectorAll('[data-map]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.map===id)));
 const preview=document.querySelector('.map-selection');
 if(!preview.hidden){
  preview.innerHTML=`<span class="map-selection-glyph">${s.symbol}</span><div><span class="micro">${s.name.toUpperCase()}</span><h3>${s.label}</h3><p>${s.desc}</p></div><a href="#toolkit" class="underlink">Explore tools</a><button aria-label="Close discipline preview">✕</button>`;
  preview.querySelector('button').addEventListener('click',()=>{preview.hidden=true;(document.querySelector('[data-map="'+id+'"]')||document.querySelector('[data-skill="'+id+'"]'))?.focus();});
 }
}
