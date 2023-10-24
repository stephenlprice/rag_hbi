(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{4530:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/frontend/other_apps",function(){return t(1135)}])},1135:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return r}});var a=t(5893),i=t(2673),o=t(2643),s=t(9013);let r=[{depth:2,value:"Embedding in SharePoint",id:"embedding-in-sharepoint"},{depth:2,value:"Embedding into Salesforce Lightning",id:"embedding-into-salesforce-lightning"},{depth:2,value:"Embedding into Mobile Apps",id:"embedding-into-mobile-apps"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong",ul:"ul",li:"li",a:"a"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Embedding into other apps"}),"\n",(0,a.jsx)(s.UW,{type:"warning",emoji:"⚠️",children:(0,a.jsx)(n.p,{children:"This website is under construction. Content on this page is a placeholder."})}),"\n",(0,a.jsx)(n.p,{children:"Much of this playbook focuses on embedding Tableau content in custom-developed web applications, but there are three common embedding scenarios that have specific requirements: SharePoint, Salesforce, and Mobile Apps."}),"\n",(0,a.jsx)(n.h2,{id:"embedding-in-sharepoint",children:"Embedding in SharePoint"}),"\n",(0,a.jsx)(n.p,{children:"Tableau provides a SharePoint Web Part to facilitate SharePoint embedding scenarios."}),"\n",(0,a.jsxs)(n.p,{children:["The Web Part, as well as the instructions for installing it are located under ",(0,a.jsx)(n.code,{children:"C:\\Program Files\\Tableau\\Tableau Server\\<version>\\extras\\embedding\\sharepoint"})," within your Tableau Server install directory."]}),"\n",(0,a.jsx)(n.p,{children:"You can embed Tableau Online views into SharePoint as well, but neither Active Directory nor Trusted Tickets are supported for Online."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See also"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://onlinehelp.tableau.com/current/pro/desktop/en-us/help.htm#embed_ex_SP.html",children:"Documentation for embedding in SharePoint with Active Directory"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://onlinehelp.tableau.com/current/pro/desktop/en-us/help.htm#embed_ex_trustedauth.html",children:"Documentation for embedding in SharePoint with Local Authentication"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"embedding-into-salesforce-lightning",children:"Embedding into Salesforce Lightning"}),"\n",(0,a.jsxs)(n.p,{children:["Tableau provides a free Salesforce Lightning web component that facilitates embedding scenarios. The latest version of the Tableau Viz Lightning web component is available from the ",(0,a.jsx)(n.a,{href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000GF1cSUAT",children:"AppExchange"})]}),"\n",(0,a.jsxs)(n.p,{children:["The Tableau Viz Lightning web component makes it easy to ",(0,a.jsx)(n.a,{href:"https://help.tableau.com/current/pro/desktop/en-us/embed_ex_lwc.htm",children:"Embed Tableau views into Salesforce Lightning pages"}),". To install the Tableau Viz Lightning web component in your Salesforce org you just need to be a Salesforce Administrator. After it’s installed, you can just drag and drop the Tableau component on any Salesforce page and set the URL to any view on Tableau Server, Tableau Online, or Tableau Public."]}),"\n",(0,a.jsx)(n.p,{children:"The Tableau Viz Lightning web component lets you quickly filter views based on the Lightning page you embed them in. You can also select filters based upon Tableau and Salesforce fields."}),"\n",(0,a.jsxs)(n.p,{children:["Based on the Salesforce Lightning Web Component framework and the Tableau JavaScript API for embedding, developers can extend and customize the open-source Tableau Viz Lightning web component project on GitHub. For more information, see ",(0,a.jsx)(n.a,{href:"https://github.com/tableau/tableau-viz-lwc",children:"Tableau Viz Lightning Web Component"})," and the ",(0,a.jsx)(n.a,{href:"https://github.com/tableau/tableau-viz-lwc-samples",children:"Tableau Viz LWC Samples"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The Tableau Viz Lightning web component does not support Salesforce Classic. For information about using the Salesforce Canvas adapter, see the following Knowledge Base article, ",(0,a.jsx)(n.a,{href:"https://kb.tableau.com/articles/issue/tableau-viz-lightning-web-component-does-not-work-on-salesforce-classic",children:"Tableau Viz Lightning Web Component Does Not Work On Salesforce Classic"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For convenience, you can configure Tableau to use Single Sign-On (SSO) with Salesforce. The Tableau Viz Lightning web component only supports SAML as the SSO method. The SAML IdP used for Tableau authentication must be either the Salesforce IdP or the same IdP that is used for your Salesforce instance. Configuring Tableau Server or Tableau Online requires Tableau administrator permissions."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["For information about setting up SSO\xa0with Tableau Online, see\xa0",(0,a.jsx)(n.a,{href:"https://help.tableau.com/current/online/en-us/saml_config_salesforce.htm",children:"Configure SAML with Salesforce"})," and ",(0,a.jsx)(n.a,{href:"https://help.tableau.com/current/online/en-us/saml_config_TOL_LWC.htm",children:"Configure SAML for Tableau Viz Lightning Web Component"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["For information about setting up SSO\xa0with Tableau Server, see ",(0,a.jsx)(n.a,{href:"https://help.tableau.com/current/server/en-us/saml_config_LWC.htm",children:"Configure SAML for Tableau Viz Lightning Web Component"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Learn more about the Tableau Viz Lightning web component by completing the ",(0,a.jsx)(n.a,{href:"https://trailhead.salesforce.com/en/content/learn/projects/embed-tableau-visualizations-in-salesforce",children:"Embed Tableau Visualizations in Salesforce"})," Trailhead project."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"embedding-into-mobile-apps",children:"Embedding into Mobile Apps"}),"\n",(0,a.jsx)(n.p,{children:"Tableau Server and Online users can access their Tableau content via Tableau-released mobile applications, but it is often desirable to create custom mobile apps the embed Tableau content or to embed Tableau content into existing mobile apps.\nTo aid in that scenario, Tableau has released an open-source sample called the Mobile App Bootstrap. The samples demonstrates how co connect and stay signed into a Tableau Server, embed Tableau content and interact with it using JavaScript API. They are good resources to use as a starting point for mobile application development or as samples to learn from."}),"\n",(0,a.jsx)(n.p,{children:"The Mobile App Bootstrap comes in two flavors:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/tableau/mobile-app-bootstrap-objc",children:"Objective-C"})," -- If your app development is done in Objective-C and/or Swift, this template will help you embed Tableau content."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://cordova.apache.org/",children:"HTML/CSS/JS/Cordova"})," -- ",(0,a.jsx)(n.a,{href:"https://cordova.apache.org/",children:"Cordova"})," is an engine that allows you to develop cross-device mobile applications in HTML/CSS/JS. If you are not already an ObjC/Swift shop, the Cordova template for embedding in mobile applications is a good choice."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In addition, Tableau has released the ",(0,a.jsx)(n.a,{href:"https://github.com/tableau/mobile-connected-client",children:"Mobile Connected Client Plugin"})," which can accompany the Mobile App Bootstrap, or any app that embeds Tableau content, to handle authentication so that your users do not have to continually sign in to Tableau Server."]}),"\n",(0,a.jsx)("br",{})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/frontend/other_apps.mdx",route:"/frontend/other_apps",frontMatter:{title:"Embedding in SharePoint, Salesforce, and Mobile Apps"},timestamp:1698118029e3,title:"Embedding in SharePoint, Salesforce, and Mobile Apps",headings:r},pageNextRoute:"/frontend/other_apps"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=4530)}),_N_E=e.O()}]);