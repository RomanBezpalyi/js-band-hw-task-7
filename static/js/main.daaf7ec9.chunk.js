(this["webpackJsonpjs-band-hw-task-7"]=this["webpackJsonpjs-band-hw-task-7"]||[]).push([[0],{29:function(e,t,a){e.exports=a(49)},30:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);a(30);var n=a(19);a(31);n.a.configure();var l=a(0),r=a.n(l),o=a(10),c=a.n(o),i=a(21),s=a(7),d=function(){return r.a.createElement("header",{className:"page-header bg-primary header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"h1 text-left"},"MyToDo")))},u=a(9),m=a(8),p=a(11),h=a(12),f=a(14),b=a(13),E=a(15),v=function(e){var t=e.value,a=e.handleChange;return r.a.createElement("select",{className:"form-control col-xs-6 col-md-3",name:"progress",value:t,onChange:a},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Open"},"Open"),r.a.createElement("option",{value:"Done"},"Done"))},O=function(e){var t=e.value,a=e.handleChange;return r.a.createElement("select",{name:"priority",className:"form-control col-xs-6 col-md-3",value:t,onChange:a},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"High"},"High"),r.a.createElement("option",{value:"Normal"},"Normal"),r.a.createElement("option",{value:"Low"},"Low"))},y=function(e){var t=e.title,a=e.priority,n=e.progress,l=e.handleOpenModal,o=e.handleChange;return r.a.createElement("form",{className:"form-inline container form"},r.a.createElement("input",{className:"form-control col-xs-6 col-md-3",name:"title",value:t,type:"text",onChange:o,placeholder:"Search by title"}),r.a.createElement(v,{value:n,handleChange:o}),r.a.createElement(O,{value:a,handleChange:o}),r.a.createElement("button",{className:"btn btn-primary col-xs-6 col-sm-4 col-md-1",type:"button",onClick:l},"Create"))},g=function(e){var t=e.text,a=e.handleClick,n=e.classNames;return r.a.createElement("button",{type:"button",onClick:a,className:"dropdown-btn ".concat(n)},t)};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).handleDone=function(){var e=a.props,t=e.todo,n=e.handleUpdateClick,l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{isDone:!t.isDone});n(l.id,l)},a.handleEdit=function(){var e=a.props,t=e.todo,n=e.handleEditClick,l=e.setSelectedId;n(t),l(t.id)},a.handleDelete=function(){var e=a.props,t=e.todo;(0,e.handleDeleteClick)(t.id)},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.todo;return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-primary dropdown-toggle",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",type:"button"},"..."),r.a.createElement("ul",{className:"dropdown-menu dropdown-list","aria-labelledby":"dropdownMenu1"},r.a.createElement("li",null,r.a.createElement(g,{handleClick:this.handleDone,text:e.isDone?"Open":"Done",classNames:"btn btn-success"})),r.a.createElement("li",null,r.a.createElement(g,{handleClick:this.handleEdit,text:"Edit",classNames:"btn btn-warning"})),r.a.createElement("li",null,r.a.createElement(g,{handleClick:this.handleDelete,text:"Delete",classNames:"btn btn-danger"}))))}}]),t}(l.Component),j=function(e){var t,a=e.todo,n=e.handleUpdateClick,l=e.handleDeleteClick,o=e.handleEditClick,c=e.setSelectedId;switch(a.priority){case"High":t="danger";break;case"Normal":t="warning";break;default:t="success"}var i=a.isDone?"list-item--done":"list-item";return r.a.createElement("section",{className:"thumbnail ".concat(i)},r.a.createElement("h3",{className:"h3"},a.title),r.a.createElement("p",null,a.description),r.a.createElement("div",{className:"item-wrapper"},r.a.createElement("span",{className:"label label-".concat(t)}," ",a.priority),r.a.createElement(k,{handleUpdateClick:n,handleEditClick:o,handleDeleteClick:l,setSelectedId:c,todo:a})))},w=function(e){var t=e.todos,a=e.handleUpdateClick,n=e.handleEditClick,l=e.handleDeleteClick,o=e.setSelectedId;return r.a.createElement("ul",{className:"container list-unstyled"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"col-xs-12 col-sm-6 col-md-3"},r.a.createElement(j,{todo:e,handleUpdateClick:a,handleEditClick:n,handleDeleteClick:l,setSelectedId:o}))})))};w.defaultProps={todos:[]};var D=w,N=a(26),S=a.n(N),x=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,l=t.name;"title"===l&&n.length>16||"description"===l&&n.length>25||a.setState(Object(m.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,l=t.title,r=t.description,o=t.priority,c=t.isDone,i=a.props,s=i.handleAdd,d=i.handleUpdate,u=i.handleClose,m=i.todoInEditMode,p={title:l,description:r,priority:o,isDone:c};l&&r?(m?(p.id=m.id,d(m.id,p)):(p.id=S()(),s(p)),u()):n.a.error("Fill all the fields.")},a.resetCreateForm=function(){return a.setState({title:"",description:"",priority:"Low",isDone:!1})},a.state={title:"",description:"",priority:"Low",isDone:!1},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.todoInEditMode;if(e){var t=e.title,a=e.description,n=e.priority,l=e.isDone;this.setState({title:t,description:a,priority:n,isDone:l})}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.priority,l=this.props.handleClose;return r.a.createElement("form",{className:"thumbnail col-md-4 cl-xs-10 modal-form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"textLabel"},"Title:",r.a.createElement("input",{id:"textLabel",name:"title",value:t,className:"form-control",type:"text",placeholder:"Title",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"textareaLabel"},"Description:",r.a.createElement("textarea",{rows:"5",id:"textareaLabel",value:a,name:"description",className:"form-control textarea",placeholder:"Description",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"selectLabel"},"Priority:",r.a.createElement("select",{id:"selectLabel",className:"form-control",value:n,onChange:this.handleChange,name:"priority"},r.a.createElement("option",{value:"High"},"High"),r.a.createElement("option",{value:"Normal"},"Normal"),r.a.createElement("option",{value:"Low"},"Low"))),r.a.createElement("div",{className:"row modal-form__wrapper"},r.a.createElement("button",{type:"submit",className:"btn btn-primary col-md-3"},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-default col-md-3",onClick:l},"Cancel")))}}]),t}(l.Component);x.defaultProps={todoInEditMode:null};var P=x,M=function(e,t,a,n){var l=Object(u.a)(e);if(t&&(l=l.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),"All"!==a&&(l=l.filter((function(e){return e.priority===a}))),"All"!==n){var r="Done"===n;l=l.filter((function(e){return e.isDone===r}))}return l},I=function(e,t){return e.find((function(e){return e.id===t}))};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).backdropRef=Object(l.createRef)(),a.handleSearchInputChange=function(e){var t=e.target,n=t.value,l=t.name;return a.setState((function(e){return{searchForm:T({},e.searchForm,Object(m.a)({},l,n))}}))},a.handleUpdateTodo=function(e,t){var n=a.state.todos,l=n.indexOf(n.find((function(t){return t.id===e})));a.setState((function(e){return{todos:[].concat(Object(u.a)(e.todos.slice(0,l)),[t],Object(u.a)(e.todos.slice(l+1,n.length))),selectedTodoId:null}}))},a.handleDeleteTodo=function(e){return a.setState((function(t){return{todos:Object(u.a)(t.todos.filter((function(t){return t.id!==e})))}}))},a.setSelectedId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return a.setState({selectedTodoId:e})},a.handleOpenModal=function(){return a.setState({isModalOpen:!0})},a.handleCloseModal=function(){var e=a.state.selectedTodoId;a.setState({isModalOpen:!1}),e&&a.setSelectedId()},a.handleKeyPress=function(e){"Escape"===e.code&&a.handleCloseModal()},a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.handleCloseModal()},a.handleAddTodo=function(e){return a.setState((function(t){return{todos:[e].concat(Object(u.a)(t.todos))}}))},a.state={todos:[],isModalOpen:!1,selectedTodoId:null,searchForm:{title:"",priority:"All",progress:"All"}},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmout",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,a=e.todos,n=e.searchForm,l=e.selectedTodoId,o=n.title,c=n.priority,i=n.progress,s=M(a,o,c,i),d=I(a,l);return r.a.createElement("main",{className:"main-content"},r.a.createElement(y,{title:o,priority:c,progress:i,handleOpenModal:this.handleOpenModal,handleChange:this.handleSearchInputChange}),r.a.createElement(D,{todos:s,handleUpdateClick:this.handleUpdateTodo,handleEditClick:this.handleOpenModal,handleDeleteClick:this.handleDeleteTodo,setSelectedId:this.setSelectedId}),t&&r.a.createElement("div",{className:"backdrop container",ref:this.backdropRef,onClick:this.handleBackdropClick,role:"button"},r.a.createElement(P,{handleClose:this.handleCloseModal,handleAdd:this.handleAddTodo,handleUpdate:this.handleUpdateTodo,todoInEditMode:d})))}}]),t}(l.Component),U=function(){return r.a.createElement("footer",{className:"bg-primary footer"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"h3"},"Roman Bezpalyi")))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(A,null),r.a.createElement(U,null))},H=function(){return r.a.createElement("h1",{className:"h1 text-center"},"Oops... Page not found.")};var R=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{to:"/todos"})),r.a.createElement(s.b,{path:"/todos",component:F}),r.a.createElement(s.b,{path:"*",component:H}))};c.a.render(r.a.createElement(i.a,{basename:"/"},r.a.createElement(R,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.daaf7ec9.chunk.js.map