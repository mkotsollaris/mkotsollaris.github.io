(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),l=n("q1tI"),r=n.n(l),o=n("Wbzz"),s=n("6Gk8"),c=n("Bl7J"),i=n("vrFN"),m=n("p3AD");let p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return r.a.createElement(c.a,{location:this.props.location,title:t},r.a.createElement(i.a,{title:"All posts"}),r.a.createElement(s.a,null),n.map(e=>{let{node:t}=e;const n=t.frontmatter.title||t.fields.slug;return r.a.createElement("article",{key:t.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(m.b)(1/4)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.a.createElement("small",null,t.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))},t}(r.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-index-js-54afe251d74cfab62cc5.js.map