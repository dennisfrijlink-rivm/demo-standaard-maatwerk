import{i as l,a as u,x as a,n as c}from"./figure-loader-CJ93ISYx.js";import{i as b,a as p,b as h}from"./base-figure-u1I5xRLa.js";var d=Object.defineProperty,f=(n,e,r,v)=>{for(var t=void 0,o=n.length-1,m;o>=0;o--)(m=n[o])&&(t=m(e,r,t)||t);return t&&d(e,r,t),t};const s=class s extends l{constructor(){super(...arguments),this.zoomStep=1}emitZoom(e){this.dispatchEvent(new CustomEvent("zoom-change",{detail:e,bubbles:!0,composed:!0}))}emitReset(){this.dispatchEvent(new CustomEvent("zoom-reset",{bubbles:!0,composed:!0}))}render(){return a`
            <div class="zoom-controls" role="group" aria-label="Zoom controls">
                <button
                    @click=${()=>this.emitZoom(this.zoomStep)}
                    aria-label="Zoom in"
                    title="Zoom in"
                >
                    ${b}
                </button>
                <button @click=${this.emitReset} aria-label="Reset zoom" title="Reset zoom">
                    ${p}
                </button>
                <button
                    @click=${()=>this.emitZoom(-this.zoomStep)}
                    aria-label="Zoom out"
                    title="Zoom out"
                >
                    ${h}
                </button>
            </div>
        `}};s.styles=u`
        :host {
            z-index: 999;
            position: absolute;
            left: 0;
            bottom: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        button {
            width: 2em;
            height: 2em;
            line-height: 1;
            border: none;
            color: #fff;
            background: #01689b;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        svg {
            width: 2em;
            height: 2em;
        }
        button:focus-visible {
            outline: 2px dotted #000;
        }
        button:hover {
            background: #7197bc;
        }
    `;let i=s;f([c({type:Number})],i.prototype,"zoomStep");export{i as ZoomControls};
