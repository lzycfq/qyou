webpackJsonp([28],{"2mzY":function(t,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e={name:"Thread_CompanionsList",data:function(){return{ruleForm:{searchinfo:""},rules:{searchinfo:[{required:!0,message:"请输入搜索内容",trigger:"blur"}]},coutryCom:[]}},created:function(){this.buildcoutryCom()},methods:{buildcoutryCom:function(){var t=this;this.axios.get("/api/buildcoutryCom").then(function(o){t.coutryCom=o.data.data}).catch(function(t){console.log(orror)})},searchBtn:function(t){var o=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;o.axios.get("",{params:{searchinfo:o.$rels.searchinfo.value}}).then(function(t){}).catch(function(t){console.log(t)})})}},components:{headers:r("5yyx").a}},s={render:function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("el-col",{attrs:{span:24}},[r("headers"),t._v(" "),r("div",{staticStyle:{clear:"both"}}),t._v(" "),r("div",{staticClass:"Com_header"},[r("router-link",{attrs:{to:"/Thread"}},[t._v("穷游论坛")]),t._v(" "),r("div",{staticClass:"Com_from"},[r("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules}},[r("el-form-item",{attrs:{prop:"searchinfo"}},[r("el-input",{staticClass:"Com_input",attrs:{rel:"searchinfo",placeholder:"请输入搜索游记/经验"},model:{value:t.ruleForm.searchinfo,callback:function(o){t.$set(t.ruleForm,"searchinfo",o)},expression:"ruleForm.searchinfo"}}),t._v(" "),r("i",{staticClass:"el-icon-search iconss",on:{click:function(o){return t.searchBtn("ruleForm")}}})],1)],1)],1)],1),t._v(" "),t._l(t.coutryCom,function(o,e){return r("ul",{key:e,staticClass:"Com-nav"},[r("li",{staticClass:"itm"},[r("router-link",{staticClass:"itma",attrs:{to:""}},[t._v("论坛首页")])],1),t._v(" "),r("li",{staticClass:"itm"},[r("router-link",{staticClass:"itma",attrs:{to:""}},[t._v("结伴同游")])],1),t._v(" "),r("li",{staticClass:"itm"},[r("el-popover",{attrs:{placement:"bottom",trigger:"hover","popper-class":"popoverouzhou"}},[r("div",{staticClass:"popoverouzhoucontent"},t._l(o.ouzhoucoutry,function(o,e){return r("li",{key:e},[r("router-link",{attrs:{to:{path:"",params:{coutrycountryid:o.coutrycountryid}}}},[t._v(t._s(o.countryname))])],1)}),0),t._v(" "),r("a",{staticClass:"itma",attrs:{slot:"reference"},slot:"reference"},[t._v("欧洲版块 "),r("i",{staticClass:"el-icon-arrow-down iconsss"})])])],1),t._v(" "),r("li",{staticClass:"itm"},[r("el-popover",{attrs:{placement:"bottom",trigger:"hover","popper-class":"popoverouzhou"}},[r("div",{staticClass:"popoverouzhoucontent"},t._l(o.yazhoucoutry,function(o,e){return r("li",{key:e},[r("router-link",{attrs:{to:{path:"",params:{countryid:o.countryid}}}},[t._v(t._s(o.countryname))])],1)}),0),t._v(" "),r("a",{staticClass:"itma",attrs:{slot:"reference"},slot:"reference"},[t._v("亚洲版块 "),r("i",{staticClass:"el-icon-arrow-down iconsss"})])])],1),t._v(" "),r("li",{staticClass:"itm"},[r("el-popover",{attrs:{placement:"bottom",trigger:"hover","popper-class":"popoverouzhou"}},[r("div",{staticClass:"popoverouzhoucontent"},t._l(o.meizhoucoutry,function(o,e){return r("li",{key:e},[r("router-link",{attrs:{to:{path:"",params:{countryid:o.countryid}}}},[t._v(t._s(o.countryname))])],1)}),0),t._v(" "),r("a",{staticClass:"itma",attrs:{slot:"reference"},slot:"reference"},[t._v("美洲版块 "),r("i",{staticClass:"el-icon-arrow-down iconsss"})])])],1),t._v(" "),r("li",{staticClass:"itm"},[r("el-popover",{attrs:{placement:"bottom",trigger:"hover","popper-class":"popoverouzhou"}},[r("div",{staticClass:"popoverouzhoucontent"},t._l(o.dayangzhoucoutry,function(o,e){return r("li",{key:e},[r("router-link",{attrs:{to:{path:"",params:{countryid:o.countryid}}}},[t._v(t._s(o.countryname))])],1)}),0),t._v(" "),r("a",{staticClass:"itma",attrs:{slot:"reference"},slot:"reference"},[t._v("大洋洲版块 "),r("i",{staticClass:"el-icon-arrow-down iconsss"})])])],1),t._v(" "),r("li",{staticClass:"itm"},[r("el-popover",{attrs:{placement:"bottom",trigger:"hover","popper-class":"popoverouzhou"}},[r("div",{staticClass:"popoverouzhoucontent"},t._l(o.feizhoucoutry,function(o,e){return r("li",{key:e},[r("router-link",{attrs:{to:{path:"",params:{countryid:o.countryid}}}},[t._v(t._s(o.countryname))])],1)}),0),t._v(" "),r("a",{staticClass:"itma",attrs:{slot:"reference"},slot:"reference"},[t._v("非洲版块 "),r("i",{staticClass:"el-icon-arrow-down iconsss"})])])],1),t._v(" "),r("li",{staticClass:"itm"},[r("router-link",{staticClass:"itma",attrs:{to:""}},[t._v("全部版块")])],1)])})],2)},staticRenderFns:[]};var a=r("C7Lr")(e,s,!1,function(t){r("A/LO")},null,null);o.default=a.exports},"A/LO":function(t,o){}});