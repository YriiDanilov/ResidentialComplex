(()=>{"use strict";var e,t={521:(e,t,o)=>{var n,r,c=o(366);document.addEventListener("DOMContentLoaded",(function(){var e={mode:"close"};window.addEventListener("load",(function(){window.scrollTo(0,0)}));var t=(0,c.A)(e,(function(){var t=document.querySelector("#popup"),o=document.querySelector("#popup-fade"),n=document.body,r=document.getElementById("imageContainer");"open"===e.mode?(t.classList.toggle("open"),n.classList.add("no-scroll"),o.classList.toggle("popup-fade"),r.classList.add("show")):(t.classList.remove("open"),n.classList.remove("no-scroll"),o.classList.remove("popup-fade"),r.classList.remove("show"))})),o=document.querySelector(".menu-close"),n=document.querySelector("#menu_btn");n.addEventListener("click",(function(){t.mode="open"})),Array.from(menu.children).forEach((function(e){e.addEventListener("click",(function(){t.mode="close"}))})),o.addEventListener("click",(function(){t.mode="close"})),document.addEventListener("click",(function(e){popup.contains(e.target)||n.contains(e.target)||(t.mode="close")}))})),r=(n=document.querySelector(".letters")).textContent.replace(/(-|#|@){1}/g,(function(e){e[1],e[0]})),n.innerHTML=r.replace(/(\S)/g,'<span class="letter">$&</span>'),n.querySelectorAll(".letter").forEach((function(e,t){e.style.zIndex=-t,e.style.transitionDuration="".concat(t/10+1,"s")})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)},document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#btn-show"),t=document.querySelector("#wrapper-connection"),o=document.querySelector("#btn-close"),n=document.querySelector("#form"),r=document.querySelector("#message"),c=document.querySelector("#input");e.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("openForm")})),n.addEventListener("submit",(function(e){e.preventDefault(),n.style.display="none",r.style.display="block",c.value=""})),o.addEventListener("click",(function(e){e.preventDefault(),t.classList.remove("openForm"),n.style.display="block",r.style.display="none",c.value=""}))}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=(t,o,r,c)=>{if(!o){var s=1/0;for(i=0;i<e.length;i++){for(var[o,r,c]=e[i],d=!0,l=0;l<o.length;l++)(!1&c||s>=c)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(d=!1,c<s&&(s=c));if(d){e.splice(i--,1);var a=r();void 0!==a&&(t=a)}}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[o,r,c]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,c,[s,d,l]=o,a=0;if(s.some((t=>0!==e[t]))){for(r in d)n.o(d,r)&&(n.m[r]=d[r]);if(l)var i=l(n)}for(t&&t(o);a<s.length;a++)c=s[a],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(i)},o=self.webpackChunkdonuts=self.webpackChunkdonuts||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[366],(()=>n(521)));r=n.O(r)})();
//# sourceMappingURL=index.fa40cd1482127115c7b8.js.map