(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6Gk8":function(e,t,a){"use strict";a("MUpH");var r=a("q1tI"),i=a.n(r),s=a("Wbzz"),n=a("9eSz"),o=a.n(n),l=(a("qKvR"),a("p3AD"));a("+ZDr");a("nOen");var d=a("ma3e");t.a=()=>{const e=Object(s.useStaticQuery)("2418676009"),{author:t}=e.site.siteMetadata;return i.a.createElement("div",{style:{display:"flex",marginBottom:"2rem"}},i.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.b)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"👋 Welcome to my website! I am ",i.a.createElement("strong",null,t)," and I am a Staff Software Engineer at ",i.a.createElement("a",{href:"https://realtor.com/"},"Realtor.com"),". Thanks for visiting!",i.a.createElement("div",{style:{marginTop:".5rem"}},i.a.createElement("a",{href:"https://github.com/mkotsollaris"},i.a.createElement(d.d,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://podcasts.apple.com/ca/podcast/engineering-podcasts-with-menelaos-kotsollaris/id1465442676"},i.a.createElement(d.g,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://twitter.com/mkotsollaris"},i.a.createElement(d.i,{size:28,style:{marginRight:".1rem"}})),i.a.createElement("a",{href:"https://stackoverflow.com/users/1373465/menelaos-kotsollaris"},i.a.createElement(d.h,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://scholar.google.com/citations?user=TR8AIMsAAAAJ&hl=en"},i.a.createElement(d.a,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://www.youtube.com/channel/UCFfm76gx1mxdbE7tE5X_aWA/videos"},i.a.createElement(d.j,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://www.linkedin.com/in/mkotsollaris/"},i.a.createElement(d.f,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://play.google.com/store/apps/developer?id=Menelaos+Kotsollaris&hl=en"},i.a.createElement(d.e,{size:28,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"https://calendly.com/mkotsollaris/"},i.a.createElement(d.b,{size:27,style:{marginRight:".5rem"}})),i.a.createElement("a",{href:"mailto:mkotsollari@gmail.com"},i.a.createElement(d.c,{size:27})))))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=m(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+n+o+a+r+t+s+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,s=e.spreadProps,n=e.ariaHidden,o=d.default.createElement(I,(0,l.default)({ref:t,src:a},s,{ariaHidden:n}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,p=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,L=e.draggable,O=h||p;if(!O)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:C?1:0,transition:T?"opacity "+b+"ms":"none"},o),H="boolean"==typeof y?"lightgray":y,M={transitionDelay:b+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&M,o,f),N={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:w},W=this.state.isHydrated?g(O):O[0];if(h)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&M)}),W.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:O,generateSources:k}),W.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:O,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(I,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:S},W,{imageVariants:O}))}}));if(p){var P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},s);return"inherit"===s.display&&delete P.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},T&&M)}),W.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:O,generateSources:k}),W.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:O,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,E(O),d.default.createElement(I,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:S},W,{imageVariants:O}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:T,sizes:V,fixed:H(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:H(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var M=C;t.default=M},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(i),n=function(){return(n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function l(e){return function(t){return r.createElement(d,n({attr:n({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,n({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var s=e.attr,l=e.title,d=o(e,["attr","title"]);return r.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:a,style:n({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(i)}},nOen:function(e,t){e.exports={siteTitle:"Menelaos Kotsollaris",siteTitleAlt:"The personal website of Menelaos Kotsollaris",siteTitleShort:"mkotsollaris",siteUrl:{}.ROOT_URL||"https://menelaos.dev",siteLanguage:"en",siteLogo:"pictures/_ic_MK.jpeg",siteDescription:"Come check out how Menelaos Kotsollaris writes software and helps you level up your knowledge!",minibio:"\n      <strong>Menelaos Kotsollaris</strong> is a software engineer working at Trulioo.\n    ",author:"Menelaos Kotsollaris",organization:"Menelaos Kotsollaris Tech LLC",userTwitter:"@mkotsollaris",ogSiteName:"Menelaos Kotsollaris",ogLanguage:"en_US",googleAnalyticsID:"UA-152012397-1",themeColor:"#4147DC",backgroundColor:"#231C42",stackoverflow:"https://stackoverflow.com/users/1373465/menelaos-kotsollaris",podcast:"https://podcasts.apple.com/ca/podcast/engineering-podcasts-with-menelaos-kotsollaris/id1465442676",twitter:"https://twitter.com/mkotsollaris/",twitterHandle:"@mkotsollaris",github:"https://github.com/mkotsollaris/",linkedin:"https://www.linkedin.com/in/mkotsollaris/",youtube:"https://www.youtube.com/channel/UCFfm76gx1mxdbE7tE5X_aWA/videos",rss:""}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-e44a3213254ddddb27ea.js.map