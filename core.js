/* 接单工期与收益测算: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const start=day(d.start),end=day(d.due);if(end<start)throw Error('交付日期不能早于开始日期');if(end-start>366*86400000)throw Error('单次工期最多366天');let days=0;for(let t=start;t<=end;t+=86400000){const w=new Date(t).getUTCDay();if(d.weekend==='是'||(w!==0&&w!==6))days++;}const daily=num(d.daily),committed=num(d.committed),buffer=num(d.buffer)/100;let hours=0;const rows=tableRows(d).map(r=>{const h=num(r.hours);hours+=h;return [r.name,h];});const needed=hours*(1+buffer),capacity=days*daily-committed,net=num(d.quote)-num(d.cost);
 return {metrics:[metric('可用工时',capacity.toFixed(1)),metric('含预留所需工时',needed.toFixed(1)),metric('工期判断',needed<=capacity?'工时可容纳':'工时不足'),metric('净收入折合时薪',needed?money(net/needed):'无法计算')],columns:['工作项','预计小时'],rows,sections:[note('核算依据','日期区间含开始与交付当天；可工作 '+days+' 天。可用工时=天数×每天工时−已有承诺工时。\n新项目工时按 '+d.buffer+'% 预留；不自动扣除法定假日，请自行调整已有承诺工时。')],notes:capacity<needed?['尚缺 '+(needed-capacity).toFixed(1)+' 小时，请调整交期或范围。']:[]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
