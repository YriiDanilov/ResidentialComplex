(()=>{"use strict";var e,t={793:(e,t,n)=>{var o=n(366);new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),document.addEventListener("DOMContentLoaded",(function(){var e={mode:"close"};window.addEventListener("load",(function(){window.scrollTo(0,0)}));var t=(0,o.A)(e,(function(){var t=document.querySelector("#popup"),n=document.querySelector("#popup-fade"),o=document.body,c=document.getElementById("imageContainer");"open"===e.mode?(t.classList.toggle("open"),o.classList.add("no-scroll"),n.classList.toggle("popup-fade"),c.classList.add("show")):(t.classList.remove("open"),o.classList.remove("no-scroll"),n.classList.remove("popup-fade"),c.classList.remove("show"))})),n=document.querySelector(".menu-close"),c=document.querySelector("#menu_btn");c.addEventListener("click",(function(){t.mode="open"})),Array.from(menu.children).forEach((function(e){e.addEventListener("click",(function(){t.mode="close"}))})),n.addEventListener("click",(function(){t.mode="close"})),document.addEventListener("click",(function(e){popup.contains(e.target)||c.contains(e.target)||(t.mode="close")}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#connection__btn-phone"),t=document.querySelector("#connection__wrapper-content"),n=document.querySelector("#btn-close"),o=document.querySelector("#wrapper-form"),c=document.querySelector("#connection__form"),r=document.querySelector("#connection__feedback"),i=document.body,s=document.querySelector(".header"),a=document.querySelector("#btn-feedback"),d=document.querySelector("#connection__submit"),l=document.querySelector("#connection__input"),u=document.querySelector("#button_infrastructure"),p=document.querySelector("#button_link"),m=function(){i.classList.remove("popup-fade"),t.classList.remove("openForm"),i.classList.remove("no-scroll"),c.reset(),s.classList.remove("z0"),e.classList.remove("z0"),e.style.display="flex"},v=function(){d.disabled=!0,d.style.background="grey"},f=function(){e.classList.toggle("z0"),s.classList.toggle("z0"),i.classList.toggle("popup-fade"),i.classList.toggle("no-scroll"),t.classList.add("openForm"),e.style.display="none",v(),l.addEventListener("input",(function(e){l.checkValidity()&&"0"!==e.target.value&&e.target.value.length>0?(d.disabled=!1,d.style.background="#F45B69"):v()})),t.contains(r)&&(r.remove(),o.append(c))},g=function(n){t.contains(n.target)||e.contains(n.target)||a.contains(n.target)||m()};a.addEventListener("click",(function(e){e.stopPropagation(),f()})),c.addEventListener("submit",(function(e){e.preventDefault(),c.replaceWith(r)})),n.addEventListener("click",(function(e){e.stopPropagation(),m()})),e.addEventListener("click",(function(e){e.stopPropagation(),f()})),p.addEventListener("click",(function(e){e.stopPropagation(),f()})),u.addEventListener("click",(function(e){e.stopPropagation(),f()})),document.addEventListener("click",(function(e){g(e)})),document.addEventListener("touchstart",(function(e){g(e)}))})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)}}},n={};function o(e){var c=n[e];if(void 0!==c)return c.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,c,r)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,c,r]=e[l],s=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var d=c();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,c,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={137:0,622:0,401:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var c,r,[i,s,a]=n,d=0;if(i.some((t=>0!==e[t]))){for(c in s)o.o(s,c)&&(o.m[c]=s[c]);if(a)var l=a(o)}for(t&&t(n);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(l)},n=self.webpackChunkResidentialComplex=self.webpackChunkResidentialComplex||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c=o.O(void 0,[366,622,401],(()=>o(793)));c=o.O(c)})();
//# sourceMappingURL=common_layout.8f3e626a7f0342d58d0a.js.map