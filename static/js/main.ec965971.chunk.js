(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(25)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(13),r=t.n(o),c=(t(23),t(3));t(24);function s(e){var a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"black":"white"};return l.a.createElement("div",{className:"container",style:a},l.a.createElement("h2",{className:"my-3"},"About Us"),l.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne",style:a},l.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item",style:a},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",style:a},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item",style:a},l.a.createElement("h2",{className:"accordion-header",id:"headingThree",style:a},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var i=t(8);function d(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("h1",null,e.heading),l.a.createElement("hr",null),l.a.createElement("textarea",{className:"form-control","aria-label":"With textarea",id:"myBox",rows:"8",value:o,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"}})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("Converted to upper case","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("Converted to lower case","success")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){for(var a=o.split(" "),t="",n=a.length,l=0;l<n-1;l++)t=t+a[l][0].toUpperCase()+a[l].substring(1).toLowerCase()+" ";t=t+a[n-1][0].toUpperCase()+a[n-1].substring(1).toLowerCase(),r(t),e.showAlert("Converted to Heading case","success")}},"Convert to HeadingCase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){for(var a=o.split(". "),t="",n=a.length,l=0;l<n-1;l++)t=t+a[l][0].toUpperCase()+a[l].substring(1).toLowerCase()+". ";t=t+a[n-1][0].toUpperCase()+a[n-1].substring(1).toLowerCase(),r(t),e.showAlert("Converted to sentence case","success")}},"Convert to SentenceCase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r("")}},"Clear text"))),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,o.split(" ").filter(function(e){return 0!==e.length}).length," words and ",o.length," characters"),l.a.createElement("p",null,.008*o.split(" ").filter(function(e){return 0!==e.length}).length," minutes to read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,o.length>0?o:"Nothing to preview")))}d.defaultProps={title:"Set title here",aboutText:"About text here"};var u=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a[0].toUpperCase()+a.slice(1)}(e.alert.type)),":",e.alert.msg))},h=t(1);var b=function(){var e=Object(n.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(null),b=Object(c.a)(r,2),p=b[0],g=b[1],v=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(d,{title:"TextUtils",aboutText:"About Us",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#0a3574",v("Dark mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",v("Light mode has been enabled","success"))}}),l.a.createElement(u,{alert:p}),l.a.createElement("div",{className:"container"},l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/about",element:l.a.createElement(s,{mode:t})}),l.a.createElement(h.a,{exact:!0,path:"/",element:l.a.createElement(m,{showAlert:v,heading:"Try TextUtils - Word Counter, Character Counter",mode:t})})))))},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.ec965971.chunk.js.map