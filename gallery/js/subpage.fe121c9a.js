(function(t){function i(i){for(var u,n,o=i[0],r=i[1],p=i[2],e=0,c=[];e<o.length;e++)n=o[e],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&c.push(a[n][0]),a[n]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);g&&g(i);while(c.length)c.shift()();return h.push.apply(h,p||[]),s()}function s(){for(var t,i=0;i<h.length;i++){for(var s=h[i],u=!0,o=1;o<s.length;o++){var r=s[o];0!==a[r]&&(u=!1)}u&&(h.splice(i--,1),t=n(n.s=s[0]))}return t}var u={},a={subpage:0,index:0},h=[];function n(i){if(u[i])return u[i].exports;var s=u[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=u,n.d=function(t,i,s){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var u in t)n.d(s,u,function(i){return t[i]}.bind(null,u));return s},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="gallery/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=i,o=o.slice();for(var p=0;p<o.length;p++)i(o[p]);var g=r;h.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"034f":function(t,i,s){"use strict";var u=s("85ec"),a=s.n(u);a.a},"56d7":function(t,i,s){"use strict";s.r(i);s("e260"),s("e6cf"),s("cca6"),s("a79d");var u=s("2b0e"),a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(i){t.index=null}}}),t._l(t.images,(function(i,u){return s("div",{key:u,staticClass:"image",style:{backgroundImage:"url("+i+")",width:"300px",height:"200px"},on:{click:function(i){t.index=u}}})}))],2)},h=[],n=s("067c"),o=s.n(n),r={name:"app",data:function(){return{images:["https://shuxinhuan.github.io/DataGIFs/corpus/USElection.gif","https://shuxinhuan.github.io/DataGIFs/corpus/breathingcity.gif","https://shuxinhuan.github.io/DataGIFs/corpus/girlsname.gif","https://shuxinhuan.github.io/DataGIFs/corpus/GIFmap.gif","https://shuxinhuan.github.io/DataGIFs/corpus/slavery.gif","https://shuxinhuan.github.io/DataGIFs/corpus/GPSdata.gif","https://shuxinhuan.github.io/DataGIFs/corpus/jobmarket.gif","https://shuxinhuan.github.io/DataGIFs/corpus/popularMegacities.gif","https://shuxinhuan.github.io/DataGIFs/corpus/HousingGrowth.gif","https://shuxinhuan.github.io/DataGIFs/corpus/Uber.gif","https://shuxinhuan.github.io/DataGIFs/corpus/walmart3years.gif","https://shuxinhuan.github.io/DataGIFs/corpus/residentailGrowth.gif","https://shuxinhuan.github.io/DataGIFs/corpus/disease.gif","https://shuxinhuan.github.io/DataGIFs/corpus/walmart.gif","https://shuxinhuan.github.io/DataGIFs/corpus/firstLeaf.gif","https://shuxinhuan.github.io/DataGIFs/corpus/birdTraces.gif","https://shuxinhuan.github.io/DataGIFs/corpus/FlightPatterns.gif","https://shuxinhuan.github.io/DataGIFs/corpus/drugOverdose.gif","https://shuxinhuan.github.io/DataGIFs/corpus/isis.gif","https://shuxinhuan.github.io/DataGIFs/corpus/sneaks.gif","https://shuxinhuan.github.io/DataGIFs/corpus/GlobalTemperature.gif","https://shuxinhuan.github.io/DataGIFs/corpus/carsales.gif","https://shuxinhuan.github.io/DataGIFs/corpus/icelevel.gif","https://shuxinhuan.github.io/DataGIFs/corpus/brokenEconomy.gif","https://shuxinhuan.github.io/DataGIFs/corpus/groupfootball.gif","https://shuxinhuan.github.io/DataGIFs/corpus/marryLater.gif","https://shuxinhuan.github.io/DataGIFs/corpus/tempTrends.gif","https://shuxinhuan.github.io/DataGIFs/corpus/football.gif","https://shuxinhuan.github.io/DataGIFs/corpus/debate.gif","https://shuxinhuan.github.io/DataGIFs/corpus/ArcticClimate.gif","https://shuxinhuan.github.io/DataGIFs/corpus/manhattan.gif","https://shuxinhuan.github.io/DataGIFs/corpus/tempAnomalies.gif","https://shuxinhuan.github.io/DataGIFs/corpus/middleClass.gif","https://shuxinhuan.github.io/DataGIFs/corpus/nextAmerica.gif","https://shuxinhuan.github.io/DataGIFs/corpus/globalGDP.gif","https://shuxinhuan.github.io/DataGIFs/corpus/peaceEuro.gif","https://shuxinhuan.github.io/DataGIFs/corpus/Google.gif","https://shuxinhuan.github.io/DataGIFs/corpus/riseofmen.gif","https://shuxinhuan.github.io/DataGIFs/corpus/biggerAmerican.gif","https://shuxinhuan.github.io/DataGIFs/corpus/homesales.gif","https://shuxinhuan.github.io/DataGIFs/corpus/taxIncrease.gif","https://shuxinhuan.github.io/DataGIFs/corpus/oneDay.gif","https://shuxinhuan.github.io/DataGIFs/corpus/GDP-life.gif","https://shuxinhuan.github.io/DataGIFs/corpus/earthWarming.gif","https://shuxinhuan.github.io/DataGIFs/corpus/middleIncome.gif","https://shuxinhuan.github.io/DataGIFs/corpus/qogdata.gif","https://shuxinhuan.github.io/DataGIFs/corpus/riseAndFall.gif","https://shuxinhuan.github.io/DataGIFs/corpus/nycMarathon.gif","https://shuxinhuan.github.io/DataGIFs/corpus/genderppl.gif","https://shuxinhuan.github.io/DataGIFs/corpus/areaGender.gif","https://shuxinhuan.github.io/DataGIFs/corpus/areaGender2.gif","https://shuxinhuan.github.io/DataGIFs/corpus/indiaChina.gif","https://shuxinhuan.github.io/DataGIFs/corpus/political.gif","https://shuxinhuan.github.io/DataGIFs/corpus/globalMigration.gif","https://shuxinhuan.github.io/DataGIFs/corpus/treemap.gif","https://shuxinhuan.github.io/DataGIFs/corpus/voronoi.gif","https://shuxinhuan.github.io/DataGIFs/corpus/lovelife.gif","https://shuxinhuan.github.io/DataGIFs/corpus/bloom.gif","https://shuxinhuan.github.io/DataGIFs/corpus/trump.gif","https://shuxinhuan.github.io/DataGIFs/corpus/sealevel.gif","https://shuxinhuan.github.io/DataGIFs/corpus/MexicoWall.gif","https://shuxinhuan.github.io/DataGIFs/corpus/nike.gif","https://shuxinhuan.github.io/DataGIFs/corpus/natmap.gif","https://shuxinhuan.github.io/DataGIFs/corpus/commuting.gif","https://shuxinhuan.github.io/DataGIFs/corpus/largecity.gif","https://shuxinhuan.github.io/DataGIFs/corpus/causity.gif","https://shuxinhuan.github.io/DataGIFs/corpus/sharedprice.gif","https://shuxinhuan.github.io/DataGIFs/corpus/warmer.gif","https://shuxinhuan.github.io/DataGIFs/corpus/uncertainty.gif","https://shuxinhuan.github.io/DataGIFs/corpus/ml.gif","https://shuxinhuan.github.io/DataGIFs/corpus/estimation.gif","https://shuxinhuan.github.io/DataGIFs/corpus/preventWarm.gif","https://shuxinhuan.github.io/DataGIFs/corpus/themeriver.gif","https://shuxinhuan.github.io/DataGIFs/corpus/sankey.gif","https://shuxinhuan.github.io/DataGIFs/corpus/immigrants.gif","https://shuxinhuan.github.io/DataGIFs/corpus/missiles.gif","https://shuxinhuan.github.io/DataGIFs/corpus/womencandidate.gif","https://shuxinhuan.github.io/DataGIFs/corpus/missiles.gif","https://shuxinhuan.github.io/DataGIFs/corpus/largestcities.gif","https://shuxinhuan.github.io/DataGIFs/corpus/detroit.gif","https://shuxinhuan.github.io/DataGIFs/corpus/war.gif","https://shuxinhuan.github.io/DataGIFs/corpus/taxIntro.gif","https://shuxinhuan.github.io/DataGIFs/corpus/menwomen.gif","https://shuxinhuan.github.io/DataGIFs/corpus/team.gif","https://shuxinhuan.github.io/DataGIFs/corpus/debt.gif","https://shuxinhuan.github.io/DataGIFs/corpus/health.gif","https://shuxinhuan.github.io/DataGIFs/corpus/foreign.gif","https://shuxinhuan.github.io/DataGIFs/corpus/pi.gif","https://shuxinhuan.github.io/DataGIFs/corpus/emoji.gif","https://shuxinhuan.github.io/DataGIFs/corpus/power.gif","https://shuxinhuan.github.io/DataGIFs/corpus/newmarket.gif","https://shuxinhuan.github.io/DataGIFs/corpus/eurovision.gif","https://shuxinhuan.github.io/DataGIFs/corpus/housingvalue.gif","https://shuxinhuan.github.io/DataGIFs/corpus/labor.gif","https://shuxinhuan.github.io/DataGIFs/corpus/stop.gif","https://shuxinhuan.github.io/DataGIFs/corpus/school.gif","https://shuxinhuan.github.io/DataGIFs/corpus/datasets.gif"],index:null}},components:{gallery:o.a}},p=r,g=(s("034f"),s("2877")),e=Object(g["a"])(p,a,h,!1,null,null,null),c=e.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,i,s){}});