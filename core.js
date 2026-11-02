/* 跨境单品利润试算器: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const price=num(d.price,'售价'),fx=num(d.fx,'汇率',0.000001),fee=num(d.fee,'佣金比例')/100,refund=num(d.refund,'退款预留')/100,target=num(d.target,'目标利润率')/100;
 if(fee+refund>=1||fee+refund+target>=1)throw Error('佣金、退款预留和目标利润率之和必须小于100%');
 const fixed=num(d.purchase)+num(d.shipping)+num(d.packing)+num(d.ad),revenue=price*fx,variable=revenue*(fee+refund),profit=revenue-fixed-variable,breakeven=fixed/(1-fee-refund)/fx,goal=fixed/(1-fee-refund-target)/fx;
 return {metrics:[metric('单件利润（元）',money(profit)),metric('利润率',revenue?money(profit/revenue*100)+'%':'售价为0，无法计算'),metric('保本外币售价',money(breakeven)),metric('目标利润率售价',money(goal))],columns:['核算项','人民币金额'],rows:[['销售收入',money(revenue)],['采购',money(d.purchase)],['物流',money(d.shipping)],['包装及其他',money(d.packing)],['广告',money(d.ad)],['佣金',money(revenue*fee)],['退款预留',money(revenue*refund)],['利润',money(profit)]],sections:[note('计算规则','保本售价=固定单件成本÷(1−佣金比例−退款预留比例)÷汇率。\n目标售价=固定单件成本÷(1−佣金比例−退款预留比例−目标利润率)÷汇率。')],notes:profit<0?['当前售价下预估亏损，请核实成本。']:[]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
