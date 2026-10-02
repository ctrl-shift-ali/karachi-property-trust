/* Runs the REAL js/app.js (with a DOM stub) and drives buildAutomaticResult
   — the exact function the live UI calls — over the real fixture text,
   using FREE-SEARCH matching (no anchor property), as the live app does.
   Verifies the UI-facing result objects, not just the parser. */
const fs=require('fs'),path=require('path'),vm=require('vm');
const stub=()=>new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>'':stub(),apply:()=>stub(),set:()=>true});
const store={};
const ctx={console,setTimeout,clearTimeout,setInterval,clearInterval,Promise,JSON,Math,Date,Object,Array,String,Number,RegExp,Uint8Array,Error,
  localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v,removeItem:k=>delete store[k]},
  document:stub(),navigator:{},location:{hash:''},addEventListener(){},requestAnimationFrame(f){},fetch:()=>{}};
ctx.window=ctx; ctx.globalThis=ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/extraction.js'),'utf8'),ctx);
try{ vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/app.js'),'utf8'),ctx); }catch(e){ console.log('app.js init note (DOM stub):',e.message); }
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'fixtures/manifest.json')));
const TYPE={'CNIC':'cnic','Property Ownership Paper':'property','Sale Deed':'sale_deed','Lease Deed':'lease_deed','Allotment Letter':'allotment','Transfer Order':'transfer_order','NOC':'noc','Power of Attorney':'poa','Building Approval':'building_approval','Property Tax Document':'property_tax','Utility Bill':'utility'};
const norm=s=>{s=s.toUpperCase();return s.includes('INTERNAL')?'suspicious':(s.includes('INSUFFICIENT')||s.includes('UNABLE'))?'unable_to_verify':s.includes('NOT VERIFIED')?'not_verified':'verified';};
let out={ocr:[0,0],pdf:[0,0]}, fp=[], fn=[];
manifest.forEach(e=>{
  const base=e.file.replace(/\.(png|jpg)\/\.pdf$/i,'').replace(/\.jpg$/i,'');
  [['ocr','ocr_text','ocr'],['pdf','pdf_text','pdf-text']].forEach(([lane,dir,src])=>{
    const f=path.join(__dirname,'fixtures',dir,base+'.txt'); if(!fs.existsSync(f)) return;
    const ex=ctx.Extraction.parseDocumentText(fs.readFileSync(f,'utf8'),TYPE[e.type]||'property');
    const r=ctx.buildAutomaticResult(ex,{name:base},src);
    const exp=norm(e.expected_result); out[lane][1]++;
    if(r.status===exp) out[lane][0]++;
    if(exp!=='verified' && r.status==='verified') fp.push(lane+'/'+base);
    if(exp==='verified' && r.status!=='verified') fn.push(lane+'/'+base+' -> '+r.status);
  });
});
console.log('App-level (free-search) results: OCR '+out.ocr.join('/')+' | PDF '+out.pdf.join('/'));
console.log('FALSE POSITIVES (wrongly VERIFIED):',fp.length?fp.join(', '):'none');
console.log('FALSE NEGATIVES (valid doc not VERIFIED):',fn.length?fn.join('; '):'none');
