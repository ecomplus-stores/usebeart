!function(t,e,n,i,o,r,a,s,c,d,l,p){function u(){p||(p=1,"/"==(a=(r.lib||"/~partytown/")+(!1!==r.debug?"debug/":""))[0]?(c=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(s=setTimeout(f,1e4),e.addEventListener("pt0",h),o?w(1):n.serviceWorker?n.serviceWorker.register(a+(r.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?w():t.installing?t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&w()})):console.warn(t)}),console.error):f())):console.warn('Partytown config.lib url must start with "/"'))}function w(t){d=e.createElement(t?"script":"iframe"),t||(d.style.display="block",d.style.width="0",d.style.height="0",d.style.border="0",d.style.visibility="hidden",d.setAttribute("aria-hidden",!0)),d.src=a+"partytown-"+(t?"atomics.js?v=0.8.1":"sandbox-sw.html?"+Date.now()),e.querySelector(r.sandboxParent||"body").appendChild(d)}function f(n,o){for(console.warn("Partytown script fallback"),h(),i==t&&(r.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<c.length;n++)(o=e.createElement("script")).innerHTML=c[n].innerHTML,o.nonce=r.nonce,e.head.appendChild(o);d&&d.parentNode.removeChild(d)}function h(){clearTimeout(s)}r=t.partytown||{},i==t&&(r.forward||[]).map((function(e){l=t,e.split(".").map((function(e,n,i){l=l[i[n]]=n+1<i.length?"push"==i[n+1]?[]:l[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);