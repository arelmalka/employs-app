(this["webpackJsonpemploys-app"]=this["webpackJsonpemploys-app"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n.n(r),i=n(18),l=n.n(i),a=(n(26),n(20)),s=n(3),d=n(8),u=n(2);function b(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Logistical Management"}),Object(c.jsx)(d.b,{to:"/Signin",children:Object(c.jsx)("button",{style:{backgroundColor:"#1987E1",color:"white",borderRadius:"4px",padding:"5px",fontSize:"20px"},children:" Sign in"})})," ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)(d.b,{to:"/Login",children:Object(c.jsx)("button",{style:{backgroundColor:"#1987E1",color:"white",borderRadius:"4px",padding:"5px",fontSize:"20px"},children:" Log in"})})]})}n(32);function j(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),o=n[0],i=n[1],l=Object(r.useState)(""),a=Object(s.a)(l,2),d=a[0],b=a[1],j=Object(r.useState)(""),h=Object(s.a)(j,2),x=h[0],p=h[1],m=Object(r.useState)(""),O=Object(s.a)(m,2),f=O[0],g=O[1],y=Object(r.useState)(""),N=Object(s.a)(y,2),k=N[0],v=N[1],S=Object(r.useState)(e.emploiesData),C=Object(s.a)(S,2),P=C[0],L=(C[1],Object(u.f)());function B(){L.push("/")}return Object(c.jsxs)("div",{style:{fontSize:"20px"},children:[Object(c.jsxs)("div",{children:["No. ",Object(c.jsx)("input",{onChange:function(e){p(e.target.value)},style:{fontSize:"20px",marginTop:"10px"},placeholder:"Employ number",type:"text"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("p",{style:{color:"red",fontSize:"15px"},children:k})]}),Object(c.jsxs)("div",{children:["FullName ",Object(c.jsx)("input",{onChange:function(e){b(e.target.value)},style:{fontSize:"20px",marginTop:"10px",marginRight:"3%"},placeholder:"Full name",type:"text"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("p",{style:{color:"red",fontSize:"15px",marginLeft:"5%"},children:f})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{style:{display:"inline",marginBottom:"5px"},children:"Forklift truck license"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:function(){i(!0)},type:"radio",name:"selector"}),Object(c.jsx)("label",{for:"true",children:"yes"}),Object(c.jsx)("input",{onChange:function(){i(!1)},type:"radio",name:"selector",checked:"checked"}),Object(c.jsx)("label",{for:"false",children:"no"})]}),Object(c.jsx)("button",{onClick:function(){if(5!=x.length&&v("The number must be with 5 digits"),d.length<4&&g("The name must contain at least 4 characters"),5==x.length&&d.length>=4&&0==P.length&&(e.add(x,d,o),B()),P.length>0)for(var t=0,n=0,c=0;c<P.length;c++)P[c].name==d&&2==++t&&alert("Please write another name"),P[c].number==x&&alert("Employ number is already in the system , take another one"),t<2&&P[c].number!=x&&++n==P.length&&5==x.length&&d.length>=4&&(e.add(x,d,o),B())},style:{fontSize:"20px",marginTop:"10px",backgroundColor:"gray",color:"white",borderRadius:"4px"},children:" Create"})]})}var h=o.a.createContext(),x=h.Provider,p=h.Consumer;function m(){var e,t,n=Object(r.useState)(""),o=Object(s.a)(n,2),i=o[0],l=o[1],a=Object(r.useState)(""),u=Object(s.a)(a,2),b=(u[0],u[1],Object(r.useState)("")),j=Object(s.a)(b,2),h=(j[0],j[1],[]);return Object(c.jsx)("div",{children:Object(c.jsx)(p,{children:function(n){return Object(c.jsxs)("div",{style:{fontFamily:"sans-serif"},children:[t=function(e){n.dynamicProductList.filter((function(t,c){c!=e&&(h.push(n.dynamicProductList[c]),n.change(h)),c==e&&(n.changeInPlace(n.productList,t.productNumber),1==n.dynamicProductList.length&&n.change(h))}))},e=function(){1==n.license?l("yes"):l("no")},Object(c.jsxs)("h1",{children:["Welcome ",n.name]}),Object(c.jsxs)("div",{style:{marginLeft:"3%",textAlign:"left"},children:[Object(c.jsx)("h4",{children:"Details :"}),Object(c.jsxs)("h5",{children:["Full Name: ",n.name]}),Object(c.jsxs)("h5",{children:["NO.: ",n.number]}),Object(c.jsxs)("h5",{children:["Forklift truck license: ",i]})]}),e(),Object(c.jsxs)("div",{style:{marginTop:"4%"},children:[Object(c.jsx)("h2",{children:"List of products"}),n.dynamicProductList.map((function(e,r){return Object(c.jsxs)("div",{style:{fontSize:"22px",backgroundColor:"whitesmoke",border:"1px solid black",margin:"5px",borderRadius:"4px",display:"inline-table",textAlign:"left",padding:"11px 62px 10px 10px"},children:["NO.",e.productNumber,Object(c.jsx)("br",{}),"Name:",e.productName,Object(c.jsx)("br",{}),"Need forklift truck:",e.forkliftNeeded,Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){"yes"==e.forkliftNeeded&&"no"==i&&alert("A forklift truck license is required"),("no"==e.forkliftNeeded||"yes"==e.forkliftNeeded&&"yes"==i)&&(e.inPlace="yes",t(r)),n.howManyProducts(n.emploies,n.number)},style:{backgroundColor:"gray",color:"white",borderRadius:"4px",marginLeft:"93%"},children:"Update"})]})})),Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("button",{style:{backgroundColor:"gray",color:"white",borderRadius:"4px",marginTop:"5%",marginLeft:"93%"},children:"Log out"})})]})]})}})})}function O(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),o=n[0],i=n[1],l=Object(r.useState)(e.emploiesData),a=Object(s.a)(l,2),d=a[0],b=(a[1],Object(r.useState)(!1)),j=Object(s.a)(b,2),h=j[0],x=j[1],p=Object(u.f)();return Object(c.jsx)("div",{style:{fontSize:"20px"},children:0==h?Object(c.jsxs)("div",{style:{fontSize:"20px"},children:[Object(c.jsx)("h2",{children:" Log in "}),"NO. ",Object(c.jsx)("input",{onChange:function(e){i(e.target.value)},style:{fontSize:"20px",marginTop:"10px",marginBottom:"15px"},placeholder:"Employ number",type:"text"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{style:{fontSize:"20px",color:"white",borderRadius:"4px",backgroundColor:"gray"},onClick:function(){"99999"!=o&&(e.countLogs(d,o),function(){for(var t=0,n=0;n<d.length;n++)d[n].number==o&&(e.get(d[n].number,d[n].name,d[n].license),x(!0)),d[n].number!=o&&++t==d.length&&alert("Employ number "+o+" is not on the system")}()),"99999"==o&&p.push("/manager")},children:" Enter "})]}):1==h?Object(c.jsx)(m,{}):void 0})}function f(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{style:{fontSize:"xxx-large",fontFamily:"sans-serif"},children:"Manager"}),Object(c.jsx)("div",{children:Object(c.jsxs)("table",{style:{width:"85%",margin:"auto"},children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"NO"}),Object(c.jsx)("th",{children:"Full Name"}),Object(c.jsx)("th",{children:"Counter"}),Object(c.jsx)("th",{children:"Number Of Products"})]}),function(){for(var t=0;t<e.emploies.length;t++)if(e.emploies[t].logInCounter>0)return e.emploies.map((function(e,t){if(e.logInCounter>0)return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.number}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.logInCounter}),Object(c.jsx)("td",{children:e.productCounter})]})}))}()]})}),Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("button",{style:{backgroundColor:"gray",color:"white",borderRadius:"4px",marginTop:"5%",marginLeft:"93%"},children:"Log Out"})})]})}var g=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),l=Object(s.a)(i,2),h=l[0],p=l[1],m=Object(r.useState)([{productNumber:"11122",productName:"Green Box",forkliftNeeded:"no",inPlace:"no"},{productNumber:"22554",productName:"Green Box",forkliftNeeded:"no",inPlace:"no"},{productNumber:"66698",productName:"Blue Box",forkliftNeeded:"yes",inPlace:"no"},{productNumber:"78544",productName:"Red Box",forkliftNeeded:"no",inPlace:"no"},{productNumber:"69875",productName:"Red Box",forkliftNeeded:"no",inPlace:"no"}]),g=Object(s.a)(m,2),y=g[0],N=(g[1],Object(r.useState)([{productNumber:"11122",productName:"Green Box",forkliftNeeded:"no",inPlace:"no"},{productNumber:"22554",productName:"Green Box",forkliftNeeded:"no",inPlace:"no"},{productNumber:"66698",productName:"Blue Box",forkliftNeeded:"yes",inPlace:"no"},{productNumber:"78544",productName:"Red Box",forkliftNeeded:"no",inPlace:"no"},{productNumber:"69875",productName:"Red Box",forkliftNeeded:"no",inPlace:"no"}])),k=Object(s.a)(N,2),v=k[0],S=k[1];return Object(c.jsx)("div",{className:"App",style:{backgroundColor:"lightgray"},children:Object(c.jsx)(d.a,{children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/manager",children:Object(c.jsx)(f,{employ:h,emploies:n})}),Object(c.jsx)(u.a,{path:"/signin",children:Object(c.jsx)(j,{emploiesData:n,add:function(e,t,c){o([].concat(Object(a.a)(n),[{number:e,name:t,license:c,logInCounter:0,productCounter:0}]))}})}),Object(c.jsx)(u.a,{path:"/login",children:Object(c.jsx)(x,{value:{howManyProducts:function(e,t){for(var n=0;n<e.length;n++)e[n].number==t&&(e[n].productCounter++,console.log(e[n]))},emploies:n,changeInPlace:function(e,t){for(var n=0;n<e.length;n++)e[n].productNumber==t&&(e[n].inPlace="yes")},name:h.name,number:h.number,license:h.license,productList:y,dynamicProductList:v,change:function(e){S(e)}},children:Object(c.jsx)(O,{emploiesData:n,get:function(e,t,n){p({number:e,name:t,license:n})},currentEmploy:h,countLogs:function(e,t){for(var n=0;n<e.length;n++)e[n].number==t&&(e[n].logInCounter++,console.log(e[n]))}})})}),Object(c.jsx)(u.a,{path:"/",children:Object(c.jsx)(b,{})})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};l.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.460d870e.chunk.js.map