(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2419:function(t,e,c){},5707:function(t,e,c){},afc6:function(t,e,c){"use strict";c("2419")},f820:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"about"},l={class:"back-home"},r=Object(a["g"])("span",null,[Object(a["g"])("i",{class:"fa fa-long-arrow-left"})],-1),u=Object(a["i"])(" Back"),i={class:"country-detail"};function s(t,e,c,s,o,b){var j=Object(a["y"])("router-link"),O=Object(a["y"])("Loading"),g=Object(a["y"])("DetailCard"),y=Object(a["y"])("Error");return Object(a["t"])(),Object(a["f"])("div",n,[Object(a["g"])("div",l,[Object(a["j"])(j,{to:"/",class:"back-link"},{default:Object(a["F"])((function(){return[r,u]})),_:1})]),Object(a["g"])("div",i,[Object(a["j"])(O),!t.loading&&t.countryDetail?(Object(a["t"])(),Object(a["d"])(g,{key:0,countryDetail:t.countryDetail},null,8,["countryDetail"])):Object(a["e"])("",!0),Object(a["j"])(y)])])}c("b0c0");var o={key:0,class:"card-large"},b=["src","alt"],j={class:"detail-info"},O={class:"detail-list"},g=Object(a["g"])("span",{class:"country-item"},"Native Name",-1),y=Object(a["i"])(),d={class:"country-value"},p=Object(a["g"])("span",{class:"country-item"},"Population",-1),f=Object(a["i"])(),m={class:"country-value"},v=Object(a["g"])("span",{class:"country-item"},"Region",-1),D=Object(a["i"])(),k={class:"country-value"},h=Object(a["g"])("span",{class:"country-item"},"Sub Region",-1),A=Object(a["i"])(),C={class:"country-value"},w=Object(a["g"])("span",{class:"country-item"},"Capital",-1),L=Object(a["i"])(),$={class:"country-value"},x=Object(a["g"])("span",{class:"country-item"},"Top Level Domain",-1),N=Object(a["i"])(),P={class:"country-value"},R=Object(a["g"])("span",{class:"country-item"},"Currencies",-1),B=Object(a["i"])(": "),E=Object(a["g"])("span",{class:"country-item"},"Languages",-1),F=Object(a["i"])(" : "),I={class:"detail-border"},J=Object(a["g"])("span",{class:"country-item"},"Border Countries: ",-1),_={class:"country-value-button"};function q(t,e,c,n,l,r){var u=Object(a["y"])("router-link");return t.countryDetail?(Object(a["t"])(),Object(a["f"])("div",o,[Object(a["g"])("img",{src:t.countryDetail.flag,alt:t.countryDetail.name},null,8,b),Object(a["g"])("div",j,[Object(a["g"])("h2",null,Object(a["A"])(t.countryDetail.name),1),Object(a["g"])("div",O,[Object(a["g"])("ul",null,[Object(a["g"])("li",null,[g,y,Object(a["g"])("span",d,": "+Object(a["A"])(t.countryDetail.nativeName),1)]),Object(a["g"])("li",null,[p,f,Object(a["g"])("span",m,": "+Object(a["A"])(t.countryDetail.population),1)]),Object(a["g"])("li",null,[v,D,Object(a["g"])("span",k,": "+Object(a["A"])(t.countryDetail.region),1)]),Object(a["g"])("li",null,[h,A,Object(a["g"])("span",C,": "+Object(a["A"])(t.countryDetail.subRegion),1)]),Object(a["g"])("li",null,[w,L,Object(a["g"])("span",$,": "+Object(a["A"])(t.countryDetail.capital),1)])]),Object(a["g"])("ul",null,[Object(a["g"])("li",null,[x,N,Object(a["g"])("span",P,": "+Object(a["A"])(t.countryDetail.topLevelDomain),1)]),Object(a["g"])("li",null,[R,B,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(t.countryDetail.currencies,(function(t,e){return Object(a["t"])(),Object(a["f"])("span",{class:"country-value",key:e},Object(a["A"])(t.name+". "),1)})),128))]),Object(a["g"])("li",null,[E,F,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(t.countryDetail.language,(function(t,e){return Object(a["t"])(),Object(a["f"])("span",{class:"country-value",key:e},Object(a["A"])(t)+". ",1)})),128))])])]),Object(a["g"])("div",I,[J,Object(a["g"])("span",_,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(t.countryDetail.boderCountry,(function(e,c){return Object(a["t"])(),Object(a["d"])(u,{key:c,to:t.setLink(e)},{default:Object(a["F"])((function(){return[Object(a["i"])(Object(a["A"])(e),1)]})),_:2},1032,["to"])})),128))])])])])):Object(a["e"])("",!0)}var S=Object(a["k"])({name:"DetailCard",props:{countryDetail:{required:!0,type:Object}},methods:{setLink:function(t){return{name:"About",params:{id:t}}}}}),T=(c("fe08"),c("6b0d")),z=c.n(T);const G=z()(S,[["render",q]]);var H=G,K=c("3a5e"),M=c("3fb9"),Q=Object(a["k"])({name:"App",components:{DetailCard:H,Loading:K["a"],Error:M["a"]},data:function(){return{paramId:this.$route.params.id}},created:function(){this.$store.dispatch("getCountry",{urlParam:this.paramId})},watch:{$route:function(t){t.params.id&&this.$store.dispatch("getCountry",{urlParam:t.params.id})}},computed:{loading:function(){return this.$store.state.loading},countryDetail:function(){return this.$store.state.countryData[0]}}});c("afc6");const U=z()(Q,[["render",s]]);e["default"]=U},fe08:function(t,e,c){"use strict";c("5707")}}]);
//# sourceMappingURL=about.91bfb226.js.map