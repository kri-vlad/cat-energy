!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,o=Object.create(null),i=function(){clearTimeout(t),t=setTimeout(e,100)},r=function(){},u=function(){var e;window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1),window.MutationObserver?((e=new MutationObserver(i)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),r=function(){try{e.disconnect(),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",i,!1),r=function(){document.documentElement.removeEventListener("DOMSubtreeModified",i,!1),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)})},s=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,o,i;return window.XMLHttpRequest&&(n=new XMLHttpRequest,o=t(location),i=t(e),n=void 0===n.withCredentials&&""!==i&&i!==o?XDomainRequest||void 0:XMLHttpRequest),n},d="http://www.w3.org/1999/xlink";e=function(){var e,t,n,i,a,l,c,h,f,m,w=0;function v(){0===(w-=1)&&(r(),u())}function b(e){return function(){!0!==o[e.base]&&(e.useEl.setAttributeNS(d,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function E(e){return function(){var t,n=document.body,o=document.createElement("x");e.onload=null,o.innerHTML=e.responseText,(t=o.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",n.insertBefore(t,n.firstChild)),v()}}function g(e){return function(){e.onerror=null,e.ontimeout=null,v()}}for(r(),f=document.getElementsByTagName("use"),a=0;a<f.length;a+=1){try{t=f[a].getBoundingClientRect()}catch(e){t=!1}e=(h=(i=f[a].getAttribute("href")||f[a].getAttributeNS(d,"href")||f[a].getAttribute("xlink:href"))&&i.split?i.split("#"):["",""])[0],n=h[1],l=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!l?(f[a].hasAttribute("href")&&f[a].setAttributeNS(d,"xlink:href",i),e.length&&(!0!==(m=o[e])&&setTimeout(b({useEl:f[a],base:e,hash:n}),0),void 0===m&&void 0!==(c=s(e))&&(m=new c,o[e]=m,m.onload=E(m),m.onerror=g(m),m.ontimeout=g(m),m.open("GET",e),m.send(),w+=1))):l?e.length&&o[e]&&setTimeout(b({useEl:f[a],base:e,hash:n}),0):void 0===o[e]?o[e]=!0:o[e].onload&&(o[e].abort(),delete o[e].onload,o[e]=!0)}f="",w+=1,v()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}();