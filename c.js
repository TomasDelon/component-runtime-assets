(()=>{var $=Object.freeze({ColorMixer:{description:"Live RGB color mixer",props:["title"]},TaskBoard:{description:"Editable task checklist",props:["heading"]},SortableTable:{description:"Searchable and sortable data table",props:["title"]},QuizCard:{description:"Interactive multiple-choice question",props:["question"]},Counter:{description:"Increment and decrement counter",props:["title","initial"]},AnalyticsChart:{description:"Interactive SVG analytics chart",props:["title"]},ConfidenceSlider:{description:"Confidence percentage slider",props:["question","initial"]}}),x=Object.freeze(Object.keys($));var E=12e3,M=12e3,A=new Set(["__proto__","constructor","prototype"]);function w(n){if(typeof n!="string"||!n.trim()||n.length>E)throw new Error("Provide one component tag of at most 12,000 characters.");let o=/^<([A-Za-z][A-Za-z0-9_]{0,47})(?=\s|\/>)([\s\S]*?)\/>$/.exec(n.trim());if(!o)throw new Error("Use one self-closing tag, for example <Counter initial={3} />.");let l=o[1];if(!x.includes(l))throw new Error(`Unknown component: ${l}. Available: ${x.join(", ")}.`);let r=o[2],c=Object.create(null),t=0,u=()=>{for(;/\s/.test(r[t]||"");)t++};for(;t<r.length&&(u(),!(t>=r.length));){let b=/^[A-Za-z][A-Za-z0-9_]*/.exec(r.slice(t));if(!b)throw new Error(`Invalid attribute at position ${t+1}.`);let a=b[0];if(A.has(a)||Object.hasOwn(c,a))throw new Error(`Duplicate or reserved attribute: ${a}.`);t+=a.length,u();let g=!0;if(r[t]==="="){t++,u();let m=r[t];if(m==='"'||m==="'"){t++;let e="",s=!1;for(;t<r.length;){let p=r[t++];if(p===m){s=!0;break}if(p==="\\"&&t<r.length){let h=r[t++];e+=h==="n"?`
`:h==="t"?"	":h}else e+=p}if(!s)throw new Error(`Unclosed quoted value for ${a}.`);g=e}else if(m==="{"){t++;let e=1,s="",p=!1,h=t;for(;t<r.length&&e>0;){let d=r[t++];s?p?p=!1:d==="\\"?p=!0:d===s&&(s=""):d==='"'||d==="'"?s=d:d==="{"?e++:d==="}"&&e--}if(e!==0)throw new Error(`Unclosed JSON literal for ${a}.`);try{g=JSON.parse(r.slice(h,t-1))}catch{throw new Error(`Attribute ${a} must contain valid JSON, not JavaScript.`)}}else throw new Error(`Attribute ${a} requires a quoted string or {JSON literal}.`)}if(c[a]=g,t<r.length&&!/\s/.test(r[t]))throw new Error(`Separate attributes with whitespace near ${a}.`)}let f=JSON.parse(JSON.stringify(c));if(JSON.stringify(f).length>M)throw new Error("Component properties are too large.");return{name:l,props:f}}var v=`<div id="tomas-inline-rgb-01" style="font-family:system-ui,-apple-system,sans-serif;width:100%;max-width:540px;color:var(--viz-text,#263246);box-sizing:border-box">
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
</div>`;var O=new Set(["r","g","b","title"]),k=n=>n.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]);async function y(n){let{name:o,props:l}=w(n);if(o!=="ColorMixer")throw new Error("The native compiler currently supports ColorMixer only.");for(let e of Object.keys(l))if(!O.has(e))throw new Error(`Unsupported ColorMixer property: ${e}.`);let r=["r","g","b"].map((e,s)=>{let p=Object.hasOwn(l,e)?l[e]:[147,197,167][s];if(!Number.isInteger(p)||p<0||p>255)throw new Error(`ColorMixer ${e} must be an integer from 0 to 255.`);return p}),c=Object.hasOwn(l,"title")?l.title:"RGB Color Mixer";if(typeof c!="string"||!c.trim()||c.length>200)throw new Error("ColorMixer title must be a nonempty string of at most 200 characters.");let t=crypto.randomUUID(),u=`tomas-inline-rgb-${t}`,f=`tomas-color-mixer-${t}`,b="#"+r.map(e=>e.toString(16).padStart(2,"0").toUpperCase()).join(""),a=v.replaceAll("tomas-inline-rgb-01",u).replaceAll("rgb(147,197,167)",`rgb(${r.join(",")})`).replaceAll("#93C5A7",b).replace("<h3>RGB Color Mixer</h3>",`<h3>${k(c)}</h3>`);["r","g","b"].forEach((e,s)=>{a=a.replaceAll(`tm-${e}-01`,`tm-${e}-${t}`).replace(`value="${[147,197,167][s]}" data-channel="${e}"`,`value="${r[s]}" data-channel="${e}"`).replace(`data-value="${e}" for="tm-${e}-${t}">${[147,197,167][s]}</output>`,`data-value="${e}" for="tm-${e}-${t}">${r[s]}</output>`)}),a=a.replace("if (!root) return;",'if (!root || root.dataset.ready === "true") return;').replace(`    update();
  })();`,`    update();
    root.dataset.ready = "true";
  })();`);let g=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(a)),m=Array.from(new Uint8Array(g),e=>e.toString(16).padStart(2,"0")).join("");return{html:a,component:o,props:{r:r[0],g:r[1],b:r[2],title:c},rootId:u,appBlockId:f,sha256:m}}function S(n){if(!n?.parentNode)return null;if(n.__tcMount?.isConnected)return n.__tcMount;let o=n.ownerDocument.createElement("div");return o.dataset.tcMount="",n.before(o),n.__tcMount=o,o}var C=document.currentScript,i=S(C),z=C?.getAttribute("data-ui")??"<ColorMixer />";async function j(){if(!(!i||i.dataset.loading||i.dataset.loaded)){i.dataset.loading="true",i.textContent="Cargando\u2026";try{let n=await y(z),o=i.ownerDocument.createElement("template");o.innerHTML=n.html;let l=[...o.content.querySelectorAll("script")];for(let r of l)r.remove();i.replaceChildren(o.content);for(let r of l){let c=i.ownerDocument.createElement("script");c.textContent=r.textContent,i.appendChild(c)}if(i.querySelector("[data-ready]")?.dataset.ready!=="true")throw new Error("The component did not initialize.");i.dataset.loaded="true",i.dataset.sourceSha256=n.sha256}catch(n){i.textContent="No se pudo cargar el componente.",i.dataset.error=n.message}finally{delete i.dataset.loading}}}j();})();
