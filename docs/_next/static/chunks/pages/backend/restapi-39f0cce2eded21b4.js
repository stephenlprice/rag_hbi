(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{6817:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/backend/restapi",function(){return n(2354)}])},2354:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return h}});var a=n(5893),i=n(2673),r=n(9298),s=n(9812);n(6834);var o=n(2643),l=n(7741);let h=[{depth:2,value:"User Creation",id:"user-creation"},{depth:2,value:"Dynamic Display of Content",id:"dynamic-display-of-content"},{depth:2,value:"Publishing Workbooks",id:"publishing-workbooks"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",h2:"h2",ol:"ol",em:"em"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"User Management, Content Management, and Display with the REST API"}),"\n",(0,a.jsxs)(t.p,{children:["Embedding a single visualization with the ",(0,a.jsx)(t.a,{href:"/pages/01_embedding_and_jsapi",children:"Embedding API v3 or JavaScript API v2"})," and enabling ",(0,a.jsx)(t.a,{href:"/pages/02_auth_and_sso",children:"single sign-on"})," is a crucial first step, but is only part of the story when building scaled solutions that use Tableau content as components. You often will have to use the REST API to integrate the users and content between your system and Tableau Server."]}),"\n",(0,a.jsx)(t.p,{children:"The REST API allows you to query and manage sites, users, groups, workbooks, data sources, projects, and subscriptions/schedules. The automation and integration use cases are effectively infinite, but the most common workflows it is used for in embedded analytics are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"User creation to sync with the users in the embedding application"}),"\n",(0,a.jsx)(t.li,{children:"Dynamic display of workbooks and data sources that a user has access to"}),"\n",(0,a.jsx)(t.li,{children:"Publishing workbooks as the last step in a content-integration workflow"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Because the REST API is called via HTTP, you can use whichever programming language is most appropriate. However, there is also the ",(0,a.jsx)(t.a,{href:"https://github.com/tableau/server-client-python",children:"Server Client Library"})," which simplifies the code required. The Server Client Library is currently only available in Python."]}),"\n",(0,a.jsxs)(t.p,{children:["Most commonly, you will make REST API calls from your web application's server-side code. In some cases, you will want to make those calls client-side (for example, if you are building web pages with no control over the Server-side logic). For those scenarios, ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_fundamentals.htm#Enabling",children:"Tableau Server enables CORS support"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Below are high-level descriptions of the flows required to enable the most common REST API use cases, but you should ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm",children:"read the documentation"})," to learn how to make the individual calls. ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_concepts.htm%3FTocPath%3DConcepts%7C_____0",children:"The concepts"})," section is a good place to start and to learn about subjects such as filtering, sorting, and paginating. Also, be sure to explore ",(0,a.jsx)(t.a,{href:"https://github.com/tableau/rest-api-samples",children:"the REST API samples repository"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"user-creation",children:"User Creation"}),"\n",(0,a.jsx)(t.p,{children:"Often, your application will store users. Except in the case of syncing with Active Directory, you will need to replicate those users into Tableau Server. You will likely have a script that adds all existing users to Server as a set-up step, and some code that executes when a new user is added to your system. To add a single user to Tableau Server:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Sign_In%3FTocPath%3DAPI%2520Reference%7C_____77",children:"Sign in"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Add_User_to_Site%3FTocPath%3DAPI%2520Reference%7C_____9",children:"Add user to site"})," (If the user does not exist, they will be added to Tableau Server and to the site you specify)"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Sign_Out%3FTocPath%3DAPI%2520Reference%7C_____78",children:"Sign out"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["That's all there is to adding a new user, but you will likely want to make some other calls to ensure the new user has access to the correct content. For example, you may ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Add_User_to_Group%3FTocPath%3DAPI%2520Reference%7C_____8",children:"Add the user to group(s)"}),". If the group(s) you add the user to have the correct permissions for that user, that may be sufficient, but if not, you can ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Add_Workbook_Permissions%3FTocPath%3DAPI%2520Reference%7C_____11",children:"add workbook permissions"}),", ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Add_Project_Permissions%3FTocPath%3DAPI%2520Reference%7C_____6",children:"add project permissions"}),", or ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Add_Datasource_Permissions%3FTocPath%3DAPI%2520Reference%7C_____3",children:"add datasource permissions"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"dynamic-display-of-content",children:"Dynamic Display of Content"}),"\n",(0,a.jsx)(t.p,{children:"If your users have access to multiple workbooks and data sources, you will likely want to make a Table of Contents page similar to the below."}),"\n",(0,a.jsx)(l.Z,{alt:"dynamic menu",src:"/viz_TOC.png",width:700,height:800}),"\n",(0,a.jsxs)(t.p,{children:["And if ",(0,a.jsx)(t.em,{children:"different"})," users have access to ",(0,a.jsx)(t.em,{children:"different"})," sets of content, it will not make sense for the list of available content to be hard-coded. Therefore, you need to use the REST API to query the workbooks available to the logged-in user. To achieve the above, you also need to grab the thumbnails."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Sign_In%3FTocPath%3DAPI%2520Reference%7C_____77",children:"Sign in"})," (as admin)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Query_Workbooks_for_User%3FTocPath%3DAPI%2520Reference%7C_____71",children:"Query workbooks for user"})," passing in the username of the user currently logged in to your application"]}),"\n",(0,a.jsxs)(t.li,{children:["For each workbook returned: ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_ref.htm#Query_View_Preview_Image%3FTocPath%3DAPI%2520Reference%7C_____63",children:"Grab the Preview Image"})]}),"\n",(0,a.jsx)(t.li,{children:"Populate the Table of Contents with links to pages that embed the workbooks, using the preview images."}),"\n",(0,a.jsx)(t.li,{children:"When the user clicks one of the links, they are brought to a page in your application that embeds the chosen dashboard. To avoid having to hard-code these embedding pages, you will likely create a dynamic web page that can be passed the workbook name and view name so that you can construct the url for the JavaScript API v2 or the Embedding API v3 to use. The details of engineering that dynamic webpage depend on your web application and front-end framework."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"publishing-workbooks",children:"Publishing Workbooks"}),"\n",(0,a.jsx)(t.p,{children:"The typical workflow for building and publishing content is to do it manually with Tableau Desktop. You might need to publish with the REST API for a variety of reasons. For example:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Using the ",(0,a.jsx)(t.a,{href:"/pages/04_multitenancy_and_rls",children:"Document API"})," to generate workbooks from a template and then publishing each of those to Server"]}),"\n",(0,a.jsx)(t.li,{children:"Creating a script that runs on install of Server to publish a set of pre-built dashboards"}),"\n",(0,a.jsx)(t.li,{children:"Scripting migration from site to site or server to server"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Depending on the size of the workbook or data source, it may be possible to publish with a single call. If the file is large, you will need to send the file in pieces. For more details, see ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/api/rest_api/en-us/help.htm#REST/rest_api_concepts_publish.htm%3FTocPath%3DConcepts%7C_____11",children:"the documentation on publishing with the REST API"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Next section: ",(0,a.jsx)(t.a,{href:"/pages/04_multitenancy_and_rls",children:"Multi-Tenancy and Row-Level Security"})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/backend/restapi.mdx",route:"/backend/restapi",frontMatter:{title:"User Management, Content Management, and Display with the REST API"},timestamp:1696742816e3,pageMap:[{kind:"Meta",data:{"*":{type:"page"},index:{title:"Tableau Embedding Playbook",display:"hidden",theme:{layout:"full"}},architecture:{title:"Architecture",theme:{typesetting:"article"}},security:{title:"Security",theme:{typesetting:"article"}},frontend:{title:"Frontend",theme:{typesetting:"article"}},backend:{title:"Backend",theme:{typesetting:"article"}}}},{kind:"Folder",name:"architecture",route:"/architecture",children:[{kind:"Meta",data:{index:"Getting Started"}},{kind:"MdxPage",name:"index",route:"/architecture",frontMatter:{title:"Tableau Embedded Analytics Playbook",layout:"default"}}]},{kind:"Folder",name:"backend",route:"/backend",children:[{kind:"Meta",data:{restapi:"Tableau REST API",devops:"Devops"}},{kind:"MdxPage",name:"devops",route:"/backend/devops",frontMatter:{title:"Development and Deployment"}},{kind:"MdxPage",name:"restapi",route:"/backend/restapi",frontMatter:{title:"User Management, Content Management, and Display with the REST API"}}]},{kind:"Folder",name:"frontend",route:"/frontend",children:[{kind:"Meta",data:{embedding_api:"Tableau Embedding API",non_views:"Embedding Non-View Content",other_apps:"Embedding into Other Apps"}},{kind:"MdxPage",name:"embedding_api",route:"/frontend/embedding_api",frontMatter:{title:"Embedding Tableau Views"}},{kind:"MdxPage",name:"non_views",route:"/frontend/non_views",frontMatter:{title:"Embedding Analytics Experiences"}},{kind:"MdxPage",name:"other_apps",route:"/frontend/other_apps",frontMatter:{title:"Embedding in SharePoint, Salesforce, and Mobile Apps"}}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Tableau Embedded Analytics Playbook",layout:"default"}},{kind:"Folder",name:"security",route:"/security",children:[{kind:"Meta",data:{auth:"Authentication & SSO",rls:"Row-Level Security"}},{kind:"MdxPage",name:"auth",route:"/security/auth",frontMatter:{title:"Authentication and Single Sign-On (SSO)"}},{kind:"MdxPage",name:"rls",route:"/security/rls",frontMatter:{title:"Row-level Security"}}]}],flexsearch:{codeblocks:!0},title:"User Management, Content Management, and Display with the REST API",headings:h},pageNextRoute:"/backend/restapi",nextraLayout:r.ZP,themeConfig:s.Z};t.default=(0,i.j)(d)},7741:function(e,t,n){"use strict";var a=n(5893),i=n(5675),r=n.n(i);function imageLoader(e){let{src:t,width:n,quality:a}=e,i=new URL("https://tableauembeddingplaybook.imgix.net/".concat(t)),r=i.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),r.set("q",(a||50).toString()),i.href}t.Z=function(e){return(0,a.jsx)(r(),{loader:imageLoader,alt:e.alt,src:e.src,width:e.width,height:e.height})}},9812:function(e,t,n){"use strict";var a=n(5893);let i={logo:(0,a.jsx)("span",{children:"Embedding Playbook"}),project:{link:"https://github.com/Tab-SE/playbook_frontend"},docsRepositoryBase:"https://github.com/Tab-SE/playbook_frontend",footer:{text:"Tableau Embedding Playbook"}};t.Z=i}},function(e){e.O(0,[774,361,888,179],function(){return e(e.s=6817)}),_N_E=e.O()}]);