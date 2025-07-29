import{i as p,x as h,n as m,r as u}from"./figure-loader-CJ93ISYx.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(r,t){return(e,d,i)=>{const o=s=>{var f;return((f=s.renderRoot)==null?void 0:f.querySelector(r))??null};return l(e,d,{get(){return o(this)}})}}var c=Object.defineProperty,n=(r,t,e,d)=>{for(var i=void 0,o=r.length-1,s;o>=0;o--)(s=r[o])&&(i=s(t,e,i)||i);return i&&c(t,e,i),i};class a extends p{constructor(){super(...arguments),this.options={},this._iframeHeight="10px",this._handleIframeMessage=t=>{if(t.data&&t.data.type==="iframe-height"){const e=t.data.value;typeof e=="number"&&e>0&&(this._iframeHeight=`${e}px`)}}}firstUpdated(t){super.firstUpdated(t),this._iframe.addEventListener("load",()=>{this._sendOptionsToIframe()}),window.addEventListener("message",this._handleIframeMessage)}updated(t){var e;super.updated(t),t.has("options")&&((e=this._iframe)!=null&&e.contentWindow)&&this._sendOptionsToIframe()}_sendOptionsToIframe(){this._iframe&&this._iframe.contentWindow&&this._iframe.contentWindow.postMessage({type:"options",data:this.options},"*")}render(){return h`
            <iframe
                src="./sandbox-iframe.html"
                scrolling="no"
                style="width: 100%; overflow: hidden; outline: dashed 4px rgba(0,0,0,0.1); border: none; height: ${this._iframeHeight};"
            ></iframe>
        `}}n([m({type:Object})],a.prototype,"options");n([_("iframe")],a.prototype,"_iframe");n([u()],a.prototype,"_iframeHeight");export{a as SandboxWrapper};
