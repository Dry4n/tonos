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

const app=document.getElementById('app');const toast=document.getElementById('toast');let active=null;let toastTimer;
function render(){
 if(!active){app.innerHTML=`<div class="heading"><h1>Elige un color</h1><span>12 familias</span></div><div class="family-grid">${colors.map(c=>`<button class="family" type="button" data-family="${c.slug}" aria-label="Ver tonalidades de ${c.name}"><span class="family-preview" style="display:block;background:linear-gradient(90deg,${c.tones.map((hex,i)=>`${hex} ${i*10}% ${(i+1)*10}%`).join(',')})"></span><span class="family-name">${c.name}</span><span class="family-code">${c.base.toLowerCase()}</span></button>`).join('')}</div>`;
 app.querySelectorAll('[data-family]').forEach(button=>button.addEventListener('click',()=>{active=colors.find(c=>c.slug===button.dataset.family);render()}));
 }else{
 app.innerHTML=`<button class="back" type="button">← Todos los colores</button><div class="heading"><h1>${active.name}</h1><span>10 tonalidades</span></div><div class="tone-grid">${active.tones.map((hex,i)=>`<button class="tone" type="button" data-hex="${hex}" aria-label="Copiar ${hex}, ${active.name} ${i===0?50:i*100}"><span class="tone-top"><span class="shade">${i===0?50:i*100}</span><span class="hex">${hex}</span></span><span class="tone-color" style="--color:${hex}"></span></button>`).join('')}</div>`;
 app.querySelector('.back').addEventListener('click',()=>{active=null;render()});
 app.querySelectorAll('[data-hex]').forEach(button=>button.addEventListener('click',async()=>{
  const hex=button.dataset.hex;
  try{await navigator.clipboard.writeText(hex)}catch{const input=document.createElement('textarea');input.value=hex;document.body.append(input);input.select();document.execCommand('copy');input.remove()}
  toast.textContent=`${hex} copiado`;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),1600)
 }));
 }
}
render();
