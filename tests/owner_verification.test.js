const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const OwnerVerification = require('../js/owner_verification.js');

const files = OwnerVerification.CSV_FILES.map(name=>({
  name,
  text:fs.readFileSync(path.join(__dirname,'..','public',name),'utf8')
}));
const store = OwnerVerification.createStore(OwnerVerification.parseFiles(files));

test('parses quoted commas and escaped quotes in CSV fields',()=>{
  const rows=OwnerVerification.parseCsv('name,note\n"Example, Owner","says ""hello"""\n');
  assert.deepEqual(rows,[{name:'Example, Owner',note:'says "hello"'}]);
});

test('loads every property record from the five supplied CSV files',()=>{
  assert.equal(store.recordCount,16000);
  assert.equal(store.pricedCount,13009);
  assert.deepEqual(Object.values(store.sourceCounts).reduce((sum,count)=>sum+count,0),16000);
});

test('looks up a real CSV property and compounds its estimate',()=>{
  const property=store.lookup('demo-kpt-8103');
  assert.equal(property.ownerName,'Rahim Mahsud');
  assert.equal(property.propertyType,'Apartment');
  assert.equal(property.price,10000000);
  const result=store.forecast(property,2);
  assert.equal(result.forecastPrice,Math.round(result.currentPrice*1.05**2/1000)*1000);
  assert.ok(result.supportCount>0);
});

test('uses an area fallback for an unpriced Commercial property',()=>{
  const property=store.lookup('DEMO-KPT-15327');
  assert.equal(property.propertyType,'Commercial');
  assert.equal(property.price,null);
  const estimate=store.estimate(property);
  assert.ok(estimate.price>0);
  assert.match(estimate.label,/area mean/);
});