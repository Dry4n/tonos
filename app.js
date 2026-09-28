const colors=[
{slug:'slate',name:'Slate',base:'#64748B',tones:['#F8FAFC','#F1F5F9','#E2E8F0','#CBD5E1','#94A3B8','#64748B','#475569','#334155','#1E293B','#0F172A']},
{slug:'rojo',name:'Rojo',base:'#EF4444',tones:['#FEF2F2','#FEE2E2','#FECACA','#FCA5A5','#F87171','#EF4444','#DC2626','#B91C1C','#991B1B','#7F1D1D']},
{slug:'naranja',name:'Naranja',base:'#F97316',tones:['#FFF7ED','#FFEDD5','#FED7AA','#FDBA74','#FB923C','#F97316','#EA580C','#C2410C','#9A3412','#7C2D12']},
{slug:'ambar',name:'Ámbar',base:'#F59E0B',tones:['#FFFBEB','#FEF3C7','#FDE68A','#FCD34D','#FBBF24','#F59E0B','#D97706','#B45309','#92400E','#78350F']},
{slug:'verde',name:'Verde',base:'#22C55E',tones:['#F0FDF4','#DCFCE7','#BBF7D0','#86EFAC','#4ADE80','#22C55E','#16A34A','#15803D','#166534','#14532D']},
{slug:'esmeralda',name:'Esmeralda',base:'#10B981',tones:['#ECFDF5','#D1FAE5','#A7F3D0','#6EE7B7','#34D399','#10B981','#059669','#047857','#065F46','#064E3B']},
{slug:'turquesa',name:'Turquesa',base:'#14B8A6',tones:['#F0FDFA','#CCFBF1','#99F6E4','#5EEAD4','#2DD4BF','#14B8A6','#0D9488','#0F766E','#115E59','#134E4A']},
{slug:'cielo',name:'Cielo',base:'#0EA5E9',tones:['#F0F9FF','#E0F2FE','#BAE6FD','#7DD3FC','#38BDF8','#0EA5E9','#0284C7','#0369A1','#075985','#0C4A6E']},
{slug:'azul',name:'Azul',base:'#3B82F6',tones:['#EFF6FF','#DBEAFE','#BFDBFE','#93C5FD','#60A5FA','#3B82F6','#2563EB','#1D4ED8','#1E40AF','#1E3A8A']},
{slug:'indigo',name:'Índigo',base:'#6366F1',tones:['#EEF2FF','#E0E7FF','#C7D2FE','#A5B4FC','#818CF8','#6366F1','#4F46E5','#4338CA','#3730A3','#312E81']},
{slug:'violeta',name:'Violeta',base:'#8B5CF6',tones:['#F5F3FF','#EDE9FE','#DDD6FE','#C4B5FD','#A78BFA','#8B5CF6','#7C3AED','#6D28D9','#5B21B6','#4C1D95']},
{slug:'rosa',name:'Rosa',base:'#EC4899',tones:['#FDF2F8','#FCE7F3','#FBCFE8','#F9A8D4','#F472B6','#EC4899','#DB2777','#BE185D','#9D174D','#831843']}
];
const icon='<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';
const app=document.getElementById('app');const toast=document.getElementById('toast');let timeout;
function render(){
 const slug=decodeURIComponent(location.hash.slice(1));const selected=colors.find(c=>c.slug===slug);
 document.title=selected?`${selected.name} · Tonos`:'Tonos · Colores para diseño web';
 if(selected){app.innerHTML=`<a class="back" href="#">← Todos los colores</a><div class="heading detail-heading"><p class="eyebrow">10 tonalidades · 50–900</p><h1><span class="title-dot" style="--color:${selected.base}"></span>${selected.name}</h1><p class="description">Haz clic en una muestra para copiar su código HEX.</p></div><div class="tone-grid">${selected.tones.map((hex,index)=>`<button class="swatch" type="button" data-hex="${hex}" aria-label="Copiar ${hex}, ${selected.name} ${index===0?50:index*100}"><span class="code-row"><span class="scale-label">${index===0?50:index*100}</span><span class="hex">${hex}</span>${icon}</span><span class="color-block" style="--color:${hex}"></span></button>`).join('')}</div>`}
 else{app.innerHTML=`<div class="heading"><p class="eyebrow">Paleta de referencia</p><h1>Elige un color</h1><p class="description">Abre una familia para explorar sus tonalidades.</p></div><div class="family-grid">${colors.map(c=>`<a class="family" href="#${c.slug}" aria-label="Ver tonalidades de ${c.name}"><div class="family-preview" style="background:linear-gradient(90deg,${c.tones.map((hex,i)=>`${hex} ${i*10}% ${(i+1)*10}%`).join(',')})"></div><div class="family-meta"><span class="family-name">${c.name}</span><span class="family-code">${c.base.toLowerCase()}</span></div></a>`).join('')}</div>`}
 app.querySelectorAll('.swatch').forEach(button=>button.addEventListener('click',async()=>{const hex=button.dataset.hex;try{await navigator.clipboard.writeText(hex)}catch{const input=document.createElement('textarea');input.value=hex;document.body.append(input);input.select();document.execCommand('copy');input.remove()}toast.textContent=`${hex} copiado`;toast.classList.add('visible');clearTimeout(timeout);timeout=setTimeout(()=>toast.classList.remove('visible'),1700)}));
}
window.addEventListener('hashchange',render);render();
