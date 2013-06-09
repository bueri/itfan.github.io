/*
 *  /MathJax/jax/output/SVG/autoload/mtable.js
 *  
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var c="2.2";var a=MathJax.ElementJax.mml,d=MathJax.OutputJax.SVG,b=d.BBOX;a.mtable.Augment({toSVG:function(V){this.SVGgetStyles();var l=this.SVG();if(this.data.length===0){this.SVGsaveData(l);return l}var aI=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");if(aI.width.match(/%$/)){l.width=aI.width=Math.floor(d.cwidth*parseFloat(aI.width)/100)+"px"}var al=this.SVGgetScale(),t=this.SVGgetMu(l);var aF=-1;var v=[],E=[],h=[],L=[],G=[],aD,aC,u=-1,aA,r,av,O,aj,z;var aK=d.FONTDATA.baselineskip*al*aI.useHeight,aw,Z=d.FONTDATA.lineH*al,ad=d.FONTDATA.lineD*al;for(aD=0,aA=this.data.length;aD<aA;aD++){O=this.data[aD];av=(O.type==="mlabeledtr"?aF:0);L[aD]=[];v[aD]=E[aD]=0;for(aC=av,r=O.data.length+av;aC<r;aC++){if(h[aC]==null){if(aC>u){u=aC}G[aC]=b.G();h[aC]=-d.BIGDIMEN}aj=O.data[aC-av];L[aD][aC]=aj.toSVG();if(aj.isEmbellished()){z=aj.CoreMO();var aH=z.Get("minsize",true);if(aH){if(z.SVGcanStretch("Vertical")){aw=z.SVGdata.h+z.SVGdata.d;if(aw){aH=d.length2em(aH,t,aw);if(aH*z.SVGdata.h/aw>v[aC]){v[aC]=aH*z.SVGdata.h/aw}if(aH*z.SVGdata.d/aw>E[aC]){E[aC]=aH*z.SVGdata.d/aw}}}else{if(z.SVGcanStretch("Horizontal")){aH=d.length2em(aH,t,z.SVGdata.w);if(aH>h[aC]){h[aC]=aH}}}}}if(L[aD][aC].h>v[aD]){v[aD]=L[aD][aC].h}if(L[aD][aC].d>E[aD]){E[aD]=L[aD][aC].d}if(L[aD][aC].w>h[aC]){h[aC]=L[aD][aC].w}}}if(v[0]+E[0]){v[0]=Math.max(v[0],Z)}if(v[L.length-1]+E[L.length-1]){E[L.length-1]=Math.max(E[L.length-1],ad)}var ak=MathJax.Hub.SplitList;var ai=ak(aI.columnspacing),Q=ak(aI.rowspacing),af=ak(aI.columnalign),I=ak(aI.rowalign),K=ak(aI.columnlines),g=ak(aI.rowlines),an=ak(aI.columnwidth),ar=[];for(aD=0,aA=ai.length;aD<aA;aD++){ai[aD]=d.length2em(ai[aD],t)}for(aD=0,aA=Q.length;aD<aA;aD++){Q[aD]=d.length2em(Q[aD],t)}while(ai.length<u){ai.push(ai[ai.length-1])}while(af.length<=u){af.push(af[af.length-1])}while(K.length<u){K.push(K[K.length-1])}while(an.length<=u){an.push(an[an.length-1])}while(Q.length<L.length){Q.push(Q[Q.length-1])}while(I.length<=L.length){I.push(I[I.length-1])}while(g.length<L.length){g.push(g[g.length-1])}if(G[aF]){af[aF]=(aI.side.substr(0,1)==="l"?"left":"right");ai[aF]=-h[aF]}for(aD=0,aA=L.length;aD<aA;aD++){O=this.data[aD];ar[aD]=[];if(O.rowalign){I[aD]=O.rowalign}if(O.columnalign){ar[aD]=ak(O.columnalign);while(ar[aD].length<=u){ar[aD].push(ar[aD][ar[aD].length-1])}}}if(aI.equalrows){var R=Math.max.apply(Math,v),am=Math.max.apply(Math,E);for(aD=0,aA=L.length;aD<aA;aD++){av=((R+am)-(v[aD]+E[aD]))/2;v[aD]+=av;E[aD]+=av}}aw=v[0]+E[L.length-1];for(aD=0,aA=L.length-1;aD<aA;aD++){aw+=Math.max((v[aD]+E[aD]?aK:0),E[aD]+v[aD+1]+Q[aD])}var ab=0,X=0,ax,aG=aw;if(aI.frame!=="none"||(aI.columnlines+aI.rowlines).match(/solid|dashed/)){var q=ak(aI.framespacing);if(q.length!=2){q=ak(this.defaults.framespacing)}ab=d.length2em(q[0],t);X=d.length2em(q[1],t);aG=aw+2*X}var e,au,az="";if(typeof(aI.align)!=="string"){aI.align=String(aI.align)}if(aI.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)){az=RegExp.$3;aI.align=RegExp.$1}else{aI.align=this.defaults.align}if(az!==""){az=parseInt(az);if(az<0){az=L.length+1+az}if(az<1){az=1}else{if(az>L.length){az=L.length}}e=0;au=-(aw+X)+v[0];for(aD=0,aA=az-1;aD<aA;aD++){var U=Math.max((v[aD]+E[aD]?aK:0),E[aD]+v[aD+1]+Q[aD]);e+=U;au+=U}}else{e=({top:-(v[0]+X),bottom:aw+X-v[0],center:aw/2-v[0],baseline:aw/2-v[0],axis:aw/2+d.TeX.axis_height*al-v[0]})[aI.align];au=({top:-(aw+2*X),bottom:0,center:-(aw/2+X),baseline:-(aw/2+X),axis:d.TeX.axis_height*al-aw/2-X})[aI.align]}var ao,at=0,S=0,T=0,ay=0,aE=0,o=[],w=[],ag=1;if(aI.equalcolumns&&aI.width!=="auto"){ao=d.length2em(aI.width,t);for(aD=0,aA=Math.min(u+1,ai.length);aD<aA;aD++){ao-=ai[aD]}ao/=u+1;for(aD=0,aA=Math.min(u+1,an.length);aD<aA;aD++){h[aD]=ao}}else{for(aD=0,aA=Math.min(u+1,an.length);aD<aA;aD++){if(an[aD]==="auto"){S+=h[aD]}else{if(an[aD]==="fit"){w[aE]=aD;aE++;S+=h[aD]}else{if(an[aD].match(/%$/)){o[ay]=aD;ay++;T+=h[aD];at+=d.length2em(an[aD],t,1)}else{h[aD]=d.length2em(an[aD],t);S+=h[aD]}}}}if(aI.width==="auto"){if(at>0.98){ag=T/(S+T);ao=S+T}else{ao=S/(1-at)}}else{ao=d.length2em(aI.width,t);for(aD=0,aA=Math.min(u+1,ai.length);aD<aA;aD++){ao-=ai[aD]}}for(aD=0,aA=o.length;aD<aA;aD++){h[o[aD]]=d.length2em(an[o[aD]],t,ao*ag);S+=h[o[aD]]}if(Math.abs(ao-S)>0.01){if(aE&&ao>S){ao=(ao-S)/aE;for(aD=0,aA=w.length;aD<aA;aD++){h[w[aD]]+=ao}}else{ao=ao/S;for(aC=0;aC<=u;aC++){h[aC]*=ao}}}if(aI.equalcolumns){var ac=Math.max.apply(Math,h);for(aC=0;aC<=u;aC++){h[aC]=ac}}}var ap=e,k,aB;av=(G[aF]?aF:0);for(aC=av;aC<=u;aC++){G[aC].w=h[aC];for(aD=0,aA=L.length;aD<aA;aD++){if(L[aD][aC]){av=(this.data[aD].type==="mlabeledtr"?aF:0);aj=this.data[aD].data[aC-av];if(aj.SVGcanStretch("Horizontal")){L[aD][aC]=aj.SVGstretchH(h[aC])}else{if(aj.SVGcanStretch("Vertical")){z=aj.CoreMO();var aa=z.symmetric;z.symmetric=false;L[aD][aC]=aj.SVGstretchV(v[aD],E[aD]);z.symmetric=aa}}aB=aj.rowalign||this.data[aD].rowalign||I[aD];k=({top:v[aD]-L[aD][aC].h,bottom:L[aD][aC].d-E[aD],center:((v[aD]-E[aD])-(L[aD][aC].h-L[aD][aC].d))/2,baseline:0,axis:0})[aB]||0;aB=(aj.columnalign||ar[aD][aC]||af[aC]);G[aC].Align(L[aD][aC],aB,0,ap+k)}if(aD<L.length-1){ap-=Math.max((v[aD]+E[aD]?aK:0),E[aD]+v[aD+1]+Q[aD])}}ap=e}var ae=1.5*d.em;var aq=ab-ae/2;for(aC=0;aC<=u;aC++){l.Add(G[aC],aq,0);aq+=h[aC]+ai[aC];if(K[aC]!=="none"&&aC<u&&aC!==aF){l.Add(b.VLINE(aG,ae,K[aC]),aq-ai[aC]/2,au)}}l.w+=ab;l.d=-au;l.h=aG+au;ax=l.w;if(aI.frame!=="none"){l.Add(b.HLINE(ax,ae,aI.frame),0,au+aG-ae);l.Add(b.HLINE(ax,ae,aI.frame),0,au);l.Add(b.VLINE(aG,ae,aI.frame),0,au);l.Add(b.VLINE(aG,ae,aI.frame),ax-ae,au)}ap=e-ae/2;for(aD=0,aA=L.length-1;aD<aA;aD++){k=Math.max(aK,E[aD]+v[aD+1]+Q[aD]);if(g[aD]!=="none"){l.Add(b.HLINE(ax,ae,g[aD]),0,ap-E[aD]-(k-E[aD]-v[aD+1])/2)}ap-=k}l.Clean();this.SVGhandleSpace(l);this.SVGhandleColor(l);if(G[aF]){var N=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");if(N.indentalignfirst!==a.INDENTALIGN.INDENTALIGN){N.indentalign=N.indentalignfirst}if(N.indentalign===a.INDENTALIGN.AUTO){N.indentalign=this.displayAlign}if(N.indentshiftfirst!==a.INDENTSHIFT.INDENTSHIFT){N.indentshift=N.indentshiftfirst}if(N.indentshift==="auto"){N.indentshift=this.displayIndent}var ah=(N.indentshift?d.length2em(N.indentshift,t):0);var aJ=d.length2em(aI.minlabelspacing,t);var B=l;l=this.SVG();if(N.indentalign===a.INDENTALIGN.CENTER){l.w=l.r=d.length2em(d.cwidth+"px");ah=0;l.hasIndent=true}else{if(af[aF]!==N.indentalign){l.w=l.r=d.length2em(d.cwidth+"px")-ah-aJ;ah=aJ=0}else{l.w=l.r=B.w+ah;l.hasIndent=true}}l.Align(B,N.indentalign,ah,0);l.Align(G[aF],af[aF],aJ,0)}this.SVGsaveData(l);return l},SVGhandleSpace:function(e){if(!this.hasFrame&&!e.width){e.x=e.X=167}this.SUPER(arguments).SVGhandleSpace.call(this,e)}});a.mtd.Augment({toSVG:function(e,g){var f=this.svg=this.SVG();if(this.data[0]){f.Add(this.SVGdataStretched(0,e,g));f.Clean()}this.SVGhandleColor(f);this.SVGsaveData(f);return f}});MathJax.Hub.Startup.signal.Post("SVG mtable Ready");MathJax.Ajax.loadComplete(d.autoloadDir+"/mtable.js")});

