(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{367:function(t,e,r){var content=r(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("10f5d63c",content,!0,{sourceMap:!1})},378:function(t,e,r){"use strict";var o=r(367);r.n(o).a},379:function(t,e,r){(t.exports=r(23)(!1)).push([t.i,'p[data-v-37246834]{line-height:2em}a[data-v-37246834]{color:#57bc90}.spacer[data-v-37246834]{flex:1 1 auto}#page-project-details[data-v-37246834]{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"splash" "summary" "aside" "roles-detailed"}.splash[data-v-37246834]{grid-area:splash;width:100%;height:50vh;-o-object-fit:cover;object-fit:cover}.summary[data-v-37246834]{grid-area:summary;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);background:#fff;padding:1em}.aside[data-v-37246834]{grid-area:aside;color:#fff;background-color:#323232;padding:1em}.roles-list[data-v-37246834]{list-style-type:none;padding:0}.roles-list-item[data-v-37246834]{margin:1em 0}.roles-detailed[data-v-37246834]{grid-area:roles-detailed}.roles-detailed .content[data-v-37246834]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);background:#fff;padding:1em;margin:1em 0}@media only screen and (min-width:768px){#page-project-details[data-v-37246834]{grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-rows:auto;grid-template-areas:"splash splash splash splash splash" ". summary summary aside ." ". roles-detailed roles-detailed roles-detailed ."}.splash[data-v-37246834]{margin-bottom:20px}.aside[data-v-37246834]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}}',""])},385:function(t,e,r){"use strict";r.r(e);r(82);var o=r(2),n=(r(25),r(3)),d=r(10),c={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,o=e.store,t.next=3,o.dispatch("projects/getProject",r.projectId);case 3:return t.abrupt("return",{projectId:r.projectId});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{projectId:""}},computed:Object(o.a)({},Object(d.c)({backgroundImageUrl:function(t){return t.projects.data[this.projectId].backgroundImageUrl},description:function(t){return this.$sanitize(t.projects.data[this.projectId].description)},endDate:function(t){return this.$moment.unix(t.projects.data[this.projectId].endDate.seconds).format("MMM YYYY")},roleNames:function(t){return t.projects.data[this.projectId].roles.map(function(t){return t.name})},roles:function(t){return t.projects.data[this.projectId].roles},startDate:function(t){return this.$moment.unix(t.projects.data[this.projectId].startDate.seconds).format("MMM YYYY")},title:function(t){return t.projects.data[this.projectId].title}}))},l=(r(378),r(8)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-project-details"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.backgroundImageUrl,expression:"this.backgroundImageUrl"}],staticClass:"splash"}),t._v(" "),r("div",{staticClass:"summary"},[r("h1",{staticClass:"title"},[t._v(t._s(this.title))]),t._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:t._s(t.description)}})]),t._v(" "),r("div",{staticClass:"aside"},[r("div",{staticClass:"date"},[r("h2",{staticClass:"title"},[t._v("Date")]),t._v(" "),r("p",[t._v(t._s(t.startDate)+" - "+t._s(t.endDate))])]),t._v(" "),r("div",{staticClass:"roles"},[r("h2",{staticClass:"title"},[t._v("Roles")]),t._v(" "),r("ul",{staticClass:"roles-list"},t._l(t.roleNames,function(e,o){return r("li",{key:o,staticClass:"roles-list-item"},[t._v("\n          "+t._s(e)+"\n        ")])}),0)])]),t._v(" "),r("div",{staticClass:"roles-detailed"},t._l(t.roles,function(s,e){return r("div",{key:e,staticClass:"content"},[r("h2",[t._v(t._s(s.name))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(s.description)}})])}),0)])},[],!1,null,"37246834",null);e.default=component.exports}}]);