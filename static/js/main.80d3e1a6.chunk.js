(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(310)},140:function(e,t,a){},142:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},143:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),s=(a(140),a(21)),l=a(22),c=a(25),d=a(23),u=a(24),p=a(27),m=(a(142),a(143),a(51)),h=a(122),f=a(52),g=a(66),v=a.n(g),b=a(13),y=a.n(b),L=(a(147),a(30)),w=a(67),_=a(134),D=a(31),k=a(4),O=function(e,t,a,n){var o=e.map(function(e){return{label:a(e),id:e[t],filter:e[n]}});return y.a.sortBy(o,["label"])},j=function(e){return e.placeName+" ["+e.id+"]"},E=function(e){return e.key},C=function(e,t,a,n,o,r){console.log(e),console.log(t,a,n);var i=e.grant,s=e.comparison,l=e.geo,c=e.dataForMap,d=e.dataForScatter,u=e.dataForSmallMultiples,p=e.comparisonVars,m=Object(_.a)(e,["grant","comparison","geo","dataForMap","dataForScatter","dataForSmallMultiples","comparisonVars"]),h=Object.keys(s[t][a]);if(console.log("filters: ",o),console.log(i),i[t].LAD_ward_donor_year.data.forEach(function(e){e.filterOn=!0,e.filterLocation=!0,e.filterDonor=!0}),s[t][a][n[0]].data.forEach(function(e){e.filterOn=!0,e.filterLocation=!0}),o){var f=F(o,i[t].LAD_ward_donor_year,s[t][a][n[0]],t,a,n),g=f.grantFiltered,v=f.comparisonFiltered;i[t].LAD_ward_donor_year.data=g,s[t][a][n[0]].data=v}return p=h.map(function(e){var n=s[t][a][e];return n.data.columns.filter(function(e){return e.startsWith("comparison_")}).map(function(t){return{value:[e,t],label:(a=(e+" - "+t.slice(11)).split("_").join(" "),(a&&a.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" "))+" ("+n.year+")")};var a})}),p=y.a.flatten(p),c=l[t][a].sourceName,d=A(e,t,a,n,"Amount Awarded",r),u=M(e,t),Object(w.a)({grant:i,comparison:s,geo:l,comparisonVars:p,dataForMap:c,dataForScatter:d,dataForSmallMultiples:u},m)},A=function(e,t,a,n,o,r){console.log(e);var i=Object(D.b)().key(function(n){return n[e.grant[t].LAD_ward_donor_year.id[a]]}).rollup(function(a){var n=e.grant[t].LAD_ward_donor_year.dataField;return Object(L.a)({filterOn:!0===a.some(function(e){return!0===e.filterOn}),filterLocation:!0===a.some(function(e){return!0===e.filterLocation}),filterDonor:!0===a.some(function(e){return!0===e.filterDonor})},n,Object(k.g)(a,function(e){return e.filterOn&&e.filterDonor?+e[n]:0}))}).entries(e.grant[t].LAD_ward_donor_year.data),s=Object(D.b)().key(function(o){return o[e.comparison[t][a][n[0]].id]}).entries(e.comparison[t][a][n[0]].data);return N(s,i,"key","key",[n[1]],[e.grant[t].LAD_ward_donor_year.dataField]).map(function(n){var o=e.geo[t][a].lookUp[n.id]?e.geo[t][a].lookUp[n.id].value:"";return Object(w.a)({},n,{placeName:o})})},M=function(e,t){var a=e.grant[t].LAD_ward_donor_year.data,n=Object(D.b)().key(function(e){return e["Funding Org:Name"]}).key(function(e){return e["Award Year"]}).rollup(function(e){return{projects:Object(k.g)(e,function(e){return e.filterOn&&e.filterLocation?e.Identifier:0}),total_awarded:Object(k.g)(e,function(e){return e.filterOn&&e.filterLocation?e["Amount Awarded"]:0}),filterDonor:Object(k.g)(e,function(e){return e.filterOn&&e.filterLocation&&e.filterDonor?e.Identifier:0})}}).entries(a);return n=n.map(function(e){return e.filterDonor=e.values.filter(function(e){return e.value.filterDonor>0}).length>0,e.notZero=e.values.filter(function(e){return e.value.total_awarded>0}).length>0,e})},F=function(e,t,a,n,o,r){var i=Object.keys(e),s=t.data,l=a.data;if(i.includes("location")&&"reset"!==e.location){var c=t.id[o];s.forEach(function(t){t.filterLocation=!!e.location.includes(t[c])})}if(i.includes("donor")&&"reset"!==e.donor&&s.forEach(function(t){t.filterDonor=!!e.donor.includes(t["Funding Org:Name"])}),i.includes("years")&&"reset"!==e.years){var d=y.a.range(Object(k.d)(e.years)[0],Object(k.d)(e.years)[1]);s.forEach(function(e){e.filterOn=!!d.includes(+e["Award Year"])})}return{grantFiltered:s,comparisonFiltered:l}},N=function(e,t,a,n,o,r){for(var i=function(e,t){var a,n,i,s,l,c,d;return a=n=i=s=l=c=d=null,e&&(n=e.value?e.value:e.values[0],a=y.a.pick(n,o)),t&&(i=t.value?t.value:t.values[0],s=y.a.pick(i,r)),e&&t?(l=n.filterOn&&i.filterOn,c=n.filterLocation&&i.filterLocation,d=n.filterDonor&&i.filterDonor):e?(l=n.filterOn,c=n.filterLocation,d=n.filterDonor):t&&(l=i.filterOn,c=i.filterLocation,d=i.filterDonor),Object(w.a)({id:e.key},a,s,{filterOn:l,filterLocation:c,filterDonor:d})},s=t.length,l=e.length,c=[],d=[],u=0;u<s;u++){var p=t[u];c[p[n]]=p}for(var m=0;m<l;m++){var h=e[m],f=c[h[a]];d.push(i(h,f))}return d},P=(a(148),function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"FiltersComponent"})}}]),t}(n.Component));P.defaultProps={};a(150);var S=a(16),x=a(37),B=(a(159),a(2)),G=a(36),I=a(48),R=a(132),V=a(15),z=function(e){return Object(G.d)().domain(y.a.range(e[0],e[1],(e[1]-e[0])/10)).range(["#f8d5cc","#f4bfb6","#f1a8a5","#ee8f9a","#ec739b","#dd5ca8","#c44cc0","#9f43d7","#6e40e6"])},W=function(e,t){return e=e.replace("#",""),"rgba("+parseInt(e.substring(0,2),16)+","+parseInt(e.substring(2,4),16)+","+parseInt(e.substring(4,6),16)+","+t/100+")"},U=function(e,t){var a="<div class='tootltip' style='font-size:12px; border: 1px solid #ccc; background-color: rgba(255,255,255,0.9); padding:5px; max-width:150px; z-index:2000'>";return a+=e?"<div style='font-size:20px'>"+e+"</div>":"",t&&t.forEach(function(e){a+="<br/><strong>"+e.label+":</strong> ",a+="<br/><div class='tootltip-value' style='font-size:18px;'>"+e.value+"</div>"}),a+="</div>"},T=function(e,t,a,n){var o=Object(k.d)(e),r=Object(x.a)(o,2),i=r[0],s=r[1],l=n?(s-i)*n:.1*(s-i);return i-=l,s+=l,t&&(i=i>t?i:t,s=s>0?s:i),a&&(i=i>0?i:1,s=s>0?s:1),[i,s]},Y=a(65),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).createBarChart=a.createBarChart.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.createBarChart()}},{key:"componentDidUpdate",value:function(){this.createBarChart()}},{key:"createBarChart",value:function(){var e=this,t=this.props.xVal,a="Amount Awarded",n=this.props.data,o=this.props.addFilter;Object(B.f)(".d3-tip").remove();n=n.map(function(e){var n;return n={id:e.id},Object(L.a)(n,t,e[t]?+e[t]:0),Object(L.a)(n,"Amount Awarded",e[a]?+e[a]:0),Object(L.a)(n,"filterLocation",e.filterLocation),Object(L.a)(n,"placeName",e.placeName),n});var r=20,i=20,s=90,l=90,c=this.props.dimensions.width-l-i,d=this.props.dimensions.height-r-s,u=Object(B.f)(this.node),p=n.map(function(e){return+e[t]}),m=n.map(function(e){return+e[a]}),h=T(m,this.props.yMinLimit,!0),f=Object(x.a)(h,2),g=f[0],v=f[1],b=T(p),y=Object(x.a)(b,2),w=y[0],_=y[1],D=Object(Y.a)().attr("class","d3-tip").offset(function(e){return e[t]>(_-w)/2?[0,-20]:[0,20]}).direction(function(e){return e[t]>(_-w)/2?"w":"e"}).html(function(n){return U(n.placeName+" ["+n.id+"]",[{label:e.props.xValLabel.label,value:Object(V.a)(",.2f")(n[t])},{label:"Amount Awarded",value:"\xa3"+Object(V.a)(",.0f")(n[a])}])}),O=(n=n.filter(function(e){return+e[a]>=g})).filter(function(e){return!e.filterLocation}),j=n.filter(function(e){return e.filterLocation});n=O.concat(j);var E=Object(G.b)().range([0,c]).domain([w,_]),C=Object(G.c)().range([d,0]).domain([g,v]),A=z(Object(k.d)(p));u.selectAll("g").remove(),u.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",c).attr("height",d);var M=Object(R.a)().scaleExtent([.5,20]).extent([[0,0],[c,d]]).on("zoom",function(){var e=B.b.transform.rescaleX(E),o=B.b.transform.rescaleY(C),r=P.scale(e),i=Q.scale(o);S.call(r),X.call(i),N.data(n.filter(function(e){return+e[a]>=g})).attr("cx",function(a){return e(a[t])}).attr("cy",function(e){return o(e[a])});var s=r.scale().range(),l=Object(x.a)(s,2),c=l[0],d=l[1];D.offset(function(a){return e(a[t])>(d-c)/2?[0,-20]:[0,20]}).direction(function(a){return e(a[t])>(d-c)/2?"w":"e"})});u.append("rect").attr("width",c).attr("height",d).style("fill","none").style("pointer-events","all").attr("transform","translate("+l+","+r+")").call(M);var F=u.append("g");F.attr("transform","translate("+l+","+r+")").style("pointer-events","all");var N=F.append("g").attr("width",c).attr("height",d).attr("clip-path","url(#clip)").selectAll(".dot").data(n).enter().append("circle").attr("class","dot").attr("r",2).attr("stroke","#99999933").attr("stroke-width",1).attr("cx",function(e){return E(+e[t])}).attr("cy",function(e){return C(+e[a])}).attr("fill",function(e){return e.filterLocation?W(A(+e[t]),100):"rgba(0,0,0,0)"}).on("mouseover",function(e){D.show(e,this),Object(B.f)(this).attr("r",15).attr("fill",W(A(+e[t]),100)).attr("stroke","#f48320").attr("stroke-width",3)}).on("mouseout",function(e){D.hide(),Object(B.f)(this).attr("r",2).attr("fill",function(e){return e.filterLocation?W(A(+e[t]),100):"rgba(0,0,0,0)"}).attr("stroke","#99999933").attr("stroke-width",1)}).on("click",function(e){D.hide(),o({location:[e.id]},!0)});u.call(D);var P=Object(I.a)(E).ticks(4).tickFormat(Object(V.a)(".3s")),S=F.append("g").attr("transform","translate(0,"+d+")").call(P);F.append("defs").append("clipPath").attr("id","clipYAxis").append("rect").attr("width",c).attr("height",d).attr("transform","translate("+-l+",0)");var Q=Object(I.b)(C).tickValues(function(e,t){for(var a=0,n=[];Math.pow(10,a)<=t;)Math.pow(10,a)>=e&&n.push(Math.pow(10,a)),a++;return n}(g,v)).tickFormat(function(e){return"\xa3"+Object(V.a)(".1s")(e).replace("M"," mil").replace("G"," bil")}),X=F.append("g").attr("clip-path","url(#clipYAxis)").attr("width",c).attr("height",d).call(Q);u.append("g").append("text").attr("transform","rotate(-90)").attr("y",10).attr("x",0-d/2).attr("dy","1em").style("text-anchor","middle").text("Amount Awarded (\xa3)"),u.append("g").append("text").attr("transform","translate("+(l+c/2)+" ,"+(d+s-20)+")").style("text-anchor","middle").text(this.props.xValLabel.label)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"DonorBarChart"},o.a.createElement("svg",{ref:function(t){return e.node=t},width:this.props.dimensions.width,height:this.props.dimensions.height}))}}]),t}(n.Component);Q.defaultProps={};var X=Q,q=(a(161),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).createBarChart=a.createBarChart.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.createBarChart()}},{key:"componentDidUpdate",value:function(){this.createBarChart()}},{key:"createBarChart",value:function(){var e=this.props.data,t=Object(Y.a)().attr("class","d3-tip").offset([0,20]).direction(function(e){return"e"}).html(function(e){return U(e.year,[{label:"Number of projects",value:e.projects},{label:"Amount Awarded",value:"\xa3"+Object(V.a)(",.0f")(e.amount)}])}),a=10,n=60,o=300-n-10,r=150-a-40,i=Object(B.f)(this.node),s=e.values.map(function(e){return e.value.total_awarded}),l=e.values.map(function(e){return{year:parseInt(e.key),amount:e.value.total_awarded,projects:e.value.projects}}),c=Object(G.a)().range([0,o]).domain([2013,2014,2015,2016,2017,2018]).padding(.1),d=Object(G.b)().range([r,0]).domain([0,y.a.max(s)]);i.selectAll("g").remove();var u=i.append("g");u.attr("transform","translate("+n+","+a+")"),u.selectAll(".bar").data(l).enter().append("rect").attr("class","bar").attr("x",function(e){return c(e.year)}).attr("width",c.bandwidth()).attr("y",function(e){return d(e.amount)}).attr("fill","#6e40e6").attr("height",function(e){return r-d(e.amount)}).on("mouseover",function(e){t.show(e,this),Object(B.f)(this).attr("fill","#f48320")}).on("mouseout",function(e){t.hide(),Object(B.f)(this).attr("fill","#6e40e6")}),u.append("g").attr("transform","translate(0,"+r+")").call(Object(I.a)(c)),u.append("g").call(Object(I.b)(d).ticks(4).tickFormat(function(e){return"\xa3"+Object(V.a)(".3s")(e).replace("M"," mil").replace("G"," bil")})),i.call(t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"DonorBarChart"},o.a.createElement("svg",{className:"StackedBarChart",ref:function(t){return e.node=t},width:300,height:150}))}}]),t}(n.Component));q.defaultProps={};var J=q,H=a(131),Z=a(68),K=a.n(Z);a(163);K.a.accessToken="pk.eyJ1IjoieWFubmF1bmdvYWsiLCJhIjoiY2prdWVzemFqMGZ6dzNzbnc0Z3N0enBiMiJ9.TFt7qYDiE1k5bBt7NdFCrQ";var $=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).setStateForMe=function(e){return a.setState(e)},a.callBackFuncClick=function(){return null},a.callBackFuncMMove=function(){return null},a.callBackFuncMLeave=function(){return null},a.popup=new K.a.Popup({closeButton:!1,anchor:"left",offset:[10,0]}),a.state={opacity:90,mainLayerId:"admin-level-boundaries",sources:[],geoId:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.opacity,n=t.mainLayerId;console.log("Running ComponentDidMount on Map"),this.map=new K.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:this.props.mapFormatting.position,zoom:this.props.mapFormatting.zoom}),this.map.on("load",function(){var t=e.props,o=t.mapData,r=t.scatterPlotData,i=t.xVal,s=t.xValLabel,l=t.yMinLimit,c=t.mapGeoId,d=t.mapGeoPlaceName,u=t.allMapSources,p=t.addFilter,m=e.buildDataLayer(o,r,i,c,d,a,l);console.log(u),console.log(e.props),e.setState({sources:[]}),u.forEach(function(t){return e.addSource(t.sourceName,t.filePath,t.type,t.sourceLayer)}),e.addDataLayer(m,o,u),e.setUpMouseOver(n,o,d,c,e.popup,r,i,s),console.log("calling setuponlick from componentDidMount"),e.setUpOnClick(n,c,p)})}},{key:"setUpOnClick",value:function(e,t,a){var n=this.map;n.off("click",e,this.callBackFuncClick),this.callBackFuncClick=function(e){var n=e.features[0].properties[t];a({location:[n]},!0)},n.on("click",e,this.callBackFuncClick)}},{key:"setUpMouseOver",value:function(e,t,a,n,o,r,i,s){var l=null,c=this.map;c.off("mousemove",e,this.callBackFuncMMove),c.off("mouseleave",e,this.callBackFuncMLeave),this.callBackFuncMMove=function(e){if(e.features.length>0){l&&c.setFeatureState({source:t,sourceLayer:t,id:l},{hover:!1}),(l=e.features[0].id)||(l=e.features[0].properties.objectid),c.setFeatureState({source:t,sourceLayer:t,id:l},{hover:!0});var d=e.features[0].properties[a],u=e.features[0].properties[n],p=d+" ["+u+"]",m=r.filter(function(e){return e.id===u}),h=m.length>0?[{label:s.label,value:Object(V.a)(",.2f")(m[0][i])},{label:"Amount Awarded",value:"\xa3"+Object(V.a)(",.0f")(m[0]["Amount Awarded"])}]:[];o.setLngLat(e.lngLat).setHTML(U(p,h)).addTo(c)}},this.callBackFuncMLeave=function(){l&&c.setFeatureState({source:t,sourceLayer:t,id:l},{hover:!1}),l=null,o.remove()},c.on("mousemove",this.state.mainLayerId,this.callBackFuncMMove),c.on("mouseleave",this.state.mainLayerId,this.callBackFuncMLeave)}},{key:"buildDataLayer",value:function(e,t,a,n,o,r,i){var s=t.map(function(e){return+e[a]}),l=t.map(function(e){return+e["Amount Awarded"]}),c=z(Object(k.d)(s)),d=T(l,i,!0),u=Object(x.a)(d,2),p=u[0],m=(u[1],["match",["get",n]]);t.forEach(function(e){var t=e.filterLocation&&+e["Amount Awarded"]>=p?W(c(+e[a]),r):"rgba(0,0,0,0)";m.push(e.id,t)}),m.push("rgba(0,0,0,0)");var h=Object(B.f)("#legendContainer");h.selectAll("g").remove(),h.append("g").attr("class","legendQuant");var f=Object(H.a)().labelFormat(Object(V.a)(".3s")).titleWidth(100).scale(c);return h.select(".legendQuant").call(f),m}},{key:"addSource",value:function(e,t,a,n){console.log(e,t,a);var o={type:a};"vector"===a?o.url=t:(o.data=t,o.generateId=!0),console.log(o),this.map.addSource(e,o)}},{key:"addDataLayer",value:function(e,t,a){var n=a.filter(function(e){return e.sourceName===t})[0];console.log(n);var o={id:this.state.mainLayerId,type:"fill",source:t,paint:{"fill-color":e,"fill-outline-color":"rgba(0,0,0,0.1)"}};"vector"===n.type&&(o["source-layer"]=n.sourceLayer),this.map.addLayer(o,"place-city-sm"),this.setState({sources:y.a.uniq([].concat(Object(m.a)(this.state.sources),[this.state.mainLayerId]))});var r={id:this.state.mainLayerId+"_highlight",type:"line",source:t,paint:{"line-color":["case",["boolean",["feature-state","hover"],!1],"#f48320","rgba(0,0,0,0.1)"],"line-width":["case",["boolean",["feature-state","hover"],!1],2,0]}};"vector"===n.type&&(r["source-layer"]=n.sourceLayer),console.log(r),this.map.addLayer(r,"place-city-sm"),this.setState({sources:y.a.uniq([].concat(Object(m.a)(this.state.sources),[this.state.mainLayerId+"_highlight"]))}),console.log(this.map)}},{key:"removeDataLayer",value:function(){var e=this;console.log(this.state.sources),this.map.removeLayer(this.state.mainLayerId),this.map.removeLayer(this.state.mainLayerId+"_highlight");var t=[];this.state.sources.forEach(function(a,n){e.map.style.sourceCaches[a]&&e.map.removeSource(a),t.push(n)}),console.log(t),this.setState({sources:y.a.uniq(this.state.sources)})}},{key:"componentWillUnmount",value:function(){this.map.remove()}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.mapData!==this.props.mapData||e.mapGeoId!==this.props.mapGeoId||e.scatterPlotData!==this.props.scatterPlotData||e.xVal!==this.props.xVal){console.log("Map received new props");var a=e.mapData,n=e.scatterPlotData,o=e.xVal,r=e.xValLabel,i=e.yMinLimit,s=e.mapGeoId,l=e.mapGeoPlaceName,c=e.addFilter,d=e.allMapSources,u=this.state.opacity;!function e(){if(t.map.isStyleLoaded()&&t.map.getLayer(t.state.mainLayerId)){t.removeDataLayer(),console.log(t.map);var p=t.buildDataLayer(a,n,o,s,l,u,i);t.addDataLayer(p,a,d),t.setUpMouseOver(t.state.mainLayerId,a,l,s,t.popup,n,o,r),t.setUpOnClick(t.state.mainLayerId,s,c)}else setTimeout(e,200)}()}else console.log("Still loading data")}},{key:"render",value:function(){var e=this,t={position:"relative",width:this.props.dimensions.width,height:this.props.dimensions.height};return o.a.createElement("div",{className:"MapComponent"},o.a.createElement("div",{style:t,ref:function(t){return e.mapContainer=t},className:"absolute top right left bottom MapComponentMap"},o.a.createElement("div",{className:"map-overlay top"},o.a.createElement("div",{className:"map-overlay-inner"},o.a.createElement("svg",{id:"legendContainer"})))))}}]),t}(n.Component);$.defaultProps={};var ee=$,te=a(96),ae=a(95),ne=a.n(ae),oe=(a(219),a(221),a(126)),re=a.n(oe),ie=a(127),se=Object(te.a)(te.b.Range),le=function(e){var t=e.content;return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"content"},o.a.createElement(re.a,{source:t})))},ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).locationValueRenderer=function(e,t){return 0===e.length?"Slect some locations...":e.length===t.length?"All locations selected":"Selected ".concat(e.length," locations")},a.donorValueRenderer=function(e,t){return 0===e.length?"Slect some grant makers...":e.length===t.length?"All grant makers selected":"Selected ".concat(e.length," grant makers")},a.toggleSelector=function(e){console.log("show selector "+e),"locations"===e&&a.setState({showSelectorLocations:!a.state.showSelectorLocations}),"donors"===e&&a.setState({showSelectorDonors:!a.state.showSelectorDonors})},a.filterLocations=function(e){e.length===a.state.locationsList.length?a.props.addFilter({location:"reset"},!1):a.props.addFilter({location:e.map(function(e){return e.id})},!1)},a.filterDonors=function(e){e.length===a.state.donorsList.length?a.props.addFilter({donor:"reset"},!1):a.props.addFilter({donor:e.map(function(e){return e.id})},!1)},a.state={yearsRange:a.props.yearsRange?a.props.yearsRange:[2013,2018],showSelectorLocations:!1,showSelectorDonors:!1,locationsList:[],donorsList:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setNewLocationsList(this.props.scatterPlotData),this.setNewDonorsList(this.props.smallMultiplesData)}},{key:"setNewLocationsList",value:function(e){this.setState({locationsList:e?O(e,"id",j,"filterLocation"):[{id:"test",label:"placeholder"}]})}},{key:"setNewDonorsList",value:function(e){this.setState({donorsList:e?O(e,"key",E,"filterDonor"):[{id:"test",label:"placeholder"}]})}},{key:"componentWillReceiveProps",value:function(e){e.scatterPlotData!==this.props.scatterPlotData&&this.setNewLocationsList(e.scatterPlotData),e.smallMultiplesData!==this.props.smallMultiplesData&&this.setNewDonorsList(e.smallMultiplesData)}},{key:"render",value:function(){var e=this,t=this.props.dimensions.width<=800?.8*this.props.dimensions.width:.45*this.props.dimensions.width;return o.a.createElement("div",{className:"BodyComponent"},o.a.createElement(S.Grid,{fluid:!0},o.a.createElement(S.Row,{className:"filtersRow"},o.a.createElement(S.Col,{xs:!0,className:"col leftCol"},o.a.createElement("button",{onClick:function(){return e.toggleSelector("locations")},className:"filterButton"},this.state.showSelectorLocations?o.a.createElement("span",null,"Close location selector"):o.a.createElement("span",null,"Filter locations")),o.a.createElement("button",{onClick:this.props.addFilter.bind(this,{location:"reset"}),className:"filterButton"},o.a.createElement("span",null,"Reset location filters")),o.a.createElement(ie.a,{trigger:o.a.createElement("button",{className:"button popUp"}," i "),position:"right center",on:"click"},o.a.createElement(le,{content:this.props.infoBoxes.test.content})),this.state.showSelectorLocations?o.a.createElement("div",{className:"multiSelector"},o.a.createElement(ne.a,{items:this.state.locationsList,selectedItems:this.state.locationsList.filter(function(e){return e.filter}),onChange:this.filterLocations})):null),o.a.createElement(S.Col,{xs:!0,className:"col rightCol"},"Filter years:",o.a.createElement(se,{className:"yearsSlider",allowCross:!0,defaultValue:[this.state.yearsRange[0],this.state.yearsRange[1]+1],min:2013,max:2019,onAfterChange:function(t){return e.props.addFilter({years:t})},dots:!0,pushable:!0,width:200})),o.a.createElement(S.Col,{xs:!0,className:"col"},o.a.createElement("button",{onClick:function(){return e.toggleSelector("donors")},className:"filterButton"},this.state.showSelectorDonors?o.a.createElement("span",null,"Close grant makers selector"):o.a.createElement("span",null,"Filter grant makers")),o.a.createElement("button",{onClick:this.props.addFilter.bind(this,{donor:"reset"}),className:"filterButton"},o.a.createElement("span",null,"Reset grant maker filters")),this.state.showSelectorDonors?o.a.createElement("div",{className:"multiSelector"},o.a.createElement(ne.a,{items:this.state.donorsList,selectedItems:this.state.donorsList.filter(function(e){return e.filter}),onChange:this.filterDonors})):null)),o.a.createElement(S.Row,null,o.a.createElement(S.Col,{xs:!0,className:"col"},o.a.createElement(ee,{mapFormatting:this.props.mapFormatting,scatterPlotData:this.props.scatterPlotData,mapData:this.props.mapData,allMapSources:this.props.allMapSources,xVal:this.props.scatterPlotXVal,xValLabel:this.props.scatterPlotXValLabel,yMinLimit:this.props.yMinLimit,mapGeoId:this.props.mapGeoId,mapGeoPlaceName:this.props.mapGeoPlaceName,dimensions:{width:t,height:t},addFilter:this.props.addFilter.bind(this)})),o.a.createElement(S.Col,{xs:!0,className:"col"},o.a.createElement("div",{className:"scatterplotView"},o.a.createElement(X,{data:this.props.scatterPlotData,xVal:this.props.scatterPlotXVal,xValLabel:this.props.scatterPlotXValLabel,yMinLimit:this.props.yMinLimit,dimensions:{width:t,height:t},addFilter:this.props.addFilter.bind(this)})))),o.a.createElement(S.Row,null,o.a.createElement(S.Col,{xs:!0,className:"col smallMultiplePlotsContainer"},o.a.createElement("h3",null,"Amounts awarded over time by individual granmakers in selected areas"))),o.a.createElement(S.Row,null,o.a.createElement(S.Col,{xs:!0,className:"col smallMultiplePlotsContainer"},this.props.smallMultiplesData.filter(function(e){return e.filterDonor&&e.notZero}).map(function(e,t){return o.a.createElement("div",{className:"smallMultiplePlot",key:"smallMultiPlePlot"+t},o.a.createElement("div",{className:"smallMultipleHeader"},e.key),o.a.createElement("br",null),o.a.createElement(J,{data:e}))})))))}}]),t}(n.Component);ce.defaultProps={};var de=ce,ue=a(71),pe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).addFilter=function(t,a){var n=Object.keys(t),o=e.state.filters;n.forEach(function(e){if(a&&"reset"!==t[e]&&o[e]&&"reset"!==o[e]){var n=[];n=(n=n.concat(o[e].filter(function(a){return!t[e].includes(a)}))).concat(t[e].filter(function(t){return!o[e].includes(t)})),o[e]=n}else o[e]=t[e]}),e.setState({filters:o,data:C(e.state.data,e.state.selectedRegion,e.state.selectedGeoLevel,e.state.selectedComparison,o)})},e.state={data:[],mutatedData:{},layerControls:[],selectedRegion:"eng",selectedGeoLevel:"LAD",selectedComparison:["deprivation","comparison_IMD_avg_score"],filters:{},yMinLimit:1e3,dimensions:{width:window.innerWidth,height:window.innerHeight}},e.updateDimensions=e.updateDimensions.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),this.getData()}},{key:"updateDimensions",value:function(){this.setState({dimensions:{height:window.innerHeight,width:window.innerWidth}})}},{key:"prepAndloadDataToState",value:function(e,t){var a=this;return console.log(e),this.setState({rawData:e}),Promise.all([C(e,this.state.selectedRegion,this.state.selectedGeoLevel,this.state.selectedComparison,this.state.filters,this.state.yMinLimit)]).then(function(e){console.log(e[0]);var n=e[0];return a.setState({data:e[0]},function(){t&&a.setState({mutatedData:a.state.data},function(){console.log("(mutatedData === data) : ".concat(a.state.mutatedData===a.state.data)),console.log(a.state.mutatedData)})}),n})}},{key:"getData",value:function(){var e=this;(function(e,t){console.log("Loading Data for size "+e);v.a.urlToKey,v.a.getWorkbook,v.a.getSheet;var a=[{name:"geo_eng_LAD",id:"LAD2011_CD",placeName:"lad11nm",data:"geo_eng_LAD",year:"2011",type:"vector",sourceLayer:"geo_eng_LAD",filePath:"mapbox://yannaungoak.0ge46srg",lookupFilePath:"https://360-giving-grants-map.s3.eu-west-2.amazonaws.com/data/geo/geo_eng_LAD_lookup.json"},{name:"geo_eng_ward",id:"wd17cd",placeName:"wd17nm",data:"geo_eng_ward",year:"2017",type:"vector",sourceLayer:"geo_eng_ward",filePath:"mapbox://yannaungoak.c4hq3m9h",lookupFilePath:"https://360-giving-grants-map.s3.eu-west-2.amazonaws.com/data/geo/geo_eng_ward_lookup.json"},{name:"grants_eng_LAD_ward_donor_year",data:"grants_eng_LAD_ward_donor_year",id:{LAD:"Recipient District Geographic Code",ward:"Recipient Ward Geographic Code"},dataField:"Amount Awarded",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/grants/grants_eng_LAD_ward_donor_year.csv"},{name:"comparison_eng_LAD_deprivation",id:"lad11cd",data:"comparison_eng_LAD_deprivation",year:"2013",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/comparison/comparison_eng_LAD_deprivation.csv"},{name:"comparison_eng_ward_deprivation",id:"WD17CD",data:"comparison_eng_ward_deprivation",year:"2015",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/comparison/comparison_eng_ward_deprivation.csv"},{name:"comparison_eng_LAD_charities",id:"lad11cd",data:"comparison_eng_LAD_charities",year:"2018",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/comparison/comparison_eng_LAD_charities.csv"},{name:"comparison_eng_ward_charities",id:"WD17CD",data:"comparison_eng_ward_charities",year:"2018",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/comparison/comparison_eng_ward_charities.csv"},{name:"comparison_eng_LAD_population",id:"lad11cd",data:"comparison_eng_LAD_population",year:"2017",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/comparison/comparison_eng_LAD_population.csv"},{name:"comparison_eng_ward_population",id:"Ward Code 1",data:"comparison_eng_ward_population",year:"2017",filePath:"https://s3.eu-west-2.amazonaws.com/360-giving-grants-map/data/comparison/comparison_eng_ward_population.csv"},{name:"infoboxesGoogleSheet",csvPath:"https://docs.google.com/spreadsheets/d/1b94FIknCydzUCC1o5pceMGYgG2pjfowMTOfAbJs4l-Q/export?gid=0&format=csv",filePath:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQCz2QeRc4QGYCU7pdnsT2G1bL8PpUK9cdadRpw_e5gAD0ys-lS1w_P3EQkTr2HL6CfwGatd_8P86G5/pubhtml"}],n={geoLevel:{LAD:"Local Authority District",ward:"Ward"},region:{eng:"England",sco:"Scotland",nir:"Northern Ireland",wal:"Wales",uk:"United Kingdom"}},o={eng:{value:"eng",label:"England",position:[-1.464854,52.561928],zoom:5}},r={LAD:{value:"LAD",label:"Local Authority District"},ward:{value:"ward",label:"Ward"}},i=[];return a.forEach(function(e){".csv"===e.filePath.slice(-4)?i.push(Object(f.a)(e.filePath)):".json"===e.filePath.slice(-5)?i.push(Object(f.b)(e.filePath)):"infoboxesGoogleSheet"===e.name?i.push(Object(f.a)(e.csvPath)):i.push(Object(f.b)(e.lookupFilePath))}),Promise.all(i).then(function(e){var i={geo:{eng:{LAD:{},ward:{}}},comparison:{eng:{LAD:{},ward:{}}},grant:{eng:{}},abbreviations:n,regions:o,geoLevels:r,allMapSources:[]};t&&(i=t),console.log(i),console.log(e);for(var s=function(t){var n=a[t].name.split("_"),o=Object(h.a)(n),r=o[0],s=o[1],l=o[2],c=o.slice(3),d="grants"===r?[l].concat(Object(m.a)(c)).join("_"):c.join("_");switch(r){case"geo":i.geo[s][l]={sourceName:a[t].name,id:a[t].id,placeName:a[t].placeName,year:a[t].year,type:a[t].type,data:"geojson"===a[t].type?e[t]:[],sourceLayer:"geojson"===a[t].type?"":a[t].sourceLayer,filePath:a[t].filePath,lookUp:"geojson"===a[t].type?y.a.keyBy(e[t].features.map(function(e){return{key:e.properties[a[t].id],value:e.properties[a[t].placeName]}}),"key"):e[t]},i.geoLevels[l].label=i.geoLevels[l].label+" ("+a[t].year+")";break;case"grants":i.grant[s][d]={id:a[t].id,data:e[t],dataField:a[t].dataField};break;case"comparison":i.comparison[s][l][d]={id:a[t].id,year:a[t].year,data:e[t]};break;case"infoboxesGoogleSheet":i.infoBoxes=y.a.keyBy(e[t].map(function(e){return{id:e.id,content:e.content}}),"id")}},l=0;l<a.length;l++)s(l);return y.a.forEach(i.geo,function(e,t){y.a.forEach(e,function(e,t){i.allMapSources.push(e)})}),console.log(i),console.log(i.grant.eng.LAD_ward_donor_year.data.filter(function(e){return"E07000100"===e["Recipient District Geographic Code"]})),console.log(i.comparison.eng.LAD.deprivation.data),i})})().then(function(t){return e.prepAndloadDataToState(t,!0)})}},{key:"render",value:function(){var e=this;console.log(this.state);var t=function(){return e.state.data.comparisonVars.filter(function(t){return t.value[0]==e.state.selectedComparison[0]&&t.value[1]==e.state.selectedComparison[1]})[0]},a=!!y.a.isEmpty(this.state.data),n=o.a.createElement("div",{className:"regionPickerWrapper"},o.a.createElement("label",null,"Region:",a?"loading":o.a.createElement(ue.a,{value:this.state.data.regions[this.state.selectedRegion],onChange:function(t){e.setState({selectedRegion:t.value,filters:{},data:C(e.state.data,t.value,e.state.selectedGeoLevel,e.state.selectedComparison,{},e.state.yMinLimit)}),console.log("Location selected:",t)},options:Object.values(this.state.data.regions),className:"regionPicker"}))),r=o.a.createElement("div",{className:"geoPickerWrapper"},o.a.createElement("label",null,"Administrative Level:",a?"loading":o.a.createElement(ue.a,{value:this.state.data.geoLevels[this.state.selectedGeoLevel],onChange:function(t){e.setState({selectedGeoLevel:t.value,filters:{},data:C(e.state.data,e.state.selectedRegion,t.value,e.state.selectedComparison,{},e.state.yMinLimit)}),console.log("Geo level selected:",t)},options:Object.values(this.state.data.geoLevels),className:"geoPicker"}))),i=o.a.createElement("div",{className:"comparisonPickerWrapper"},o.a.createElement("label",null,"Comparison Variable:",a?"loading":o.a.createElement(ue.a,{value:t(),onChange:function(t){e.setState({selectedComparison:t.value,data:C(e.state.data,e.state.selectedRegion,e.state.selectedGeoLevel,t.value,e.state.filters,e.state.yMinLimit)}),console.log("Comparison var selected:",t)},options:Object.values(this.state.data.comparisonVars),className:"comparisonPicker"})));return o.a.createElement("div",{className:"App"},a?"loading":o.a.createElement("div",null,o.a.createElement("header",{className:"App-header"},o.a.createElement(S.Grid,{fluid:!0},o.a.createElement(S.Row,null,o.a.createElement(S.Col,{xs:!0,className:"col left-col"},n),o.a.createElement(S.Col,{xs:!0,className:"col center-col"},r),o.a.createElement(S.Col,{xs:!0,className:"col right-col"},i)))),o.a.createElement(de,{smallMultiplesData:this.state.data.dataForSmallMultiples,scatterPlotData:this.state.data.dataForScatter,mapData:this.state.data.dataForMap,allMapSources:this.state.data.allMapSources,scatterPlotXVal:this.state.selectedComparison[1],scatterPlotXValLabel:t(),yMinLimit:this.state.yMinLimit,addFilter:this.addFilter.bind(this),yearsRange:this.state.filters.years,mapFormatting:this.state.data.regions[this.state.selectedRegion],mapGeoId:this.state.data.geo[this.state.selectedRegion][this.state.selectedGeoLevel].id,mapGeoPlaceName:this.state.data.geo[this.state.selectedRegion][this.state.selectedGeoLevel].placeName,dimensions:this.state.dimensions,infoBoxes:this.state.data.infoBoxes})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,2,1]]]);
//# sourceMappingURL=main.80d3e1a6.chunk.js.map