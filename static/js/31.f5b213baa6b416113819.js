webpackJsonp([31],{CNcB:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"Thread_Zhuanlan_PersonalDetail",data:function(){return{Zhuanlanbannerid:this.$route.params.Zhuanlanbannerid,wenzhang:[],istabBar:!1,dingyue:!0,ydingyue:!1,zhuanlanheader:[],Personalbiaoqiao:[],type_index:0}},mounted:function(){this.buildzhuanlanheader(),this.buildwenzhang(),this.buildPersonalbiaoqiao(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{buildwenzhang:function(){var a=this;this.axios.get("/api/buildwenzhang").then(function(t){a.wenzhang=t.data.data}).catch(function(a){console.log(a)})},handleScroll:function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#topPart").offsetHeight?this.istabBar=!0:this.istabBar=!1},dyclick:function(){var a=this;this.axios.get("/api/builddingyuefirst").then(function(t){a.zhuanlanheader=t.data.data,a.dingyue=!1,a.ydingyue=!0})},qxclick:function(){var a=this;this.axios.get("/api/builddingyuetwo").then(function(t){a.zhuanlanheader=t.data.data,a.ydingyue=!1,a.dingyue=!0})},buildzhuanlanheader:function(){var a=this;this.axios.get("/api/buildzhuanlanheader").then(function(t){a.zhuanlanheader=t.data.data,console.log(t)}).catch(function(a){console.log(a)})},buildPersonalbiaoqiao:function(){var a=this;this.axios.get("/api/buildPersonalbiaoqiao").then(function(t){a.Personalbiaoqiao=t.data.data,console.log(t)}).catch(function(a){console.log(a)})},typeIndex:function(a){this.type_index=a,this.search_params.type=this.Personalbiaoqiao.index,this.buildwenzhang()}},components:{headers:n("5yyx").a}},s={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("el-col",{attrs:{span:24}},[i("headers",{attrs:{id:"topPart"}}),a._v(" "),i("div",{staticStyle:{clear:"both"}}),a._v(" "),a._l(a.zhuanlanheader,function(t,s){return i("div",{key:s},[i("div",{staticClass:"zhuanlan_header",class:{isFixed:a.istabBar}},[i("h1",{staticClass:"zhuanlan_logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("DQh0")}})])],1),a._v(" "),i("div",{staticClass:"zhuanlan_center"},[i("transition",{attrs:{name:"el-fade-in"}},[i("div",{staticClass:"zhuanlan_title index_title"},[i("div",{staticClass:"origin_2UYtg"},[i("div",{staticClass:"head_portrait_3Unoe"},[i("router-link",{attrs:{to:""}},[i("img",{attrs:{src:t.zhuanlanheaderavter,alt:"item.zhuanlanheadername"}})])],1),a._v(" "),i("div",{staticClass:"origin_desc_2MNh6"},[i("p",{staticClass:"from_m5rXB"},[a._v("来自专栏")]),a._v(" "),i("router-link",{attrs:{to:""}},[i("p",{staticClass:"channel_3au6I"},[a._v(a._s(t.zhuanlanheadername))])])],1)]),a._v(" "),i("div",{staticClass:"subscribe"},[1===t.type?i("div",{directives:[{name:"show",rawName:"v-show",value:a.dingyue,expression:"dingyue"}],staticClass:"zhuanlan-menu-zhuanlan-subsactive",on:{click:a.dyclick}},[a._v("订阅")]):i("div",{staticClass:"ydingyue",staticStyle:{position:"relative"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:a.ydingyue,expression:"ydingyue"}],staticClass:"zhuanlan-menu-zhuanlan-subs"},[a._v("已订阅")]),a._v(" "),i("div",{staticClass:"zhuanlan-menu-zhuanlan-subsquxiao",on:{click:a.qxclick}},[a._v("取消订阅")])])])])])],1),a._v(" "),i("div",{staticClass:"zhuanlan_right"},[i("el-dropdown",{attrs:{placement:"bottom"}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{"margin-left":"-10px"}},[i("i",{staticClass:"el-icon-upload2 zhuanlan_up"})]),a._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("img",{staticStyle:{"vertical-align":"middle","margin-right":"5px"},attrs:{src:n("RZFo"),width:"20px",height:"20px"}}),a._v(" 分享到微博")]),a._v(" "),i("el-dropdown-item",[i("img",{staticStyle:{"vertical-align":"middle","margin-right":"5px"},attrs:{src:n("ETX4"),width:"20px",height:"20px"}}),a._v(" 微信扫一扫\n\t\t\t\t\t\t\t"),i("br"),a._v(" "),i("img",{attrs:{src:n("hMRt"),width:"100px",height:"100px"}})])],1)],1),a._v(" "),i("el-dropdown",{attrs:{placement:"bottom"}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{"margin-left":"11px"}},[i("i",{staticClass:"el-icon-more zhuanlan_up"})]),a._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("router-link",{staticStyle:{color:"#606266"},attrs:{to:""}},[a._v("我收藏的文章")])],1),a._v(" "),i("el-dropdown-item",[i("router-link",{staticStyle:{color:"#606266"},attrs:{to:""}},[a._v("我订阅的文章")])],1)],1)],1)],1)]),a._v(" "),i("div",{staticStyle:{clear:"both"}}),a._v(" "),i("div",{staticClass:"Zhuanlan_gerenwrap"},[i("div",{staticClass:"column_header_PmfVr"},[i("img",{staticClass:"column_icon_tprYq",attrs:{src:"http://pic.lvmama.com/uploads/pc/place2/2019-03-08/53488768-809c-425f-93cb-793599211845_300_200.jpg"}}),a._v(" "),i("p",{staticClass:"column_tit_2-hhC"},[a._v(a._s(t.zhuanlanheadername)+" ")]),a._v(" "),i("p",{staticClass:"column_desc_vxB89"},[a._v(a._s(t.zhuanlanheaderdsc))]),a._v(" "),i("div",{staticClass:"subscribes"},[1===t.type?i("div",{directives:[{name:"show",rawName:"v-show",value:a.dingyue,expression:"dingyue"}],staticClass:"zhuanlan-menu-zhuanlan-subsactive",on:{click:a.dyclick}},[a._v("订阅")]):i("div",{staticClass:"ydingyue",staticStyle:{position:"relative"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:a.ydingyue,expression:"ydingyue"}],staticClass:"zhuanlan-menu-zhuanlan-subs"},[a._v("已订阅")]),a._v(" "),i("div",{staticClass:"zhuanlan-menu-zhuanlan-subsquxiao",on:{click:a.qxclick}},[a._v("取消订阅")])])]),a._v(" "),i("p",{staticClass:"column_follow_2Wqbk"},[a._v(a._s(t.zhuanlanheadershu)+"订阅")])])])])}),a._v(" "),i("div",{staticClass:"zhuanlan_zhankai"},a._l(a.Personalbiaoqiao,function(t,n){return i("a",{key:n,staticClass:"zhankaia",class:a.type_index===n?"active":"",on:{click:function(t){return a.typeIndex(n)}}},[a._v("#"+a._s(t.Personalbiaoqiaoname)),i("span",{staticClass:"zhankaisapn"},[a._v(a._s(t.Personalbiaoqiaoshu))])])}),0),a._v(" "),i("div",{staticClass:"Zhuanlan_wenzhang"},[i("p",{staticStyle:{"font-size":"18px","line-height":"25px",color:"rgba(0, 0, 0, .8)","font-weight":"bold","margin-bottom":"20px"},attrs:{align:"left"}},[a._v("全部")]),a._v(" "),i("ul",{staticClass:"Zhuanlan_wenzhangul"},a._l(a.wenzhang,function(t,s){return i("li",{key:s,staticClass:"Zhuanlan_wenzhangli"},[i("div",{staticClass:"image_3wY22"},[i("router-link",{attrs:{to:{path:"/",params:{wenzhangid:t.wenzhangid}}}},[i("img",{attrs:{src:t.wenzhangimg}})])],1),a._v(" "),i("div",{staticClass:"Zhuanlan_wenzhang_right"},[i("div",{staticStyle:{height:"126px"}},[i("p",{staticClass:"Zhuanlan_wenzhang_righttit"},[i("router-link",{attrs:{to:{path:"/",params:{wenzhangid:t.wenzhangid}}}},[a._v(a._s(t.wenzhangtitle))])],1),a._v(" "),i("p",{staticClass:"Zhuanlan_wenzhang_rightdesc"},[a._v(a._s(t.wenzhandsc))])]),a._v(" "),i("div",{staticClass:"part_bottom_z_8HK"},[i("div",{staticClass:"left_2F88G"},[i("router-link",{staticClass:"col_JHMNa",attrs:{to:{path:"/",params:{wenzhangid:t.wenzhangid}}}},[a._v(a._s(t.wenzhangzuozhe))]),a._v(" "),i("a",{staticClass:"date_2Wk3g"},[a._v(" · "+a._s(t.wenzhangtime)+"前")]),a._v(" "),i("a",{staticClass:"from_2QmrV"},[a._v(" · 来自专栏 ")]),a._v(" "),i("router-link",{staticClass:"col_JHMNa",attrs:{to:{path:"/",params:{wenzhangid:t.wenzhangid}}}},[a._v(a._s(t.wenzhangfromname))])],1),a._v(" "),i("div",{staticClass:"right_bnk-a"},[i("img",{staticStyle:{"vertical-align":"top","margin-right":"5px"},attrs:{src:n("SOMM")}}),a._v(a._s(t.wenzhangdianzan))])])])])}),0)])],2)},staticRenderFns:[]};var e=n("C7Lr")(i,s,!1,function(a){n("RacJ")},null,null);t.default=e.exports},RacJ:function(a,t){}});