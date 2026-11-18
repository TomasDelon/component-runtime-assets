(()=>{var C=Object.freeze({ColorMixer:{description:"Live RGB color mixer",props:["title"]},TaskBoard:{description:"Editable task checklist",props:["heading"]},SortableTable:{description:"Searchable and sortable data table",props:["title"]},QuizCard:{description:"Interactive multiple-choice question",props:["question"]},Counter:{description:"Increment and decrement counter",props:["title","initial"]},AnalyticsChart:{description:"Interactive SVG analytics chart",props:["title"]},ConfidenceSlider:{description:"Confidence percentage slider",props:["question","initial"]}}),x=Object.freeze(Object.keys(C));var E=12e3,A=12e3,O=new Set(["__proto__","constructor","prototype"]);function w(o){if(typeof o!="string"||!o.trim()||o.length>E)throw new Error("Provide one component tag of at most 12,000 characters.");let i=/^<([A-Za-z][A-Za-z0-9_]{0,47})(?=\s|\/>)([\s\S]*?)\/>$/.exec(o.trim());if(!i)throw new Error("Use one self-closing tag, for example <Counter initial={3} />.");let s=i[1];if(!x.includes(s))throw new Error(`Unknown component: ${s}. Available: ${x.join(", ")}.`);let r=i[2],l=Object.create(null),t=0,m=()=>{for(;/\s/.test(r[t]||"");)t++};for(;t<r.length&&(m(),!(t>=r.length));){let b=/^[A-Za-z][A-Za-z0-9_]*/.exec(r.slice(t));if(!b)throw new Error(`Invalid attribute at position ${t+1}.`);let n=b[0];if(O.has(n)||Object.hasOwn(l,n))throw new Error(`Duplicate or reserved attribute: ${n}.`);t+=n.length,m();let g=!0;if(r[t]==="="){t++,m();let u=r[t];if(u==='"'||u==="'"){t++;let e="",a=!1;for(;t<r.length;){let c=r[t++];if(c===u){a=!0;break}if(c==="\\"&&t<r.length){let h=r[t++];e+=h==="n"?`
`:h==="t"?"	":h}else e+=c}if(!a)throw new Error(`Unclosed quoted value for ${n}.`);g=e}else if(u==="{"){t++;let e=1,a="",c=!1,h=t;for(;t<r.length&&e>0;){let d=r[t++];a?c?c=!1:d==="\\"?c=!0:d===a&&(a=""):d==='"'||d==="'"?a=d:d==="{"?e++:d==="}"&&e--}if(e!==0)throw new Error(`Unclosed JSON literal for ${n}.`);try{g=JSON.parse(r.slice(h,t-1))}catch{throw new Error(`Attribute ${n} must contain valid JSON, not JavaScript.`)}}else throw new Error(`Attribute ${n} requires a quoted string or {JSON literal}.`)}if(l[n]=g,t<r.length&&!/\s/.test(r[t]))throw new Error(`Separate attributes with whitespace near ${n}.`)}let f=JSON.parse(JSON.stringify(l));if(JSON.stringify(f).length>A)throw new Error("Component properties are too large.");return{name:s,props:f}}var v=`<div id="tomas-inline-rgb-01" style="font-family:system-ui,-apple-system,sans-serif;width:100%;max-width:540px;color:var(--viz-text,#263246);box-sizing:border-box">
  <style>
    #tomas-inline-rgb-01 *{box-sizing:border-box}
    #tomas-inline-rgb-01 .tm-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}
    #tomas-inline-rgb-01 h3{font-size:16px;font-weight:650;margin:0}
    #tomas-inline-rgb-01 .tm-hex{font-size:13px;font-weight:650;font-variant-numeric:tabular-nums;letter-spacing:.025em;background:rgba(130,140,150,.11);border-radius:8px;padding:6px 10px}
    #tomas-inline-rgb-01 .tm-preview{height:116px;background:rgb(147,197,167);border-radius:13px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:19px;font-weight:650;letter-spacing:.02em;text-shadow:0 1px 4px #0008;transition:background-color .08s}
    #tomas-inline-rgb-01 .tm-controls{display:grid;gap:13px;margin-top:19px}
    #tomas-inline-rgb-01 .tm-channel{display:grid;grid-template-columns:59px minmax(0,1fr) 35px;gap:12px;align-items:center}
    #tomas-inline-rgb-01 label{font-size:13px;font-weight:500}
    #tomas-inline-rgb-01 output{font-size:13px;text-align:right;font-variant-numeric:tabular-nums;color:var(--viz-muted,#697586)}
    #tomas-inline-rgb-01 input[type=range]{width:100%;margin:0;height:20px;cursor:pointer;accent-color:#467ad8}
    #tomas-inline-rgb-01 input[data-channel=r]{accent-color:#e65c5c}
    #tomas-inline-rgb-01 input[data-channel=g]{accent-color:#44ae7b}
    #tomas-inline-rgb-01 input[data-channel=b]{accent-color:#4c86e9}
    @media(max-width:380px){#tomas-inline-rgb-01 .tm-channel{grid-template-columns:43px minmax(0,1fr) 30px;gap:8px}#tomas-inline-rgb-01 .tm-preview{height:95px}}
  </style>
  <div class="tm-head">
    <h3>RGB Color Mixer</h3>
    <span class="tm-hex" data-hex>#93C5A7</span>
  </div>
  <div class="tm-preview" data-preview><span data-preview-text>#93C5A7</span></div>
  <div class="tm-controls">
    <div class="tm-channel">
      <label for="tm-r-01">Red</label>
      <input id="tm-r-01" type="range" min="0" max="255" value="147" data-channel="r">
      <output data-value="r" for="tm-r-01">147</output>
    </div>
    <div class="tm-channel">
      <label for="tm-g-01">Green</label>
      <input id="tm-g-01" type="range" min="0" max="255" value="197" data-channel="g">
      <output data-value="g" for="tm-g-01">197</output>
    </div>
    <div class="tm-channel">
      <label for="tm-b-01">Blue</label>
      <input id="tm-b-01" type="range" min="0" max="255" value="167" data-channel="b">
      <output data-value="b" for="tm-b-01">167</output>
    </div>
  </div>
  <script>
  (() => {
    const root = document.getElementById("tomas-inline-rgb-01");
    if (!root) return;
    const sliders = ["r","g","b"].map(ch => root.querySelector(\`[data-channel="\${ch}"]\`));
    const toHex = value => value.toString(16).padStart(2,"0").toUpperCase();
    const update = () => {
      const values = sliders.map(input => Number(input.value));
      const hex = "#" + values.map(toHex).join("");
      root.querySelector("[data-preview]").style.backgroundColor = \`rgb(\${values.join(",")})\`;
      root.querySelector("[data-preview-text]").textContent = hex;
      root.querySelector("[data-hex]").textContent = hex;
      ["r","g","b"].forEach((ch,i) => {
        root.querySelector(\`[data-value="\${ch}"]\`).textContent = String(values[i]);
      });
    };
    sliders.forEach(input => input.addEventListener("input",update));
    update();
  })();
  <\/script>
</div>`;var k=new Set(["r","g","b","title"]),M=o=>o.replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i]);async function y(o){let{name:i,props:s}=w(o);if(i!=="ColorMixer")throw new Error("The native compiler currently supports ColorMixer only.");for(let e of Object.keys(s))if(!k.has(e))throw new Error(`Unsupported ColorMixer property: ${e}.`);let r=["r","g","b"].map((e,a)=>{let c=Object.hasOwn(s,e)?s[e]:[147,197,167][a];if(!Number.isInteger(c)||c<0||c>255)throw new Error(`ColorMixer ${e} must be an integer from 0 to 255.`);return c}),l=Object.hasOwn(s,"title")?s.title:"RGB Color Mixer";if(typeof l!="string"||!l.trim()||l.length>200)throw new Error("ColorMixer title must be a nonempty string of at most 200 characters.");let t=crypto.randomUUID(),m=`tomas-inline-rgb-${t}`,f=`tomas-color-mixer-${t}`,b="#"+r.map(e=>e.toString(16).padStart(2,"0").toUpperCase()).join(""),n=v.replaceAll("tomas-inline-rgb-01",m).replaceAll("rgb(147,197,167)",`rgb(${r.join(",")})`).replaceAll("#93C5A7",b).replace("<h3>RGB Color Mixer</h3>",`<h3>${M(l)}</h3>`);["r","g","b"].forEach((e,a)=>{n=n.replaceAll(`tm-${e}-01`,`tm-${e}-${t}`).replace(`value="${[147,197,167][a]}" data-channel="${e}"`,`value="${r[a]}" data-channel="${e}"`).replace(`data-value="${e}" for="tm-${e}-${t}">${[147,197,167][a]}</output>`,`data-value="${e}" for="tm-${e}-${t}">${r[a]}</output>`)}),n=n.replace("if (!root) return;",'if (!root || root.dataset.ready === "true") return;').replace(`    update();
  })();`,`    update();
    root.dataset.ready = "true";
  })();`);let g=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n)),u=Array.from(new Uint8Array(g),e=>e.toString(16).padStart(2,"0")).join("");return{html:n,component:i,props:{r:r[0],g:r[1],b:r[2],title:l},rootId:m,appBlockId:f,sha256:u}}var $=document.currentScript,S=$?.getAttribute("data-root"),z=$?.getAttribute("data-markup"),p=S&&document.getElementById(S);async function j(){if(!(!p||p.dataset.loading==="true"||p.dataset.loaded==="true")){p.dataset.loading="true",p.textContent="Cargando\u2026";try{let o=await y(z),i=document.createElement("template");i.innerHTML=o.html;let s=[...i.content.querySelectorAll("script")];for(let r of s)r.remove();p.replaceChildren(i.content);for(let r of s){let l=document.createElement("script");l.textContent=r.textContent,p.appendChild(l)}if(document.getElementById(o.rootId)?.dataset.ready!=="true")throw new Error("The component did not initialize.");p.dataset.loaded="true",p.dataset.sourceSha256=o.sha256}catch(o){p.textContent="No se pudo cargar el componente.",p.dataset.error=o.message}finally{delete p.dataset.loading}}}j();})();
