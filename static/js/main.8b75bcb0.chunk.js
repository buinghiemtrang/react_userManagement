(this["webpackJsonpuser-management"]=this["webpackJsonpuser-management"]||[]).push([[0],{19:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(8),c=s.n(r),i=(s(19),s(3)),l=s(4),d=s(7),o=s(6),u=s(9),h=s(2),j=s(5),b="SIGNUP_USER",p="UPDATE_USER",m="EDIT_USER",O="DELETE_USER",x=function(e){return{type:b,valueUser:e}},f=function(e){return{type:O,user:e}},v=function(e){return{type:m,user:e}},g=function(e){return{type:p,userUpdate:e}},N=s(0),y=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={values:{account:"",fullName:"",password:"",email:"",phoneNumber:"",userType:""},errors:{account:"",fullName:"",password:"",email:"",phoneNumber:"",userType:""}},e.handleChangeValue=function(t){var s=t.target,a=s.name,n=s.value,r=s.type,c=Object(h.a)(Object(h.a)({},e.state.values),{},Object(u.a)({},a,n)),i=Object(h.a)({},e.state.errors);if(""===n.trim()?i[a]=a+" vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y":i[a]="","email"===r){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)?i[a]="":i[a]=a+"ch\u01b0a \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"}if("phoneNumber"===a){/([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(n)?i[a]="":i[a]=a+" ch\u01b0a \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"}e.setState({values:c,errors:i},(function(){console.log(e.state.values)}))},e.handleSignUpUser=function(){var t=e.state.values,s=!0,a={id:Date.now()},n={};for(var r in t)""===t[r]&&(s=!1,n[r]=r+" vui long nhap truong nay"),a[r]=t[r];s||e.setState({errors:n}),!0===s&&(e.props.dispatch(x(a)),e.setState({values:{account:"",fullName:"",password:"",email:"",phoneNumber:"",userType:""}}))},e.handleUpdateUser=function(){e.props.dispatch(g(e.state.values)),e.setState({values:{account:"",fullName:"",password:"",email:"",phoneNumber:"",userType:""}})},e}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.userEdit.id!==this.props.userEdit.id&&this.setState({values:{id:this.props.userEdit.id,account:this.props.userEdit.account,fullName:this.props.userEdit.fullName,password:this.props.userEdit.password,email:this.props.userEdit.email,phoneNumber:this.props.userEdit.phoneNumber,userType:this.props.userEdit.userType}})}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("h5",{className:"card-header bg-dark text-light",children:"Form \u0111\u0103ng k\xfd"}),Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"form-row",children:[Object(N.jsxs)("div",{className:"form-group col-md-6",children:[Object(N.jsx)("label",{htmlFor:"account",children:"T\xe0i kho\u1ea3n"}),Object(N.jsx)("input",{value:this.state.values.account,type:"text",name:"account",className:"form-control",id:"account",onChange:this.handleChangeValue}),Object(N.jsx)("span",{className:"text-danger",children:this.state.errors.account})]}),Object(N.jsxs)("div",{className:"form-group col-md-6",children:[Object(N.jsx)("label",{htmlFor:"fullName",children:"H\u1ecd v\xe0 T\xean"}),Object(N.jsx)("input",{value:this.state.values.fullName,type:"text",name:"fullName",className:"form-control",id:"fullName",onChange:this.handleChangeValue}),Object(N.jsx)("span",{className:"text-danger",children:this.state.errors.fullName})]})]}),Object(N.jsxs)("div",{className:"form-row",children:[Object(N.jsxs)("div",{className:"form-group col-md-6",children:[Object(N.jsx)("label",{htmlFor:"password",children:"M\u1eadt kh\u1ea9u"}),Object(N.jsx)("input",{value:this.state.values.password,type:"password",name:"password",className:"form-control",id:"password",onChange:this.handleChangeValue}),Object(N.jsx)("span",{className:"text-danger",children:this.state.errors.password})]}),Object(N.jsxs)("div",{className:"form-group col-md-6",children:[Object(N.jsx)("label",{htmlFor:"phoneNumber",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(N.jsx)("input",{value:this.state.values.phoneNumber,type:"text",name:"phoneNumber",className:"form-control",id:"phoneNumber",onChange:this.handleChangeValue}),Object(N.jsx)("span",{className:"text-danger",children:this.state.errors.phoneNumber})]})]}),Object(N.jsxs)("div",{className:"form-row",children:[Object(N.jsxs)("div",{className:"form-group col-md-6",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email"}),Object(N.jsx)("input",{value:this.state.values.email,type:"email",name:"email",className:"form-control",id:"email",onChange:this.handleChangeValue}),Object(N.jsx)("span",{className:"text-danger",children:this.state.errors.email})]}),Object(N.jsxs)("div",{className:"form-group col-md-6",children:[Object(N.jsx)("label",{htmlFor:"userType",children:"M\xe3 lo\u1ea1i ng\u01b0\u1eddi d\xf9ng"}),Object(N.jsxs)("select",{id:"userType",className:"form-control",name:"userType",onChange:this.handleChangeValue,value:this.state.values.userType,children:[Object(N.jsx)("option",{value:"3",children:"Kh\xe1ch h\xe0ng"}),Object(N.jsx)("option",{value:"2",children:"nh\xe2n vi\xean"}),Object(N.jsx)("option",{value:"1",children:"admin"})]}),Object(N.jsx)("span",{className:"text-danger",children:this.state.errors.userType})]})]}),Object(N.jsx)("button",{disabled:this.props.disabled,type:"submit",className:"btn btn-success mr-2",onClick:function(){return e.handleSignUpUser()},children:"\u0110\u0103ng k\xfd"}),Object(N.jsx)("button",{disabled:this.props.disabledUpdate,type:"submit",className:"btn btn-primary",onClick:function(){return e.handleUpdateUser()},children:"C\u1eadp nh\u1eadp"})]})})]})}}]),s}(a.Component),U=Object(j.b)((function(e){return{userEdit:e.userManager.userEdit,disabled:e.userManager.disabled,disabledUpdate:e.userManager.disabledUpdate}}))(y),E=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).renderListUser=function(){return e.props.listUser.map((function(t,s){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:s+1}),Object(N.jsx)("td",{children:t.account}),Object(N.jsx)("td",{children:t.fullName}),Object(N.jsx)("td",{children:t.password}),Object(N.jsx)("td",{children:t.email}),Object(N.jsx)("td",{children:t.phoneNumber}),Object(N.jsx)("td",{children:"1"===t.userType?"admin":"2"===t.userType?"nh\xe2n vi\xean":"kh\xe1ch h\xe0ng"}),Object(N.jsxs)("td",{children:[Object(N.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){e.props.dispatch(v(t))},children:Object(N.jsx)("i",{className:"fas fa-edit"})}),Object(N.jsx)("button",{className:"btn btn-outline-danger ml-2",onClick:function(){e.props.dispatch(f(t))},children:Object(N.jsx)("i",{className:"fas fa-trash-alt"})})]})]},s)}))},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"card  my-5",children:[Object(N.jsx)("h5",{className:"card-header bg-dark text-light",children:"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng"}),Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Stt"}),Object(N.jsx)("th",{children:"T\xe0i kho\u1ea3n"}),Object(N.jsx)("th",{children:"H\u1ecd v\xe0 t\xean"}),Object(N.jsx)("th",{children:"M\u1eadt kh\u1ea9u"}),Object(N.jsx)("th",{children:"Email"}),Object(N.jsx)("th",{children:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i"}),Object(N.jsx)("th",{children:"Lo\u1ea1i Ng\u01b0\u1eddi d\xf9ng"}),Object(N.jsx)("th",{})]})}),Object(N.jsx)("tbody",{children:this.renderListUser()})]})})]})}}]),s}(a.Component),w=Object(j.b)((function(e){return{listUser:e.userManager.listUser}}))(E),T=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-12",children:[Object(N.jsx)("h3",{className:"text-center my-3",children:"Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng"}),Object(N.jsx)(U,{}),Object(N.jsx)(w,{})]})})})}}]),s}(a.Component);var k=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(T,{})})},C=s(10),S=s(13),_={listUser:[],userEdit:{},disabled:!1,disabledUpdate:!0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:console.log("thong tin dang ky",t);var s=Object(S.a)(e.listUser),a=s.findIndex((function(e){return e.email===t.valueUser.email}));return-1!==a?(alert("email nay da ton tai trong tai khoan"),Object(h.a)({},e)):(s.push(t.valueUser),e.listUser=s,Object(h.a)({},e));case m:var n=Object(h.a)({},e.userEdit),r=e.listUser.findIndex((function(e){return e.id===t.user.id}));return-1!==r&&(n=e.listUser[r],e.disabled=!0,e.disabledUpdate=!1),Object(h.a)(Object(h.a)({},e),{},{userEdit:n,disabled:e.disabled,disabledUpdate:e.disabledUpdate});case p:console.log("user cap nhap ",t);var c=Object(S.a)(e.listUser),i=c.findIndex((function(e){return e.id===t.userUpdate.id}));return-1!==i&&(c[i]=t.userUpdate,e.disabled=!1),Object(h.a)(Object(h.a)({},e),{},{listUser:c,disabled:e.disabled});case O:return console.log("user bi xoa",t),Object(h.a)(Object(h.a)({},e),{},{listUser:e.listUser.filter((function(e){return e.id!==t.user.id}))});default:return Object(h.a)({},e)}},M=Object(C.a)({userManager:D}),V=Object(C.b)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(j.a,{store:V,children:Object(N.jsx)(k,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8b75bcb0.chunk.js.map