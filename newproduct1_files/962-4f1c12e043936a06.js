(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{2962:function(e,t,r){"use strict";r.d(t,{wq:function(){return P},PB:function(){return s},Qb:function(){return L}});var n=r(9008),a=r(67294);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function p(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,r){void 0===t&&(t=[]);var n=void 0===r?{}:r,o=n.defaultWidth,i=n.defaultHeight;return t.reduce((function(t,r,n){return t.push(a.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:r.url})),r.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.width.toString()})):o&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:o.toString()})),r.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t}),[])},u=function(e){var t,r,n,i=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,l.templateTitle&&(p=l.templateTitle.replace(/%s/g,(function(){return p})))):e.defaultTitle&&(p=e.defaultTitle),p&&i.push(a.createElement("title",{key:"title"},p));var u,s,h=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,d=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var f=e.robotsProps,g=f.nosnippet,y=f.maxSnippet,v=f.maxImagePreview,k=f.maxVideoPreview,G=f.noarchive,b=f.noimageindex,E=f.notranslate,w=f.unavailableAfter;m=(g?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(G?",noarchive":"")+(w?",unavailable_after:"+w:"")+(b?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(E?",notranslate":"")}(h||d?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),i.push(a.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(d?"nofollow":"follow")+m}))):i.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&i.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&i.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){i.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&i.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&i.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&i.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&i.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||p)&&i.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(u=e.openGraph)?void 0:u.title)||p}));(null!=(r=e.openGraph)&&r.description||e.description)&&i.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&i.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();i.push(a.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&i.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&i.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&i.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&i.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){i.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&i.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&i.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){i.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&i.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&i.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&i.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){i.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&i.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){i.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&i.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&i.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){i.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){i.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&i.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&i.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){i.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&i.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&i.push.apply(i,c("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&i.push.apply(i,c("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.locale&&i.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&i.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&i.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,r,n;i.push(a.createElement("meta",o({key:"meta:"+(null!=(t=null!=(r=null!=(n=e.keyOverride)?n:e.name)?r:e.property)?t:e.httpEquiv)},e)))})),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach((function(e){var t;i.push(a.createElement("link",o({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),i},s=(a.Component,function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,o=void 0!==r&&r,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,s=e.openGraph,h=e.facebook,d=e.twitter,m=e.additionalMetaTags,f=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return a.createElement(n.default,null,u({title:t,noindex:o,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:h,openGraph:s,additionalMetaTags:m,twitter:d,titleTemplate:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(a.Component)),h=function(e,t){var r=t.id,n=o({},(void 0===r?void 0:r)?{"@id":t.id}:{},t);return delete n.id,{__html:JSON.stringify(o({"@context":"https://schema.org","@type":e},n),g)}},d=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),m=new RegExp("["+Object.keys(d).join("")+"]","g"),f=function(e){return d[e]},g=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(m,f);default:return}};function y(e){var t=e.type,r=void 0===t?"Thing":t,i=e.keyOverride,l=e.scriptKey,c=e.scriptId,u=void 0===c?void 0:c,s=p(e,["type","keyOverride","scriptKey","scriptId"]);return a.createElement(n.default,null,a.createElement("script",{type:"application/ld+json",id:u,dangerouslySetInnerHTML:h(r,o({},s)),key:"jsonld-"+l+(i?"-"+i:"")}))}function v(e){return Array.isArray(e)?e.map((function(e){return{"@type":"Person",name:e}})):e?{"@type":"Person",name:e}:void 0}function k(e){if(e)return{"@type":"ImageObject",url:e}}function G(e,t){if(e)return{"@type":"Organization",name:e,logo:k(t)}}function b(e){if(e)return o({},e,{"@type":"Rating"})}function E(e){function t(e){var t=e.reviewRating,r=e.author,n=e.publisher;return o({},p(e,["reviewRating","author","publisher"]),{"@type":"Review"},r&&{author:v(r)},t&&{reviewRating:b(t)},n&&{publisher:G(n.name)})}return Array.isArray(e)?e.map(t):e?t(e):void 0}function w(e){if(e)return{"@type":"AggregateRating",ratingCount:e.ratingCount,reviewCount:e.reviewCount,bestRating:e.bestRating,ratingValue:e.ratingValue}}function O(e){if(e)return o({"@type":"PostalAddress"},e)}function T(e){if(e)return o({},e,{"@type":"GeoCoordinates"})}function _(e){if(e)return{"@type":e.actionType,name:e.actionName,target:e.target}}function A(e){if(e)return{"@type":"GeoCircle",geoMidpoint:{"@type":"GeoCoordinates",latitude:e.geoMidpoint.latitude,longitude:e.geoMidpoint.longitude},geoRadius:e.geoRadius}}function x(e){if(e)return o({},e,{"@type":"Offer",priceSpecification:function(e){if(e)return{"@type":e.type,priceCurrency:e.priceCurrency,price:e.price}}(e.priceSpecification),itemOffered:function(e){if(e)return o({},e,{"@type":"Service"})}(e.itemOffered)})}function S(e){if(e)return o({},e,{"@type":"OpeningHoursSpecification"})}function P(e){var t=e.type,r=void 0===t?"LocalBusiness":t,n=e.keyOverride,i=e.address,l=e.geo,c=e.rating,u=e.review,s=e.action,h=e.areaServed,d=e.makesOffer,m=e.openingHours,f=e.images,g=o({},p(e,["type","keyOverride","address","geo","rating","review","action","areaServed","makesOffer","openingHours","images"]),{image:f,address:O(i),geo:T(l),aggregateRating:w(c),review:E(u),potentialAction:_(s),areaServed:h&&h.map(A),makesOffer:null==d?void 0:d.map(x),openingHoursSpecification:Array.isArray(m)?m.map(S):S(m)});return a.createElement(y,o({type:r,keyOverride:n},g,{scriptKey:"LocalBusiness"}))}function I(e){function t(e){var t=e.seller;return o({},p(e,["seller"]),{"@type":"Offer"},t&&{seller:{"@type":"Organization",name:t.name}})}return Array.isArray(e)?e.map(t):e?t(e):void 0}function N(e){if(e)return{"@type":"AggregateOffer",priceCurrency:e.priceCurrency,highPrice:e.highPrice,lowPrice:e.lowPrice,offerCount:e.offerCount,offers:I(e.offers)}}function C(e){if(e&&(e.manufacturerName||e.manufacturerLogo))return{"@type":"Organization",name:e.manufacturerName,logo:k(e.manufacturerLogo)}}function H(e){if(e)return{"@type":"Brand",name:e}}function L(e){var t=e.type,r=void 0===t?"Product":t,n=e.keyOverride,i=e.images,l=e.brand,c=e.reviews,u=e.aggregateRating,s=e.manufacturerLogo,h=e.manufacturerName,d=e.offers,m=e.aggregateOffer,f=e.productName,g=o({},p(e,["type","keyOverride","images","brand","reviews","aggregateRating","manufacturerLogo","manufacturerName","offers","aggregateOffer","productName"]),{image:i,brand:H(l),review:E(c),aggregateRating:w(u),manufacturer:C({manufacturerLogo:s,manufacturerName:h}),offers:d?I(d):N(m),name:f});return a.createElement(y,o({type:r,keyOverride:n},g,{scriptKey:"Product"}))}},9008:function(e,t,r){e.exports=r(83121)}}]);
//# sourceMappingURL=962-4f1c12e043936a06.js.map