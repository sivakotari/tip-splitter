import{c as t,a as e,t as s,b as l,w as r,v as i,n as a,d as n,o,F as p,r as u,e as c,f as d,g as m}from"./vendor.30aae5a0.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const h={name:"UserInput",data:()=>({usertext:"",error:""}),props:{label:{type:String,default:"Label"},placeholder:{type:[String,Number],default:0},prefix:{type:String,default:"icon-dollar"},triggerReset:{type:Boolean,default:!1},rules:{type:Array,default:null}},watch:{triggerReset(){this.usertext="",this.error=""}},computed:{},methods:{handleInput(t){const e=Number(t.target.value);this.rules&&this.validateInput(e),this.$emit("valueChange",e)},validateInput(t){const{condition:e,message:s}=this.rules[0];e(t)?this.error="":this.error=s}}},_={class:"input__wrapper"},g={class:"label"},f={key:0,class:"error"},b=["placeholder"];h.render=function(p,u,c,d,m,h){return o(),t("div",_,[e("div",g,[e("label",null,s(c.label),1),m.error?(o(),t("span",f,s(m.error),1)):l("",!0)]),r(e("input",{type:"number",placeholder:c.placeholder,onInput:u[0]||(u[0]=(...t)=>h.handleInput&&h.handleInput(...t)),style:a({backgroundImage:`url(/images/${c.prefix}.svg)`}),"onUpdate:modelValue":u[1]||(u[1]=t=>m.usertext=t),class:n({field__error:m.error})},null,46,b),[[i,m.usertext]])])};const v={name:"SelectTip",data:()=>({splitPercentages:[5,10,15,20,25],usertext:""}),props:{label:{type:String,default:"Label"},placeholder:{type:String,default:"Custom"},triggerReset:{type:Boolean,default:!1}},emits:["tip"],watch:{triggerReset(){this.resetClass(),this.usertext=""}},methods:{handleClick(t){t.target.classList.contains("tip__discount")&&(this.resetClass(),t.target.classList.add("btn--active"),this.$emit("tip",t.target.value)),t.target.classList.contains("tip__discount--custom")&&this.$emit("tip",Number(t.target.value))},resetClass(){document.querySelectorAll(".tip__discount").forEach((t=>t.classList.remove("btn--active")))}}},y={class:"selecttip--wrapper"},R={class:"label"},w=["value","data-value"],x=["placeholder"];v.render=function(l,a,n,c,d,m){return o(),t("div",y,[e("label",R,s(n.label),1),e("div",{class:"selecttip",onClick:a[2]||(a[2]=(...t)=>m.handleClick&&m.handleClick(...t))},[(o(!0),t(p,null,u(d.splitPercentages,((e,l)=>(o(),t("button",{class:"tip__discount",type:"button",value:e,key:l,"data-value":e},s(e)+"%",9,w)))),128)),r(e("input",{type:"number",class:"tip__discount--custom",placeholder:n.placeholder,onInput:a[0]||(a[0]=t=>l.$emit("tip",Number(t.target.value))),"onUpdate:modelValue":a[1]||(a[1]=t=>d.usertext=t)},null,40,x),[[i,d.usertext]])])])};const S={name:"ShowTips",props:["tip_amount","split_total_amount"]},C={class:"splitter-view"},I={class:"splitter-view__row"},k=e("div",null,[e("span",{class:"header"},"Tip Amount"),e("span",{class:"sub_header"},"/ person")],-1),L={class:"count"},T={class:"splitter-view__row"},N=e("div",null,[e("span",{class:"header"},"Total"),e("span",{class:"sub_header"},"/ person")],-1),$={class:"count"};S.render=function(l,r,i,a,p,u){return o(),t("div",C,[e("div",I,[k,e("span",L,"$"+s(i.tip_amount.toFixed(2)),1)]),e("div",T,[N,e("span",$,"$"+s(i.split_total_amount.toFixed(2)),1)]),e("button",{class:n(["reset",{disabled:!(i.tip_amount&&i.split_total_amount)}]),onClick:r[0]||(r[0]=t=>l.$emit("reset"))},"Reset",2)])};const U={components:{UserInput:h,SelectTip:v,ShowTips:S},data:()=>({bill_total:0,tip_splits:0,tip_percent:0,triggerReset:!1,rules:[{condition:t=>t>0,message:"Can't be zero"}]}),methods:{reset(){this.bill_total=0,this.tip_splits=0,this.tip_percent=0,this.triggerReset=!this.triggerReset}},computed:{split_amount:function(){return this.bill_total&&this.tip_splits?this.bill_total/this.tip_splits:0},tip_amount:function(){return this.bill_total&&this.tip_percent&&this.split_amount?this.bill_total*this.tip_percent/100:0},split_total_amount:function(){return this.tip_amount?this.split_amount+this.tip_amount:0}}},A={class:"app__container"},P={class:"left"},V={class:"right"};U.render=function(s,l,r,i,a,n){const p=c("UserInput"),u=c("SelectTip"),m=c("ShowTips");return o(),t("main",A,[e("div",P,[d(p,{prefix:"icon-dollar",label:"Bill",onValueChange:l[0]||(l[0]=t=>a.bill_total=t),triggerReset:a.triggerReset},null,8,["triggerReset"]),d(u,{label:"Select Tip %",onTip:l[1]||(l[1]=t=>a.tip_percent=t),triggerReset:a.triggerReset},null,8,["triggerReset"]),d(p,{prefix:"icon-person",label:"Number of People",onValueChange:l[2]||(l[2]=t=>a.tip_splits=t),triggerReset:a.triggerReset,rules:a.rules},null,8,["triggerReset","rules"])]),e("div",V,[d(m,{tip_amount:n.tip_amount,split_total_amount:n.split_total_amount,onReset:n.reset},null,8,["tip_amount","split_total_amount","onReset"])])])};m(U).mount("#app");
