webpackJsonp([32],{"mw/M":function(t,i){},qLTI:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"Destination_strategy",data:function(){return{id:this.$route.query.id,type_indexl:0,type_indexz:0,value:"按综合",search_params:{},search_options:[{value:1,label:"按综合"},{value:2,label:"按过去数"},{value:3,label:"按评分"},{value:4,label:"按点评数"}],strategy_breadcrumb:[],plcTopBar:[],qyWrap:[],zl:[],plcPoiList:[],strategy_jieshao:[]}},created:function(){this.buildstrategy_breadcrumb(),this.buildplcTopBar(),this.buildstrategy_list(),this.buildqyWrap(),this.buildzl(),this.buildplcPoiList(),this.buildstrategy_jieshao()},methods:{buildstrategy_breadcrumb:function(){var t=this;this.axios.get("/api/buildstrategy_breadcrumb").then(function(i){t.strategy_breadcrumb=i.data.data}).catch(function(t){console.log(t)})},buildplcTopBar:function(){var t=this;this.axios.get("/api/buildplcTopBar").then(function(i){t.plcTopBar=i.data.data}).catch(function(t){console.log(t)})},buildstrategy_list:function(){var t=this;this.axios.get("/api/buildstrategy_list").then(function(i){t.strategy_list=i.data.data}).catch(function(t){console.log(t)})},buildqyWrap:function(){var t=this;this.axios.get("/api/buildqyWrap").then(function(i){t.qyWrap=i.data.data}).catch(function(t){console.log(t)})},buildzl:function(){var t=this;this.axios.get("/api/buildzl").then(function(i){t.zl=i.data.data}).catch(function(t){console.log(t)})},buildstrategy_jieshao:function(){var t=this;this.axios.get("/api/buildstrategy_jieshao").then(function(i){t.strategy_jieshao=i.data.data}).catch(function(t){console.log(t)})},buildplcPoiList:function(){var t=this;this.axios.get("/api/buildplcPoiList").then(function(i){t.plcPoiList=i.data.data}).catch(function(t){console.log(t)})},clickIndexl:function(t){this.type_indexl=t,this.search_params.type=this.search_luvxing[t],this.buildplcPoiList()},clickIndexz:function(t){this.type_indexz=t,this.search_params.type=this.search_zhuti[t],this.buildplcPoiList()},search_clickradio:function(){this.buildplcPoiList()},searchselect:function(t){this.search_params.type=this.search_options[t],this.buildplcCitylist()}},components:{headers:a("Db7b").a}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("el-col",{attrs:{span:24}},[a("headers"),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"qyer_head_crumb"},t._l(t.strategy_breadcrumb,function(i,s){return a("el-breadcrumb",{key:s,attrs:{"separator-class":"el-icon-arrow-right"}},[t._l(i.strategy_breadcrumbs,function(i,s){return a("el-breadcrumb-item",{key:s,attrs:{to:{path:i.link,params:{breadcrumbid:i.breadcrumbid}}}},[t._v(t._s(i.breadcrumbname))])}),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(i.breadcrumbcity)+"活动攻略")])],2)}),1),t._v(" "),t._l(t.plcTopBar,function(i,s){return a("div",{key:s,staticClass:"plcTopBar clearfix"},[a("div",{staticClass:"plcTopBarL"},[a("p",{staticClass:"plcTopBarNameEn"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{cityid:i.cityid}}}},[t._v("\n\t\t\t\t\t\t"+t._s(i.plcTopBarjianxie)+"\n\t\t\t\t\t")])],1),t._v(" "),a("div",{staticClass:"plcTopBarNameCns clearfix"},[a("p",{staticClass:"plcTopBarNameCn fontYaHei"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{cityid:i.cityid}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.plcTopBarcity)+"\n\t\t\t\t\t\t")])],1)])]),t._v(" "),a("div",{staticClass:"plcTopBarR"},[a("div",{staticClass:"plcTopBarWeather"}),t._v(" "),a("div",{staticClass:"plcTopBarStat fontYaHei"},[a("em",[t._v(t._s(i.plcTopBargo))]),t._v("人去过这里,\n\t\t\t\t\t"),a("em",[t._v(t._s(i.plcTopBarpinlun))]),t._v("条目的地点评\n\t\t\t\t")])]),t._v(" "),a("div",{staticStyle:{clear:"both"}})])}),t._v(" "),t._l(t.strategy_list,function(i,s){return a("div",{staticClass:"plcMenuBars"},[a("div",{staticClass:"plcMenuBar"},[a("ul",{staticClass:"plcMenuBarList"},[a("li",{staticClass:"guide"},[a("el-popover",{attrs:{placement:"bottom-start","popper-class":"city-zhinan",width:"550",trigger:"hover"}},[a("div",{staticClass:"subMenu-big"},[a("ul",{staticClass:"guideList"},[a("li",{staticClass:"list-item overview"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("目的地概况")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarmudi,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.mudi))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item traffic"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("城际交通")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarchengji,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.chengji))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item domestic_traffic"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("市内交通")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarshinei,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.shinei))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item season"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("旅行日历")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarrili,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.rili))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item currency"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("货币与花费")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarxiaofei,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.xiaofei))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item information"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("实用信息")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarxinxi,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.xinxi))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item notice"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("旅行须知")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbargonggao,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.gonggao))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item define"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("路线")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarluxian,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.luxian))])],1)}),0)],1)])]),t._v(" "),a("em",{attrs:{slot:"reference"},slot:"reference"},[t._v("城市指南")])])],1),t._v(" "),a("li",{staticClass:"poi"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("em",{staticClass:"el-dropdown-link"},[t._v("\n\t\t\t\t\t\t\t\t旅行地\n\t\t\t\t\t\t\t")]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(i.listStrategy,function(i,s){return a("el-dropdown-item",{key:s},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:{path:"Destination_list_Strategy",params:{listStrategyid:i.listStrategyid}}}},[t._v(t._s(i.listStrategycity)+"("+t._s(i.listnumber)+")")])],1)}),1)],1)],1),t._v(" "),a("li",{staticClass:"route"},[a("router-link",{attrs:{to:"/Destination_Strategydetail"}},[a("em",[t._v("行程路线")])])],1),t._v(" "),a("li",{staticClass:"hotel"},[a("router-link",{attrs:{to:"/Destination_Strategydetail"}},[a("em",[t._v("住宿")])])],1),t._v(" "),a("li",{staticClass:"travel"},[a("router-link",{attrs:{to:"/Destination_Strategydetail"}},[a("em",[t._v("游记攻略")])])],1),t._v(" "),a("li",{staticClass:"map"},[a("router-link",{attrs:{to:"/Destination_Strategydetail"}},[a("em",[t._v("地图")])])],1)]),t._v(" "),a("p",{staticClass:"plcMenuBarAddPlan"},[a("router-link",{attrs:{to:"/Destination_Strategydetail"}},[t._v("加入行程")])],1)])])}),t._v(" "),a("div",{staticClass:"plcListMgContainer"},t._l(t.qyWrap,function(i,s){return a("div",{key:s,staticClass:"qyWrapsbanner"},[a("div",{staticStyle:{width:"980px",margin:"0 auto"}},[a("div",{staticClass:"plcListMgTitles"},[a("h2",{staticClass:"title fontYaHei"},[t._v(t._s(i.mguidedidian)+"美食微锦囊")]),t._v(" "),a("p",{staticClass:"more"},[a("router-link",{attrs:{to:{path:"Destination_mguide ",params:{mguideid:i.mguideid}}}},[t._v("更多微锦囊("+t._s(i.mguidenumber)+")\n\t\t\t\t\t\t\t\t"),a("i",{staticClass:"el-icon-arrow-right",staticStyle:{"vertical-align":"middle"}})])],1)])]),t._v(" "),a("el-carousel",{staticClass:"qyWrapsbanner",attrs:{height:"250px",arrow:"always"}},t._l(i.qyWraps,function(i,s){return a("el-carousel-item",{key:s},[a("div",{staticStyle:{width:"980px",margin:"0 auto"}},t._l(i.qyWrapc,function(i,s){return a("li",{key:s,staticClass:"qyWrapslist"},[a("router-link",{attrs:{to:{path:"Destination_mguidedetail ",params:{Destination_mguidedetailid:i.Destination_mguidedetailid}},title:"item.mguidedetailtitle"}},[a("p",{staticClass:"photo"},[a("img",{attrs:{src:i.mguidedetailimg,width:"227",height:"auto",alt:"item.mguidedetailtitle"}})]),t._v(" "),a("p",{staticClass:"photoMask"}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"face"},[a("img",{attrs:{src:i.mguidedetailavter,width:"60",height:"60",alt:"堂本琥珀"}})]),t._v(" "),a("h3",{staticClass:"title fontYaHei"},[t._v(t._s(i.mguidedetailtitle))]),t._v(" "),a("blockquote",{staticClass:"text"},[t._v(t._s(i.mguidedetaildsc))]),t._v(" "),a("p",{staticClass:"tags"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.mguidedetailtags)+"\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"bottom"})])],1)}),0)])}),1)],1)}),0),t._v(" "),a("div",{staticClass:"qyWraplist"},[t._l(t.zl,function(i,s){return a("div",{key:s,staticClass:"qyMain"},[a("h3",{staticClass:"subTitle"},[t._v(t._s(i.zlcity)+"旅行地")]),t._v(" "),a("ul",{staticClass:"plcPoiSort"},[a("li",[a("p",{staticClass:"tit"},[t._v("旅行地：")]),t._v(" "),a("p",{staticClass:"labels"},t._l(i.search_luvxing,function(i,s){return a("a",{key:s,class:t.type_indexl===s?"current":"",on:{click:function(i){return t.clickIndexl(s)}}},[t._v(t._s(i.lvxingdi)+" ("+t._s(i.lvxingnumber)+")")])}),0)]),t._v(" "),a("li",[a("p",{staticClass:"tit"},[t._v("主题：")]),t._v(" "),a("p",{staticClass:"labels"},t._l(i.search_zhuti,function(i,s){return a("a",{key:s,class:t.type_indexz===s?"current":"",on:{click:function(i){return t.clickIndexz(s)}}},[t._v(t._s(i.zhitiname))])}),0)])]),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"plcPoiSift"},[a("p",{staticClass:"shaix",staticStyle:{position:"relative"}},[a("label",[a("input",{staticClass:"shaixinput",attrs:{type:"radio",name:"poi",value:"1",rel:"poi"},on:{click:t.search_clickradio}}),a("span",[t._v("微锦囊推荐")])]),t._v(" "),a("label",[a("input",{staticClass:"shaixinput",attrs:{type:"radio",name:"poi",value:"2",rel:"poi"},on:{click:t.search_clickradio}}),a("span",[t._v("有折扣")])])]),t._v(" "),a("div",{staticClass:"qui-select"},[a("el-select",{staticClass:"elselect",attrs:{clearable:"",placeholder:"请选择"},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}},t._l(t.search_options,function(i){return a("el-option",{key:i.value,attrs:{label:i.label,value:i.value},on:{click:function(i){return t.searchselect(s)}}})}),1)],1)]),t._v(" "),a("div",{staticClass:"plcPoiListStrategy showed"},t._l(t.plcPoiList,function(i,s){return a("li",{key:s},[a("div",{staticClass:"cntBox clearfix"},[a("p",{staticClass:"pics"},[a("router-link",{attrs:{to:{path:"Destination_mguidedetail ",params:{plcPoiListid:i.plcPoiListid}}}},[a("img",{attrs:{src:i.plcPoiListidimg,width:"227",height:"150"}}),a("span",{staticClass:"label"},[t._v("用户热推")])])],1),t._v(" "),a("h3",{staticClass:"title fontYaHei"},[a("router-link",{attrs:{to:{path:"Destination_mguidedetail ",params:{plcPoiListid:i.plcPoiListid}}}},[t._v(t._s(i.plcPoiListtitle)+"  "),a("span",[t._v("Tokyo\n\t\t\t\t\t\t\t\t\t\t"+t._s(i.plcPoiListidjianxie))])])],1),t._v(" "),a("div",{staticClass:"info"},[a("p",{staticClass:"stars"},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#3f9f5f","score-template":"{value}"},model:{value:i.ratevalue,callback:function(a){t.$set(i,"ratevalue",a)},expression:"item.ratevalue"}}),t._v(" "),a("span",{staticClass:"dping"},[a("router-link",{attrs:{to:{path:"Destination_mguidedetail ",params:{plcPoiListid:i.plcPoiListid}}}},[t._v(t._s(i.plcPoiListpinglun)+"人点评")])],1),t._v(" "),a("span",{staticClass:"zhe"},[t._v("折")]),t._v(" "),a("span",{staticClass:"infoSide"},[t._v(" 景点观光排名 "),a("em",{staticClass:"rank orange"},[t._v("第"+t._s(i.plcPoiListfirat)+"位")])])],1)]),t._v(" "),a("div",{staticClass:"comment clearfix"},[a("p",{staticClass:"user"},[a("router-link",{attrs:{to:""}},[a("img",{attrs:{src:i.plcPoiListavter,width:"32",height:"32",alt:"item.plcPoiListtitle"}})])],1),t._v(" "),a("p",{staticClass:"txt"},[t._v(t._s(i.plcPoiListxt))]),t._v(" "),a("p",{staticClass:"mguideNumber"},[a("router-link",{staticStyle:{color:"#777777"},attrs:{to:""}},[t._v(t._s(i.plcPoiListjn)+"个微锦囊推荐了这里")])],1)]),t._v(" "),a("br"),t._v(" "),a("dt",{staticClass:"orange bordert"},[t._v("优选折扣:\n\t\t\t\t\t\t\t\t"),a("router-link",{staticStyle:{color:"#777777"},attrs:{to:{path:"Destination_mguidedetail ",params:{plcPoiListid:i.plcPoiListid}}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(i.plcPoiListyouhui))])],1)])])}),0)])}),t._v(" "),t._l(t.strategy_jieshao,function(i,s){return a("div",{key:s,staticClass:"plcPoiLis_jieshao"},[a("h3",{staticClass:"subTitle"},[t._v(t._s(i.strategy_jieshao_didian)+"活动攻略")]),t._v(" "),a("p",{staticClass:"text"},[t._v(t._s(i.strategy_jieshao_text))]),t._v(" "),a("p",{attrs:{align:"right"}},[a("router-link",{staticStyle:{color:"#0073b6"},attrs:{to:"/"}},[t._v("阅读全文"),a("i",{staticClass:"el-icon-arrow-right"})])],1),t._v(" "),a("p",{staticClass:"plaBorderGap",staticStyle:{width:"100%",height:"1px",overflow:"hidden","background-color":"#ececec",margin:"30px 0"}}),t._v(" "),a("h3",{staticClass:"subTitle"},[t._v(t._s(i.strategy_jieshao_didian)+"活动地图")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:i.strategy_jieshao_img,width:"100%"}})])})],2)],2)},staticRenderFns:[]};var l=a("C7Lr")(s,e,!1,function(t){a("mw/M")},null,null);i.default=l.exports}});