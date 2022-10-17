(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(14);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"})),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.blueMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Blue Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("h1",null,e.heading),l.a.createElement("hr",null),l.a.createElement("textarea",{className:"form-control","aria-label":"With textarea",id:"myBox",rows:"8",value:r,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to upper case","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to lower case","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){for(var t=r.split(" "),a="",n=t.length,l=0;l<n-1;l++)a=a+t[l][0].toUpperCase()+t[l].substring(1).toLowerCase()+" ";a=a+t[n-1][0].toUpperCase()+t[n-1].substring(1).toLowerCase(),o(a),e.showAlert("Converted to Heading case","success")}},"Convert to HeadingCase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){for(var t=r.split(". "),a="",n=t.length,l=0;l<n-1;l++)a=a+t[l][0].toUpperCase()+t[l].substring(1).toLowerCase()+". ";a=a+t[n-1][0].toUpperCase()+t[n-1].substring(1).toLowerCase(),o(a),e.showAlert("Converted to sentence case","success")}},"Convert to SentenceCase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){o("")}},"Clear text"))),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," minutes to read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox above to preview")))}s.defaultProps={title:"Set title here",aboutText:"About text here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t[0].toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",h("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",h("Light mode has been enabled","success"))},blueMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#0a3574"):(r("light"),document.body.style.backgroundColor="white")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{showAlert:h,heading:"Enter your text to analyse",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.ba3e672f.chunk.js.map