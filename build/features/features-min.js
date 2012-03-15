YUI.add("features",function(b){var c={};b.mix(b.namespace("Features"),{tests:c,add:function(d,e,f){c[d]=c[d]||{};c[d][e]=f;},all:function(e,f){var g=c[e],d=[];if(g){b.Object.each(g,function(i,h){d.push(h+":"+(b.Features.test(e,h,f)?1:0));});}return(d.length)?d.join(";"):"";},test:function(e,g,f){f=f||[];var d,i,k,j=c[e],h=j&&j[g];if(!h){}else{d=h.result;if(b.Lang.isUndefined(d)){i=h.ua;if(i){d=(b.UA[i]);}k=h.test;if(k&&((!i)||d)){d=k.apply(b,f);}h.result=d;}}return d;}});var a=b.Features.add;a("load","0",{"name":"io-nodejs","trigger":"io-base","ua":"nodejs"});a("load","1",{"name":"graphics-canvas","test":function(h){var f=h.config.doc,g=h.config.defaultGraphicEngine&&h.config.defaultGraphicEngine=="canvas",e=f&&f.createElement("canvas"),d=(f&&f.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));return(!d||g)&&(e&&e.getContext&&e.getContext("2d"));},"trigger":"graphics"});a("load","2",{"name":"autocomplete-list-keys","test":function(d){return !(d.UA.ios||d.UA.android);},"trigger":"autocomplete-list"});a("load","3",{"name":"dd-gestures","test":function(d){return((d.config.win&&("ontouchstart" in d.config.win))&&!(d.UA.chrome&&d.UA.chrome<6));},"trigger":"dd-drag"});a("load","4",{"name":"scrollview-base-ie","trigger":"scrollview-base","ua":"ie"});a("load","5",{"name":"editor-para-ie","trigger":"editor-para","ua":"ie","when":"instead"});a("load","6",{"name":"graphics-vml-default","test":function(f){var e=f.config.doc,d=e&&e.createElement("canvas");return(e&&!e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!d||!d.getContext||!d.getContext("2d")));},"trigger":"graphics"});a("load","7",{"name":"graphics-svg-default","test":function(h){var g=h.config.doc,f=!h.config.defaultGraphicEngine||h.config.defaultGraphicEngine!="canvas",e=g&&g.createElement("canvas"),d=(g&&g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));return d&&(f||!e);},"trigger":"graphics"});a("load","8",{"name":"history-hash-ie","test":function(e){var d=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange" in e.config.win)||!d||d<8);},"trigger":"history-hash"});a("load","9",{"name":"widget-base-ie","trigger":"widget-base","ua":"ie"});a("load","10",{"name":"dom-style-ie","test":function(j){var h=j.Features.test,i=j.Features.add,f=j.config.win,g=j.config.doc,d="documentElement",e=false;i("style","computedStyle",{test:function(){return f&&"getComputedStyle" in f;}});i("style","opacity",{test:function(){return g&&"opacity" in g[d].style;}});e=(!h("style","opacity")&&!h("style","computedStyle"));return e;},"trigger":"dom-style"});a("load","11",{"name":"selector-css2","test":function(f){var e=f.config.doc,d=e&&!("querySelectorAll" in e);return d;},"trigger":"selector"});a("load","12",{"name":"event-base-ie","test":function(e){var d=e.config.doc&&e.config.doc.implementation;return(d&&(!d.hasFeature("Events","2.0")));},"trigger":"node-base"});a("load","13",{"name":"graphics-svg","test":function(h){var g=h.config.doc,f=!h.config.defaultGraphicEngine||h.config.defaultGraphicEngine!="canvas",e=g&&g.createElement("canvas"),d=(g&&g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));return d&&(f||!e);},"trigger":"graphics"});a("load","14",{"name":"transition-timer","test":function(g){var f=g.config.doc,e=(f)?f.documentElement:null,d=true;if(e&&e.style){d=!("MozTransition" in e.style||"WebkitTransition" in e.style);}return d;},"trigger":"transition"});a("load","15",{"name":"app-transitions-native","test":function(f){var e=f.config.doc,d=e?e.documentElement:null;if(d&&d.style){return("MozTransition" in d.style||"WebkitTransition" in d.style);}return false;},"trigger":"app-transitions"});a("load","16",{"name":"graphics-canvas-default","test":function(h){var f=h.config.doc,g=h.config.defaultGraphicEngine&&h.config.defaultGraphicEngine=="canvas",e=f&&f.createElement("canvas"),d=(f&&f.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));return(!d||g)&&(e&&e.getContext&&e.getContext("2d"));},"trigger":"graphics"});a("load","17",{"name":"graphics-vml","test":function(f){var e=f.config.doc,d=e&&e.createElement("canvas");return(e&&!e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!d||!d.getContext||!d.getContext("2d")));},"trigger":"graphics"});},"@VERSION@",{requires:["yui-base"]});