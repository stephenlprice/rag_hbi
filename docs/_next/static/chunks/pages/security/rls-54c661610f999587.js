(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{368:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/security/rls",function(){return n(5722)}])},5722:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return l}});var a=n(5893),s=n(2673),r=n(9298),i=n(9812);n(6834);var o=n(2643);let l=[{depth:2,value:"Multi-tenancy, Sites, & Projects",id:"multi-tenancy-sites--projects"},{depth:2,value:"Row-level Security",id:"row-level-security"},{depth:3,value:"Template Dashboard + Document API",id:"template-dashboard--document-api"},{depth:3,value:"User Filters",id:"user-filters"},{depth:3,value:"In-database Security and Initial SQL",id:"in-database-security-and-initial-sql"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",a:"a",em:"em",h3:"h3",ol:"ol",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",span:"span",br:"br"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Row-level Security"}),"\n",(0,a.jsx)(t.p,{children:"Scaling an embedded analytics deployment of Tableau often means providing content to different groups of users. There is a security implication of making sure the different groups do not see each others' data (and metadata). There is also a deployment and maintenance consideration: Common dashboards should have to be built only once, even if the different groups of users access different data with those common dashboards."}),"\n",(0,a.jsx)(t.h2,{id:"multi-tenancy-sites--projects",children:"Multi-tenancy, Sites, & Projects"}),"\n",(0,a.jsxs)(t.p,{children:["The two key tools for defining which users can see which workbooks and datasources are ",(0,a.jsx)(t.strong,{children:"Projects"})," and ",(0,a.jsx)(t.strong,{children:"Sites"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/server/en-us/sites_intro.htm",children:"Sites"})," act as a logical firewall. If you create a site for each client or company that will access your Tableau content, you can be assured that users on one site will not learn about users or access content on another site."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/server/en-us/projects.htm",children:"Projects"})," (combined with Permissions) allow you to define which users inside the site can access which pieces of content. Permissions can be set at a granular level so that you can give different levels of permission to different users or groups."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If you have a multi-tenant deployment of Tableau Server, you should have one site per tenant. This is the only bullet-proof method of assuring different tenants do not learn about each other or see each others' data. Projects should be used in addition to sites to give access to different groups inside of a company."}),"\n",(0,a.jsx)(t.h2,{id:"row-level-security",children:"Row-level Security"}),"\n",(0,a.jsx)(t.p,{children:"Row-level Security is both a security and content management concern. The simplest way to make sure users only see their data is to manually build a dashboard for each of them. This is not scalable, so Tableau provides a variety of ways to build a single dashboard that is filtered to the correct data. The correct method to use depends on your data environment."}),"\n",(0,a.jsx)(t.p,{children:"Here is some guidance (details for each of the methods are below):"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If you have a separate database for each tenant, build a template dashboard and use the Document API to clone the dashboard for each tenant."}),"\n",(0,a.jsx)(t.li,{children:"If your tenants share a database and there is filtering/entitlement logic to separate who should see which row, use user filters."}),"\n",(0,a.jsxs)(t.li,{children:["Use Initial SQL + in-database security if you already have in-database security set up ",(0,a.jsx)(t.em,{children:"and"})," plan on using live connections to the database"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"template-dashboard--document-api",children:"Template Dashboard + Document API"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/tableau/document-api-python",children:"The Document API"})," is a Python API for modifying and querying Tableau content files (TWB/TWBX, TDS/TDSX). If your data environment is such that each tenant has their own database (and they are each structurally similar), then you can use the Document API to create a single workbook for each of your tenants. The workflow is:"]}),"\n",(0,a.jsx)(t.p,{children:"First, build a 'template' workbook that points at a single database. Build the necessary visualizations and dashboards.\nThen, create a script that:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["For each tenant, uses the Document API to change the database connection information, and save a copy. ",(0,a.jsx)(t.a,{href:"https://github.com/tableau/document-api-python/blob/master/samples/replicate-workbook/replicate_workbook.py",children:"Sample Script"})]}),"\n",(0,a.jsx)(t.li,{children:"Uses the [REST API (or Server Client Library)]({{ site.baseurl }}/pages/03_server_management_and_restapi)  to publish each tenant's workbook to Server."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The above is all that is necessary if your workbooks have 'embedded datasources' (the datasources haven't been published separately). If you do choose to ",(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/pro/desktop/en-us/publish_datasources.html",children:"publish the datasources to take advantage of Tableau Server's Data Server"}),", the Document API will still work. You will just have to apply the above workflow first to the datasource(s) and then to the workbooks:"]}),"\n",(0,a.jsx)(t.p,{children:"First, build a 'template' datasource, publish it, and build a 'template' workbook that points at the published datasource.\nThen, create a script that:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"For each tenant, uses the Document API to change the database connection information in the TDS (datasource file), and save a copy."}),"\n",(0,a.jsx)(t.li,{children:"Uses the [REST API (or Server Client Library)]({{ site.baseurl }}/pages/03_server_management_and_restapi) to publish each tenant's datasource to Server. The datasource will now have a connection string that you can use in the workbooks..."}),"\n",(0,a.jsx)(t.li,{children:"For each tenant, for each workbook, uses the Document API to change the published datasource connection information, and save a copy."}),"\n",(0,a.jsx)(t.li,{children:"Uses the [REST API (or Server Client Library)]({{ site.baseurl }}/pages/03_server_management_and_restapi) to publish each all of the workbooks to Server."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"user-filters",children:"User Filters"}),"\n",(0,a.jsx)(t.p,{children:"If your tenants 'share' a database server, and there is logic in the database that determines which users can see which rows, you can build your datasources and workbooks using 'User Filters' which is a way to filter based on which user is currently logged in to Tableau Server."}),"\n",(0,a.jsxs)(t.p,{children:["Essentially, when connecting to your data in Tableau Desktop you will JOIN the tables containing the data necessary for analysis to the entitlements table so that each row has a column ([Owner] in the below example) specifying which Tableau Server user it belongs to. Then you can create a calculation ",(0,a.jsx)(t.code,{children:"username() = [Owner]"})," and filter to ",(0,a.jsx)(t.code,{children:"True"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"See also"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Link"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/pro/desktop/en-us/publish_userfilters_create.html#dynamic",children:"Setting Up User Filters"})}),(0,a.jsx)(t.td,{children:"Knowledge base article on setting up user filters using the username() method"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/pro/desktop/en-us/publish_userfilters_create.html#publish-user-filters",children:"Securing User Filters"})}),(0,a.jsx)(t.td,{children:"Knowledge base article on creating your user filters at the data source level so that they are tamper-proof"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://tableauandbehold.com/2016/03/07/how-to-set-up-your-database-for-row-level-security-in-tableau/",children:"Database Entitlements Strategy"})}),(0,a.jsx)(t.td,{children:"Blog post on database structure for row-level security"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://tableauandbehold.com/2016/08/08/defusing-row-level-security-in-tableau-data-extracts-before-they-blow-up-part-1/",children:"Extract-size strategies for RLS"})}),(0,a.jsx)(t.td,{children:"Blog post detailing strategies for managing size of Extracts if your entitlements logic requires many one-to-many JOINs"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"in-database-security-and-initial-sql",children:"In-database Security and Initial SQL"}),"\n",(0,a.jsx)(t.p,{children:"If your database has existing security, such that setting the user to run the queries as will return the correct rows for that user, you can leverage that security with Initial SQL. Because this Initial SQL command will only run when queries are sent from Tableau to the database, this option only works for live connections to the database."}),"\n",(0,a.jsx)(t.p,{children:'To use Initial SQL: When connecting to your datasource in Tableau Desktop, click "Initial SQL". Type the correct command that will set all following queries to run as the logged-in user. For example, in Microsoft SQL Server, you might run:'}),"\n",(0,a.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"EXECUTE AS USER = [TableauServerUser] WITH NO REVERT;"})})})}),"\n",(0,a.jsx)(t.p,{children:"And now build your workbook normally. All sessions with the database will begin by running the Initial SQL that you specified."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"See also"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Link"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://onlinehelp.tableau.com/current/pro/desktop/en-us/connect_basic_initialsql.html",children:"Setting Up Initial SQL"})}),(0,a.jsx)(t.td,{children:"Knowledge base article on using setting up and using Initial SQL"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://tableauandbehold.com/2016/03/09/using-initial-sql-for/",children:"Preparing your DB for Initial SQL Security"})}),(0,a.jsx)(t.td,{children:"Blog post to help you ensure the database is ready to use Initial SQL for row-level security"})]})]})]}),"\n",(0,a.jsx)(t.br,{}),"\n*Next section: [Embedding in Sharepoint, Salesforce, and Mobile Apps]({{ site.baseurl }}/pages/05_embedding_in_other_apps)*\n"]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/security/rls.md",route:"/security/rls",frontMatter:{title:"Row-level Security"},timestamp:1696737179e3,pageMap:[{kind:"Meta",data:{"*":{type:"page"},index:{title:"Tableau Embedding Playbook",display:"hidden"},architecture:{title:"Architecture"},security:{title:"Security"},frontend:{title:"Frontend"},backend:{title:"Backend"}}},{kind:"Folder",name:"architecture",route:"/architecture",children:[{kind:"Meta",data:{index:"Getting Started"}},{kind:"MdxPage",name:"index",route:"/architecture",frontMatter:{title:"Tableau Embedded Analytics Playbook",layout:"default"}}]},{kind:"Folder",name:"backend",route:"/backend",children:[{kind:"Meta",data:{restapi:"Tableau REST API",devops:"Devops"}},{kind:"MdxPage",name:"devops",route:"/backend/devops",frontMatter:{title:"Development and Deployment"}},{kind:"MdxPage",name:"restapi",route:"/backend/restapi",frontMatter:{title:"User Management, Content Management, and Display with the REST API"}}]},{kind:"Folder",name:"frontend",route:"/frontend",children:[{kind:"Meta",data:{embedding_api:"Tableau Embedding API",non_views:"Embedding Non-View Content",other_apps:"Embedding into Other Apps"}},{kind:"MdxPage",name:"embedding_api",route:"/frontend/embedding_api",frontMatter:{title:"Embedding Tableau Views"}},{kind:"MdxPage",name:"non_views",route:"/frontend/non_views",frontMatter:{title:"Embedding Analytics Experiences"}},{kind:"MdxPage",name:"other_apps",route:"/frontend/other_apps",frontMatter:{title:"Embedding in SharePoint, Salesforce, and Mobile Apps"}}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Tableau Embedded Analytics Playbook",layout:"default"}},{kind:"Folder",name:"security",route:"/security",children:[{kind:"Meta",data:{auth:"Authentication & SSO",rls:"Row-Level Security"}},{kind:"MdxPage",name:"auth",route:"/security/auth",frontMatter:{title:"Authentication and Single Sign-On (SSO)"}},{kind:"MdxPage",name:"rls",route:"/security/rls",frontMatter:{title:"Row-level Security"}}]}],flexsearch:{codeblocks:!0},title:"Row-level Security",headings:l},pageNextRoute:"/security/rls",nextraLayout:r.ZP,themeConfig:i.Z};t.default=(0,s.j)(d)},9812:function(e,t,n){"use strict";var a=n(5893);let s={logo:(0,a.jsx)("span",{children:"Embedding Playbook"}),project:{link:"https://tab-se.github.io/embedding_playbook"},docsRepositoryBase:"https://github.com/Tab-SE/embedding_playbook/tree/main/",footer:{text:"Tableau Embedding Playbook"}};t.Z=s}},function(e){e.O(0,[361,774,888,179],function(){return e(e.s=368)}),_N_E=e.O()}]);