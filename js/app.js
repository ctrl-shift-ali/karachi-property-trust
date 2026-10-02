const LOGO = 'data:image/png;base64,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';

function escapeHtml(value){
  return String(value == null ? '' : value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}
/* ---------- DEMO DATA (kept consistent across every view) ---------- */
const PROPERTIES = [
  {id:'p1',title:'5 Bed House',type:'House',area:'DHA Phase 6',price:65000000,priceLabel:'PKR 6.50 Crore',size:'500 Sq. Yards',beds:5,baths:6,image:'assets/Property Images/DHA_phase_4_2_House.jpg', VerificationImage:'assets/Property Images/Defense House 1.jpeg', plot:'Plot 34-C, Street 12',survey:'—',deh:'—',scheme:'—',owner:'Ahmed Ali',cnic:'42101-1234567-1',ownerRole:'Owner',sellerType:'Owner (Direct)',featured:true,
    desc:'A double-storey house with a modern facade, marble flooring, and a small lawn. Includes servant quarters, a covered car porch for two vehicles, and a rooftop terrace.',
    verification:{documents:{status:'verified',note:'Sale deed and allotment letter uploaded and internally consistent.'},legal:{status:'verified',note:'No recorded litigation found against this plot in the checked registry extract.'},ownership:{status:'verified',note:'Title chain shows two prior transfers, both documented.'},utilities:{status:'review',note:'K-Electric bill shows a small arrear from the previous quarter.'},inspection:{status:'unchecked',note:'No inspection has been requested yet.'},seller:{status:'verified',note:'Seller identity matches ownership record; no Power of Attorney involved.'}}},
  {id:'p2',title:'3 Bed House',type:'House',area:'Gulshan-e-Iqbal',price:28500000,priceLabel:'PKR 2.85 Crore',size:'240 Sq. Yards',beds:3,baths:3,image:'assets/Property Images/Gulshan H1.jpeg', VerificationImage:'assets/Property Images/pexels-luizavenanci-29334668.jpg', plot:'House 12/2, Block 6',survey:'—',deh:'—',scheme:'—',owner:'Sana Malik',cnic:'42101-2345678-2',ownerRole:'Owner',sellerType:'Owner (Direct)',featured:false,
    desc:'Single-storey renovated house on a quiet street, close to main Rashid Minhas Road. Newly tiled kitchen and updated wiring.',
    verification:{documents:{status:'review',note:'Sale deed uploaded; transfer order still pending upload.'},legal:{status:'unchecked',note:'Registry check has not been run yet.'},ownership:{status:'review',note:'One gap in the title chain between 2011 and 2015.'},utilities:{status:'verified',note:'All utility accounts show no outstanding dues.'},inspection:{status:'unchecked',note:'Not requested.'},seller:{status:'verified',note:'Seller verified as the recorded owner.'}}},
  {id:'p3',title:'Residential Appartment',type:'Apartment',area:'Scheme 33',price:18500000,priceLabel:'PKR 1.85 Crore',size:'200 Sq. Yards',beds:3,baths:4, image:'assets/Property Images/cameron-voyce-N7VSGoJqgZQ-unsplash.jpg', VerificationImage:'assets/Property Images/konpik-cityscape-9567180_1920.jpg', plot:'Plot 221, Sector 15-A',survey:'SR-4471',deh:'Deh Sohrab Goth',scheme:'Scheme 33',owner:'Bilal Qureshi',cnic:'42101-3456789-3',ownerRole:'Seller',sellerType:'Agent-assisted',featured:false,
    desc:'Corner plot on a 60ft road, ready for construction. Boundary wall already built on two sides.',
    verification:{documents:{status:'verified',note:'Allotment letter and NOC match plot number.'},legal:{status:'verified',note:'No encumbrance found on this plot as of the last registry check.'},ownership:{status:'verified',note:'Single-owner history since original allotment.'},utilities:{status:'unchecked',note:'Plot is undeveloped; no utility accounts exist yet.'},inspection:{status:'verified',note:'Boundary and access road confirmed by site visit.'},seller:{status:'review',note:'Agent is acting under a Power of Attorney — original document still awaited.'}}},
  {id:'p4',title:'Luxury Apartment',type:'Apartment',area:'Clifton',price:42000000,priceLabel:'PKR 4.20 Crore',size:'2400 Sq. Ft.',beds:4,baths:4,image:'assets/Property Images/pierre-chatel-innocenti-gxyeia7Syuk-unsplash.jpg', VerificationImage:'assets/Property Images/rhema-kallianpur-jbJ-_hw2yag-unsplash.jpg', plot:'Apt 903, Block 5',survey:'—',deh:'—',scheme:'—',owner:'Fatima Sheikh',cnic:'42201-4567890-4',ownerRole:'Owner',sellerType:'Owner (Direct)',featured:false,
    desc:'Sea-facing apartment on the 9th floor with a shared gym, generator backup, and covered parking for two cars.',
    verification:{documents:{status:'verified',note:'Sale deed and building completion certificate on file.'},legal:{status:'verified',note:'SBCA approval confirmed for this block.'},ownership:{status:'verified',note:'Direct ownership, no prior transfers.'},utilities:{status:'verified',note:'Maintenance and K-Electric dues fully paid.'},inspection:{status:'unchecked',note:'Not requested.'},seller:{status:'verified',note:'Seller is the sole registered owner.'}}},
  {id:'p5',title:'Commercial Plot',type:'Commercial Plot',area:'Korangi',price:19000000,priceLabel:'PKR 1.90 Crore',size:'300 Sq. Yards',beds:null,baths:null,image:'assets/Property Images/Korangi CH1.jpeg', VerificationImage:'assets/Property Images/pexels-nilufer-yilmaz-530112617-16680022.jpg', plot:'Plot C-14, Sector 24',survey:'SR-1187',deh:'Deh Khanto',scheme:'—',owner:'Yousuf Traders',ownerRole:'Seller',sellerType:'Company',featured:false,
    desc:'Main-road commercial plot suited for a small warehouse or retail outlet, currently vacant.',
    verification:{documents:{status:'issue',note:'Transfer order number does not match the registry reference on file.'},legal:{status:'issue',note:'A pending litigation flag was found against this plot.'},ownership:{status:'review',note:'Two overlapping ownership claims recorded.'},utilities:{status:'unchecked',note:'Not applicable — plot is vacant.'},inspection:{status:'unchecked',note:'Not requested.'},seller:{status:'review',note:'Company registration could not be independently matched yet.'}}},
  {id:'p6',title:'2 Bed Apartment',type:'Apartment',area:'North Nazimabad',price:13500000,priceLabel:'PKR 1.35 Crore',size:'1100 Sq. Ft.',beds:2,baths:2,image:'assets/Property Images/jalal-ajmal-uChTeAaCbDo-unsplash.jpg', VerificationImage:'assets/Property Images/theanandthakur-building-6011756_1920.jpg', plot:'Flat 4B, Block L',survey:'—',deh:'—',scheme:'—',owner:'Imran Siddiqui',cnic:'42101-5678901-5',ownerRole:'Owner',sellerType:'Owner (Direct)',featured:false,
    desc:'Compact family apartment near main Sakhi Hassan, recently repainted with new bathroom fittings.',
    verification:{documents:{status:'verified',note:'Sale deed matches building society records.'},legal:{status:'verified',note:'No litigation found.'},ownership:{status:'verified',note:'Ownership held since 2016, no transfers since.'},utilities:{status:'review',note:'Society maintenance dues pending for two months.'},inspection:{status:'unchecked',note:'Not requested.'},seller:{status:'verified',note:'Seller matches registered owner.'}}},
  {id:'p7',title:'Warehouse',type:'Warehouse',area:'Gulistan-e-Jauhar',price:31000000,priceLabel:'PKR 3.10 Crore',size:'1800 Sq. Yards',beds:null,baths:null,image:'assets/Property Images/WareHouse.jpeg', VerificationImage:'assets/Property Images/pexels-thanh-truc-ho-1074355465-23932604.jpg', plot:'Plot W-9, Sector 4',survey:'SR-2290',deh:'Deh Dih',scheme:'—',owner:'Tariq Enterprises',ownerRole:'Seller',sellerType:'Company',featured:false,
    desc:'Steel-structure warehouse with a loading bay and 3-phase electricity connection, previously used for cold storage.',
    verification:{documents:{status:'review',note:'Building plan approval uploaded, awaiting NOC.'},legal:{status:'unchecked',note:'Registry check not yet run.'},ownership:{status:'verified',note:'Single company ownership since construction.'},utilities:{status:'verified',note:'K-Electric industrial connection dues fully paid.'},inspection:{status:'review',note:'Roof structure flagged for a follow-up inspection.'},seller:{status:'verified',note:'Company directorship matches seller identity.'}}},
  {id:'p8',title:'Residential Land',type:'Land',area:'DHA Phase 8',price:52000000,priceLabel:'PKR 5.20 Crore',size:'600 Sq. Yards',beds:null,baths:null,image:'assets/Property Images/pexels-artbovich-8143683.jpg', VerificationImage:'assets/Property Images/pexels-artbovich-8143671.jpg', plot:'Plot 71, Block 6',survey:'SR-889',deh:'Deh Ibrahim Hyderi',scheme:'PECHS',owner:'Nadia Farooq',cnic:'42101-6789012-6',ownerRole:'Owner',sellerType:'Owner (Direct)',featured:false,
    desc:'Rare vacant plot in an established, centrally located society, boundary-walled on all sides.',
    verification:{documents:{status:'verified',note:'Original allotment letter and lease deed both on file.'},legal:{status:'verified',note:'No encumbrance recorded.'},ownership:{status:'verified',note:'Owned by the same family since original allotment.'},utilities:{status:'unchecked',note:'Not applicable — plot is vacant.'},inspection:{status:'verified',note:'Boundaries confirmed on-site.'},seller:{status:'verified',note:'Seller is the sole registered owner.'}}}
];
const AREAS = [...new Set(PROPERTIES.map(p=>p.area))];
const STATUS_META = {verified:{label:'Verified',color:'status-verified',icon:'✓'},review:{label:'Review Required',color:'status-review',icon:'⚠'},issue:{label:'Potential Issue',color:'status-issue',icon:'!'},unchecked:{label:'Not Checked',color:'status-unchecked',icon:'–'}};
const CATS = [['documents','Documents'],['legal','Legal & Registry'],['ownership','Ownership / Title Chain'],['utilities','Utilities & Taxes'],['inspection','Physical Inspection'],['seller','Seller / Agent']];

function overallStatus(p){
  const vals = CATS.map(c=>p.verification[c[0]].status);
  if(vals.includes('issue')) return 'issue';
  if(vals.includes('review')) return 'review';
  if(vals.every(v=>v==='verified')) return 'verified';
  return 'unchecked';
}
function money(n){return 'PKR '+ (n/10000000).toFixed(2).replace(/\.00$/,'') +' Crore';}

/* ---------- STATE ---------- */
let state = {view:'home', propId:null, search:'', areaFilter:null, typeFilter:'', sort:'newest', saved:new Set()};
let ownerVerificationStore = null;
let ownerVerificationPromise = null;
let ownerVerificationError = null;
let ownerVerificationId = '';
let ownerVerificationResult = null;
let ownerVerificationLookupError = '';
let ownerForecastYears = '';

function loadOwnerVerificationData(retry){
  if(retry){ ownerVerificationStore=null; ownerVerificationError=null; ownerVerificationPromise=null; }
  if(ownerVerificationStore || ownerVerificationPromise || ownerVerificationError) return;
  ownerVerificationPromise = OwnerVerification.loadStore()
    .then(store=>{
      ownerVerificationStore=store;
      ownerVerificationPromise=null;
      if(state.view==='ownerverify') render();
    })
    .catch(error=>{
      ownerVerificationError=error && error.message ? error.message : 'Unable to load the property CSV files.';
      ownerVerificationPromise=null;
      if(state.view==='ownerverify') render();
    });
}

function ownerPrice(value){ return 'PKR '+Math.round(value).toLocaleString('en-US'); }

function ownerDataField(label,value){
  return `<div class="owner-data-field"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value==null || value===''?'Not recorded':String(value))}</dd></div>`;
}

function renderOwnerForecast(record){
  const output=document.getElementById('ownerForecastOutput');
  if(!output) return;
  const raw=ownerForecastYears.trim();
  if(!raw){ output.innerHTML='<div class="owner-forecast-empty">Enter a whole number of years to view the scenario.</div>'; return; }
  const years=Number(raw);
  if(!Number.isInteger(years) || years<0 || years>50){
    output.innerHTML='<div class="owner-forecast-error">Enter a whole number from 0 to 50.</div>';
    return;
  }
  const result=ownerVerificationStore.forecast(record,years,0.05);
  output.innerHTML=`
    <div class="owner-forecast-value">${ownerPrice(result.forecastPrice)}</div>
    ${result.range?`<div class="owner-forecast-range">Estimated range: ${ownerPrice(result.range.low)} – ${ownerPrice(result.range.high)}</div>`:''}
    <div class="owner-forecast-meta">Current estimate: ${ownerPrice(result.currentPrice)} · Assumes 5% annual appreciation · ${escapeHtml(result.method)} · ${result.supportCount.toLocaleString()} priced records · ${escapeHtml(result.confidence)} confidence</div>`;
}

function lookupOwnerProperty(){
  if(!ownerVerificationStore) return;
  const input=document.getElementById('ownerPropertyId');
  ownerVerificationId=(input ? input.value : ownerVerificationId).trim().toUpperCase();
  ownerVerificationResult=ownerVerificationStore.lookup(ownerVerificationId);
  ownerVerificationLookupError=ownerVerificationResult ? '' : 'No property with that ID was found in the loaded CSV files.';
  ownerForecastYears='';
  render();
}

function renderOwnerVerification(){
  const dataStatus=ownerVerificationError
    ? `<div class="owner-data-error">${escapeHtml(ownerVerificationError)} <button class="btn btn-outline" onclick="loadOwnerVerificationData(true)">Retry</button></div>`
    : ownerVerificationStore
      ? `<div class="owner-data-loaded">Loaded ${ownerVerificationStore.recordCount.toLocaleString()} property records, including ${ownerVerificationStore.pricedCount.toLocaleString()} priced records, from the five CSV datasets.</div>`
      : '<div class="owner-data-loaded" role="status">Loading property records from the CSV files…</div>';
  const sourceList=ownerVerificationStore
    ? `<div class="owner-source-list">${Object.entries(ownerVerificationStore.sourceCounts).map(([name,count])=>`<span>${escapeHtml(name.replace(/\.csv$/i,''))} <strong>${count.toLocaleString()}</strong></span>`).join('')}</div>`
    : '';
  const record=ownerVerificationResult;
  const recordPanel=record ? `
    <div class="owner-results">
      <section class="owner-panel">
        <div class="owner-panel-heading"><h2>Registered Property</h2><span>${escapeHtml(record.propertyId)}</span></div>
        <dl class="owner-data-grid">
          ${ownerDataField('Owner name',record.ownerName)}
          ${ownerDataField('Property owner',record.listedOwner)}
          ${ownerDataField('Previous owner',record.previousOwner)}
          ${ownerDataField('Property type',record.propertyType)}
          ${ownerDataField('Area',record.area)}
          ${ownerDataField('Block',record.block)}
          ${ownerDataField('House number',record.houseNumber)}
          ${ownerDataField('Street number',record.streetNumber)}
          ${ownerDataField('Rooms',record.rooms)}
          ${ownerDataField('Owner ID',record.ownerId)}
          ${ownerDataField('Listed price',record.price==null?'Not priced in dataset':ownerPrice(record.price))}
          ${ownerDataField('Source CSV',record.sourceFile)}
        </dl>
      </section>
      <section class="owner-panel">
        <div class="owner-panel-heading"><h2>Record Checks</h2></div>
        <dl class="owner-status-grid">
          ${ownerDataField('Ownership status',record.ownershipStatus)}
          ${ownerDataField('Legal check',record.legalCheck)}
          ${ownerDataField('Taxes status',record.taxesStatus)}
          ${ownerDataField('Utilities bill',record.utilitiesBill)}
        </dl>
        <p class="owner-disclaimer">These values are read from the supplied CSV record. They are not independently confirmed against an authority.</p>
      </section>
      <section class="owner-panel owner-forecast-panel">
        <div class="owner-panel-heading"><h2>Assumption-Based Price Forecast</h2><span>5% per year</span></div>
        <div class="owner-forecast-input">
          <label for="ownerForecastYears">Forecast horizon (years)</label>
          <input id="ownerForecastYears" type="number" min="0" max="50" step="1" inputmode="numeric" value="${escapeHtml(ownerForecastYears)}" oninput="ownerForecastYears=this.value;renderOwnerForecast(ownerVerificationResult)">
        </div>
        <div id="ownerForecastOutput" class="owner-forecast-output" aria-live="polite"><div class="owner-forecast-empty">Enter a whole number of years to view the scenario.</div></div>
        ${record.price==null?'<p class="owner-disclaimer">This property has no recorded sale price. Its estimate uses priced properties in the same area/type where available, then falls back to area or global averages.</p>':''}
        <p class="owner-disclaimer">This compounds a current dataset estimate; the CSVs have no dated price history, so the future value is an assumption-based scenario, not a time-series prediction.</p>
      </section>
    </div>` : (ownerVerificationLookupError ? `<div class="owner-lookup-error" role="alert">${escapeHtml(ownerVerificationLookupError)}</div>` : '');

  return `
  <div class="header" style="padding-bottom:20px;">
    <div class="header-top">
      <button class="icon-btn" onclick="nav('home')" aria-label="Back to home"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="logo-badge"><img src="${LOGO}" alt="Karachi Property Trust"></div>
    </div>
    <div class="brand-block"><div class="brand" style="font-size:19px;">Owner Verification System</div><div class="tagline">Look up property ownership and record checks from the supplied datasets</div></div>
  </div>
  <main class="owner-verification">
    <section class="owner-lookup-panel">
      <div class="owner-lookup-heading"><div><h2>Find a Property Record</h2><p>Search by the Property ID printed in the CSV datasets.</p></div></div>
      <form class="owner-lookup-form" onsubmit="event.preventDefault();lookupOwnerProperty();">
        <div><label for="ownerPropertyId">Property ID</label><input id="ownerPropertyId" type="text" value="${escapeHtml(ownerVerificationId)}" placeholder="e.g. DEMO-KPT-8103" autocomplete="off" spellcheck="false" oninput="ownerVerificationId=this.value"></div>
        <button class="btn btn-primary" type="submit" ${ownerVerificationStore?'':'disabled'}>Search records</button>
      </form>
      <div class="owner-dataset-summary">${dataStatus}${sourceList}</div>
    </section>
    ${recordPanel}
    <p class="owner-disclaimer owner-page-disclaimer">Owner, legal, tax, utility, and price fields are displayed as provided in the CSVs. This tool is a dataset lookup, not official identity or title verification.</p>
  </main>`;
}

function syncThemeControls(){
  const isDark = document.documentElement.dataset.theme==='dark';
  const toggle = document.getElementById('themeToggle');
  if(toggle){
    toggle.setAttribute('aria-checked',String(isDark));
    toggle.setAttribute('aria-label','Switch to '+(isDark?'light':'dark')+' theme');
    toggle.title = 'Switch to '+(isDark?'light':'dark')+' theme';
  }
}
function toggleTheme(){
  const theme = document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme = theme;
  try{ localStorage.setItem('kpt-theme',theme); }catch(e){}
  syncThemeControls();
}

/* ---------- RENDER ---------- */
const app = document.getElementById('app');
function nav(view, propId){ if(typeof docState!=='undefined' && docState.step==='camera' && typeof stopDocumentCamera==='function') stopDocumentCamera(); state.view=view; state.propId=propId||null; window.scrollTo(0,0); render(); }

function render(){
  if(state.view==='home') app.innerHTML = renderHome();
  else if(state.view==='detail') app.innerHTML = renderDetail(state.propId);
  else if(state.view==='verify') app.innerHTML = renderVerify(state.propId);
  else if(state.view==='report') app.innerHTML = renderReport(state.propId);
  else if(state.view==='verlist') app.innerHTML = renderSubList('verifications');
  else if(state.view==='savedlist') app.innerHTML = renderSubList('saved');
  else if(state.view==='reportslist') app.innerHTML = renderSubList('reports');
  else if(state.view==='ownerverify') app.innerHTML = renderOwnerVerification();
  else if(state.view==='verify-document') app.innerHTML = renderVerifyDocument();
  renderDrawerNav();
  if(state.view==='ownerverify') loadOwnerVerificationData();
  // The full-viewport camera screens (.cam-fullscreen) cover the entire
  // viewport themselves; toggle a body class so the underlying page can't
  // add its own scrollable overflow (e.g. .wrap's min-height:100vh) behind
  // the fixed overlay, which would otherwise allow a pointless empty scroll.
  document.body.classList.toggle('cam-active', state.view==='verify-document' && docState.step==='camera');
}
function scrollToGrid(){ setTimeout(()=>{ const g=document.getElementById('grid'); if(g) g.scrollIntoView({behavior:'smooth'}); }, 60); }

function iconSvg(name){
  const icons = {
    home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/>',
    building:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>',
    shield:'<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/>',
    heart:'<path d="M12 20s-7-4.4-9.5-9C.9 7.6 3 4 6.5 4c2 0 3.5 1.2 4.5 2.7C12 5.2 13.5 4 15.5 4 19 4 21.1 7.6 19.5 11 17 15.6 12 20 12 20Z"/>',
    doc:'<path d="M8 2h6l4 4v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v4h4"/>',
    filecheck:'<path d="M8 2h6l4 4v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v4h4"/><path d="m9.2 14.3 1.8 1.8L15 12"/>',
    chart:'<path d="M4 20V10M12 20V4M20 20v-7"/>',
    faq:'<path d="M21 11.5a8.38 8.38 0 0 1-9 8.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.5 2.1c-.8.4-1.3 1-1.3 1.9"/><circle cx="11.8" cy="15.8" r=".6" fill="currentColor" stroke="none"/>'
  };
  return icons[name]||icons.home;
}

/* --- HOME --- */
function renderHome(){
  const featured = PROPERTIES.find(p=>p.featured);
  let list = PROPERTIES.filter(p=>{
    if(state.areaFilter && p.area!==state.areaFilter) return false;
    if(state.typeFilter && p.type!==state.typeFilter) return false;
    if(state.search){
      const s = state.search.toLowerCase();
      if(!(p.title.toLowerCase().includes(s)||p.area.toLowerCase().includes(s)||p.type.toLowerCase().includes(s))) return false;
    }
    return true;
  });
  if(state.sort==='low') list = list.slice().sort((a,b)=>a.price-b.price);
  if(state.sort==='high') list = list.slice().sort((a,b)=>b.price-a.price);
  if(state.sort==='large') list = list.slice().sort((a,b)=>parseFloat(b.size)-parseFloat(a.size));

  const areaChips = AREAS.map(a=>`<button class="area-chip ${state.areaFilter===a?'active':''}" onclick="setArea('${a}')">${a}</button>`).join('');
  const cards = list.map(p=>propCard(p)).join('') || `<div class="empty">No properties match these filters.<br>Try clearing a filter.</div>`;
  const listTitle = state.areaFilter ? `Properties in ${state.areaFilter}` : 'Property Listings';

  return `
  <div class="header">
    <div class="header-top">
      <button class="icon-btn" onclick="openDrawer()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
      <div class="logo-badge"><img src="${LOGO}" alt="Karachi Property Trust"></div>
    </div>
    <div class="brand-block">
      <div class="brand">Karachi Property Trust</div>
      <div class="tagline">Verification &amp; Trust Management System</div>
    </div>
    <div class="search-bar">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input placeholder="Search area, house, plot or property..." value="${state.search}" oninput="state.search=this.value; renderList();">
    </div>
  </div>
  <main>
    <div class="section-title">Featured Property</div>
    <div class="featured" onclick="nav('detail','${featured.id}')">
      <div class="fplaceholder" style="background-image:linear-gradient(0deg,rgba(0,0,0,.24),rgba(0,0,0,.04)),url('${featured.image}');background-size:cover;background-position:center;"><span class="tag">Featured</span></div>
      <div class="featured-body">
        <div class="ftitle">${featured.title}</div>
        <div class="floc">${featured.area}, Karachi</div>
        <div class="fprice">${featured.priceLabel}</div>
        <div class="fmeta">${featured.size}</div>
        <div class="verif-pill">✓ Verification Available</div>
        <button class="btn btn-primary btn-block">View Property</button>
      </div>
    </div>

    <div class="doc-banner">
      <div class="icon">📄</div>
      <div class="txt"><h4>Have a document?</h4><p>Check your property document before relying on it.</p></div>
      <button onclick="openVerifyDocument()">Verify Your Document</button>
    </div>

    <div class="section-title">Browse by Area</div>
    <div class="areas">${areaChips}${state.areaFilter?`<button class="area-chip" onclick="setArea(null)">Clear</button>`:''}</div>

    <div class="section-title" id="listTitle">${listTitle}</div>
    <div class="filters-row">
      <select onchange="state.typeFilter=this.value; renderList();">
        <option value="">All types</option>
        ${[...new Set(PROPERTIES.map(p=>p.type))].map(t=>`<option ${state.typeFilter===t?'selected':''}>${t}</option>`).join('')}
      </select>
      <select onchange="state.sort=this.value; renderList();">
        <option value="newest" ${state.sort==='newest'?'selected':''}>Newest</option>
        <option value="low" ${state.sort==='low'?'selected':''}>Price: Low to High</option>
        <option value="high" ${state.sort==='high'?'selected':''}>Price: High to Low</option>
        <option value="large" ${state.sort==='large'?'selected':''}>Largest Property</option>
      </select>
    </div>
    <div class="grid" id="grid">${cards}</div>

    <div class="cta">
      <h3>Already have a property in mind?</h3>
      <p>Check its documents, ownership, legal status and utility clearance before you buy.</p>
      <button class="btn btn-primary" onclick="document.getElementById('grid').scrollIntoView({behavior:'smooth'})">Start a Verification</button>
    </div>
  </main>`;
}
function renderList(){
  document.getElementById('listTitle').textContent = state.areaFilter?`Properties in ${state.areaFilter}`:'Property Listings';
  let list = PROPERTIES.filter(p=>{
    if(state.areaFilter && p.area!==state.areaFilter) return false;
    if(state.typeFilter && p.type!==state.typeFilter) return false;
    if(state.search){
      const s = state.search.toLowerCase();
      if(!(p.title.toLowerCase().includes(s)||p.area.toLowerCase().includes(s)||p.type.toLowerCase().includes(s))) return false;
    }
    return true;
  });
  if(state.sort==='low') list = list.slice().sort((a,b)=>a.price-b.price);
  if(state.sort==='high') list = list.slice().sort((a,b)=>b.price-a.price);
  if(state.sort==='large') list = list.slice().sort((a,b)=>parseFloat(b.size)-parseFloat(a.size));
  document.getElementById('grid').innerHTML = list.map(p=>propCard(p)).join('') || `<div class="empty">No properties match these filters.</div>`;
}
function setArea(a){ state.areaFilter=a; renderList(); document.querySelectorAll('.area-chip').forEach(c=>c.classList.remove('active')); if(a) event.target.classList.add('active'); }
function propCard(p){
  const ov = overallStatus(p);
  const vtext = ov==='verified'?'✓ Verification Available':(ov==='unchecked'?'Not Verified':'⚠ Review Required');
  return `<div class="pcard">
    <div class="thumb" onclick="nav('detail','${p.id}')" style="background-image:linear-gradient(0deg,rgba(0,0,0,.12),rgba(0,0,0,.02)),url('${p.image}');background-size:cover;background-position:center;">
      <button class="fav" onclick="event.stopPropagation();toggleSave('${p.id}')">${state.saved.has(p.id)?'♥':'♡'}</button>
      <span class="type-tag">${p.type}</span>
    </div>
    <div class="body">
      <div class="title">${p.title}</div>
      <div class="loc">${p.area}</div>
      <div class="price">${p.priceLabel}</div>
      <div class="size">${p.size}${p.beds?` · ${p.beds} Bed`:''}</div>
      <div class="vrow ${ov==='unchecked'?'mute':''}">${vtext}</div>
      <button class="viewbtn" onclick="nav('detail','${p.id}')">View Property</button>
    </div>
  </div>`;
}
function toggleSave(id){ state.saved.has(id)?state.saved.delete(id):state.saved.add(id); renderList(); }

/* --- DETAIL --- */
function renderDetail(id){
  const p = PROPERTIES.find(x=>x.id===id);
  const ov = overallStatus(p);
  return `
  <div class="hero" style="background-image:linear-gradient(180deg, rgba(15,42,61,.18), rgba(15,42,61,.34)), url('${p.image}'); background-size:cover; background-position:center; background-repeat:no-repeat;">
    <button class="backbtn" onclick="nav('home')">←</button>
    <button class="favbtn" onclick="toggleSave('${p.id}')">${state.saved.has(p.id)?'♥':'♡'}</button>
  </div>
  <div class="detail-card">
    <div class="d-title">${p.title}</div>
    <div class="d-loc">${p.area}, Karachi</div>
    <div class="d-price">${p.priceLabel}</div>
    <div class="d-stats">
      <div class="d-stat">📐 ${p.size}</div>
      ${p.beds?`<div class="d-stat">🛏 ${p.beds} Beds</div>`:''}
      ${p.baths?`<div class="d-stat">🛁 ${p.baths} Baths</div>`:''}
      <div class="d-stat" style="color:${ov==='verified'?'var(--ok)':ov==='issue'?'var(--bad)':ov==='review'?'var(--warn)':'var(--mute)'}">${STATUS_META[ov].icon} ${STATUS_META[ov].label}</div>
    </div>

    <div class="section-title" style="margin-top:20px;margin-bottom:8px;">Basic Information</div>
    <div class="info-grid">
      <div><span class="lbl">Property Type</span><span class="val">${p.type}</span></div>
      <div><span class="lbl">Reference</span><span class="val">${p.plot}</span></div>
      ${p.survey!=='—'?`<div><span class="lbl">Survey No.</span><span class="val">${p.survey}</span></div>`:''}
      ${p.deh!=='—'?`<div><span class="lbl">Deh</span><span class="val">${p.deh}</span></div>`:''}
      ${p.scheme!=='—'?`<div><span class="lbl">Scheme</span><span class="val">${p.scheme}</span></div>`:''}
    </div>

    <div class="owner-card">
      <div class="owner-avatar">${p.owner.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
      <div>
        <div class="owner-name">${p.owner}</div>
        <div class="owner-role">${p.ownerRole} · ${p.sellerType}</div>
      </div>
    </div>

    <details class="desc" open>
      <summary>Description &amp; Features ▾</summary>
      <p>${p.desc}</p>
    </details>

    <div class="action-row">
      <button class="btn btn-outline" onclick="toggleSave('${p.id}')">${state.saved.has(p.id)?'Saved':'Save Property'}</button>
      <button class="btn btn-outline" onclick="openChat()">Contact Seller</button>
      <button class="verify-cta-btn" onclick="nav('verify','${p.id}')">🛡 Verify This Property</button>
    </div>
  </div>
  <div style="height:24px;"></div>`;
}

/* --- VERIFY --- */
const CAT_ICONS = {documents:'📄',legal:'⚖️',ownership:'🔗',utilities:'⚡',inspection:'🔎',seller:'🤝'};
function renderVerify(id){
  const p = PROPERTIES.find(x=>x.id===id);
  const checkedCount = CATS.filter(c=>p.verification[c[0]].status!=='unchecked').length;
  const verifiedCount = CATS.filter(c=>p.verification[c[0]].status==='verified').length;
  const reviewCount = CATS.filter(c=>['review','issue'].includes(p.verification[c[0]].status)).length;
  const uncheckedCount = CATS.length-checkedCount;
  const pct = Math.round(checkedCount/CATS.length*100);

  const rows = CATS.map(([key,label])=>{
    const v = p.verification[key];
    const m = STATUS_META[v.status];
    let panel = `<div class="vcat-note">${v.note}</div>`;
    if(key==='documents'){
      panel += `
        <div class="mini-form">
          <div class="section-title" style="font-size:12.5px;margin:12px 0 0;">Enter property &amp; owner details</div>
          <label>Owner CNIC</label>
          <input id="cnic-${p.id}" placeholder="e.g. 42101-1234567-1">
          <label>Plot / Survey Number</label>
          <input id="plot-${p.id}" value="${p.plot!=='—'?p.plot:''}">
          <label>Owner Name</label>
          <input id="ownername-${p.id}" value="${p.owner}">
          <div class="save-row">
            <button class="vcat-btn" type="button" onclick="saveManualInfo('${p.id}')">Save Details</button>
            <span class="saved-msg" id="savedmsg-${p.id}">✓ Saved</span>
          </div>
        </div>
        <div class="upload-box">
          <div style="font-size:12px;color:var(--sub);margin-bottom:8px;">Not sure whether a document is genuine? Upload it here to check.</div>
          <label class="upload-btn" for="fileup-${p.id}">📎 Upload document to check</label>
          <input type="file" id="fileup-${p.id}" onchange="handleDocUpload(this,'${p.id}')">
          <div class="upload-filename" id="uf-${p.id}"></div>
          <div class="processing" id="proc-${p.id}"><span class="spin"></span> Extracting &amp; checking document…</div>
          <div class="auth-result" id="ar-${p.id}">
            <div class="arow"><span>Reference on file</span><span>${p.plot}</span></div>
            <div class="arow"><span>Reference match</span><span>${v.status==='issue'?'No':'Yes'}</span></div>
            <div class="arow"><span>Result</span><span class="status-badge ${m.color}">${m.icon} ${m.label}</span></div>
            <div class="auth-note">This is a document analysis, not an official government or bank authentication.</div>
          </div>
        </div>`;
    }
    return `<div class="vitem" id="vitem-${key}">
      <div class="vitem-row" onclick="document.getElementById('vitem-${key}').classList.toggle('open')">
        <div class="vitem-icon">${CAT_ICONS[key]}</div>
        <div class="vitem-main">
          <div class="vitem-title">${label}</div>
          <div class="vitem-status ${v.status}">${m.label}</div>
        </div>
        <span class="vitem-chev">›</span>
      </div>
      <div class="vitem-panel">${panel}</div>
    </div>`;
  }).join('');

  return `
  <div class="header" style="padding-bottom:20px;">
    <div class="header-top">
      <button class="icon-btn" onclick="nav('detail','${p.id}')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="logo-badge"><img src="${LOGO}" alt="Karachi Property Trust"></div>
    </div>
    <div class="brand-block"><div class="brand" style="font-size:19px;">Property Verification</div><div class="tagline">Independent check, not a purchase transaction</div></div>
  </div>
  <main>
    <div class="vprop">
      <div class="thumb"></div>
      <div>
        <div class="t">${p.title}</div>
        <div class="l">${p.area} · ${p.plot}</div>
        <div class="l">Owner: ${p.owner}</div>
      </div>
    </div>
    <div class="progress-label" style="display:flex;justify-content:space-between;"><span>Verification Progress</span><span>${pct}% Checked</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>

    <div class="section-title" style="margin-top:20px;">Verification Categories</div>
    <div class="section-sub">Tap a category to see details, add information, or upload a document.</div>
    ${rows}

    <div class="section-title">Risk &amp; Trust Summary</div>
    <div class="stat-row">
      <div class="stat-box"><div class="stat-num" style="color:var(--ok)">${verifiedCount}</div><div class="stat-lbl">Verified</div></div>
      <div class="stat-box"><div class="stat-num" style="color:var(--warn)">${reviewCount}</div><div class="stat-lbl">Review Required</div></div>
      <div class="stat-box"><div class="stat-num" style="color:var(--mute)">${uncheckedCount}</div><div class="stat-lbl">Not Verified</div></div>
    </div>
    <div class="disclaimer" style="margin-top:12px;">This is a document and record analysis, not an official government or bank authentication. Treat "Review Required" items as things to double-check with the relevant authority before proceeding.</div>

    <button class="btn btn-primary btn-block" onclick="nav('report','${p.id}')">View Full Report</button>
  </main>`;
}
function saveManualInfo(id){
  const msg = document.getElementById('savedmsg-'+id);
  if(!msg) return;
  msg.style.display='inline';
  clearTimeout(msg._t);
  msg._t = setTimeout(()=>{ msg.style.display='none'; }, 2200);
}
function handleDocUpload(el,id){
  const file = el.files[0]; if(!file) return;
  document.getElementById('uf-'+id).textContent = 'File: '+file.name;
  const proc = document.getElementById('proc-'+id), ar = document.getElementById('ar-'+id);
  ar.classList.remove('show'); proc.classList.add('show');
  setTimeout(()=>{ proc.classList.remove('show'); ar.classList.add('show'); }, 1500);
}

/* ==================================================================
   VERIFY YOUR DOCUMENT
   A separate feature from "Verify This Property". Verify This Property
   checks an entire listed property across categories. Verify Your
   Document independently checks ONE document — even when the property
   is not listed in PROPERTIES at all. Analysis below is a deterministic
   demo engine (no OCR/forensics backend exists yet); it is written as
   small modular functions so a real service can replace runDocumentChecks()
   later without touching the UI layer.
   ================================================================== */

const DOC_TYPES = ['Sale Deed','Lease Deed','Transfer Order','Allotment Letter','NOC','Power of Attorney','Ownership Document','Building Approval','Registry Document','Property Tax Document','Utility Document','Other / Unknown Document'];

const DOC_FIELD_DEFS = {
  documentNumber:{label:'Document Number', ph:'e.g. SD-2026-0182'},
  date:{label:'Date', type:'date'},
  ownerName:{label:'Owner Name', ph:'e.g. Ahmed Ali'},
  sellerName:{label:'Seller Name', ph:''},
  buyerName:{label:'Buyer Name', ph:''},
  cnic:{label:'CNIC / Reference Number', ph:'e.g. 42101-1234567-1'},
  plotNumber:{label:'Plot Number', ph:'e.g. 34-C'},
  surveyNumber:{label:'Survey Number', ph:''},
  propertyAddress:{label:'Property Address', ph:''},
  area:{label:'Area / Scheme', ph:''},
  deh:{label:'Deh', ph:''},
  scheme:{label:'Scheme', ph:''},
  authority:{label:'Authority', ph:''},
  registrationNumber:{label:'Registration Number', ph:''},
  nocNumber:{label:'NOC Number', ph:''},
  notes:{label:'Additional Notes', type:'textarea'}
};
const DOC_TYPE_FIELDS = {
  'Sale Deed':['documentNumber','date','ownerName','sellerName','buyerName','cnic','plotNumber','area','notes'],
  'Lease Deed':['documentNumber','date','ownerName','buyerName','plotNumber','area','notes'],
  'Transfer Order':['documentNumber','date','ownerName','plotNumber','surveyNumber','authority','notes'],
  'Allotment Letter':['documentNumber','date','ownerName','plotNumber','scheme','authority','notes'],
  'NOC':['nocNumber','date','ownerName','plotNumber','authority','notes'],
  'Power of Attorney':['documentNumber','date','ownerName','buyerName','cnic','notes'],
  'Ownership Document':['documentNumber','date','ownerName','plotNumber','area','notes'],
  'Building Approval':['documentNumber','date','ownerName','plotNumber','authority','notes'],
  'Registry Document':['registrationNumber','date','ownerName','plotNumber','surveyNumber','deh','notes'],
  'Property Tax Document':['registrationNumber','date','ownerName','propertyAddress','notes'],
  'Utility Document':['documentNumber','date','ownerName','propertyAddress','notes'],
  'Other / Unknown Document':['documentNumber','date','ownerName','plotNumber','propertyAddress','notes']
};
const DOC_REQUIRED_FIELDS = {
  'Sale Deed':['ownerName','plotNumber'], 'Lease Deed':['ownerName','plotNumber'],
  'Transfer Order':['ownerName','plotNumber'], 'Allotment Letter':['ownerName','plotNumber'],
  'NOC':['ownerName','plotNumber'], 'Power of Attorney':['ownerName'],
  'Ownership Document':['ownerName','plotNumber'], 'Building Approval':['ownerName','plotNumber'],
  'Registry Document':['ownerName','plotNumber'], 'Property Tax Document':['ownerName','propertyAddress'],
  'Utility Document':['ownerName','propertyAddress'], 'Other / Unknown Document':['ownerName']
};
const DOC_STATUS_META = {
  likely_original:{label:'Likely Original', icon:'✓', badge:'status-verified', tone:'ok',
    blurb:'The available checks did not identify major inconsistencies. This does not constitute official authentication.'},
  potentially_forged:{label:'Potentially Forged / Suspicious', icon:'⚠', badge:'status-issue', tone:'bad',
    blurb:'Possible inconsistencies or document anomalies were detected. Further review is recommended.'},
  review_required:{label:'Review Required', icon:'⚠', badge:'status-review', tone:'warn',
    blurb:'Some information could not be confirmed against available records.'},
  unable_to_determine:{label:'Unable to Determine', icon:'–', badge:'status-unchecked', tone:'mute',
    blurb:'The available information was insufficient to make an authenticity assessment.'}
};

function docNormalize(s){ return (s||'').toString().toLowerCase().replace(/[^a-z0-9]/g,''); }

/* Never declares a definite link — only a possible match, per product spec. */
function findMatchingProperty(fields){
  let best=null, bestScore=0;
  const plotN=docNormalize(fields.plotNumber), ownerN=docNormalize(fields.ownerName),
        surveyN=docNormalize(fields.surveyNumber), addrN=docNormalize(fields.propertyAddress);
  PROPERTIES.forEach(p=>{
    let score=0;
    const pPlotN=docNormalize(p.plot), pOwnerN=docNormalize(p.owner), pSurveyN=p.survey!=='—'?docNormalize(p.survey):'';
    if(plotN && pPlotN.includes(plotN)) score+=2;
    if(ownerN && pOwnerN===ownerN) score+=2;
    if(surveyN && pSurveyN && pSurveyN===surveyN) score+=2;
    if(addrN && pPlotN.includes(addrN)) score+=1;
    if(fields.area && docNormalize(fields.area)===docNormalize(p.area)) score+=1;
    if(score>bestScore){ bestScore=score; best=p; }
  });
  return bestScore>=2 ? best : null;
}

/* Deterministic demo authenticity engine. Modular on purpose: a real
   OCR / image-forensics / registry-API backend can replace this function
   body later without any change to the views below. */
function runDocumentChecks(docType, fields, hasFile, fileMeta){
  const checks=[], reasons=[];
  if(hasFile){
    checks.push({ok:true, text:'Document file readable'});
    if(fileMeta && fileMeta.size < 4*1024){
      checks.push({ok:false, text:'File size unusually small for a scanned document'});
      reasons.push('The uploaded file is very small, which can indicate a low-quality scan, a cropped image, or an incomplete file.');
    } else {
      checks.push({ok:true, text:'File size within expected range'});
    }
    checks.push({ok:null, text:'Visual/image tampering analysis requires a dedicated forensics service — not available in this demo'});
  } else {
    checks.push({ok:null, text:'No document file provided — visual and file-structure checks were not run'});
  }

  const required = DOC_REQUIRED_FIELDS[docType] || ['ownerName'];
  const missing = required.filter(f=>!fields[f] || !fields[f].trim());
  if(missing.length===0){ checks.push({ok:true, text:'Required fields for this document type are present'}); }
  else {
    checks.push({ok:false, text:'Missing expected fields: '+missing.map(f=>DOC_FIELD_DEFS[f].label).join(', ')});
    reasons.push('Some expected fields for a '+docType+' were left blank.');
  }

  const matchedProperty = findMatchingProperty(fields);
  let ownerMismatch=false, plotMismatch=false;
  if(matchedProperty){
    checks.push({ok:true, text:'A possible matching property was found in available records'});
    if(fields.ownerName && fields.ownerName.trim()){
      if(docNormalize(fields.ownerName)!==docNormalize(matchedProperty.owner)){
        ownerMismatch=true;
        checks.push({ok:false, text:"Owner name differs from the available property record"});
        reasons.push('Entered owner "'+fields.ownerName+'" does not match the recorded owner "'+matchedProperty.owner+'" for this property.');
      } else checks.push({ok:true, text:'Owner name matches available record'});
    }
    if(fields.plotNumber && fields.plotNumber.trim()){
      if(!docNormalize(matchedProperty.plot).includes(docNormalize(fields.plotNumber))){
        plotMismatch=true;
        checks.push({ok:false, text:'Property reference does not match the available record'});
        reasons.push('Entered plot/reference "'+fields.plotNumber+'" does not match the recorded reference "'+matchedProperty.plot+'".');
      } else checks.push({ok:true, text:'Property reference matches available record'});
    }
  } else {
    checks.push({ok:null, text:'No matching property could be found in available records — comparison is limited'});
  }
  checks.push({ok:null, text:'Official land-registry or authority verification was not performed (unavailable in this demo)'});

  let status;
  const hasIssues = ownerMismatch || plotMismatch;
  if(!hasFile){
    // Manual entry can never be labelled Original — correct-looking typed details are not proof.
    status = hasIssues ? 'review_required' : 'unable_to_determine';
  } else if(hasIssues){
    status = 'potentially_forged';
  } else if(missing.length>0 || !matchedProperty){
    status = 'review_required';
  } else {
    status = 'likely_original';
  }

  const limitations=[];
  if(!hasFile) limitations.push('No document file was provided, so visual editing, file metadata, signatures and scanned alterations could not be inspected.');
  limitations.push('Official authentication was not performed. Confirm with the relevant authority or an appropriate verification service before relying on this result.');
  if(!matchedProperty) limitations.push('No matching property was found in the available demo records, so comparison was limited to internal consistency.');

  return {
    status, checks, reasons, limitations,
    matchedPropertyId: matchedProperty?matchedProperty.id:null,
    docType, fields: Object.assign({},fields), hasFile,
    fileMeta: fileMeta?{name:fileMeta.name,size:fileMeta.size,type:fileMeta.type}:null,
    method: hasFile?'upload':'manual',
    timestamp: Date.now()
  };
}

/* ---------- STATE (persisted history only; files are never stored) ---------- */
let docHistory = [];
try{ docHistory = JSON.parse(localStorage.getItem('kpt_doc_history')||'[]'); }catch(e){ docHistory=[]; }
function saveDocHistory(){ try{ localStorage.setItem('kpt_doc_history', JSON.stringify(docHistory)); }catch(e){} }

function freshDocState(){ return {step:'landing', method:null, docType:null, file:null, fields:{}, result:null, historyIndex:null, analyzeSteps:[], analyzeProgress:0, fileError:null, formError:null, cameraPhase:null, cameraStream:null, cameraFacing:'environment', cameraError:null, capturedImage:null, extraction:null, ocrText:'', ocrProgress:0, ocrPhaseLabel:'', showNotVerifiedModal:false, typeKey:null}; }
let docState = freshDocState();
function openVerifyDocument(){ stopDocumentCamera(); docState = freshDocState(); nav('verify-document'); }
function openReportEvidenceUpload(){
  stopDocumentCamera();
  docState = freshDocState();
  docState.method = 'upload';
  docState.docType = 'Property Evidence';
  state.view = 'verify-document';
  state.propId = null;
  docState.step = 'autotype';
  render();
  window.scrollTo(0,0);
}
function openReportEvidenceCamera(){
  stopDocumentCamera();
  docState = freshDocState();
  docState.method = 'camera';
  docState.docType = 'Property Evidence';
  docState.cameraPhase = isCameraSupported() ? 'requesting' : 'unavailable';
  state.view = 'verify-document';
  state.propId = null;
  docState.step = 'camera';
  render();
  window.scrollTo(0,0);
}
function docGoStep(step){ if(docState.step==='camera' && step!=='camera') stopDocumentCamera(); docState.step = step; render(); window.scrollTo(0,0); }
/* Upload and Camera are the PRIMARY automatic path: no document-type
   selection and no manual-field form is shown for either of them
   anymore — they go straight into the OCR pipeline (see
   startAutomaticVerification). "Enter Details Manually" is kept as a
   clearly secondary fallback and is the only path that still asks the
   user to pick a document type first, since that old flow depends on it. */
function docPickMethod(method){
  stopDocumentCamera();
  docState.method=method; docState.docType=null; docState.file=null; docState.fields={};
  docState.fileError=null; docState.formError=null; docState.cameraPhase=null;
  docState.capturedImage=null; docState.cameraError=null;
  docState.extraction=null; docState.ocrText=''; docState.ocrProgress=0; docState.ocrPhaseLabel='';
  docState.showNotVerifiedModal=false;
  docState.typeKey=null;
  if(method==='camera' || method==='upload'){ docGoStep('autotype'); }
  else { docGoStep('type'); }
}
const AUTO_DOC_TYPES = [['cnic','CNIC'],['property','Property / House Document'],['sale_deed','Sale Deed'],['lease_deed','Lease Deed'],['allotment','Allotment Letter'],['transfer_order','Transfer Order'],['noc','NOC'],['poa','Power of Attorney'],['building_approval','Building Approval'],['property_tax','Property Tax'],['utility','Utility Bill'],['other','Other']];
function docPickAutoType(key){
  docState.typeKey=key;
  if(docState.method==='camera'){ docState.cameraPhase = isCameraSupported() ? 'requesting' : 'unavailable'; docGoStep('camera'); }
  else if(docState.method==='sample'){ docLoadSample(docState.pendingSample); }
  else { docGoStep('upload'); }
}
function renderDocAutoTypeSelect(){
  return `
  ${docHeader('Select Document Type','Choose the kind of document. You will not need to type any details — they are read automatically.', "docGoStep('landing')")}
  <main><div class="doctype-grid">
    ${AUTO_DOC_TYPES.map(t=>`<button class="doctype-chip" onclick="docPickAutoType('${t[0]}')">${t[1]}</button>`).join('')}
  </div></main>`;
}
function docPickType(type){
  docState.docType=type; docState.fields={};
  docGoStep('manual'); // only the manual fallback still reaches this screen
}
function docSetField(key,val){ docState.fields[key]=val; }

function docHandleFile(el){
  const file = el.files && el.files[0]; if(!file) return;
  const nameOk = /\.(pdf|jpe?g|png)$/i.test(file.name);
  const typeOk = ['application/pdf','image/jpeg','image/jpg','image/png'].includes(file.type);
  if(!nameOk && !typeOk){ docState.fileError='Unsupported file. Please upload a PDF, JPG or PNG.'; render(); return; }
  if(file.size===0){ docState.fileError='This file appears to be empty. Please choose a different file.'; render(); return; }
  if(file.size > 15*1024*1024){ docState.fileError='File too large. Please upload a file under 15 MB.'; render(); return; }
  docState.fileError=null;
  const meta = {name:file.name, size:file.size, type:file.type};
  if(file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = e=>{ docState.file = Object.assign({},meta,{dataUrl:e.target.result}); startAutomaticVerification(); };
    reader.onerror = ()=>{ docState.fileError='We could not read this image. Try a clearer scan or use Enter Details Manually.'; docState.file=null; render(); };
    reader.readAsDataURL(file);
  } else {
    const r2 = new FileReader();
    r2.onload = e=>{ docState.file = Object.assign({},meta,{bytes:new Uint8Array(e.target.result)}); startAutomaticVerification(); };
    r2.onerror = ()=>{ docState.fileError='We could not read this file.'; render(); };
    r2.readAsArrayBuffer(file);
  }
}
function docRemoveFile(){ docState.file=null; docState.fileError=null; docState.extraction=null; render(); }

function docTickProcList(){
  const list = document.getElementById('docProcList');
  if(!list) return;
  const items = list.querySelectorAll('li');
  const item = items[docState.analyzeProgress-1];
  if(item){ item.classList.add('done'); const dot=item.querySelector('.dot'); if(dot) dot.textContent='✓'; }
}
/* ==================================================================
   AUTOMATIC OCR / EXTRACTION / VERIFICATION PIPELINE
   This is the real replacement for the old fake-timer "Analyze
   Document" flow above. Both Upload and Camera funnel into
   startAutomaticVerification(): real Tesseract.js OCR runs on the
   actual image the user provided, the result text is handed to the
   pure extraction.js parser (Extraction.parseDocumentText), and the
   parsed fields are what gets shown and compared — never hard-coded
   demo values. See extraction.js + tests/extraction.test.js for the
   parser itself, which is unit-tested independently of the OCR engine.
   ================================================================== */

function docTypeLabelFor(field){
  return field==='ownerName' ? 'Name' : field==='plotNumber' ? 'Plot Number' : 'CNIC';
}

function maskCnic(digits){
  if(!digits || digits.length!==13) return digits || '';
  return digits.slice(0,5)+'-******'+digits.slice(11,12)+'-'+digits.slice(12);
}

function extractionToFields(extraction){
  return {
    ownerName: extraction.ownerName.found && !extraction.ownerName.conflict ? extraction.ownerName.display : '',
    plotNumber: extraction.plotNumber.found && !extraction.plotNumber.conflict ? extraction.plotNumber.display : '',
    cnic: extraction.cnic.found && !extraction.cnic.conflict ? extraction.cnic.value : '',
    documentNumber: ''
  };
}

function cmpCheckLine(label, state){
  const ok = state==='match' ? true : state==='mismatch' ? false : null;
  const text = state==='match' ? label+' matches available record'
    : state==='mismatch' ? label+' does not match available record'
    : label+' could not be compared against available records';
  return {ok, text};
}

/* Builds the same {status, checks, reasons, limitations, ...} result
   shape the UI expects, but from REAL extracted fields instead of
   typed-in ones. Distinguishes:
     - 'suspicious'      -> genuine internal conflict found in the document text
     - 'not_verified'    -> extracted values contradict an available record, or no record matches
     - 'unable_to_verify'-> not enough information was extracted to compare anything
     - 'verified'        -> everything that could be checked, checked out
   This function does NOT and cannot prove authenticity; it only
   compares what OCR read against the app's own demo records. */
/* Synthetic verification database (from property_database.json).
   Fictional records for testing only. */
const DEMO_PROPERTIES = [
  {id:'DEMO-KPT-001', title:'Demo Property A', owner:'Ahmed Raza', cnic:'00000-0000000-0', plot:'34-C', survey:'SRV-TEST-001', area:'DHA Phase 6', size:'500 Sq. Yards', address:'House 12, Example Street, Demo Block, Karachi'},
  {id:'DEMO-KPT-002', title:'Demo Property B', owner:'Bilal Hassan', cnic:'00000-0000000-1', plot:'52-A', survey:'SRV-TEST-002', area:'Gulshan-e-Iqbal', size:'240 Sq. Yards', address:'House 25, Example Avenue, Demo Block, Karachi'},
  {id:'DEMO-KPT-003', title:'Demo Property C', owner:'Sara Ahmed', cnic:'00000-0000000-2', plot:'17-B', survey:'SRV-TEST-003', area:'Scheme 33', size:'400 Sq. Yards', address:'Plot 17-B, Example Road, Demo Block, Karachi'}
];
function allVerificationRecords(){ return DEMO_PROPERTIES.concat(PROPERTIES); }

/* Builds the result object from REAL extracted fields using the shared
   Extraction.decide() rules (the same function tests/manifest.test.js
   runs against the real sample dataset). Not a proof of authenticity. */
function buildAutomaticResult(extraction, fileMeta, source){
  const checks = [{ok:true, text:(source==='pdf-text'?'PDF text layer read directly':'Document image read by the OCR engine')}];
  const labels = {name:'Name', cnic:'CNIC', plot:'Plot number', survey:'Survey number', address:'Property address', approvedArea:'Approved area', paymentStatus:'Payment status'};
  const keyOf = {name:'ownerName', cnic:'cnic', plot:'plotNumber', survey:'surveyNumber', address:'address', approvedArea:'approvedArea', paymentStatus:'paymentStatus'};
  extraction.profile.fields.forEach(f=>{
    const fld = extraction[keyOf[f]];
    if(fld.conflict) checks.push({ok:false, text:labels[f]+' — conflicting values in the document: '+fld.values.join(' vs ')});
    else if(fld.found) checks.push({ok:true, text:labels[f]+' detected: '+(f==='cnic'?maskCnic(fld.value):fld.display)});
    else checks.push({ok:null, text:labels[f]+' was not detected in the document'});
  });
  const base = {pipeline:'auto', extraction, fields:extractionToFields(extraction), hasFile:true, fileMeta, method:'upload', timestamp:Date.now(), source:source||'ocr'};

  // Find the record to compare against (free search — no property context here).
  const records = allVerificationRecords();
  const matchInfo = Extraction.matchProperty(extraction, records);
  const matched = matchInfo.property;

  const conflicts = ['ownerName','plotNumber','cnic','surveyNumber'].filter(f=>extraction[f].conflict);
  if(!matched && !conflicts.length){
    const anyFound = extraction.profile.fields.some(f=>extraction[keyOf[f]].found);
    if(!anyFound) return Object.assign({}, base, {status:'unable_to_verify', checks, reasons:['No usable information could be read from the document.'], limitations:['Insufficient information was extracted to perform verification.'], matchedPropertyId:null});
    checks.push({ok:null, text:'No matching property was found in available records'});
    return Object.assign({}, base, {status:'not_verified', checks, reasons:['No property in the available records matches the information extracted from this document.'], limitations:['Comparison is limited to the records available in this application.'], matchedPropertyId:null, noMatch:true});
  }
  const d = Extraction.decide(extraction, matched, {ocr: source!=='pdf-text'});
  if(d.cmp){
    const lab = {name:'Name', cnic:'CNIC', plot:'Plot number', survey:'Survey number', address:'Address', approvedArea:'Approved area'};
    Object.keys(lab).forEach(k=>{ const st=d.cmp[k]; if(st && st!=='unknown') checks.push({ok: st==='match'?true:(st==='mismatch'||st==='conflict')?false:null, text: lab[k]+(st==='match'?' matches available record':st==='mismatch'?' does not match available record':st==='uncertain'?' could not be confirmed (possible OCR misread)':' — conflicting values')}); });
  }
  const limitations = ['Verified against available application records only. Official authentication has not been performed.'];
  if(extraction.profile.label==='Power of Attorney') limitations.push('The attorney\'s identity was not checked: no attorney reference exists in the available records.');
  if(source!=='pdf-text') limitations.push('Text was read by OCR, which can misread characters; uncertain characters are reported as unable to verify rather than as mismatches.');
  return Object.assign({}, base, {status:d.status, checks, reasons:d.reasons, limitations, matchedPropertyId:matched?matched.id:null});
}

function renderOcrProgressOnly(){
  const bar = document.getElementById('ocrProgressBar');
  const label = document.getElementById('ocrPhaseLabel');
  if(bar && label){ bar.style.width = (docState.ocrProgress||0)+'%'; label.textContent = docState.ocrPhaseLabel||''; }
  else render();
}

function assessImageQualityFromDataUrl(dataUrl, cb){
  try{
    const img = new Image();
    img.onload = ()=>{
      try{
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width; canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if(!ctx){ cb(true); return; }
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        cb(assessCaptureQuality(canvas));
      }catch(e){ cb(true); }
    };
    img.onerror = ()=>cb(true);
    img.src = dataUrl;
  }catch(e){ cb(true); }
}

function finishWithOcrFailure(message){
  if(state.view!=='verify-document') return; // user navigated away mid-OCR
  docState.result = {pipeline:'auto', status:'ocr_failed', message, extraction:docState.extraction, ocrText:docState.ocrText||'', hasFile:true, fileMeta:docState.file, timestamp:Date.now()};
  docState.showNotVerifiedModal = false;
  docGoStep('result');
}

function finishOcrWithText(text, source){
  if(state.view!=='verify-document') return;
  docState.ocrText = text || '';
  const extraction = Extraction.parseDocumentText(docState.ocrText, docState.typeKey||'other');
  docState.extraction = extraction;
  const meaningfulChars = docState.ocrText.replace(/\s/g,'').length;
  if(meaningfulChars < 15 || !extraction.profile.fields.some(f=>extraction[({name:'ownerName',cnic:'cnic',plot:'plotNumber',survey:'surveyNumber',address:'address',approvedArea:'approvedArea',paymentStatus:'paymentStatus'})[f]].found)){
    finishWithOcrFailure('We could not extract enough readable information from this document to perform the available checks. Please try a clearer photo, or use Enter Details Manually.');
    return;
  }
  const result = buildAutomaticResult(extraction, docState.file, source);
  docState.result = result;
  docHistory.unshift(result); saveDocHistory();
  docState.historyIndex = null;
  docState.showNotVerifiedModal = (result.status==='not_verified' || result.status==='suspicious');
  docGoStep('result');
}

function countFound(text){
  const x = Extraction.parseDocumentText(text, docState.typeKey||'other');
  const m = {name:'ownerName',cnic:'cnic',plot:'plotNumber',survey:'surveyNumber',address:'address',approvedArea:'approvedArea',paymentStatus:'paymentStatus'};
  return x.profile.fields.filter(f=>x[m[f]].found).length;
}

/* Real OCR. Pass 1 uses Tesseract's automatic page segmentation (PSM 3).
   Evidence from the sample set: PSM 3 reads most table layouts, but drops
   rows on some highlighted-field images where PSM 6 succeeds, so if pass 1
   finds fewer fields than the document type expects we run PSM 6 too and
   keep whichever pass extracted more fields. */
async function runRealOCR(dataUrl){
  if(typeof Tesseract === 'undefined'){
    finishWithOcrFailure('The OCR engine could not be loaded (this needs an internet connection the first time). Please check your connection and try again, or use Enter Details Manually.');
    return;
  }
  docState.ocrPhaseLabel = 'Reading document…'; docState.ocrProgress = 0; render();
  let worker;
  try{
    worker = await Tesseract.createWorker('eng', 1, {logger(m){
      if(!m) return;
      if(m.status==='recognizing text'){ docState.ocrPhaseLabel='Extracting information…'; docState.ocrProgress=Math.round((m.progress||0)*100); }
      else if(m.status){ docState.ocrPhaseLabel=m.status.charAt(0).toUpperCase()+m.status.slice(1)+'…'; }
      renderOcrProgressOnly();
    }});
    await worker.setParameters({tessedit_pageseg_mode:'3'});
    let text = (await worker.recognize(dataUrl)).data.text || '';
    const expected = (Extraction.TYPE_PROFILES[docState.typeKey||'other']||Extraction.TYPE_PROFILES.other).fields.length;
    if(countFound(text) < expected){
      docState.ocrPhaseLabel='Re-reading with an alternate layout mode…'; renderOcrProgressOnly();
      await worker.setParameters({tessedit_pageseg_mode:'6'});
      const alt = (await worker.recognize(dataUrl)).data.text || '';
      if(countFound(alt) > countFound(text)) text = alt;
    }
    await worker.terminate();
    finishOcrWithText(text, 'ocr');
  }catch(err){
    try{ if(worker) await worker.terminate(); }catch(e){}
    finishWithOcrFailure('The document could not be processed ('+(err&&err.message?err.message:'OCR error')+'). Please try a clearer photo.');
  }
}

/* PDFs: read the embedded text layer with PDF.js (no OCR needed when the
   PDF has real text). If a PDF has no text layer (a scan), we say so —
   we do not pretend it was read. */
async function readPdfText(f){
  if(typeof pdfjsLib === 'undefined') throw new Error('PDF reader could not be loaded');
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  const pdf = await pdfjsLib.getDocument({data: f.bytes}).promise;
  let out = '';
  for(let i=1;i<=Math.min(pdf.numPages,5);i++){
    const tc = await (await pdf.getPage(i)).getTextContent();
    // rebuild lines from text item positions so labels/values stay on their lines
    let lastY=null, line='';
    tc.items.forEach(it=>{ const y=Math.round(it.transform[5]); if(lastY!==null && Math.abs(y-lastY)>3){ out+=line.trim()+'\n'; line=''; } line+=it.str+' '; lastY=y; });
    out += line.trim()+'\n\n';
  }
  return out;
}

async function startAutomaticVerification(){
  const f = docState.file;
  if(!f){ docState.fileError='Please upload a document first, or switch to Enter Details Manually.'; render(); return; }
  docState.extraction = null; docState.ocrText=''; docState.ocrProgress = 0;
  docState.ocrPhaseLabel = 'Reading document…';
  docGoStep('ocr-analyzing');

  if(f.type === 'application/pdf'){
    try{
      const text = await readPdfText(f);
      if(text.replace(/\s/g,'').length < 30){ finishWithOcrFailure('This PDF has no readable text layer (it looks like a scan). Please upload a JPG/PNG photo of the page instead.'); return; }
      finishOcrWithText(text, 'pdf-text');
    }catch(err){
      finishWithOcrFailure('The PDF could not be read ('+(err&&err.message?err.message:'error')+'). Please upload a JPG or PNG photo of the document instead.');
    }
    return;
  }
  assessImageQualityFromDataUrl(f.dataUrl, (qualityOk)=>{
    if(!qualityOk){ finishWithOcrFailure('The image is too dark, too bright, blank, or too low-resolution to read clearly. Please try a clearer photo.'); return; }
    runRealOCR(f.dataUrl);
  });
}

/* DEVELOPMENT / DEMO ONLY: "Try Sample Documents". Fetches the real sample
   file and sends it through the SAME docHandle-style pipeline as an
   upload (file -> OCR/PDF text -> extraction -> verification). It never
   sets a result directly. Requires the site to be served over http(s). */
const SAMPLE_DOCS = [
  ['cnic','CNIC','cnic'],['property','Property Paper','property'],['sale_deed','Sale Deed','sale_deed'],['lease_deed','Lease Deed','lease_deed'],
  ['allotment','Allotment Letter','allotment'],['transfer_order','Transfer Order','transfer_order'],['noc','NOC','noc'],['poa','Power of Attorney','power_of_attorney'],
  ['building_approval','Building Approval','building_approval'],['property_tax','Property Tax','property_tax'],['utility','Utility Bill','utility']
];
function docStartSample(typeKey, base, variant, ext){
  docState.method='sample'; docState.typeKey=typeKey; docState.pendingSample={base:base, variant:variant, ext:ext};
  docLoadSample(docState.pendingSample);
}
async function docLoadSample(sm){
  try{
    const name = sm.base+'_'+sm.variant+'.'+sm.ext;
    const resp = await fetch('assets/samples/'+name);
    if(!resp.ok) throw new Error('sample not found');
    const blob = await resp.blob();
    const isPdf = sm.ext==='pdf';
    const file = {name, size:blob.size, type: isPdf?'application/pdf':(sm.ext==='jpg'?'image/jpeg':'image/png')};
    if(isPdf){ file.bytes = new Uint8Array(await blob.arrayBuffer()); }
    else { file.dataUrl = await new Promise((res,rej)=>{ const r=new FileReader(); r.onload=e=>res(e.target.result); r.onerror=rej; r.readAsDataURL(blob); }); }
    docState.file = file;
    startAutomaticVerification();
  }catch(e){
    docState.method=null;
    docState.fileError='Could not load the sample ('+e.message+'). Sample documents need the site to be served over http(s), not opened as a file.';
    docGoStep('upload');
  }
}
function renderSampleDocsSection(){
  return `
  <div class="section-title">Try Sample Documents <span style="font-size:10px;font-weight:600;color:var(--mute);">(demo/testing only — fictional)</span></div>
  <div class="vcat">${SAMPLE_DOCS.map(d=>`
    <div class="check-item" style="align-items:center;gap:6px;flex-wrap:wrap;">
      <span style="min-width:130px;font-weight:700;">${d[1]}</span>
      <button class="btn btn-outline" style="padding:4px 8px;font-size:11px;margin:0;" onclick="docStartSample('${d[0]}','${d[2]}','matching','png')">Matching</button>
      <button class="btn btn-outline" style="padding:4px 8px;font-size:11px;margin:0;" onclick="docStartSample('${d[0]}','${d[2]}','mismatch','png')">Mismatch</button>
      <button class="btn btn-outline" style="padding:4px 8px;font-size:11px;margin:0;" onclick="docStartSample('${d[0]}','${d[2]}','matching','pdf')">PDF</button>
    </div>`).join('')}</div>`;
}

function docStartManualCheck(){
  const hasAny = Object.values(docState.fields).some(v=>v && v.trim && v.trim());
  if(!hasAny){ docState.formError='Please enter at least the owner name and one property reference before checking.'; render(); return; }
  docState.formError=null;
  docState.analyzeSteps = ['Checking field completeness…','Checking internal consistency…','Comparing available property records…','Identifying conflicts…','Preparing assessment…'];
  docState.analyzeProgress = 0;
  docGoStep('manual-analyzing');
  const timer = setInterval(()=>{
    docState.analyzeProgress++; docTickProcList();
    if(docState.analyzeProgress >= docState.analyzeSteps.length){
      clearInterval(timer);
      setTimeout(()=>{
        docState.result = Object.assign({pipeline:'manual'}, runDocumentChecks(docState.docType, docState.fields, false, null));
        docHistory.unshift(docState.result); saveDocHistory();
        docState.historyIndex = null;
        docGoStep('manual-result');
      }, 350);
    }
  }, 420);
}
function docViewHistory(i){ docState.historyIndex=i; docState.result=docHistory[i]; docGoStep(docHistory[i].method==='upload'?'result':'manual-result'); }
function docDeleteHistory(i){ docHistory.splice(i,1); saveDocHistory(); render(); }

function docHeader(title, subtitle, backAction){
  return `<div class="header" style="padding-bottom:20px;">
    <div class="header-top">
      <button class="icon-btn" onclick="${backAction}" aria-label="Back"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="logo-badge"><img src="${LOGO}" alt="Karachi Property Trust"></div>
    </div>
    <div class="brand-block"><div class="brand" style="font-size:19px;">${title}</div>${subtitle?`<div class="tagline">${subtitle}</div>`:''}</div>
  </div>`;
}

function renderVerifyDocument(){
  switch(docState.step){
    case 'autotype': return renderDocAutoTypeSelect();
    case 'type': return renderDocTypeSelect();
    case 'upload': return renderDocUploadForm();
    case 'camera': return renderDocCamera();
    case 'ocr-analyzing': return renderOcrAnalyzing();
    case 'manual': return renderDocManualForm();
    case 'manual-analyzing': return renderDocAnalyzing('Checking Details');
    case 'result':
      if(docState.result && docState.result.pipeline==='auto'){
        return docState.result.status==='ocr_failed' ? renderDocOcrFailedScreen(docState.result) : renderAutoDocResult(docState.result);
      }
      return renderDocResult();
    case 'manual-result': return renderDocResult();
    case 'history': return renderDocHistoryList();
    default: return renderDocLanding();
  }
}

function renderDocLanding(){
  return `
  ${docHeader('Verify Your Document','Upload or capture a clear photo of your property document. It will be read automatically.', "nav('home')")}
  <main>
    <div class="doc-options">
      <div class="doc-option-card" onclick="docPickMethod('upload')">
        <div class="doc-option-icon">📄</div>
        <h3>Upload Document</h3>
        <p>Choose a document from your device. We'll nead it automatically — no typing required.</p>
        <button class="btn btn-primary btn-block" style="margin-top:0;" onclick="event.stopPropagation();docPickMethod('upload')">Upload Document</button>
      </div>
      <div class="doc-option-card" onclick="docPickMethod('camera')">
        <div class="doc-option-icon">📷</div>
        <h3>Scan / Capture Document</h3>
        <p>Use your camera to capture a clear image of your document.</p>
        <button class="btn btn-primary btn-block" style="margin-top:0;" onclick="event.stopPropagation();docPickMethod('camera')">Open Camera</button>
      </div>
    </div>

    <div class="auth-note" style="text-align:center;margin-top:6px;">
      Can't provide a readable document?
      <a href="javascript:void(0)" onclick="docPickMethod('manual')">Enter details manually instead</a>.
    </div>

    ${renderSampleDocsSection()}

    <div class="section-title">Not the Same as "Verify This Property"</div>
    <div class="vcat-note" style="padding:0 2px;">"Verify This Property" checks an entire property listing across multiple categories. "Verify Your Document" independently checks one document — even if the property isn't listed here at all.</div>

    ${docHistory.length ? `
    <div class="section-title">My Document Checks</div>
    <div class="vcat" style="cursor:pointer;" onclick="docGoStep('history')">
      <div class="vcat-head"><div class="vcat-title">📁 View past document checks</div><span class="vitem-chev">›</span></div>
      <div class="vcat-note">${docHistory.length} result${docHistory.length===1?'':'s'} saved on this device.</div>
    </div>` : ''}
  </main>`;
}

function renderDocTypeSelect(){
  return `
  ${docHeader('Select Document Type', docState.method==='upload'?'What kind of document are you uploading?':docState.method==='camera'?'What kind of document are you capturing?':'What kind of document is this?', "docGoStep('landing')")}
  <main>
    <div class="doctype-grid">
      ${DOC_TYPES.map(t=>`<button class="doctype-chip" onclick="docPickType(${JSON.stringify(t)})">${t}</button>`).join('')}
    </div>
  </main>`;
}

/* ---------- SCAN / CAPTURE DOCUMENT (browser camera) ----------
   Uses navigator.mediaDevices.getUserMedia — a plain web API, no
   React Native or third-party camera library. A captured frame is
   converted to the same {name,size,type,dataUrl} shape docHandleFile()
   produces, so it enters the identical upload-review-and-analyze
   screen and the identical runDocumentChecks() pipeline. */
function isCameraSupported(){
  return !!(navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function');
}

function isSecureCameraContext(){
  try{
    return window.isSecureContext === true ||
      location.protocol === 'https:' ||
      location.hostname === 'localhost' ||
      location.hostname === '127.0.0.1';
  }catch(e){ return false; }
}

function renderDocCamera(){
  switch(docState.cameraPhase){
    case 'live': return renderDocCameraLive();
    case 'denied': return renderDocCameraDenied();
    case 'unavailable': return renderDocCameraUnavailable();
    case 'review': return renderDocCameraReview();
    case 'poor-quality': return renderDocCameraPoorQuality();
    default: return renderDocCameraPermission();
  }
}

function nativeCameraInputHtml(){
  return `
    <input
      type="file"
      id="docCameraCaptureInput"
      accept="image/*"
      capture="environment"
      style="display:none"
      onchange="docHandleCameraCapture(this)"
    >
  `;
}

/* Compact top bar used for every full-viewport camera screen (in place
   of the large docHeader() block) so the header claims minimal vertical
   space, leaving the rest of the viewport for the video/preview area
   and keeping the action buttons below always on-screen. */
function camHeader(title, subtitle, backAction){
  return `<div class="cam-topbar">
    <button class="icon-btn" onclick="${backAction}" aria-label="Back"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
    <div class="cam-topbar-text">
      <div class="cam-topbar-title">${title}</div>
      ${subtitle?`<div class="cam-topbar-sub">${subtitle}</div>`:''}
    </div>
  </div>`;
}

function renderDocCameraPermission(){
  return `
  <div class="cam-fullscreen">
  ${camHeader('Scan / Capture Document', docState.docType, "docGoStep('landing')")}
  <div class="cam-fullscreen-body">
    <div class="doc-option-card" style="cursor:default;">
      <div class="doc-option-icon">📷</div>
      <h3>Use Your Camera</h3>
      <p>Open the camera to capture a clear photo of your document.</p>

      <button class="btn btn-primary btn-block" style="margin-top:0;" onclick="startDocumentCamera()">
        Open Live Camera
      </button>

      <label class="btn btn-outline btn-block cam-native-btn" for="docCameraCaptureInput">
        📸 Take Photo
      </label>

      <div style="font-size:11px;color:var(--sub);line-height:1.45;margin-top:10px;">
        On phones, <strong>Take Photo</strong> can open the device camera directly
        if live camera preview is unavailable.
      </div>
    </div>

    ${nativeCameraInputHtml()}

    <div class="camera-help-card">
      <strong>For the clearest result</strong>
      <span>Place the document on a flat surface, keep all four corners visible, and use good lighting.</span>
    </div>

    <button class="btn btn-outline btn-block" onclick="docGoStep('upload')">Choose an Existing Photo Instead</button>
    <button class="btn btn-link btn-block" onclick="docGoStep('manual')">Enter Details Manually</button>
  </div>
  </div>`;
}

function renderDocCameraDenied(){
  return `
  <div class="cam-fullscreen">
  ${camHeader('Camera Access Blocked', docState.docType, "docGoStep('landing')")}
  <div class="cam-fullscreen-body">
    <div class="doc-option-card" style="cursor:default;">
      <div class="doc-option-icon">🚫</div>
      <h3>Live Camera Unavailable</h3>
      <p>${escapeHtml(docState.cameraError || 'Your browser did not allow the live camera preview.')}</p>

      <label class="btn btn-primary btn-block cam-native-btn" for="docCameraCaptureInput">
        📸 Take Photo
      </label>

      <button class="btn btn-outline btn-block" onclick="docGoStep('upload')">Upload an Existing Photo</button>
      <button class="btn btn-outline btn-block" onclick="docGoStep('manual')">Enter Details Manually</button>

      <div class="camera-help-card" style="margin-top:12px;text-align:left;">
        <strong>Why this happens</strong>
        <span>Live camera access can be blocked by browser privacy settings, an embedded preview, or an insecure page. The phone's camera upload is provided as a fallback.</span>
      </div>
    </div>

    ${nativeCameraInputHtml()}
  </div>
  </div>`;
}

function renderDocCameraUnavailable(){
  return `
  <div class="cam-fullscreen">
  ${camHeader('Camera Not Available', docState.docType, "docGoStep('landing')")}
  <div class="cam-fullscreen-body">
    <div class="doc-option-card" style="cursor:default;">
      <div class="doc-option-icon">📷</div>
      <h3>Use Your Device Camera</h3>
      <p>Live preview is unavailable here, but you can still take a photo with your device camera and use it for document verification.</p>

      <label class="btn btn-primary btn-block cam-native-btn" for="docCameraCaptureInput">
        📸 Take Photo
      </label>

      <button class="btn btn-outline btn-block" onclick="docGoStep('upload')">Upload an Existing Photo</button>
      <button class="btn btn-outline btn-block" onclick="docGoStep('manual')">Enter Details Manually</button>
    </div>

    ${nativeCameraInputHtml()}

    <div class="camera-help-card">
      <strong>Live camera note</strong>
      <span>For live preview, open the deployed site over HTTPS or run it on localhost. The Take Photo option is designed as the mobile fallback.</span>
    </div>
  </div>
  </div>`;
}

function renderDocCameraLive(){
  return `
  <div class="cam-fullscreen">
  ${camHeader('Scan Document', docState.docType, "closeDocumentCamera()")}
  <div class="cam-fullscreen-body">
    <div class="cam-wrap">
      <video id="docCameraVideo" autoplay playsinline muted></video>
      <div class="cam-overlay"><div class="cam-frame">
        <span class="cam-corner tl"></span><span class="cam-corner tr"></span>
        <span class="cam-corner bl"></span><span class="cam-corner br"></span>
        <div class="cam-frame-label">Fit the whole document inside the frame</div>
      </div></div>
      ${docState.cameraError?`<div class="cam-error">${escapeHtml(docState.cameraError)}</div>`:''}
    </div>

    <div class="cam-hint">
      <strong>Position the document inside the frame</strong>
      Make sure all four corners are visible and the text is clear.
    </div>

    <div class="cam-controls">
      <button class="cam-btn" onclick="closeDocumentCamera()" aria-label="Close">✕</button>
      <button class="cam-capture" onclick="captureDocumentFrame()" aria-label="Capture document" title="Capture document"></button>
      <button class="cam-btn" id="camSwitchBtn" style="visibility:hidden;" onclick="switchDocumentCamera()" aria-label="Switch camera">⟳</button>
    </div>

    <div class="cam-secondary-actions">
      <label class="btn btn-outline cam-native-btn" for="docCameraCaptureInput">📸 Use Device Camera</label>
      <button class="btn btn-link" onclick="docGoStep('upload')">Choose Existing Photo</button>
    </div>

    ${nativeCameraInputHtml()}
  </div>
  </div>`;
}

function renderDocCameraReview(){
  return `
  <div class="cam-fullscreen">
  ${camHeader('Review Document', docState.docType, "closeDocumentCamera()")}
  <div class="cam-fullscreen-body">
    <div class="camera-review-card">
      <img class="doc-preview-img" src="${escapeHtml(docState.capturedImage || '')}" alt="Captured document preview">
      <div class="camera-review-meta">
        <strong>Check the photo before continuing</strong>
        <span>Make sure the document is fully visible and the text is readable.</span>
      </div>
    </div>
    <div class="action-row">
      <button class="btn btn-outline" onclick="retakeDocumentCapture()">Retake</button>
      <button class="btn btn-primary" onclick="useCapturedDocument()">Use This Document</button>
    </div>
  </div>
  </div>`;
}

function renderDocCameraPoorQuality(){
  return `
  <div class="cam-fullscreen">
  ${camHeader('Image Too Difficult to Read', docState.docType, "closeDocumentCamera()")}
  <div class="cam-fullscreen-body">
    <div class="doc-option-card" style="cursor:default;">
      <div class="doc-option-icon">⚠️</div>
      <h3>Try a Clearer Photo</h3>
      <p>The captured image appears too dark, blank, or unclear for a useful check.</p>
      <button class="btn btn-primary btn-block" onclick="retakeDocumentCapture()">Retake Photo</button>
      <label class="btn btn-outline btn-block cam-native-btn" for="docCameraCaptureInput">📸 Take Photo With Device Camera</label>
    </div>
    ${nativeCameraInputHtml()}
  </div>
  </div>`;
}

function handleCameraError(err){
  const name = err && err.name;
  docState.cameraStream = null;

  if(name==='NotAllowedError' || name==='PermissionDeniedError' || name==='SecurityError'){
    docState.cameraPhase='denied';
    docState.cameraError='Camera permission was denied or blocked.';
  } else if(name==='NotFoundError' || name==='DevicesNotFoundError'){
    docState.cameraPhase='unavailable';
    docState.cameraError='No camera device was found.';
  } else if(name==='NotReadableError'){
    docState.cameraPhase='denied';
    docState.cameraError='The camera is already in use by another app or browser tab.';
  } else if(name==='OverconstrainedError'){
    // Retry once with a generic camera constraint instead of failing outright.
    try{
      navigator.mediaDevices.getUserMedia({video:true,audio:false}).then(handleCameraStream).catch(finalCameraError);
      return;
    }catch(e){}
    docState.cameraPhase='unavailable';
    docState.cameraError='The selected camera configuration is not available.';
  } else {
    docState.cameraPhase='denied';
    docState.cameraError='The live camera could not be started in this browser.';
  }

  render();
}

function finalCameraError(err){
  const name = err && err.name;
  docState.cameraStream = null;
  if(name==='NotFoundError' || name==='DevicesNotFoundError'){
    docState.cameraPhase='unavailable';
    docState.cameraError='No camera device was found.';
  }else{
    docState.cameraPhase='denied';
    docState.cameraError='The live camera could not be started. Use Take Photo instead.';
  }
  render();
}

function handleCameraStream(stream){
  docState.cameraStream = stream;
  const video = document.getElementById('docCameraVideo');

  if(!video){
    stream.getTracks().forEach(t=>t.stop());
    docState.cameraStream = null;
    docState.cameraPhase='unavailable';
    docState.cameraError='Camera preview could not be mounted. Use Take Photo instead.';
    render();
    return;
  }

  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute('playsinline','');
  video.setAttribute('webkit-playsinline','');
  video.srcObject = stream;

  const playVideo = ()=>{
    const p = video.play();
    if(p && typeof p.catch==='function') p.catch(()=>{});
  };

  if(video.readyState >= 1) playVideo();
  else video.addEventListener('loadedmetadata', playVideo, {once:true});

  if(navigator.mediaDevices.enumerateDevices){
    navigator.mediaDevices.enumerateDevices().then(devices=>{
      const count = devices.filter(d=>d.kind==='videoinput').length;
      const btn = document.getElementById('camSwitchBtn');
      if(btn) btn.style.visibility = count > 1 ? 'visible' : 'hidden';
    }).catch(()=>{});
  }
}

function startDocumentCamera(){
  if(!isCameraSupported()){
    docState.cameraPhase='unavailable';
    docState.cameraError='This browser does not provide live camera access.';
    render();
    return;
  }

  docState.cameraError = null;
  docState.cameraPhase = 'live';
  render();

  // Give the browser one paint cycle to mount the video element.
  requestAnimationFrame(()=>{
    const constraints = {
      video:{
        facingMode:{ideal:docState.cameraFacing || 'environment'},
        width:{ideal:1280},
        height:{ideal:720}
      },
      audio:false
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(handleCameraStream)
      .catch(handleCameraError);
  });
}

function switchDocumentCamera(){
  if(!isCameraSupported()) return;

  const newFacing = docState.cameraFacing==='environment' ? 'user' : 'environment';

  navigator.mediaDevices.getUserMedia({
    video:{
      facingMode:{ideal:newFacing},
      width:{ideal:1280},
      height:{ideal:720}
    },
    audio:false
  }).then(newStream=>{
    if(docState.cameraStream) docState.cameraStream.getTracks().forEach(t=>t.stop());

    docState.cameraStream = newStream;
    docState.cameraFacing = newFacing;

    const video = document.getElementById('docCameraVideo');
    if(video){
      video.srcObject = newStream;
      video.muted = true;
      video.play().catch(()=>{});
    }
  }).catch(()=>{});
}

function stopDocumentCamera(){
  if(docState.cameraStream){
    docState.cameraStream.getTracks().forEach(t=>t.stop());
    docState.cameraStream = null;
  }

  const video = document.getElementById('docCameraVideo');
  if(video && video.srcObject){
    try{ video.pause(); }catch(e){}
    video.srcObject = null;
  }
}

function assessCaptureQuality(canvas){
  try{
    if(!canvas.width || !canvas.height || canvas.width<50 || canvas.height<50) return false;

    const sample = document.createElement('canvas');
    sample.width=40; sample.height=40;
    const ctx=sample.getContext('2d', {willReadFrequently:true});
    if(!ctx) return true;

    ctx.drawImage(canvas,0,0,40,40);
    const data=ctx.getImageData(0,0,40,40).data;
    let sum=0, sumSq=0, n=0;

    for(let i=0;i<data.length;i+=4){
      const lum=(data[i]+data[i+1]+data[i+2])/3;
      sum+=lum; sumSq+=lum*lum; n++;
    }

    const mean=sum/n;
    const variance=sumSq/n - mean*mean;

    // Also reject frames that are almost completely black.
    return mean > 12 && variance > 15;
  }catch(e){
    return true;
  }
}

function captureDocumentFrame(){
  const video = document.getElementById('docCameraVideo');

  if(!video || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !video.videoWidth){
    docState.cameraError='Camera is still starting. Please wait a moment and try again.';
    render();
    return;
  }

  const canvas=document.createElement('canvas');
  canvas.width=video.videoWidth;
  canvas.height=video.videoHeight;

  const ctx=canvas.getContext('2d');
  if(!ctx){
    docState.cameraError='Your browser could not capture the camera frame. Use Take Photo instead.';
    render();
    return;
  }

  ctx.drawImage(video,0,0,canvas.width,canvas.height);

  let dataUrl;
  try{
    dataUrl=canvas.toDataURL('image/jpeg',0.9);
  }catch(e){
    docState.cameraError='Capture failed. Use Take Photo instead.';
    render();
    return;
  }

  if(!dataUrl || dataUrl.length<100){
    docState.cameraError='Capture failed. Please try again.';
    render();
    return;
  }

  const qualityOk=assessCaptureQuality(canvas);

  stopDocumentCamera();
  docState.capturedImage=dataUrl;
  docState.cameraError=null;
  docState.cameraPhase=qualityOk ? 'review' : 'poor-quality';
  render();
}

function docHandleCameraCapture(el){
  const file=el && el.files && el.files[0];
  if(!file) return;

  const allowedType=file.type && file.type.startsWith('image/');
  const allowedName=/\.(jpe?g|png|webp|heic|heif)$/i.test(file.name || '');

  if(!allowedType && !allowedName){
    docState.cameraError='Please capture or choose an image of the document.';
    render();
    return;
  }

  if(file.size===0){
    docState.cameraError='The captured image is empty. Please take the photo again.';
    render();
    return;
  }

  if(file.size>15*1024*1024){
    docState.cameraError='The captured image is larger than 15 MB.';
    render();
    return;
  }

  stopDocumentCamera();
  docState.fileError=null;

  const reader=new FileReader();
  reader.onload=e=>{
    docState.capturedImage=e.target.result;
    docState.cameraError=null;

    // Basic quality check for the native camera image too.
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      canvas.width=img.naturalWidth || img.width;
      canvas.height=img.naturalHeight || img.height;
      const ctx=canvas.getContext('2d');
      if(ctx) ctx.drawImage(img,0,0,canvas.width,canvas.height);

      const qualityOk=ctx ? assessCaptureQuality(canvas) : true;
      docState.cameraPhase=qualityOk ? 'review' : 'poor-quality';
      render();
    };
    img.onerror=()=>{
      docState.cameraPhase='review';
      render();
    };
    img.src=e.target.result;
  };
  reader.onerror=()=>{
    docState.cameraError='We could not read the captured photo. Please try again.';
    docState.cameraPhase='unavailable';
    render();
  };
  reader.readAsDataURL(file);

  // Let the same input be triggered again later.
  try{ el.value=''; }catch(e){}
}

function retakeDocumentCapture(){
  docState.capturedImage=null;
  docState.cameraError=null;
  startDocumentCamera();
}

function closeDocumentCamera(){
  stopDocumentCamera();
  docState.cameraPhase=null;
  docState.capturedImage=null;
  docState.cameraError=null;
  docGoStep('landing');
}

function useCapturedDocument(){
  const dataUrl=docState.capturedImage;
  if(!dataUrl) return;

  const approxBytes=Math.round((dataUrl.length - dataUrl.indexOf(',') - 1)*3/4);

  docState.file={
    name:'Camera_Capture_'+Date.now()+'.jpg',
    size:approxBytes,
    type:'image/jpeg',
    dataUrl
  };

  docState.method='camera';
  docState.capturedImage=null;
  docState.cameraPhase=null;
  docState.fileError=null;

  // Send the captured image into the SAME automatic OCR pipeline used by uploads.
  startAutomaticVerification();
}

function docFieldsFormHtml(fieldsForType){
  return `<div class="mini-form">
    ${fieldsForType.map(k=>{
      const def = DOC_FIELD_DEFS[k]; const val = docState.fields[k]||'';
      if(def.type==='textarea') return `<label>${def.label}</label><textarea oninput="docSetField('${k}',this.value)">${val}</textarea>`;
      return `<label>${def.label}</label><input type="${def.type||'text'}" placeholder="${def.ph||'Not detected — please confirm'}" value="${val}" oninput="docSetField('${k}',this.value)">`;
    }).join('')}
  </div>`;
}

function renderDocUploadForm(){
  const f = docState.file;
  return `
  ${docHeader('Upload Document','Upload a clear photo of your property document. It will be read automatically.', "docGoStep('landing')")}
  <main>
    ${!f ? `
    <div class="dropzone">
      <div style="font-size:30px;">📎</div>
      <div style="font-weight:700;margin-top:8px;">Upload Your Property Document</div>
      <div style="font-size:12px;color:var(--sub);margin-top:4px;">JPG and PNG are read automatically. PDF is accepted but not yet auto-read in this build — a photo of the page works best.</div>
      <div class="dropzone-actions">
        <label class="upload-btn" for="docfile">Upload from Device</label>
        <input type="file" id="docfile" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/*" onchange="docHandleFile(this)">
        <label class="upload-btn cam" for="docfilecam">📷 Take Photo</label>
        <input type="file" id="docfilecam" accept="image/*" capture="environment" onchange="docHandleFile(this)">
      </div>
      ${docState.fileError?`<div class="auth-note" style="color:var(--bad);margin-top:10px;">${escapeHtml(docState.fileError)}</div>`:''}
    </div>
    <div class="auth-note" style="text-align:center;margin-top:14px;">Can't provide a readable document? <a href="javascript:void(0)" onclick="docPickMethod('manual')">Enter details manually instead</a>.</div>
    ` : `
    <div class="file-chip">
      <div style="font-size:22px;">${f.type==='application/pdf'?'📄':'🖼️'}</div>
      <div class="fi"><div class="fn">${escapeHtml(f.name)}</div><div class="fs">${(f.size/1024/1024).toFixed(2)} MB</div></div>
      <button onclick="docRemoveFile()">Remove</button>
    </div>
    ${f.dataUrl ? `<img class="doc-preview-img" src="${f.dataUrl}" alt="Document preview">` : ''}
    <div class="auth-note" style="margin-top:10px;">Preparing to read this document…</div>
    `}
  </main>`;
}

function renderOcrAnalyzing(){
  return `
  ${docHeader('Reading Your Document','Please wait while we read and extract the information — this is the real OCR engine running in your browser.', "docGoStep('landing')")}
  <main>
    <div class="ocr-progress-wrap">
      <div class="ocr-progress-label" id="ocrPhaseLabel">${escapeHtml(docState.ocrPhaseLabel||'Reading document…')}</div>
      <div class="ocr-progress-track"><div class="ocr-progress-bar" id="ocrProgressBar" style="width:${docState.ocrProgress||0}%;"></div></div>
      <div class="auth-note" style="margin-top:14px;text-align:center;">Larger or lower-quality images can take longer to read.</div>
    </div>
  </main>`;
}

function renderDocOcrFailedScreen(r){
  return `
  ${docHeader('Unable to Read Document','', "openVerifyDocument()")}
  <main>
    <div class="assess-banner assess-mute">
      <div class="assess-icon" style="color:var(--mute)">–</div>
      <div class="assess-title">UNABLE TO VERIFY</div>
      <div class="assess-sub">${escapeHtml(r.message||'We could not extract enough readable information from this document.')}</div>
    </div>
    <div class="doc-options" style="margin-top:18px;grid-template-columns:1fr;gap:10px;">
      <button class="btn btn-primary btn-block" onclick="docPickMethod('camera')">Retake Photo</button>
      <button class="btn btn-outline btn-block" onclick="docPickMethod('upload')">Upload Another Image</button>
    </div>
    <div class="auth-note" style="margin-top:14px;text-align:center;">Can't provide a readable document? <a href="javascript:void(0)" onclick="docPickMethod('manual')">Enter details manually instead</a>.</div>
  </main>`;
}

const AUTO_STATUS_META = {
  verified:{label:'DOCUMENT VERIFIED', icon:'✓', tone:'ok'},
  not_verified:{label:'DOCUMENT NOT VERIFIED', icon:'⚠', tone:'bad'},
  suspicious:{label:'POTENTIALLY FORGED / SUSPICIOUS', icon:'⚠', tone:'bad'},
  unable_to_verify:{label:'UNABLE TO VERIFY', icon:'–', tone:'mute'}
};

function autoFieldRow(label, field){
  if(!field) return `<div class="check-item"><span class="mark" style="color:var(--mute)">–</span><span>${label}: not checked</span></div>`;
  if(field.conflict) return `<div class="check-item"><span class="mark" style="color:var(--bad)">⚠</span><span>${label}: conflicting values found — ${field.values.map(escapeHtml).join(' vs ')}</span></div>`;
  if(field.found){
    const shown = label==='CNIC' ? maskCnic(field.value) : field.display;
    return `<div class="check-item"><span class="mark" style="color:var(--ok)">✓</span><span>${label}: ${escapeHtml(shown)} <em style="opacity:.65;">(automatically extracted)</em></span></div>`;
  }
  return `<div class="check-item"><span class="mark" style="color:var(--warn);">⚠</span><span>${label}: not detected</span></div>`;
}

function renderAutoDocResult(r){
  const meta = AUTO_STATUS_META[r.status] || AUTO_STATUS_META.unable_to_verify;
  const matchedProperty = r.matchedPropertyId ? allVerificationRecords().find(p=>p.id===r.matchedPropertyId) : null;
  const isDemoRec = matchedProperty && !PROPERTIES.some(p=>p.id===matchedProperty.id);
  const ext = r.extraction || {};
  const pf = (ext.profile && ext.profile.fields) || ['name','cnic','plot'];
  return `
  ${docHeader('Document Result', ext.documentType ? ext.documentType.type : '', docState.historyIndex!=null ? "docGoStep('history')" : "openVerifyDocument()")}
  <main>
    <div class="section-title">Automatically Extracted Information</div>
    <div class="vcat">
      ${pf.includes('name')?autoFieldRow('Name', ext.ownerName):''}
      ${pf.includes('plot')?autoFieldRow('Plot Number', ext.plotNumber):''}
      ${pf.includes('cnic')?autoFieldRow('CNIC', ext.cnic):''}
      ${pf.includes('survey')?autoFieldRow('Survey Number', ext.surveyNumber):''}
      ${pf.includes('address')?autoFieldRow('Address', ext.address):''}
      ${pf.includes('approvedArea')?autoFieldRow('Approved Area', ext.approvedArea):''}
      ${pf.includes('paymentStatus')?autoFieldRow('Payment Status', ext.paymentStatus):''}
    </div>

    <div class="assess-banner assess-${meta.tone}">
      <div class="assess-icon" style="color:var(--${meta.tone})">${meta.icon}</div>
      <div class="assess-title">${meta.label}</div>
      ${r.reasons && r.reasons.length ? `<div class="assess-sub">${escapeHtml(r.reasons[0])}</div>` : `<div class="assess-sub">Assessment based on available checks</div>`}
    </div>

    ${r.reasons && r.reasons.length ? `<div class="section-title">Issues Found</div>
    <div class="vcat">${r.reasons.map(x=>`<div class="check-item"><span class="mark" style="color:var(--warn);">⚠</span><span>${escapeHtml(x)}</span></div>`).join('')}</div>` : ''}

    <div class="section-title">Checks Performed</div>
    <div class="vcat">${r.checks.map(c=>`<div class="check-item"><span class="mark" style="color:${c.ok===true?'var(--ok)':c.ok===false?'var(--bad)':'var(--mute)'}">${c.ok===true?'✓':c.ok===false?'⚠':'–'}</span><span>${escapeHtml(c.text)}</span></div>`).join('')}</div>

    ${matchedProperty ? `
    <div class="section-title">Possible Matching Property</div>
    <div class="vprop" ${isDemoRec?'':`style="cursor:pointer;" onclick="nav('detail','${matchedProperty.id}')"`}>
      <div class="thumb"></div>
      <div>
        <div class="t">${escapeHtml(matchedProperty.title)}</div>
        <div class="l">${escapeHtml(matchedProperty.area)} · ${escapeHtml(matchedProperty.plot)}</div>
        <div class="l">Owner on record: ${escapeHtml(matchedProperty.owner)}</div>
      </div>
    </div>
    ${isDemoRec?'<div class="auth-note">This is a fictional demo record used for testing.</div>':`<div class="doc-options" style="margin-top:10px;grid-template-columns:1fr 1fr;gap:10px;">
      <button class="btn btn-outline btn-block" style="margin-top:0;" onclick="nav('detail','${matchedProperty.id}')">View Property</button>
      <button class="btn btn-primary btn-block" style="margin-top:0;" onclick="nav('verify','${matchedProperty.id}')">Verify This Property</button>
    </div>`}` : ''}

    <div class="section-title">Limitations</div>
    <div class="vcat">${(r.limitations||[]).map(x=>`<div class="check-item"><span class="mark" style="color:var(--mute)">–</span><span>${escapeHtml(x)}</span></div>`).join('')}</div>

    <button class="btn btn-outline btn-block" style="margin-top:16px;" onclick="openVerifyDocument()">Check Another Document</button>
  </main>
  ${docState.showNotVerifiedModal ? renderNotVerifiedModal(r, meta) : ''}
  `;
}

function renderNotVerifiedModal(r, meta){
  return `
  <div class="modal-overlay" onclick="closeNotVerifiedModal(event)">
    <div class="modal-card" onclick="event.stopPropagation()">
      <div class="modal-icon" style="color:var(--bad)">${meta.icon}</div>
      <div class="modal-title">${meta.label}</div>
      <div class="modal-body">${(r.reasons && r.reasons.length) ? r.reasons.map(x=>`<p>${escapeHtml(x)}</p>`).join('') : '<p>We could not verify this document using the available information.</p>'}</div>
      <div class="modal-actions">
        <button class="btn btn-outline" onclick="docPickMethod('upload')">Try Another Document</button>
        <button class="btn btn-outline" onclick="closeNotVerifiedModal()">View Details</button>
        <button class="btn btn-primary" onclick="closeNotVerifiedModal()">Close</button>
      </div>
    </div>
  </div>`;
}
function closeNotVerifiedModal(e){ if(e) e.stopPropagation(); docState.showNotVerifiedModal=false; render(); }

function renderDocManualForm(){
  const fieldsForType = DOC_TYPE_FIELDS[docState.docType] || DOC_TYPE_FIELDS['Other / Unknown Document'];
  return `
  ${docHeader('Enter Details Manually', docState.docType, "docGoStep('type')")}
  <main>
    <div class="disclaimer">No document file will be analyzed here. This method can check the entered information for completeness, internal consistency, and matches against available property records — it cannot inspect the document's visual or file characteristics.</div>
    <div class="section-title">Document Information</div>
    ${docFieldsFormHtml(fieldsForType)}
    ${docState.formError?`<div class="auth-note" style="color:var(--bad);">${docState.formError}</div>`:''}
    <button class="btn btn-primary btn-block" onclick="docStartManualCheck()">Check Details</button>
  </main>`;
}

function renderDocAnalyzing(title){
  return `
  ${docHeader(title,'Please wait a moment…', "docGoStep('landing')")}
  <main>
    <ul class="proc-list" id="docProcList">
      ${docState.analyzeSteps.map(s=>`<li><span class="dot">•</span> ${s}</li>`).join('')}
    </ul>
  </main>`;
}

function renderDocResult(){
  const r = docState.result;
  const meta = DOC_STATUS_META[r.status];
  const matchedProperty = r.matchedPropertyId ? PROPERTIES.find(p=>p.id===r.matchedPropertyId) : null;
  const backAction = docState.historyIndex!=null ? "docGoStep('history')" : "openVerifyDocument()";

  return `
  ${docHeader('Document Result', r.docType, backAction)}
  <main>
    <div class="vprop">
      <div class="thumb" style="display:flex;align-items:center;justify-content:center;font-size:22px;">${r.hasFile ? (r.fileMeta && r.fileMeta.type==='application/pdf'?'📄':'🖼️') : '✍️'}</div>
      <div>
        <div class="t">${r.docType}</div>
        <div class="l">${r.method==='upload' ? 'Checked via document upload' : 'Checked via manual entry'}</div>
        ${r.fields.documentNumber?`<div class="l">Doc. No. ${r.fields.documentNumber}</div>`:''}
      </div>
    </div>

    <div class="assess-banner assess-${meta.tone}">
      <div class="assess-icon" style="color:var(--${meta.tone})">${meta.icon}</div>
      <div class="assess-title">${meta.label}</div>
      <div class="assess-sub">${meta.blurb}</div>
      <div class="assess-sub" style="margin-top:6px;font-style:italic;">Assessment based on available checks</div>
    </div>

    ${r.reasons.length ? `<div class="section-title">Issues Found</div>
    <div class="vcat">${r.reasons.map(x=>`<div class="check-item"><span class="mark" style="color:var(--warn);">⚠</span><span>${x}</span></div>`).join('')}</div>` : ''}

    <div class="section-title">Checks Performed</div>
    <div class="vcat">${r.checks.map(c=>`<div class="check-item"><span class="mark" style="color:${c.ok===true?'var(--ok)':c.ok===false?'var(--bad)':'var(--mute)'}">${c.ok===true?'✓':c.ok===false?'⚠':'–'}</span><span>${c.text}</span></div>`).join('')}</div>

    ${matchedProperty ? `
    <div class="section-title">Possible Matching Property</div>
    <div class="vprop">
      <div class="thumb"></div>
      <div>
        <div class="t">${matchedProperty.title}</div>
        <div class="l">${matchedProperty.area} · ${matchedProperty.plot}</div>
        <div class="l">Owner on record: ${matchedProperty.owner}</div>
      </div>
    </div>
    <div class="action-row">
      <button class="btn btn-outline" onclick="nav('detail','${matchedProperty.id}')">View Property</button>
      <button class="btn btn-primary" onclick="nav('verify','${matchedProperty.id}')">Verify This Property</button>
    </div>
    <div class="auth-note">This is a possible match based on shared details, not a confirmed link between this document and the property.</div>
    ` : ''}

    <div class="section-title">Limitations</div>
    <div class="vcat">${r.limitations.map(x=>`<div class="check-item"><span class="mark" style="color:var(--mute);">–</span><span>${x}</span></div>`).join('')}</div>

    <div class="action-row">
      <button class="btn btn-outline" onclick="docGoStep('history')">My Document Checks</button>
      <button class="btn btn-primary" onclick="openVerifyDocument()">Check Another Document</button>
    </div>
  </main>`;
}

function renderDocHistoryList(){
  const rows = docHistory.map((r,i)=>{
    const meta = DOC_STATUS_META[r.status];
    const dateStr = new Date(r.timestamp).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
    return `<div class="vprop" style="margin-bottom:10px;">
      <div class="thumb" style="display:flex;align-items:center;justify-content:center;font-size:20px;">${r.hasFile?'📄':'✍️'}</div>
      <div style="flex:1;min-width:0;">
        <div class="t">${r.docType}</div>
        <div class="l">${dateStr} · ${r.method==='upload'?'Uploaded':'Manual entry'}</div>
        <span class="status-badge ${meta.badge}" style="margin-top:6px;">${meta.icon} ${meta.label}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
        <button class="btn btn-outline" style="padding:7px 10px;font-size:11px;" onclick="docViewHistory(${i})">View Result</button>
        <button class="btn btn-outline" style="padding:7px 10px;font-size:11px;color:var(--bad);border-color:var(--bad);" onclick="docDeleteHistory(${i})">Delete</button>
      </div>
    </div>`;
  }).join('') || `<div class="empty">No document checks yet. Upload a document or enter details manually to get started.</div>`;

  return `
  ${docHeader('My Document Checks', null, "docGoStep('landing')")}
  <main>${rows}</main>`;
}

/* --- SUB LISTS: My Verifications / Saved / Reports --- */
function renderSubList(kind){
  const cfg = {
    verifications:{title:'My Verifications', list:PROPERTIES, empty:'', actionLabel:'Continue Verification', actionFn:p=>`nav('verify','${p.id}')`},
    saved:{title:'Saved Properties', list:PROPERTIES.filter(p=>state.saved.has(p.id)), empty:'You haven\u2019t saved any properties yet. Tap the heart icon on a listing to save it here.', actionLabel:'View Property', actionFn:p=>`nav('detail','${p.id}')`},
    reports:{title:'Report A Scam', list:PROPERTIES, empty:'', actionLabel:'View Report', actionFn:p=>`nav('report','${p.id}')`}
  }[kind];

  const rows = cfg.list.map(p=>{
    const m = STATUS_META[overallStatus(p)];
    const verifiedImage = p.VerifiedImage || p.VerificationImage;
    return `<div class="vprop" style="margin-bottom:10px;">
      <div class="thumb" onclick="nav('detail','${p.id}')" style="cursor:pointer;background-image:url('${verifiedImage}');background-size:cover;background-position:center;"></div>
      <div style="flex:1;min-width:0;">
        <div class="t">${p.title}</div>
        <div class="l">Property ID: ${p.id}</div>
        <div class="l">${p.area}</div>
        <span class="status-badge ${m.color}" style="margin-top:6px;">${m.icon} ${m.label}</span>
      </div>
      <button class="btn btn-outline" style="padding:8px 12px;font-size:11px;flex-shrink:0;" onclick="${cfg.actionFn(p)}">${cfg.actionLabel}</button>
    </div>`;
  }).join('') || `<div class="empty">${cfg.empty}</div>`;

  const reportOptions = kind === 'reports' ? `
    <div class="doc-options" style="margin-bottom:18px;">
      <div class="doc-option-card" onclick="openReportEvidenceUpload()">
        <div class="doc-option-icon">📄</div>
        <h3>Upload Evidence</h3>
        <p>Choose a document or image from your device to report a suspected scam.</p>
        <button class="btn btn-primary btn-block" style="margin-top:0;" onclick="event.stopPropagation();openReportEvidenceUpload()">Upload Evidence</button>
      </div>
      <div class="doc-option-card" onclick="openReportEvidenceCamera()">
        <div class="doc-option-icon">📷</div>
        <h3>Scan / Capture Evidence</h3>
        <p>Use your camera to capture a clear image of the property or document.</p>
        <button class="btn btn-primary btn-block" style="margin-top:0;" onclick="event.stopPropagation();openReportEvidenceCamera()">Open Camera</button>
      </div>
    </div>` : '';

  const headerSubtitle = kind === 'reports'
    ? `<div class="tagline" style="margin-top:8px; max-width:960px; line-height:1.4; opacity:0.92;">See a scam? Snap it, report it, stop it. Expose the fake and protect your neighborhood.</div>`
    : '';

  return `
  <div class="header" style="padding-bottom:20px;">
    <div class="header-top">
      <button class="icon-btn" onclick="nav('home')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="logo-badge"><img src="${LOGO}" alt="Karachi Property Trust"></div>
    </div>
    <div class="brand-block"><div class="brand" style="font-size:19px;">${cfg.title}</div>${headerSubtitle}</div>
  </div>
  <main>${kind==='reports'?reportOptions:''}${kind==='verifications'?'<div class="section-title">VERIFIED PROPERTY</div>':''}${rows}</main>`;
}

/* --- REPORT --- */
function renderReport(id){
  const p = PROPERTIES.find(x=>x.id===id);
  const ov = overallStatus(p);
  const today = new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  return `
  <div class="header" style="padding-bottom:20px;">
    <div class="header-top">
      <button class="icon-btn" onclick="nav('verify','${p.id}')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="logo-badge"><img src="${LOGO}" alt="Karachi Property Trust"></div>
    </div>
    <div class="brand-block"><div class="brand" style="font-size:19px;">Verification Report</div><div class="tagline">Generated ${today}</div></div>
  </div>
  <main>
    <div class="report-block">
      <h4>Property</h4>
      <div class="report-row"><span>Title</span><span>${p.title}</span></div>
      <div class="report-row"><span>Location</span><span>${p.area}</span></div>
      <div class="report-row"><span>Reference</span><span>${p.plot}</span></div>
      <div class="report-row"><span>Price</span><span>${p.priceLabel}</span></div>
      <div class="report-row"><span>Owner</span><span>${p.owner}</span></div>
    </div>
    <div class="report-block">
      <h4>Category Results</h4>
      ${CATS.map(([key,label])=>{const m=STATUS_META[p.verification[key].status];return `<div class="report-row"><span>${label}</span><span class="status-badge ${m.color}">${m.icon} ${m.label}</span></div>`}).join('')}
    </div>
    <div class="report-block">
      <h4>Overall Result</h4>
      <span class="status-badge ${STATUS_META[ov].color}" style="font-size:13px;padding:7px 14px;">${STATUS_META[ov].icon} ${STATUS_META[ov].label}</span>
      <div class="disclaimer">This report reflects document analysis and available records only. It is not an official land-registry, bank, or court authentication. Outstanding checks should be confirmed with the relevant authority before finalising any transaction.</div>
    </div>
    <div class="action-row" style="grid-template-columns:1fr 1fr 1fr;">
      <button class="btn btn-outline" onclick="window.print()">Download</button>
      <button class="btn btn-outline" onclick="openChat()">Share</button>
      <button class="btn btn-primary" onclick="nav('detail','${p.id}')">Done</button>
    </div>
  </main>`;
}

/* ---------- DRAWER ---------- */
function renderDrawerNav(){
  const items = [
    ['home','Home','home', false],
    ['home','Browse Properties','building', true],
    ['verify-document','Verify Your Document','filecheck', false],
    ['ownerverify','Owner Verification System','shield', false],
    ['verlist','My Verifications','shield', false],
    ['savedlist','Saved Properties','heart', false],
    ['reportslist','Report A Scam','doc', false],
  ];
  document.getElementById('drawerNav').innerHTML = items.map(([v,label,icon,scroll])=>`
    <button class="drawer-item" onclick="${v==='verify-document'?'openVerifyDocument()':`nav('${v}')`};closeDrawer();${scroll?'scrollToGrid();':''}">
      <span class="di-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconSvg(icon)}</svg></span>
      ${label}<span class="chev">›</span>
    </button>`).join('') + `
    <button class="drawer-item" onclick="openChat();closeDrawer();">
      <span class="di-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconSvg('faq')}</svg></span>
      Property Assistance<span class="chev">›</span>
    </button>`;
  syncThemeControls();
}
function openDrawer(){ document.getElementById('drawer').classList.add('open'); document.getElementById('overlayBg').classList.add('show'); }
function closeDrawer(){ document.getElementById('drawer').classList.remove('open'); document.getElementById('overlayBg').classList.remove('show'); }
document.getElementById('overlayBg').onclick = ()=>{ closeDrawer(); closeChat(); };

/* ---------- CHAT / FAQ ---------- */
/* ---------- PROPERTY ASSISTANT ---------- */
const CHAT_API_URL = window.KPT_CHAT_API_URL || '/api/chat';
const CHAT_STORAGE_KEY = 'kpt-property-assistant';
const CHAT_STARTERS = ['Estimate a house price in DHA', 'Cheapest area for apartments?', 'Show plots under 3 crore in Malir'];
let chatState = (()=>{
  try { return JSON.parse(sessionStorage.getItem(CHAT_STORAGE_KEY)) || {}; }
  catch (error) { return {}; }
})();
chatState.sessionId = chatState.sessionId || (window.crypto && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`);
chatState.messages = Array.isArray(chatState.messages) ? chatState.messages : [];
let chatBusy = false;
let chatInitialized = false;

function saveChatState(){
  try { sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatState)); }
  catch (error) {}
}
function appendChatMessage(role, text, meta){
  const thread = document.querySelector('.assistant-thread');
  if (!thread) return;
  const row = document.createElement('div');
  row.className = `chat-message ${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'chat-message-bubble';
  bubble.textContent = text;
  row.appendChild(bubble);
  if (meta) {
    const note = document.createElement('div');
    note.className = 'chat-message-meta';
    note.textContent = meta;
    row.appendChild(note);
  }
  thread.appendChild(row);
  const body = document.getElementById('chatBody');
  body.scrollTop = body.scrollHeight;
}
function renderChat(){
  const body = document.getElementById('chatBody');
  body.innerHTML = '<div class="chat-today">Today</div><div class="assistant-thread" aria-live="polite"></div><div class="assistant-starters"></div><form class="assistant-compose" autocomplete="off"><input class="assistant-input" type="text" maxlength="1000" placeholder="Ask about Karachi properties..." aria-label="Message Property Assistance"><button class="assistant-send" type="submit" aria-label="Send message" disabled>Send</button></form>';
  chatInitialized = true;
  if (!chatState.messages.length) {
    appendChatMessage('assistant', 'Assalam o Alaikum! I can estimate property prices, compare areas and search our property records. How can I help?');
    CHAT_STARTERS.forEach(text=>{
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'assistant-starter';
      button.textContent = text;
      button.addEventListener('click', ()=>sendChatMessage(text));
      body.querySelector('.assistant-starters').appendChild(button);
    });
  } else {
    chatState.messages.forEach(message=>appendChatMessage(message.role, message.text, message.meta));
  }
  const form = body.querySelector('.assistant-compose');
  const input = body.querySelector('.assistant-input');
  const send = body.querySelector('.assistant-send');
  input.addEventListener('input', ()=>{ send.disabled = !input.value.trim() || chatBusy; });
  form.addEventListener('submit', event=>{
    event.preventDefault();
    const text = input.value;
    input.value = '';
    send.disabled = true;
    sendChatMessage(text);
  });
}
async function sendChatMessage(text){
  text = text.trim();
  if (!text || chatBusy) return;
  chatBusy = true;
  document.querySelectorAll('.assistant-starter').forEach(button=>button.remove());
  chatState.messages.push({role:'user',text});
  saveChatState();
  appendChatMessage('user', text);
  const thread = document.querySelector('.assistant-thread');
  const typing = document.createElement('div');
  typing.className = 'chat-message assistant chat-typing';
  typing.setAttribute('role', 'status');
  typing.setAttribute('aria-label', 'Property Assistance is typing');
  const typingBubble = document.createElement('div');
  typingBubble.className = 'chat-message-bubble';
  typingBubble.setAttribute('aria-hidden', 'true');
  for (let index = 0; index < 3; index++) {
    const dot = document.createElement('span');
    dot.className = 'chat-typing-dot';
    typingBubble.appendChild(dot);
  }
  typing.appendChild(typingBubble);
  thread.appendChild(typing);
  const send = document.querySelector('.assistant-send');
  if (send) send.disabled = true;
  try {
    const response = await fetch(CHAT_API_URL, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({session_id:chatState.sessionId,message:text})
    });
    const body = await response.text();
    let data;
    try {
      data = JSON.parse(body);
    } catch (parseError) {
      throw new Error(`Chat API returned a non-JSON response (HTTP ${response.status}). Start the Flask app and open http://127.0.0.1:5000, or set KPT_CHAT_API_URL to the deployed Flask /api/chat endpoint.`);
    }
    if (!response.ok) throw new Error(data.error || 'The assistant could not answer right now.');
    if (typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('The assistant returned an empty response.');
    const meta = data.from_data ? 'From property data' : (data.source === 'greeting' ? '' : 'General knowledge');
    chatState.messages.push({role:'assistant',text:data.reply,meta});
    saveChatState();
    typing.remove();
    appendChatMessage('assistant', data.reply, meta);
  } catch (error) {
    typing.remove();
    appendChatMessage('error', error.message || 'Could not reach Property Assistance. Check that the chatbot server is running and try again.');
  } finally {
    chatBusy = false;
    const input = document.querySelector('.assistant-input');
    const currentSend = document.querySelector('.assistant-send');
    if (input && currentSend) currentSend.disabled = !input.value.trim();
  }
}
function openChat(){ if (!chatInitialized) renderChat(); document.getElementById('chatPanel').classList.add('open'); document.getElementById('overlayBg').classList.add('show'); }
function closeChat(){ document.getElementById('chatPanel').classList.remove('open'); document.getElementById('overlayBg').classList.remove('show'); }

/* ---------- PROMO POPUP (floating bottom banner) ---------- */
const BANNER_COOLDOWN_MS = 18000; // 15-20s cooldown after a manual dismiss
const BANNER_STORAGE_KEY = 'lastBannerClosedAt';
let bannerTimer = null;
let lastPromoId = null;

function pickPromoProperty(excludeId){
  const pool = PROPERTIES.filter(p=>!p.featured && p.id!==excludeId);
  return pool.length ? pool[Math.floor(Math.random()*pool.length)] : null;
}

function renderPromo(p){
  document.getElementById('promo').innerHTML = `
    <div class="promo-inner">
      <div class="promo-thumb"><span class="badge">BEST PRICE</span></div>
      <div class="promo-body">
        <button class="promo-close" onclick="hidePromo()" aria-label="Dismiss">✕</button>
        <div class="pt">${p.title} · ${p.type}</div>
        <div class="pl">${p.area}, Karachi</div>
        <div class="pp">${p.priceLabel} <span class="good-deal">· Good Deal</span></div>
        <button onclick="hidePromo(true);nav('detail','${p.id}')">View Property</button>
      </div>
    </div>`;
}

function revealPromo(p){
  if(!p) return;
  lastPromoId = p.id;
  renderPromo(p);
  const el = document.getElementById('promo');
  el.classList.remove('hidden');
  el.classList.add('show');
}

// Called on load, and again once a cooldown finishes without a fresh pick queued.
function showPromo(){
  const lastClosed = Number(sessionStorage.getItem(BANNER_STORAGE_KEY) || 0);
  const remaining = BANNER_COOLDOWN_MS - (Date.now() - lastClosed);
  if(lastClosed && remaining > 0){
    // User closed it recently (even in a previous page load this session) -
    // stay hidden until the full cooldown has actually elapsed.
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(showPromo, remaining);
    return;
  }
  revealPromo(pickPromoProperty(lastPromoId));
}

// navigating=true when the user tapped "View Property" rather than the (X) -
// that's an accepted action, not a dismiss, so it doesn't start a cooldown.
function hidePromo(navigating){
  const el = document.getElementById('promo');
  el.classList.remove('show');
  el.classList.add('hidden');
  if(navigating) return;

  sessionStorage.setItem(BANNER_STORAGE_KEY, String(Date.now()));
  const next = pickPromoProperty(lastPromoId);
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(()=>revealPromo(next), BANNER_COOLDOWN_MS);
}

/* ---------- INIT ---------- */
const favicon = document.createElement('link');
favicon.rel = 'icon'; favicon.href = 'assets/logo-icon-trim.png';
document.head.appendChild(favicon);
if(window.location.hash==='#owner-verification') state.view='ownerverify';
render();
setTimeout(showPromo, 2200);
