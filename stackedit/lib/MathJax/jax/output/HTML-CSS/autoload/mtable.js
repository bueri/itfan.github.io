/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mtable.js
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

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var c="2.2";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];a.mtable.Augment({toHTML:function(t){t=this.HTMLcreateSpan(t);if(this.data.length===0){return t}var K=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");var aJ=K.width.match(/%$/);var ay=b.createStack(t);var aG=this.HTMLgetScale(),aA=this.HTMLgetMu(t),aB=-1;var aq=[],au=[],ak=[],aw=[],av=[],af,ae,ap=-1,ad,ao,Z,aF,R,aC,aO=[];var al=b.FONTDATA.baselineskip*aG*K.useHeight,aT,I=b.FONTDATA.lineH*aG,O=b.FONTDATA.lineD*aG;for(af=0,ad=this.data.length;af<ad;af++){aF=this.data[af];Z=(aF.type==="mlabeledtr"?aB:0);aw[af]=[];aq[af]=au[af]=0;for(ae=Z,ao=aF.data.length+Z;ae<ao;ae++){if(ak[ae]==null){if(ae>ap){ap=ae}av[ae]=b.createStack(b.createBox(ay));ak[ae]=-b.BIGDIMEN}aw[af][ae]=b.createBox(av[ae]);aO.push(aF.data[ae-Z].toHTML(aw[af][ae]))}}b.MeasureSpans(aO);for(af=0,ad=this.data.length;af<ad;af++){aF=this.data[af];Z=(aF.type==="mlabeledtr"?aB:0);for(ae=Z,ao=aF.data.length+Z;ae<ao;ae++){R=aF.data[ae-Z];if(R.isMultiline){aw[af][ae].style.width="100%"}if(R.isEmbellished()){aC=R.CoreMO();var aS=aC.Get("minsize",true);if(aS){var aL=aC.HTMLspanElement().bbox;if(aC.HTMLcanStretch("Vertical")){aT=aL.h+aL.d;if(aT){aS=b.length2em(aS,aA,aT);if(aS*aL.h/aT>aq[ae]){aq[ae]=aS*aL.h/aT}if(aS*aL.d/aT>au[ae]){au[ae]=aS*aL.d/aT}}}else{if(aC.HTMLcanStretch("Horizontal")){aS=b.length2em(aS,aA,aL.w);if(aS>ak[ae]){ak[ae]=aS}}}}}if(aw[af][ae].bbox.h>aq[af]){aq[af]=aw[af][ae].bbox.h}if(aw[af][ae].bbox.d>au[af]){au[af]=aw[af][ae].bbox.d}if(aw[af][ae].bbox.w>ak[ae]){ak[ae]=aw[af][ae].bbox.w}}}if(aq[0]+au[0]){aq[0]=Math.max(aq[0],I)}if(aq[aw.length-1]+au[aw.length-1]){au[aw.length-1]=Math.max(au[aw.length-1],O)}var aE=MathJax.Hub.SplitList;var az=aE(K.columnspacing),aQ=aE(K.rowspacing),e=aE(K.columnalign),E=aE(K.rowalign),d=aE(K.columnlines),z=aE(K.rowlines),aM=aE(K.columnwidth),V=[];for(af=0,ad=az.length;af<ad;af++){az[af]=b.length2em(az[af],aA)}for(af=0,ad=aQ.length;af<ad;af++){aQ[af]=b.length2em(aQ[af],aA)}while(az.length<ap){az.push(az[az.length-1])}while(e.length<=ap){e.push(e[e.length-1])}while(d.length<ap){d.push(d[d.length-1])}while(aM.length<=ap){aM.push(aM[aM.length-1])}while(aQ.length<aw.length){aQ.push(aQ[aQ.length-1])}while(E.length<=aw.length){E.push(E[E.length-1])}while(z.length<aw.length){z.push(z[z.length-1])}if(av[aB]){e[aB]=(K.side.substr(0,1)==="l"?"left":"right");az[aB]=-ak[aB]}for(af=0,ad=aw.length;af<ad;af++){aF=this.data[af];V[af]=[];if(aF.rowalign){E[af]=aF.rowalign}if(aF.columnalign){V[af]=aE(aF.columnalign);while(V[af].length<=ap){V[af].push(V[af][V[af].length-1])}}}if(K.equalrows){var aD=Math.max.apply(Math,aq),X=Math.max.apply(Math,au);for(af=0,ad=aw.length;af<ad;af++){Z=((aD+X)-(aq[af]+au[af]))/2;aq[af]+=Z;au[af]+=Z}}aT=aq[0]+au[aw.length-1];for(af=0,ad=aw.length-1;af<ad;af++){aT+=Math.max((aq[af]+au[af]?al:0),au[af]+aq[af+1]+aQ[af])}var aI=0,aH=0,aV,g=aT;if(K.frame!=="none"||(K.columnlines+K.rowlines).match(/solid|dashed/)){var w=aE(K.framespacing);if(w.length!=2){w=aE(this.defaults.framespacing)}aI=b.length2em(w[0],aA);aH=b.length2em(w[1],aA);g=aT+2*aH}var aj,aU,ab="";if(typeof(K.align)!=="string"){K.align=String(K.align)}if(K.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)){ab=RegExp.$3;K.align=RegExp.$1}else{K.align=this.defaults.align}if(ab!==""){ab=parseInt(ab);if(ab<0){ab=aw.length+1+ab}if(ab<1){ab=1}else{if(ab>aw.length){ab=aw.length}}aj=0;aU=-(aT+aH)+aq[0];for(af=0,ad=ab-1;af<ad;af++){var N=Math.max((aq[af]+au[af]?al:0),au[af]+aq[af+1]+aQ[af]);aj+=N;aU+=N}}else{aj=({top:-(aq[0]+aH),bottom:aT+aH-aq[0],center:aT/2-aq[0],baseline:aT/2-aq[0],axis:aT/2+b.TeX.axis_height*aG-aq[0]})[K.align];aU=({top:-(aT+2*aH),bottom:0,center:-(aT/2+aH),baseline:-(aT/2+aH),axis:b.TeX.axis_height*aG-aT/2-aH})[K.align]}var ac,ag=0,B=0,L=0,aa=0,ah=0,an=[],at=[],S=1;if(K.equalcolumns&&K.width!=="auto"){if(aJ){ac=(100/(ap+1)).toFixed(2).replace(/\.?0+$/,"")+"%";for(af=0,ad=Math.min(ap+1,aM.length);af<ad;af++){aM[af]=ac}ac=0;ag=1;ah=ap+1;for(af=0,ad=Math.min(ap+1,az.length);af<ad;af++){ac+=az[af]}}else{ac=b.length2em(K.width,aA);for(af=0,ad=Math.min(ap+1,az.length);af<ad;af++){ac-=az[af]}ac/=ap+1;for(af=0,ad=Math.min(ap+1,aM.length);af<ad;af++){ak[af]=ac}}}else{for(af=0,ad=Math.min(ap+1,aM.length);af<ad;af++){if(aM[af]==="auto"){B+=ak[af]}else{if(aM[af]==="fit"){at[ah]=af;ah++;B+=ak[af]}else{if(aM[af].match(/%$/)){an[aa]=af;aa++;L+=ak[af];ag+=b.length2em(aM[af],aA,1)}else{ak[af]=b.length2em(aM[af],aA);B+=ak[af]}}}}if(aJ){ac=0;for(af=0,ad=Math.min(ap,az.length);af<ad;af++){ac+=az[af]}if(ag>0.98){S=0.98/ag;ag=0.98}}else{if(K.width==="auto"){if(ag>0.98){S=L/(B+L);ac=B+L}else{ac=B/(1-ag)}}else{ac=b.length2em(K.width,aA);for(af=0,ad=Math.min(ap+1,az.length);af<ad;af++){ac-=az[af]}}for(af=0,ad=an.length;af<ad;af++){ak[an[af]]=b.length2em(aM[an[af]],aA,ac*S);B+=ak[an[af]]}if(Math.abs(ac-B)>0.01){if(ah&&ac>B){ac=(ac-B)/ah;for(af=0,ad=at.length;af<ad;af++){ak[at[af]]+=ac}}else{ac=ac/B;for(ae=0;ae<=ap;ae++){ak[ae]*=ac}}}if(K.equalcolumns){var Q=Math.max.apply(Math,ak);for(ae=0;ae<=ap;ae++){ak[ae]=Q}}}}var T=aj,o,r,aR;Z=(av[aB]?aB:0);for(ae=Z;ae<=ap;ae++){for(af=0,ad=aw.length;af<ad;af++){if(aw[af][ae]){Z=(this.data[af].type==="mlabeledtr"?aB:0);R=this.data[af].data[ae-Z];if(R.HTMLcanStretch("Horizontal")){aw[af][ae].bbox=R.HTMLstretchH(av[ae],ak[ae]).bbox}else{if(R.HTMLcanStretch("Vertical")){aC=R.CoreMO();var aK=aC.symmetric;aC.symmetric=false;aw[af][ae].bbox=R.HTMLstretchV(av[ae],aq[af],au[af]).bbox;aw[af][ae].HH=null;aC.symmetric=aK}}aR=R.rowalign||this.data[af].rowalign||E[af];o=({top:aq[af]-aw[af][ae].bbox.h,bottom:aw[af][ae].bbox.d-au[af],center:((aq[af]-au[af])-(aw[af][ae].bbox.h-aw[af][ae].bbox.d))/2,baseline:0,axis:0})[aR]||0;aR=(R.columnalign||V[af][ae]||e[ae]);b.alignBox(aw[af][ae],aR,T+o)}if(af<aw.length-1){T-=Math.max((aq[af]+au[af]?al:0),au[af]+aq[af+1]+aQ[af])}}T=aj}if(aJ){var G=b.createBox(ay);G.style.left=G.style.top=0;G.style.right=b.Em(ac+2*aI);G.style.display="inline-block";G.style.height="0px";if(b.msieRelativeWidthBug){G=b.createBox(G);G.style.position="relative";G.style.height="1em";G.style.width="100%";G.bbox=ay.bbox}var aP=0,aW=aI,k,l;if(ah){k=100*(1-ag)/ah,l=B/ah}else{k=100*(1-ag)/(ap+1);l=B/(ap+1)}for(ae=0;ae<=ap;ae++){b.placeBox(av[ae].parentNode,0,0);av[ae].style.position="relative";av[ae].style.left=b.Em(aW);av[ae].style.width="100%";av[ae].parentNode.parentNode.removeChild(av[ae].parentNode);var am=b.createBox(G);b.addBox(am,av[ae]);av[ae]=am;var h=am.style;h.display="inline-block";h.left=aP+"%";if(aM[ae].match(/%$/)){var u=parseFloat(aM[ae])*S;if(ah===0){h.width=(k+u)+"%";aP+=k+u;am=b.createBox(am);b.addBox(am,av[ae].firstChild);am.style.left=0;am.style.right=b.Em(l);aW-=l}else{h.width=u+"%";aP+=u}}else{if(aM[ae]==="fit"||ah===0){h.width=k+"%";am=b.createBox(am);b.addBox(am,av[ae].firstChild);am.style.left=0;am.style.right=b.Em(l-ak[ae]);aW+=ak[ae]-l;aP+=k}else{h.width=b.Em(ak[ae]);aW+=ak[ae]}}if(b.msieRelativeWidthBug){b.addText(am.firstChild,b.NBSP);am.firstChild.style.position="relative"}aW+=az[ae];if(d[ae]!=="none"&&ae<ap&&ae!==aB){r=b.createBox(G);r.style.left=aP+"%";r=b.createRule(r,g,0,1.25/b.em);r.style.position="absolute";r.bbox={h:g,d:0,w:0,rw:1.25/b.em,lw:0};r.parentNode.bbox=ay.bbox;b.placeBox(r,aW-az[ae]/2,aU,true);r.style.borderStyle=d[ae]}}}else{var U=aI;for(ae=0;ae<=ap;ae++){if(!av[ae].bbox.width){b.setStackWidth(av[ae],ak[ae])}if(aM[ae]!=="auto"&&aM[ae]!=="fit"){av[ae].bbox.width=ak[ae];av[ae].bbox.isFixed=true}b.placeBox(av[ae].parentNode,U,0);U+=ak[ae]+az[ae];if(d[ae]!=="none"&&ae<ap&&ae!==aB){r=b.createRule(ay,g,0,1.25/b.em);b.addBox(ay,r);r.bbox={h:g,d:0,w:0,rw:1.25/b.em,lw:0};b.placeBox(r,U-az[ae]/2,aU,true);r.style.borderStyle=d[ae]}}}ay.bbox.d=-aU;ay.bbox.h=g+aU;b.setStackWidth(ay,ay.bbox.w+aI);aV=ay.bbox.w;var ai;if(K.frame!=="none"){ai=b.createFrame(ay,g,0,aV,1.25/b.em,K.frame);b.addBox(ay,ai);b.placeBox(ai,0,aU,true);if(aJ){ai.style.width="100%"}}T=aj;for(af=0,ad=aw.length-1;af<ad;af++){o=Math.max(al,au[af]+aq[af+1]+aQ[af]);if(z[af]!=="none"){r=b.createRule(ay,1.25/b.em,0,aV);b.addBox(ay,r);r.bbox={h:1.25/b.em,d:0,w:aV,rw:aV,lw:0};b.placeBox(r,0,T-au[af]-(o-au[af]-aq[af+1])/2,true);if(z[af]==="dashed"||aJ){r.style.borderTop=r.style.height+" "+z[af];r.style.height=0;r.style.width=r.style.borderLeftWidth;r.style.borderLeft="";if(aJ){r.style.width="100%"}}}T-=o}if(aJ){t.bbox.width=K.width;ay.style.width="100%"}if(av[aB]){var ax=ay.bbox.w,q;var ar=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");if(ar.indentalignfirst!==a.INDENTALIGN.INDENTALIGN){ar.indentalign=ar.indentalignfirst}if(ar.indentalign===a.INDENTALIGN.AUTO){ar.indentalign=this.displayAlign}if(ar.indentshiftfirst!==a.INDENTSHIFT.INDENTSHIFT){ar.indentshift=ar.indentshiftfirst}if(ar.indentshift==="auto"){ar.indentshift=this.displayIndent}var aN=b.createStack(t,false,"100%");b.addBox(aN,ay);b.alignBox(ay,ar.indentalign,0);if(ar.indentshift&&ar.indentalign!==a.INDENTALIGN.CENTER){q=b.length2em(ar.indentshift,aA);ax+=q;ay.style[ar.indentalign]=b.Em(q)}av[aB].parentNode.parentNode.removeChild(av[aB].parentNode);b.addBox(aN,av[aB]);b.alignBox(av[aB],e[aB],0);if(b.msieRelativeWidthBug){ay.style.top=av[aB].style.top=""}if(aJ){ay.style.width=K.width;t.bbox.width="100%"}q=b.length2em(K.minlabelspacing,aA);av[aB].style.marginRight=av[aB].style.marginLeft=b.Em(q);if(ar.indentalign===a.INDENTALIGN.CENTER){ax+=4*q+2*av[aB].bbox.w}else{if(ar.indentalign!==e[aB]){ax+=2*q+av[aB].bbox.w}}t.style.minWidth=t.bbox.minWidth=aN.style.minWidth=aN.bbox.minWidth=b.Em(ax)}if(!aJ){this.HTMLhandleSpace(t)}var v=this.HTMLhandleColor(t);if(v&&aJ){if(!ai){ai=b.createFrame(ay,g,0,aV,0,"none");b.addBox(ay,ai);b.placeBox(ai,0,aU,true);ai.style.width="100%"}ai.style.backgroundColor=v.style.backgroundColor;ai.parentNode.insertBefore(ai,ai.parentNode.firstChild);v.parentNode.removeChild(v)}return t},HTMLhandleSpace:function(d){d.bbox.keepPadding=true;d.bbox.exact=true;if(!this.hasFrame&&d.bbox.width==null){d.style.paddingLeft=d.style.paddingRight=b.Em(1/6)}this.SUPER(arguments).HTMLhandleSpace.call(this,d)}});a.mtd.Augment({toHTML:function(e,d,g){e=this.HTMLcreateSpan(e);if(this.data[0]){var f=this.data[0].toHTML(e);if(g!=null){f=this.data[0].HTMLstretchV(e,d,g)}else{if(d!=null){f=this.data[0].HTMLstretchH(e,d)}}e.bbox=f.bbox}this.HTMLhandleSpace(e);this.HTMLhandleColor(e);return e},HTMLstretchH:a.mbase.HTMLstretchH,HTMLstretchV:a.mbase.HTMLstretchV});MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/mtable.js")});

