(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={title:"Section_title__2r-LZ"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__j5VjL",label:"ContactForm_label__r5Ixo",input:"ContactForm_input__2iGhQ",button:"ContactForm_button__3DB14"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=n(13),s=n(3),l=n(4),u=n(6),b=n(5),m=n(22),h=n(11),d=n.n(h),j=n(0),f=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:d.a.title,children:e}),n]})},p=n(12),C=n(2),O=n.n(C),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.resetForm=function(){t.setState({name:"",number:""})},t.checkContact=function(){var e=t.state.name;return(0,t.props.onCheckContact)(e)},t.formSubmit=function(e){e.preventDefault(),t.checkContact()&&(t.props.onSubmit(t.state),t.resetForm())},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:O.a.form,onSubmit:this.formSubmit,children:[Object(j.jsxs)("label",{className:O.a.label,children:["Name",Object(j.jsx)("input",{placeholder:"type name",className:O.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.inputChange})]}),Object(j.jsxs)("label",{className:O.a.label,children:["Number",Object(j.jsx)("input",{placeholder:"type number",className:O.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.inputChange})]}),Object(j.jsx)("button",{type:"submit",className:O.a.button,children:"Add contact"})]})}}]),n}(a.Component),_=n(7),v=n.n(_),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:v.a.item,children:[a,": ",c,Object(j.jsx)("button",{className:v.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(9),k=n.n(y),N=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("label",{className:k.a.label,children:["Find contacts by name",Object(j.jsx)("input",{placeholder:"type name",className:k.a.input,type:"text",name:"filter",title:"Search contacts",value:e,onChange:n})]})})},S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={id:Object(m.a)(),name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[n])}}))},t.filterContact=function(e){t.setState({filter:e.currentTarget.value})},t.getContactsLis=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.checkContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert(e+"is already in contacts"),!n},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getContactsLis();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{children:Object(j.jsx)(x,{onSubmit:this.addContact,onCheckContact:this.checkContact})}),Object(j.jsxs)(f,{title:"Contacts",children:[Object(j.jsx)(N,{value:this.state.filter,onChange:this.filterContact}),Object(j.jsx)(g,{contacts:t,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(19);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__1Wbq7",item:"ContactList_item__2bP0z",button:"ContactList_button__ql32C"}},9:function(t,e,n){t.exports={label:"FilterContacts_label__1jIWX",input:"FilterContacts_input__3Uw2j"}}},[[20,1,2]]]);
//# sourceMappingURL=main.02338912.chunk.js.map