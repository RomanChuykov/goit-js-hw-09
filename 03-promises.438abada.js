!function(){let e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"'),n=document.querySelector('input[name="amount"'),o=document.querySelector("button");function u(e,t){e==t&&(o.disabled=!1)}document.addEventListener("submit",function(l){o.disabled=!0;let i=e.valueAsNumber;l.preventDefault();for(let e=1;e<=n.valueAsNumber;e++)(function(e,t){return new Promise((n,o)=>{setTimeout(()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(e,i).then(({position:t,delay:o})=>{console.log(`✅ Fulfilled promise ${t} in ${o}ms`),u(e,n.valueAsNumber)}).catch(({position:t,delay:o})=>{console.log(`❌ Rejected promise ${t} in ${o}ms`),u(e,n.valueAsNumber)}),i+=t.valueAsNumber})}();
//# sourceMappingURL=03-promises.438abada.js.map
