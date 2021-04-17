(this["webpackJsonp200-app"]=this["webpackJsonp200-app"]||[]).push([[0],{157:function(e,t,s){},167:function(e,t,s){},202:function(e,t){},204:function(e,t){},215:function(e,t){},217:function(e,t){},244:function(e,t){},246:function(e,t){},247:function(e,t){},252:function(e,t){},254:function(e,t){},273:function(e,t){},285:function(e,t){},288:function(e,t){},294:function(e,t,s){},296:function(e,t,s){},297:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(25),c=s.n(a),l=(s(167),s(168),s(8)),r=s(13),o=s(55),i=s(1),j=function(e){return Object(i.jsx)("div",{className:"login-container",style:{height:"600px"},children:Object(i.jsx)("div",{className:"container h-100",children:Object(i.jsx)("div",{className:"row h-100 d-flex justify-content-center align-items-center",children:Object(i.jsxs)("div",{className:"col-md-6 m-auto p-5",children:[Object(i.jsx)(r.b,{className:"d-block text-center mb-4",to:"/",children:Object(i.jsx)("img",{src:"spark_logo.svg",alt:"spark-logo"})}),Object(i.jsxs)("form",{method:"post",onSubmit:function(t){return function(e,t){e.preventDefault(),o.b.success("Login Successfully!"),t.push({pathname:"/lenders"})}(t,e.history)},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(i.jsx)("input",{type:"email",name:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{type:"password",name:"password",className:"form-control",id:"password",placeholder:"Password"})]}),Object(i.jsx)("button",{type:"submit",className:"col-2 btn btn-primary float-right",children:"Login"})]})]})})})})},d=s(56),b=s.n(d),m=s(26),u=b.a.ExcelFile,h=b.a.ExcelFile.ExcelSheet,p=b.a.ExcelFile.ExcelColumn,x=Object(m.b)((function(e){return{$lenders:e.lendersReducer.lenders}}))(Object(l.g)((function(e){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("h3",{className:"text-center mt-5 pt-5 text-secondary",children:"Download Document..."}),Object(i.jsx)(u,{hideElement:!0,filename:"sparkIL_lenders",children:Object(i.jsxs)(h,{data:e.$lenders,name:"lenders",children:[Object(i.jsx)(p,{label:"Name",value:"name"}),Object(i.jsx)(p,{label:"Email",value:"email"}),Object(i.jsx)(p,{label:"Registration",value:"registrationDate"}),Object(i.jsx)(p,{label:"# of loans",value:"numberOfLoans"}),Object(i.jsx)(p,{label:"Total loans",value:"totalLoans"}),Object(i.jsx)(p,{label:"Balance",value:"balance"})]})})]})}))),O=s(303),g=s(301),f=s(162),N=s(54),y=s(19),v=s(302),L=s(304),w="SEARCH_LENDERS",S="FILTER_LENDERS",_=(s(294),Object(m.b)((function(e){return{$totalNumberOfLoans:e.lendersReducer.totalNumberOfLoans,$totalAmountOfLoans:e.lendersReducer.totalAmountOfLoans}}),(function(e){return{$searchLenders:function(t,s){return e({type:w,searchBy:t,searchValue:s})},$filterLenders:function(t){return e(function(e){return{type:S,settings:e}}(t))}}}))((function(e){var t={searchBy:"lender-name",searchValue:""},s=Object(n.useReducer)((function(e,s){return"RESET_ALL"===s.type?Object(y.a)({},t):"RESET_SEARCH"===s.type?Object(y.a)(Object(y.a)({},e),{},{searchValue:s.searchValue}):Object(y.a)(Object(y.a)({},e),{},Object(N.a)({},s.target.name,s.target.value))}),t),a=Object(f.a)(s,2),c=a[0],l=a[1];return Object(i.jsxs)(g.a,{children:[Object(i.jsx)(v.a,{md:9,className:"px-0",children:Object(i.jsxs)("div",{className:"bg-light p-5",children:[Object(i.jsx)("form",{className:"form-inline",onSubmit:function(t){t.preventDefault(),e.$searchLenders(c.searchBy,c.searchValue)},children:Object(i.jsxs)("div",{className:"col-12 mb-3",children:[Object(i.jsx)("i",{className:"search-icon"})," \xa0 Search by: \xa0",Object(i.jsxs)("select",{name:"searchBy",className:"form-select search-by",onChange:l,defaultValue:"lender-name",children:[Object(i.jsx)("option",{value:"lender-name",children:"Lender's name"}),Object(i.jsx)("option",{value:"lender-email",children:"Lender's email"}),Object(i.jsx)("option",{value:"project-name",children:"project's name"})]}),Object(i.jsx)("input",{type:"text",name:"searchValue",value:c.searchValue,onChange:l,className:"form-control form-control-sm",placeholder:"Mark..."}),Object(i.jsx)("button",{type:"submit",className:"ml-2 btn btn-primary btn-sm col-2",children:"Search"}),c.searchValue&&Object(i.jsxs)("div",{className:"ml-2 px-2 bg-semi-light d-inline",children:[" ",Object(i.jsxs)("small",{children:['Search for: "',c.searchValue,'" ',Object(i.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),l({type:"RESET_SEARCH",searchValue:"",amount_total_amount:""})},className:"ml-2 mb-1 btn btn-link btn-sm",children:"x"})]})]})]})}),Object(i.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.$filterLenders(c)},children:Object(i.jsxs)("div",{className:"col-12",children:[Object(i.jsx)("i",{className:"filter-icon"})," \xa0 Filter by: \xa0",Object(i.jsxs)(L.a,{className:"d-inline",children:[Object(i.jsx)(L.a.Toggle,{className:"btn btn-link btn-sm bg-transparent border-0",id:"dropdown-total-amount",children:"Total Amount"}),Object(i.jsx)(L.a.Menu,{className:"dropdown-menu-filters",style:{width:"200px"},children:Object(i.jsxs)("div",{className:"col p-3",children:[Object(i.jsxs)(g.a,{className:"text-center",children:[Object(i.jsx)(v.a,{sm:6,children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"total_amount_under",name:"total_amount_direction",value:"under",onChange:l,className:"custom-control-input"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"total_amount_under",children:"Under"})]})}),Object(i.jsx)(v.a,{sm:6,children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"total_amount_over",name:"total_amount_direction",value:"over",onChange:l,className:"custom-control-input"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"total_amount_over",children:"Over"})]})})]}),Object(i.jsx)(g.a,{children:Object(i.jsx)(v.a,{children:Object(i.jsxs)("div",{className:"input-group my-3",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("span",{className:"input-group-text text-success pl-0",id:"basic-addon1",children:"$"})}),Object(i.jsx)("input",{type:"text",className:"form-control amount-total-amount",name:"amount-total-amount",onChange:l,placeholder:"30000","aria-label":"amount","aria-describedby":"basic-addon1"})]})})}),Object(i.jsx)(g.a,{children:Object(i.jsx)(v.a,{children:Object(i.jsx)("button",{type:"submit",className:"btn btn-link text-purple float-right",children:"Go"})})})]})})]}),Object(i.jsxs)(L.a,{className:"d-inline",children:[Object(i.jsx)(L.a.Toggle,{className:"btn btn-link btn-sm bg-transparent border-0",id:"dropdown-basic",children:"Project Status"}),Object(i.jsx)(L.a.Menu,{className:"dropdown-menu-filters",style:{width:"200px"},children:Object(i.jsxs)("div",{className:"col p-3",children:[Object(i.jsxs)(g.a,{className:"",children:[Object(i.jsx)(v.a,{children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"project-status-fundraising",name:"project_status",value:"fundraising",onChange:l,className:"custom-control-input"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"project-status-fundraising",children:"Fundraising"})]})}),Object(i.jsx)(v.a,{children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"project-status-repayments",name:"project_status",value:"repayments",onChange:l,className:"custom-control-input"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"project-status-repayments",children:"Repayments"})]})}),Object(i.jsx)(v.a,{children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"project-status-finished",name:"project_status",value:"finished",onChange:l,className:"custom-control-input"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"project-status-finished",children:"Finished"})]})})]}),Object(i.jsx)(g.a,{children:Object(i.jsx)(v.a,{children:Object(i.jsx)("button",{type:"submit",className:"btn btn-link text-purple float-right",children:"Go"})})})]})})]}),Object(i.jsxs)(L.a,{className:"d-inline",children:[Object(i.jsx)(L.a.Toggle,{className:"btn btn-link btn-sm bg-transparent border-0",id:"dropdown-basic",children:"Category"}),Object(i.jsx)(L.a.Menu,{children:Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"px-2 text-center",children:"Comming Soon!"})})})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-link text-purple",children:"Go"})]})})]})}),Object(i.jsx)(v.a,{md:3,className:"pr-0",children:Object(i.jsxs)("div",{className:"bg-light px-3 py-5",children:[Object(i.jsxs)("div",{className:"col-12 mb-3",children:[Object(i.jsx)("h6",{className:"text-purple mb-0",children:e.$totalNumberOfLoans.toLocaleString()}),Object(i.jsx)("small",{children:"Total number of loans"})]}),Object(i.jsxs)("div",{className:"col-12",children:[Object(i.jsxs)("h6",{className:"text-success mb-0",children:["$",e.$totalAmountOfLoans.toLocaleString()]}),Object(i.jsx)("small",{children:"Total amount of loans"})]})]})})]})}))),E=(s(157),function(e){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsxs)("tr",{className:"bg-light mb-2",children:[Object(i.jsxs)("th",{scope:"row",rowSpan:e.lender.supportedProjects.length,children:[e.index+1,"."]}),Object(i.jsx)("td",{className:"font-weight-500",rowSpan:e.lender.supportedProjects.length,children:e.lender.name}),Object(i.jsx)("td",{rowSpan:e.lender.supportedProjects.length,children:e.lender.email}),Object(i.jsx)("td",{rowSpan:e.lender.supportedProjects.length,children:e.lender.registrationDate}),Object(i.jsx)("td",{className:"text-purple font-weight-500",rowSpan:e.lender.supportedProjects.length,children:e.lender.numberOfLoans}),Object(i.jsxs)("td",{className:"text-purple font-weight-500",rowSpan:e.lender.supportedProjects.length,children:["$",e.lender.totalLoans.toLocaleString()]}),Object(i.jsx)("td",{rowSpan:e.lender.supportedProjects.length,children:Object(i.jsxs)("p",{className:"mb-0 py-3 balance-border text-success font-weight-500",children:["$",e.lender.balance.toLocaleString()]})}),Object(i.jsxs)("td",{className:"font-weight-500",children:[Object(i.jsx)("i",{className:e.lender.supportedProjects[0].type+"-icon"}),"\u201c",e.lender.supportedProjects[0].name,"\u201d"]}),Object(i.jsx)("td",{children:e.lender.supportedProjects[0].categories.join(", ")}),Object(i.jsxs)("td",{className:"font-weight-500",children:["$",e.lender.supportedProjects[0].loan.toLocaleString()]}),Object(i.jsxs)("td",{children:[Object(i.jsxs)("p",{className:"mb-1 font-weight-500",children:["$",e.lender.supportedProjects[0].repayment.toLocaleString()," repayed"]}),Object(i.jsxs)("small",{className:"text-muted font-weight-light",children:["($",(e.lender.supportedProjects[0].loan-e.lender.supportedProjects[0].repayment).toLocaleString()," ","left)"]})]})]}),e.lender.supportedProjects.map((function(t,s){return s>0&&Object(i.jsxs)("tr",{className:"bg-light",children:[Object(i.jsxs)("td",{className:"font-weight-500",children:[Object(i.jsx)("i",{className:t.type+"-icon"}),"\u201c",t.name,"\u201d"]}),Object(i.jsx)("td",{children:t.categories.join(", ")}),Object(i.jsxs)("td",{className:"font-weight-500",children:["$",t.loan.toLocaleString()]}),Object(i.jsxs)("td",{children:[Object(i.jsxs)("p",{className:"mb-1 font-weight-500",children:["$",t.repayment.toLocaleString()," repayed"]}),Object(i.jsxs)("small",{className:"text-muted font-weight-light",children:["($",(t.loan-t.repayment).toLocaleString()," left)"]})]})]},e.lender.id+s)})),Object(i.jsx)("tr",{className:"separator"})]})}),P=Object(m.b)((function(e){return{$lenders:e.lendersReducer.lenders}}))(Object(l.g)((function(e){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(g.a,{children:Object(i.jsx)(v.a,{className:"pl-0 py-3",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"fund-type d-inline mr-4",children:[Object(i.jsx)("i",{className:"fundraising-icon"}),"Fundraising"]}),Object(i.jsxs)("div",{className:"fund-type d-inline mr-4",children:[Object(i.jsx)("i",{className:"repayments-icon"}),"Repayments"]}),Object(i.jsxs)("div",{className:"fund-type d-inline mr-4",children:[Object(i.jsx)("i",{className:"finished-icon"}),"Finished"]}),Object(i.jsxs)(r.b,{target:"_blank",to:{pathname:"/download-excel"},className:"float-right text-success",children:[Object(i.jsx)("i",{className:"excel-icon mr-1"}),"Export"]})]})})}),Object(i.jsx)(g.a,{children:Object(i.jsxs)(v.a,{className:"pl-0",children:[!e.$lenders.length&&Object(i.jsx)("div",{className:"p-5 text-center",children:Object(i.jsx)("h4",{children:"No lenders found!"})}),!!e.$lenders.length&&Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)("table",{className:"table border-0 text-left",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Registration"}),Object(i.jsx)("th",{style:{width:"1%"},children:"# of Loans"}),Object(i.jsx)("th",{children:" Total Loans"}),Object(i.jsx)("th",{children:"Balance"}),Object(i.jsx)("th",{children:"Supported projects"}),Object(i.jsx)("th",{children:"Categories"}),Object(i.jsx)("th",{children:"Loan"}),Object(i.jsx)("th",{style:{width:"12%"},children:"Repayments"})]})}),Object(i.jsx)("tbody",{children:e.$lenders.map((function(e,t){return Object(i.jsx)(E,{index:t,lender:e},e.id)}))})]})})]})})]})}))),C=function(){return Object(i.jsxs)(O.a,{children:[Object(i.jsx)(g.a,{children:Object(i.jsx)("h4",{className:"my-4",children:"Lenders"})}),Object(i.jsx)(_,{}),Object(i.jsx)(P,{})]})},k=function(){return Object(i.jsxs)(O.a,{children:[Object(i.jsx)(g.a,{children:Object(i.jsx)("h4",{className:"my-4",children:"Projects"})}),Object(i.jsx)(g.a,{children:Object(i.jsx)(v.a,{md:12,className:"px-0",children:Object(i.jsx)("div",{className:"bg-light p-5",children:Object(i.jsx)("h6",{children:"Comming Soon!"})})})})]})},$=(s(296),function(){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light px-5",style:{height:"88px"},children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:{pathname:"/"},children:Object(i.jsx)("img",{src:"spark_logo.svg",alt:"spark-logo"})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(i.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(r.b,{className:"nav-link active",to:{pathname:"/lenders"},children:["Lenders",Object(i.jsx)("span",{className:"badge badge-pill badge-badge",children:"1"})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/projects",children:"Projects"})})]}),Object(i.jsxs)(r.b,{className:"btn text-danger logout-link",to:{pathname:"login"},children:["Logout  \xa0",Object(i.jsx)("i",{className:"logout-icon"})]})]})]})}),T=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)($,{}),Object(i.jsx)(l.b,{path:"/lenders",component:C}),Object(i.jsx)(l.b,{path:"/projects",component:k}),Object(i.jsx)(l.b,{target:"_blank",path:"/download-excel",component:x})]})};var F=function(){return Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/login",component:j}),Object(i.jsx)(l.a,{from:"/",exact:!0,to:"/login"}),Object(i.jsx)(T,{}),Object(i.jsx)(l.a,{to:"/not-found"})]})},R=s(33),V=s(92),D={totalNumberOfLoans:4,totalAmountOfLoans:49e3,lenders:[{id:1,name:"Israel Israeli",email:"israel@mail.com",registrationDate:"14/09/20",numberOfLoans:3,totalLoans:33e3,balance:4e3,supportedProjects:[{name:"The Negev project",loan:1e4,repayment:1e3,categories:["Periphery","Ethiopian Community"],type:"repayments"},{name:"Iggy",loan:15e3,repayment:2e3,categories:["LGBTQ"],type:"fundraising"},{name:"COVID-19",loan:8e3,repayment:1e3,categories:["Health"],type:"finished"}]},{id:2,name:"Mark Tzuki",email:"mark@mail.com",registrationDate:"29/09/20",numberOfLoans:1,totalLoans:8e3,balance:1e3,supportedProjects:[{name:"The Negev project",loan:8e3,repayment:1e3,categories:["Periphery","Ethiopian Community"],type:"repayments"}]},{id:3,name:"Ella Israela",email:"ella@mail.com",registrationDate:"03/10/20",numberOfLoans:1,totalLoans:8e3,balance:0,supportedProjects:[{name:"Iggy",loan:8e3,repayment:0,categories:["LGBTQ"],type:"fundraising"}]}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(y.a)(Object(y.a)({},e),{},{lenders:Object(V.a)(D.lenders.filter((function(e){return"lender-name"===t.searchBy?e.name.toLowerCase().includes(t.searchValue.toLowerCase()):"lender-email"===t.searchBy?e.email.toLowerCase().includes(t.searchValue.toLowerCase()):"project-name"===t.searchBy&&!!e.supportedProjects.find((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())}))})))});case S:return Object(y.a)(Object(y.a)({},e),{},{lenders:Object(V.a)(D.lenders.filter((function(e){var s=!0;if(t.settings.total_amount_direction&&t.settings["amount-total-amount"]&&(s="under"===t.settings.total_amount_direction?s&&e.totalLoans<+t.settings["amount-total-amount"]:s&&e.totalLoans>+t.settings["amount-total-amount"]),t.settings.project_status){var n=e.supportedProjects.find((function(e){return e.type===t.settings.project_status}));s=s&&!!n}return s})))})}return e},A=Object(R.b)({lendersReducer:B}),I=Object(R.c)(A);c.a.render(Object(i.jsx)(m.a,{store:I,children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(o.a,{}),Object(i.jsx)(F,{})]})}),document.getElementById("root"))}},[[297,1,2]]]);
//# sourceMappingURL=main.8222e9f1.chunk.js.map