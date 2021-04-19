(this["webpackJsonpcrypto-tracker-react"]=this["webpackJsonpcrypto-tracker-react"]||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},19:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(12),o=t.n(r),i=t(2),l=(t(19),t(13)),m=t.n(l),s=(t(37),function(e){var a=e.name,t=e.image,c=e.symbol,r=e.price,o=e.volume,i=e.priceChange,l=e.marketcap;return n.a.createElement("div",{className:"coin-container"},n.a.createElement("div",{className:"coin-row"},n.a.createElement("div",{className:"coin"},n.a.createElement("img",{src:t,alt:"crypto"}),n.a.createElement("h1",null,a),n.a.createElement("p",{className:"coin-symbol"},c)),n.a.createElement("div",{className:"coin-data"},n.a.createElement("p",{className:"coin-price"},"$",r),n.a.createElement("p",{className:"coin-volume"},"$",o.toLocaleString()),i<0?n.a.createElement("p",{className:"coin-percent red"},i.toFixed(2),"%"):n.a.createElement("p",{className:"coin-percent green"},i.toFixed(2),"%"),n.a.createElement("p",{className:"coin-marketcap"},"Market Cap: $",l.toLocaleString()))))});var p=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),p=l[0],u=l[1];Object(c.useEffect)((function(){m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]);var E=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return n.a.createElement("div",{className:"coin-app"},n.a.createElement("div",{className:"coin-search"},n.a.createElement("h1",{className:"coin-text"},"Search a Currency"),n.a.createElement("form",null,n.a.createElement("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){u(e.target.value)}}))),E.map((function(e){return n.a.createElement(s,{key:e.id,name:e.name,image:e.image,symbol:e.symbol,price:e.current_price,volume:e.total_volume,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap})})))};o.a.render(n.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.417dfd46.chunk.js.map