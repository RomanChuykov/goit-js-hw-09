const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");let a="";t.disabled=!0;let l=null;e.addEventListener("click",()=>{e.disabled=!0,t.disabled=!1,l=setInterval(()=>{a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,d.style.backgroundColor=a},1e3)}),t.addEventListener("click",()=>{e.disabled=!1,t.disabled=!0,clearInterval(l)}),console.dir(e);
//# sourceMappingURL=01-color-switcher.13171199.js.map
