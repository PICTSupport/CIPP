"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[7918],{4067:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(7704),l={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},i=a(6010),s=a(9960),o=a(4996);function c(e){var t=e.children,a=e.href,r="breadcrumbs__link";return a?n.createElement(s.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r,itemProp:"item name"},t)}function m(e){var t=e.children,a=e.active,r=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function d(){var e=(0,o.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(s.Z,{className:(0,i.Z)("breadcrumbs__link",l.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?n.createElement("nav",{className:(0,i.Z)(r.kM.docs.docBreadcrumbs,l.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(d,null),e.map((function(t,a){return n.createElement(m,{key:a,active:a===e.length-1,index:a},n.createElement(c,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},9153:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(7294),r=a(6010),l=a(1101),i=a(4474),s=a(7597),o=a(5999),c=a(7704);function m(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function d(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(d,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var p=a(6753),v=a(4678),h="lastUpdated_foO9";function f(e){return n.createElement("div",{className:(0,r.Z)(c.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(v.Z,e)))}function g(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(c.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(p.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",h)},(a||l)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function b(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,m=o.length>0,d=!!(a||l||s);return m||d?n.createElement("footer",{className:(0,r.Z)(c.kM.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(f,{tags:o}),d&&n.createElement(g,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var E=a(1575),Z="tocCollapsible_jdIR",N="tocCollapsibleButton_Fzxq",k="tocCollapsibleContent_MpvI",_="tocCollapsibleExpanded_laf4",L=a(5002);function y(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,c.uR)({initialState:!0}),m=s.collapsed,d=s.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(Z,!m&&_,a)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",N),onClick:d},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(c.zF,{lazy:!0,className:k,collapsed:m},n.createElement(L.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var T=a(9649),C="docItemContainer_vinB",U="docItemCol_DM6M",w="tocMobile_TmEX",M=a(4067),x=a(7823);function A(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,i=a.assets,s=l.keywords,o=r.description,m=r.title,d=null!=(t=i.image)?t:l.image;return n.createElement(c.d,{title:m,description:o,keywords:s,image:d})}function H(e){var t=e.content,a=t.metadata,o=t.frontMatter,m=o.hide_title,d=o.hide_table_of_contents,u=o.toc_min_heading_level,p=o.toc_max_heading_level,v=a.title,h=!m&&void 0===t.contentTitle,f=(0,c.iP)(),g=!d&&t.toc&&t.toc.length>0,Z=g&&("desktop"===f||"ssr"===f);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!d&&U)},n.createElement(i.Z,null),n.createElement("div",{className:C},n.createElement("article",null,n.createElement(M.Z,null),n.createElement(s.Z,null),g&&n.createElement(y,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:p,className:(0,r.Z)(c.kM.docs.docTocMobile,w)}),n.createElement("div",{className:(0,r.Z)(c.kM.docs.docMarkdown,"markdown")},h&&n.createElement("header",null,n.createElement(T.Z,{as:"h1"},v)),n.createElement(x.Z,null,n.createElement(t,null))),n.createElement(b,e)),n.createElement(l.Z,{previous:a.previous,next:a.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(E.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:p,className:c.kM.docs.docTocDesktop})))}function B(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(c.FG,{className:t},n.createElement(A,e),n.createElement(H,e))}},1101:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),r=a(7294),l=a(5999),i=a(1750);function s(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(i.Z,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.createElement(i.Z,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5999),l=a(7704),i=a(6010);function s(e){var t=e.className,a=(0,l.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,l.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(2263),l=a(9960),i=a(5999),s=a(5551),o=a(7704),c=a(6010);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=m[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,l=e.versionMetadata,i=(0,r.Z)().siteConfig.title,m=(0,s.gA)({failfast:!0}).pluginId,p=(0,o.J)(m).savePreferredVersionName,v=(0,s.Jo)(m),h=v.latestDocSuggestion,f=v.latestVersionSuggestion,g=null!=h?h:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,c.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(d,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:f.label,to:g.path,onClick:function(){return p(f.name)}})))}function v(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(5999),l=a(7462),i=a(3366),s=a(6010),o="iconEdit_dcUD",c=["className"];function m(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var d=a(7704);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7823:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(3905),l=a(4781);function i(e){var t=e.children;return n.createElement(r.Zo,{components:l.Z},t)}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),s=a(5002),o="tableOfContents_cNA8",c=["className"];function m(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(3366),l=a(7294),i=a(7704),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,p=void 0===u?void 0:u,v=e.minHeadingLevel,h=e.maxHeadingLevel,f=(0,r.Z)(e,s),g=(0,i.LU)(),b=null!=v?v:g.tableOfContents.minHeadingLevel,E=null!=h?h:g.tableOfContents.maxHeadingLevel,Z=(0,i.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:E}),N=(0,l.useMemo)((function(){if(d&&p)return{linkClassName:d,linkActiveClassName:p,minHeadingLevel:b,maxHeadingLevel:E}}),[d,p,b,E]);return(0,i.Si)(N),l.createElement(o,(0,n.Z)({toc:Z,className:c,linkClassName:d},f))}},4781:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7462),r=a(3366),l=a(7294),i=a(5742),s=a(9960),o=a(8066),c=a(9649),m=a(7488),d=a(3905),u=["components"],p={toc:[]};function v(e){var t=e.components,a=(0,r.Z)(e,u);return(0,d.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},"No known issues exist for this page. If you have any issues, then ",(0,d.kt)("a",{parentName:"em",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),".")))}v.isMDXComponent=!0;var h=["components"],f={toc:[]};function g(e){var t=e.components,a=(0,r.Z)(e,h);return(0,d.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},"If you have any other issues, then ",(0,d.kt)("a",{parentName:"em",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),".")))}g.isMDXComponent=!0;var b=["components"],E={toc:[]};function Z(e){var t=e.components,a=(0,r.Z)(e,b);return(0,d.kt)("wrapper",(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Pseudonymised Data in Reports")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},"The data returned in these reports might appear pseudonymised. Run the ",(0,d.kt)("a",{parentName:"p",href:"../../tenantadministration/standards/"},'standard "Enable Usernames instead of pseudo anonymised names in reports"')," to prevent this on the selected tenant."))))}Z.isMDXComponent=!0;var N=["mdxType","originalType"];var k={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,r.Z)(n,N));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){return l.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?l.createElement("code",e):l.createElement(o.Z,e)},a:function(e){return l.createElement(s.Z,e)},pre:function(e){var t;return l.createElement(o.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(m.Z,(0,n.Z)({},e,{summary:a}),r)},h1:function(e){return l.createElement(c.Z,(0,n.Z)({as:"h1"},e))},h2:function(e){return l.createElement(c.Z,(0,n.Z)({as:"h2"},e))},h3:function(e){return l.createElement(c.Z,(0,n.Z)({as:"h3"},e))},h4:function(e){return l.createElement(c.Z,(0,n.Z)({as:"h4"},e))},h5:function(e){return l.createElement(c.Z,(0,n.Z)({as:"h5"},e))},h6:function(e){return l.createElement(c.Z,(0,n.Z)({as:"h6"},e))},NoKnownIssues:function(){return l.createElement(v,null)},OtherIssues:function(){return l.createElement(g,null)},PseudonymisedData:function(){return l.createElement(Z,null)}}},9567:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(9960),i="tag_d0Lz",s="tagRegular_bmnp",o="tagWithCount_vddX";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[s]=!m,t[o]=m,t))},c,m&&n.createElement("span",null,m))}},4678:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(5999),i=a(9567),s="tags_ysAR",o="tag_DyE2";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);