(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=(a(153),function(e){var t=e.children;return r.a.createElement("main",null,t)});c.propTypes={children:o.a.node.isRequired},t.a=c},150:function(e){e.exports={data:{site:{siteMetadata:{title:"freeCodeCampBA",description:"Somos la comunidad de freeCodeCamp en Buenos Aires.",author:"@freecodecampba"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},152:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(154),u=a.n(s),d=(a(34),a(147),i.a.createContext({})),l=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:""+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func},p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};t.a=p;var m="1025518380"}}]);
//# sourceMappingURL=component---src-pages-404-js-c5ef5adbcdcc949ff178.js.map