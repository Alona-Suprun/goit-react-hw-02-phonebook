(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={title:"Section_title__2r-LZ"}},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(12),s=n(3),u=n(4),l=n(6),b=n(5),m=n(21),j=n(10),d=n(2),h=n.n(d),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.resetForm=function(){t.setState({name:"",number:""})},t.formSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:h.a.form,onSubmit:this.formSubmit,children:[Object(f.jsxs)("label",{className:h.a.label,children:["Name",Object(f.jsx)("input",{className:h.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.inputChange})]}),Object(f.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})}}]),n}(a.Component),O=n(11),C=n.n(O),x=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{className:C.a.title,children:e}),n]})},v=n(7),g=n.n(v),_=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:g.a.item,children:[a,": ",c,Object(f.jsx)("button",{className:g.a.button,onClick:function(){n(e)},children:"Delete contact"})]},e)}))})},S=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",title:"Search contacts",value:e,onChange:n})]})})},y=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={id:Object(m.a)(),name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(i.a)(e))}}))},t.filterContact=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{children:Object(f.jsx)(p,{onSubmit:this.addContact})}),Object(f.jsxs)(x,{title:"Contacts",children:[Object(f.jsx)(S,{value:this.state.filter,onChange:this.filterContact}),Object(f.jsx)(_,{contacts:this.contactst,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(18);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__j5VjL",label:"ContactForm_label__r5Ixo",input:"ContactForm_input__2iGhQ",button:"ContactForm_button__3DB14"}},7:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.bb05c361.chunk.js.map