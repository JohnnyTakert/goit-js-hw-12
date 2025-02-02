import{i as f,S as y}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n={key:"48322824-27a37556f84a2ff5b53428f9b",image_type:"photo",orientation:"horizontal",safesearch:"true"};function d(o){const r=`https://pixabay.com/api/?key=48322824-27a37556f84a2ff5b53428f9b&q=${o}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function l(){f.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const c=document.querySelector(".main-list");let h=new y(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(o){c.innerHTML="",console.log(o),c.insertAdjacentHTML("beforeend",b(o.hits)),h.refresh()}function b(o){return o.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:p})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${r}>
                <img
                  class="gallery-image"
                  src=${i}
                  alt=${s}

                />
              </a>
              <ul class="adds-list">
                <li class="info-item">
                  <p class="text-item text-item-name">Likes</p>
                  <p class="text-item">${e}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Views</p>
                  <p class="text-item">${t}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Comments</p>
                  <p class="text-item">${a}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${p}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const u=document.querySelector(".loader"),m=document.querySelector(".input-query"),x=document.querySelector("#btn-submit");x.addEventListener("click",L);function L(o){u.style.display="inline-block",o.preventDefault();let i=m.value.replace(/\s+/g,"+").toLowerCase();d(i).then(r=>{u.style.display="none",r.totalHits===0?l():g(r)}).catch(l).finally(()=>{m.value=""})}
//# sourceMappingURL=index.js.map
