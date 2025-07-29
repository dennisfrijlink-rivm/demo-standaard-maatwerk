import{a as W}from"./figure-loader-CJ93ISYx.js";import{H as S}from"./base-D-To3aZf.js";function z(e,r){const{seriesKey:i,groupKey:n,categoryKey:l,xKey:s,yKey:h,yMin:K,yMax:k,yAxis:B,valueKey:f="value",mapKey:u,includeOriginal:m=!0}=r;if(!Array.isArray(e))throw new Error("Input data must be an array.");if(i&&n)throw new Error("You cannot specify both seriesKey and groupKey.");const d=new Set;let y=[];if(i!=null&&i.length)y=i.map(p=>{const t=e.map(a=>{const c=a==null?void 0:a[p],o={};if(s&&(o.x=a==null?void 0:a[s]),h&&(o.y=c),!s&&!h&&!l&&(o.value=c),l){const g=a==null?void 0:a[l];o.name=g,o.y=c,d.add(g)}return m&&(o.original=a),o});return{name:p,data:t}});else if(n!=null&&n.length){const p=new Map;for(const t of e){const a=n.map(g=>String(t==null?void 0:t[g])).join("-"),c=u&&(t!=null&&t[u])?String(t[u]):a,o={category:"test"};if(s&&(o.x=t==null?void 0:t[s]),h&&(o.y=t==null?void 0:t[h]),!s&&!h&&(o.value=t==null?void 0:t[f]),l){const g=t==null?void 0:t[l];o.name=g,o.y=t==null?void 0:t[f],o.category=g,d.add(g)}m&&(o.original=t),p.has(c)||p.set(c,{name:c,data:[]}),p.get(c).data.push(o)}y=Array.from(p.values())}else y=[{name:"Series",data:e.map(t=>{const a={};if(s&&(a.x=t==null?void 0:t[s]),h&&(a.y=t==null?void 0:t[h]),!s&&!h&&(a.value=t==null?void 0:t[f]),l){const c=t==null?void 0:t[l];a.name=c,a.y=t==null?void 0:t[f],d.add(c)}return m&&(a.original=t),a})}];const b=Array.from(d);return{series:y,categories:b.length?b:void 0,yAxis:M(B,K,k)}}function M(e,r,i){return e=Array.isArray(e)?e:[e||{}],e.map(n=>({...n,min:n.min??r??void 0,max:n.max??i??void 0,title:{text:n.title??"not set!!!!",align:"high",style:{fontWeight:"normal",fontSize:"13px",color:"#154273",whiteSpace:"nowrap"},rotation:0,y:-9},offset:0}))}function O(e,r){return{chart:{width:e.width==="100%"?null:parseInt(e.width,10),height:parseInt(e.height,10)||400,events:{load:L}},tooltip:{format:"<b>{point.original.tooltip.x}</b>: {point.original.tooltip.y}",shared:!0},xAxis:{lineWidth:1.5,lineColor:"#535353",tickLength:4,tickWidth:1,tickColor:"#535353",title:{text:"",align:"high",style:{fontSize:"13px",color:"#154273"},y:-5},labels:{autoRotation:[0,-30,-60],overflow:"allow",padding:1,distance:5,style:{fontSize:"12px",color:"#535353"}},crosshair:{width:1,color:"#535353",dashStyle:"Dash"}},yAxis:{title:{text:"",align:"high",style:{fontWeight:"normal",fontSize:"13px",color:"#154273",whiteSpace:"nowrap"},rotation:0,y:-9},labels:{distance:5,style:{fontSize:"13px",color:"#535353"},formatter:function(){return r.numberFormat(this.value,0,",",".")}},stackLabels:{style:{color:"#535353",fontSize:"11px",fontWeight:"normal",textOutline:"1px contrast"}},lineWidth:0,gridLineColor:"#3c3c3c",gridLineWidth:.25}}}function L(){const e=this.options.chart.type,r=this.options.legend.enabled;this.yAxis.forEach(function(i){if(e!="bar"&&e!="columnrange"&&i.axisTitle!=null){const n=i.axisTitle.getBBox();i.update({title:{offset:-n.width}})}if(e!="bar"&&e!="columnrange"&&e!="pie"&&r===!0){const n=i.tickPositions;let l=0;for(let s=0;s<n.length;s++)i.ticks[n[s]].label.getBBox().width>l&&(l=i.ticks[n[s]].label.getBBox().width);this.legend.update({x:l+1})}},this),this.xAxis.forEach(function(i){if((e=="bar"||e=="columnrange")&&r===!0){const n=i.tickPositions;let l=0;for(let s=0;s<n.length;s++)i.ticks[n[s]].label.getBBox().width>l&&(l=i.ticks[n[s]].label.getBBox().width);this.legend.update({x:l+1})}},this)}const x=class x extends S{getSeriesData(){const r=this.options.dataSet??[];return z(r,{xKey:this.options.xKey,yKey:this.options.yKey,yMin:this.options.yMin,yMax:this.options.yMax,yAxis:this.options.yAxis,seriesKey:this.options.seriesKey,groupKey:this.options.groupKey,categoryKey:this.options.categoryKey})}async getChartOptions(){const r=this.highchartsInstance,i=O(this.options,r);return this.mergeOptions(await super.getChartOptions(),i)}};x.styles=W`
        ${S.styles}

        .highcharts-legend-item > span {
            position: relative;
            overflow: visible !important;
            height: 25px;
        }

        .highcharts-legend-item > span:after {
            content: '';
            position: absolute;
            width: calc(100% + 38px);
            height: 18.5px;
            color: rgba(255, 255, 255, 1);
            border: 1px solid #aaaaaa;
            top: -1.5px;
            left: -34px;
            border-radius: 0px;
        }

        .highcharts-legend-item > span:hover:after {
            border: 2px solid #00619e;
            background-color: rgba(0, 97, 158, 0.1);
        }
    `;let v=x;export{v as H};
