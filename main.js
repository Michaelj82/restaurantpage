(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),l=t.n(r),o=t(645),a=t.n(o)()(l());a.push([n.id,"html, body{\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n\n    background-color: aqua;\n    display: grid;\n    grid-template-columns: 1fr minmax(550px, 3fr) 1fr;\n    grid-template-rows: 1fr;\n    overflow-x: hidden;\n    }\nbody > *{\n    flex-shrink: 0;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n\n    background-color: brown;\n    grid-column-start: 2;\n    grid-column-end: 3;\n\n    color: white;\n}\n\n\n#header-content{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    background-color: green;\n    height: 100px;\n    width: 85%;\n\n    font-size: 30px;\n}\n\n#header-content > svg{\n    height: 100%;\n    width: auto;\n}\n\n#navigation-content{\n    background: blue;\n    width: 85%;\n    \n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n}\n\n#navigation-content > ul > li {\n    display: inline-block;\n    margin-right: 20px;\n}\n\n#main-content{\n    width: 85%;\n    background-color: black;\n    flex-grow: 1;\n}\n\n",""]);const i=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,l,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var h=[].concat(n[s]);r&&a[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),t&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=t):h[2]=t),l&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=l):h[4]="".concat(l)),e.push(h))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],i=0;i<n.length;i++){var c=n[i],s=r.base?c[0]+r.base:c[0],h=o[s]||0,d="".concat(s," ").concat(h);o[s]=h+1;var p=t(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=l(u,r);r.byIndex=i,e.splice(i,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function l(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,l){var o=r(n=n||[],l=l||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var i=t(o[a]);e[i].references--}for(var c=r(n,l),s=0;s<o.length;s++){var h=t(o[s]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var l=void 0!==t.layer;l&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,l&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var l=e[r];if(void 0!==l)return l.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),l=t.n(r),o=t(569),a=t.n(o),i=t(565),c=t.n(i),s=t(216),h=t.n(s),d=t(589),p=t.n(d),u=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=h(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.getElementById("content");const v=document.getElementById("main-content"),g=document.getElementById("header-content"),m=document.getElementById("navigation-content");g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 502.391 502.391" style="enable-background:new 0 0 502.391 502.391;" xml:space="preserve" width="512" height="512"><g><polygon style="fill:#E95B2D;" points="436.293,417.975 347.09,278.211 402.98,278.211 317.275,155.724 363.353,155.724    251.195,12.182 139.037,155.724 185.116,155.724 99.411,278.211 155.301,278.211 66.097,417.975  "/><rect x="222.862" y="417.975" style="fill:#FABA45;" width="56.667" height="76.916"/><rect x="152.991" y="269.115" transform="matrix(-0.8578 -0.5139 0.5139 -0.8578 126.9735 701.3111)" style="fill:#0F2639;" width="15" height="127.956"/><path style="fill:#0F2639;" d="M287.029,425.475h162.949l-89.204-139.764h56.607l-85.705-122.487h47.056L251.195,0L123.659,163.224   h47.056L85.009,285.711h56.607L52.413,425.475h162.949v61.916h-15.003v-38.613h-15v38.613h-15.003v-24.612h-15v24.612h-19.661v15   h79.667h71.667h79.667v-15h-79.667V425.475z M79.781,410.475l89.204-139.764h-55.173l85.705-122.487h-45.102l96.78-123.86   l96.78,123.86h-45.102l85.705,122.487h-55.173l70.054,109.761h-74.598v15h84.172l9.576,15.003H287.029h-71.667H79.781z    M230.362,487.391v-61.916h41.667v61.916H230.362z"/><rect x="264.193" y="380.472" style="fill:#0F2639;" width="44.667" height="15"/></g></svg>The Log Cabin<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 502.188 502.188" style="enable-background:new 0 0 502.188 502.188;" xml:space="preserve" width="512" height="512"><g><polygon style="fill:#FABA45;" points="265.082,207.882 224.094,248.869 187.094,180.869 134.328,194.936 196.637,63.481  "/><path style="fill:#E95B2D;" d="M185.43,453.321h195.99l-38.961-82.196h-50.566c-9.757,0-17.667-7.91-17.667-17.667   c0-9.757,7.91-17.666,17.667-17.666h33.819L196.637,63.481l68.445,144.4l-40.988,40.988l-37-68l-52.767,14.067l62.309-131.455   L98.26,271.029h141.822c13.807,0,25,11.193,25,25s-11.193,25-25,25H74.561L11.855,453.321h153.573"/><polygon style="fill:#FABA45;" points="297.513,200.451 337.094,258.401 379.309,219.09 333.994,123.487  "/><path style="fill:#E95B2D;" d="M379.309,219.09l-42.215,39.311l-39.582-57.95l-17.977,37.926l46.175,97.415h65.81   c9.757,0,17.667,7.91,17.667,17.666c0,9.757-7.91,17.667-17.667,17.667h-49.063l38.961,82.196h108.914L379.309,219.09z"/><path style="fill:#FABA45;" d="M265.082,296.029c0,13.807-11.193,25-25,25H56.64c-13.807,0-25-11.193-25-25l0,0   c0-13.807,11.193-25,25-25h183.442C253.889,271.029,265.082,282.221,265.082,296.029L265.082,296.029z"/><path style="fill:#E95B2D;" d="M317.65,157.967l16.344-34.48l11.621,24.516c13.912-9.9,22.995-26.143,22.995-44.518   c0-30.165-24.453-54.618-54.618-54.618c-30.165,0-54.618,24.453-54.618,54.618c0,30.165,24.453,54.618,54.618,54.618   C315.223,158.103,316.439,158.048,317.65,157.967z"/><path style="fill:#FABA45;" d="M409.188,353.459c0,9.757-7.91,17.667-17.667,17.667h-99.629c-9.757,0-17.667-7.91-17.667-17.667   l0,0c0-9.757,7.91-17.666,17.667-17.666h99.629C401.278,335.792,409.188,343.702,409.188,353.459L409.188,353.459z"/><path style="fill:#0F2639;" d="M381.697,206.617L381.697,206.617l-26.758-56.452c13.354-11.733,21.17-28.755,21.17-46.681   c0-34.252-27.866-62.118-62.118-62.118c-34.252,0-62.118,27.866-62.118,62.118c0,31.537,23.629,57.641,54.11,61.584l-17.092,36.059   l0,0l-9.355,19.738L203.414,60.269l0,0l-6.777-14.298l-6.777,14.298l0,0l-96.344,203.26H56.64c-17.92,0-32.5,14.58-32.5,32.5   c0,17.92,14.58,32.5,32.5,32.5h6.066L0,460.821h165.428v-15H23.71l7.111-15.003h104.603v-15H37.931l41.375-87.29h160.776   c17.92,0,32.5-14.58,32.5-32.5c0-17.92-14.58-32.5-32.5-32.5H110.115l29.501-62.24l43.709-11.652l38.977,71.632l40.56-40.56   l8.375,17.669l0,0l42.62,89.915h-21.963c-13.877,0-25.167,11.289-25.167,25.166c0,13.877,11.29,25.167,25.167,25.167h45.821   l15.926,33.598l15.925,33.598H185.43v15h191.245h16.6h108.914L381.697,206.617z M240.082,278.529c9.649,0,17.5,7.851,17.5,17.5   c0,9.649-7.851,17.5-17.5,17.5H69.816H56.64c-9.649,0-17.5-7.851-17.5-17.5c0-9.649,7.851-17.5,17.5-17.5h29.765H240.082z    M225.886,236.471l-35.023-64.368l-42.824,11.416l48.598-102.527l59.404,125.325L225.886,236.471z M338.367,246.967l-32.234-47.192   l27.86-58.778l8.677,18.306l0,0l27.51,58.039L338.367,246.967z M312.847,150.589c-25.455-0.609-45.973-21.505-45.973-47.104   c0-25.981,21.137-47.118,47.118-47.118c25.981,0,47.118,21.137,47.118,47.118c0,12.131-4.72,23.722-12.938,32.403l-14.178-29.911   L312.847,150.589z M291.892,363.625c-5.606,0-10.167-4.561-10.167-10.167c0-5.606,4.561-10.166,10.167-10.166h29.073h16.601h53.955   c5.606,0,10.167,4.56,10.167,10.166c0,5.606-4.561,10.167-10.167,10.167h-44.317h-16.601H291.892z M386.164,445.821l-3.142-6.629   l-28.708-60.567h37.207c13.877,0,25.167-11.29,25.167-25.167c0-13.877-11.29-25.166-25.167-25.166h-61.065l-42.62-89.916   l10.855-22.901l37.13,54.36l41.1-38.272l101.558,214.259H386.164z"/></g></svg>';let y=document.createElement("ul");["Home","Menu","Reservations","Contact Us"].forEach((n=>{let e=document.createElement("li");e.innerText=n,y.appendChild(e)})),m.appendChild(y),v.textContent="asdf"})()})();