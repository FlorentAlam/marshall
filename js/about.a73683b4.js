(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1f84":function(t,r,i){"use strict";var n=i("84c8"),e=i.n(n);e.a},"3aa3":function(t,r,i){"use strict";var n=i("be03"),e=i.n(n);e.a},4042:function(t,r,i){},"4c9b":function(t,r,i){"use strict";var n=i("a450"),e=i.n(n);e.a},"4de4":function(t,r,i){"use strict";var n=i("23e7"),e=i("b727").filter,a=i("1dde"),o=i("ae40"),s=a("filter"),c=o("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},"698b":function(t,r,i){"use strict";i.r(r);var n=function(){var t=this,r=t.$createElement,i=t._self._c||r;return t.produit?i("div",{attrs:{id:"product-page"}},[i("div",{staticClass:"image-container"},[i("img",{attrs:{src:""+(t.publicPath+t.produit.productPage.mainImage)}}),i("div",{staticClass:"product-name"},[i("h1",[t._v(t._s(t.produit.name))]),i("p",[t._v(t._s(t.produit.description))])])]),i("section",{staticClass:"product-description"},[i("h1",[t._v(t._s(t.produit.productPage.header1))]),i("p",[t._v(t._s(t.produit.productPage.desc1))]),i("img",{attrs:{src:""+(t.publicPath+t.produit.productPage.image1)}})]),i("section",{staticClass:"product-description"},[i("h1",[t._v(t._s(t.produit.productPage.header2))]),i("p",[t._v(t._s(t.produit.productPage.desc2))]),i("ProduitCaracs",{attrs:{cards:t.produit.productPage.images}})],1)]):t._e()},e=[],a=(i("4de4"),i("9911"),i("0b1a")),o=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ScrollOnView",{attrs:{customClass:"product-caracs-images"}},t._l(t.cards,(function(r){return i("div",{key:r.link},[i("img",{attrs:{src:r.link}}),i("h2",[t._v(t._s(r.title))]),i("p",[t._v(t._s(r.text))])])})),0)},s=[],c=i("81c1"),u={components:{ScrollOnView:c["a"]},props:{cards:Array}},d=u,l=(i("cc35"),i("2877")),p=Object(l["a"])(d,o,s,!1,null,"32a97c15",null),f=p.exports,v={components:{ProduitCaracs:f},data:function(){return{produit:null,publicPath:"/marshall/"}},watch:{$route:function(t,r){var i=this;this.$set(this,"produit",a["a"].filter((function(t){return t.link===i.$router.currentRoute.params.id}))[0])}},mounted:function(){var t=this;document.addEventListener("scroll",(function(){t.$el.querySelector(".image-container").style.transform="translateY(".concat(window.scrollY/3,"px)")})),this.$set(this,"produit",a["a"].filter((function(r){return r.link===t.$router.currentRoute.params.id}))[0])}},h=v,_=(i("3aa3"),Object(l["a"])(h,n,e,!1,null,"af665aa2",null));r["default"]=_.exports},"84c8":function(t,r,i){},"857a":function(t,r,i){var n=i("1d80"),e=/"/g;t.exports=function(t,r,i,a){var o=String(n(t)),s="<"+r;return""!==i&&(s+=" "+i+'="'+String(a).replace(e,"&quot;")+'"'),s+">"+o+"</"+r+">"}},"94b8":function(t,r,i){"use strict";i.r(r);var n=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"produits"},[i("h1",[t._v("Nos Produits")]),t._l(t.produits,(function(t){return i("Produit",{key:t.link,attrs:{produit:t}})}))],2)},e=[],a=i("0b1a"),o=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"produit-container",class:{left:"left"===t.produit.position,right:"right"===t.produit.position}},[i("img",{attrs:{src:t.produit.image}}),i("div",{staticClass:"description-container"},[i("div",{staticClass:"description"},[i("h2",[t._v(t._s(t.produit.name))]),i("h3",[t._v(t._s(t.produit.slogan))]),i("p",[t._v(t._s(t.produit.description))]),i("router-link",{attrs:{to:"/produit/"+t.produit.link}},[t._v(" Plus d'informations ")])],1)])])},s=[],c={props:{produit:Object,position:String}},u=c,d=(i("1f84"),i("2877")),l=Object(d["a"])(u,o,s,!1,null,"4d619e4b",null),p=l.exports,f={components:{Produit:p},data:function(){return{produits:a["a"]}},mounted:function(){this.$set(this,"produits",a["a"])}},v=f,h=(i("4c9b"),Object(d["a"])(v,n,e,!1,null,"31b19e78",null));r["default"]=h.exports},9911:function(t,r,i){"use strict";var n=i("23e7"),e=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(t){return e(this,"a","href",t)}})},a450:function(t,r,i){},af03:function(t,r,i){var n=i("d039");t.exports=function(t){return n((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},b727:function(t,r,i){var n=i("0366"),e=i("44ad"),a=i("7b0b"),o=i("50c4"),s=i("65f0"),c=[].push,u=function(t){var r=1==t,i=2==t,u=3==t,d=4==t,l=6==t,p=5==t||l;return function(f,v,h,_){for(var m,g,b=a(f),P=e(b),k=n(v,h,3),w=o(P.length),C=0,$=_||s,x=r?$(f,w):i?$(f,0):void 0;w>C;C++)if((p||C in P)&&(m=P[C],g=k(m,C,b),t))if(r)x[C]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:c.call(x,m)}else if(d)return!1;return l?-1:u||d?d:x}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},be03:function(t,r,i){},cc35:function(t,r,i){"use strict";var n=i("4042"),e=i.n(n);e.a}}]);
//# sourceMappingURL=about.a73683b4.js.map