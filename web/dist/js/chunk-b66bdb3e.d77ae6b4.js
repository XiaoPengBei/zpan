(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b66bdb3e"],{"3acf":function(t,e,n){},"5c67":function(t,e,n){"use strict";n("3acf")},"61c2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("Topbar",{attrs:{menus:t.$store.state.storages,logined:""}}),n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{staticStyle:{height:"100%","background-color":"#f4f4f5"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":t.leftMenuActive,"background-color":"#f4f4f5",router:""}},t._l(t.leftMenus,(function(e){return n("el-menu-item",{key:e.path,attrs:{index:e.path}},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])})),1)],1),n("el-main",[n("router-view")],1)],1)],1)},o=[],c=n("8bbf"),a=n.n(c),s=n("c0d6"),r=n("0b47"),u={components:{Topbar:r["a"]},beforeRouteEnter:function(t,e,n){a.a.zpan.Storage.list().then((function(t){var e=t.data.list;s["a"].commit("storages",e),n()}))},data:function(){return{}},computed:{leftMenuActive:function(){return this.$route.fullPath},leftMenus:function(){return[{path:"/settings/profile",icon:"el-icon-user",title:"个人信息"},{path:"/settings/security",icon:"el-icon-lock",title:"密码修改"},{path:"/settings/developer",icon:"el-icon-cpu",title:"开发者设置"}]}},watch:{},methods:{},mounted:function(){}},l=u,f=(n("5c67"),n("2877")),p=Object(f["a"])(l,i,o,!1,null,"2907b69d",null);e["default"]=p.exports}}]);