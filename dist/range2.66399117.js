parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oN4D":[function(require,module,exports) {
var e={step:1,vertical:!1,multirange:!0,bubbles:!0,width:26,min:10,max:100},t=document.querySelector(".sliders"),n=document.querySelector(".choose-multi"),a=$("<div>",{class:"slider-single"});$(t).append(a);var i=$("<div>",{class:"bubble-single"});$(a).append(i);var s=$("<span>",{class:"value-single-span"});$(i).append(s);var l=$("<input>",{id:"single-range",type:"range",min:"50",max:"250",value:"100"});$(a).append(l),$(a).append($("<div>",{class:"progress-bar"}));var u=$("<div>",{class:"scale"});$(a).append(u);var r=$("<span>",{style:"left: 0%"});$(u).append(r),$(r).append($("<ins>",{class:"first-ins"}));var d=$("<span>",{class:"second",style:"left: 25%"});$(u).append(d),$(d).append($("<ins>",{class:"second-ins"}));var p=$("<span>",{class:"third",style:"left: 49%"});$(u).append(p),$(p).append($("<ins>",{class:"third-ins"}));var m=$("<span>",{class:"fourth",style:"left: 73%"});$(u).append(m),$(m).append($("<ins>",{class:"fourth-ins"}));var o=$("<span>",{style:"left: 95%"});$(u).append(o),$(o).append($("<ins>",{class:"fifth-ins"}));l=document.getElementById("single-range");var c=$("<div>",{class:"multi-range-slider"});$(t).append(c);var v=$("<div>",{class:"bubble-multi-left"});$(c).append(v);var h=$("<span>",{class:"value-multi-left-span"});$(v).append(h);var f=$("<div>",{class:"bubble-multi-right"});$(c).append(f);var g=$("<span>",{class:"value-multi-right-span"});$(f).append(g);var b=$("<input>",{id:"input-left",type:"range",min:"50",max:"250",value:"100"}),x=$("<input>",{id:"input-right",type:"range",min:"50",max:"250",value:"100"});$(c).append(b),$(c).append(x);var y=$("<div>",{class:"slider"});$(c).append(y),$(y).append($("<div>",{class:"track"})),$(y).append($("<div>",{class:"range"})),$(y).append($("<div>",{class:"thumb left"})),$(y).append($("<div>",{class:"thumb right"}));var w=$("<div>",{class:"multi-scale"});$(c).append(w);var M=$("<span>",{style:"left: 0%"});$(w).append(M),$(M).append($("<ins>",{class:"multi-first-ins"}));var V=$("<span>",{class:"second",style:"left: 25%"});$(w).append(V),$(V).append($("<ins>",{class:"multi-second-ins"}));var L=$("<span>",{class:"third",style:"left: 49%"});$(w).append(L),$(L).append($("<ins>",{class:"multi-third-ins"}));var R=$("<span>",{class:"fourth",style:"left: 73%"});$(w).append(R),$(R).append($("<ins>",{class:"multi-fourth-ins"}));var I=$("<span>",{style:"left: 95%"});$(w).append(I),$(I).append($("<ins>",{class:"multi-fifth-ins"}));var S=document.querySelector(".slider > .range"),E=document.querySelector(".slider > .thumb.left"),B=document.querySelector(".slider > .thumb.right");b=document.getElementById("input-left"),x=document.getElementById("input-right");$("input[type='radio']").change(function(){$(n).prop("checked")?($(a).hide(),$(".multi-range-slider").show()):($(a).show(),$(".multi-range-slider").hide())}),e.vertical?t.style.transform="rotate(270deg)":t.style.transform="rotate(0deg)",l.step=e.step,b.step=e.step,x.step=e.step,e.multirange?($(a).hide(),$(".multi-range-slider").show()):($(a).show(),$(".multi-range-slider").hide()),e.bubbles?($(".bubble-single").removeClass("none"),$(".bubble-multi-right").removeClass("none"),$(".bubble-multi-left").removeClass("none")):($(".bubble-single").addClass("none"),$(".bubble-multi-right").addClass("none"),$(".bubble-multi-left").addClass("none")),$(t).css("width",e.width+"vw"),$(b).css("width",e.width+"vw"),$(x).css("width",e.width+"vw"),$(l).css("width",e.width+"vw"),$(a).css("width",e.width+"vw"),$(".scale").css("width",e.width+"vw"),$(".multi-scale").css("width",e.width+"vw"),l.min=e.min,l.max=e.max,b.min=e.min,x.min=e.min,b.max=e.max,x.max=e.max;var C={setLeftValue:function(t,n,a,i){void 0===a&&(a=-666.666),void 0===i&&(i=-666.666);var s=e.min,l=e.max;b.value=Math.min(parseInt(b.value),parseInt(x.value)-1);var u,r=Math.min(a,i-1);u=-666.666==a?(b.value-s)/(l-s)*100:(r-t)/(n-t)*100,E.style.left=u+"%",S.style.left=u+"%"},setRightValue:function(t,n,a,i){void 0===a&&(a=-666.666),void 0===i&&(i=-666.666);var s=e.min,l=e.max;x.value=Math.max(parseInt(x.value),parseInt(b.value)+1);var u,r=Math.max(i,a+1);u=-666.666==i?(x.value-s)/(l-s)*100:(r-t)/(n-t)*100,B.style.right=100-u+"%",S.style.right=100-u+"%"},MouseMove:function(e,n,a,i,s,l,u){var r,d,p,m,o,c;void 0===s&&(s=-666.666),void 0===l&&(l=-666.666),void 0===u&&(u=-666.666),r=e.offsetX,p=(+b.min+ +b.max)/$(t).width(),c=-666.666==u?r*p:u*((n+a)/i),m=Math.abs(b.value-c),o=Math.abs(x.value-c);var v=Math.abs(s-c),h=Math.abs(l-c);d=-666.666==s&&-666.666==l?m<o:v<h,e.buttons||(d?(b.style.zIndex=2,x.style.zIndex=1):(x.style.zIndex=2,b.style.zIndex=1))}};C.setLeftValue(),C.setRightValue();var q={getLeftValue:function(){var e=Number(100*(b.value-b.min)/(b.max-b.min)),t=-10-.05*e;$(".bubble-multi-left").css("left","calc("+e+"% + ("+t+"px))"),$(".bubble-multi-left").css("bottom","50px"),$(".value-multi-left-span").text(b.value)},getRightValue:function(){var e=Number(100*(x.value-x.min)/(x.max-x.min)),t=-10-.05*e;$(".bubble-multi-right").css("left","calc("+e+"% + ("+t+"px))"),$(".bubble-multi-right").css("bottom","50px"),$(".value-multi-right-span").text(x.value)},scaleMulti:function(){$(".multi-first-ins").text(b.min),$(".multi-second-ins").text(Math.floor((b.max-b.min)/4+ +b.min)),$(".multi-third-ins").text(Math.round((b.max-b.min)/2+ +b.min)),$(".multi-fourth-ins").text(Math.round(b.max-(b.max-b.min)/4)),$(".multi-fifth-ins").text(b.max)},countProgress:function(){$("#single-range").on("input",function(e){var t=+e.target.min,n=e.target.max,a=e.target.value;$(".progress-bar").css({width:100*(a-t)/(n-t)+"%"})}).trigger("input")},typeBubbleValue:function(){$(".value-single-span").text(l.value)},getSingleValue:function(){var e=Number(100*(l.value-l.min)/(l.max-l.min)),t=5-.25*e;$(".bubble-single").css("left","calc("+e+"% + ("+t+"px))"),$(".value-single-span").text(l.value)},scaleSingle:function(){$(".first-ins").text(l.min),$(".second-ins").text(Math.floor((l.max-l.min)/4+ +l.min)),$(".third-ins").text(Math.round((l.max-l.min)/2+ +l.min)),$(".fourth-ins").text(Math.round(l.max-(l.max-l.min)/4)),$(".fifth-ins").text(l.max)}};q.getLeftValue(),q.getRightValue(),q.scaleMulti(),q.countProgress(),q.typeBubbleValue(),q.getSingleValue(),q.scaleSingle();var z={inTouchLeft:function(){b.addEventListener("input",C.setLeftValue)},inTouchRight:function(){x.addEventListener("input",C.setRightValue)},inMoveLeft:function(){b.onmousemove=function(e){C.MouseMove.call(b,e)}},inMoveRight:function(){x.onmousemove=function(e){C.MouseMove.call(x,e)}},inGetLeft:function(){b.addEventListener("input",q.getLeftValue)},inGetRight:function(){x.addEventListener("input",q.getRightValue)},showBubbleValue:function(){l.addEventListener("input",q.getSingleValue)}};z.inTouchLeft(),z.inTouchRight(),z.inMoveLeft(),z.inMoveRight(),z.inGetLeft(),z.inGetRight(),z.showBubbleValue();
},{}]},{},["oN4D"], null)
//# sourceMappingURL=/range2.66399117.js.map