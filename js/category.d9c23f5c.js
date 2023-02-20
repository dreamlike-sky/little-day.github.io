import{P as e}from"./page-search.75678187.js";import{P as a}from"./page-content.dd14e9b5.js";import{u as t}from"./use-page-search.0afda9a9.js";import{P as o,u as n}from"./use-page-modal.c2bd0c3e.js";import{J as l,ag as i,o as r,c as s,X as d}from"./@vue.962d419f.js";import{_ as p}from"./index.6a87d953.js";import"./element-plus.d5014fd1.js";import"./lodash-es.603b8f1d.js";import"./@vueuse.2c61da4b.js";import"./@element-plus.bc468cf4.js";import"./@popperjs.fd04dfd6.js";import"./@ctrl.5f67d428.js";import"./dayjs.0f6007d7.js";import"./async-validator.73a10b83.js";import"./memoize-one.c87f6fc8.js";import"./escape-html.86960cf8.js";import"./normalize-wheel-es.e2b4fa49.js";import"./@floating-ui.cac404ee.js";import"./pinia.c32067d4.js";/* empty css                      */import"./vue-router.be8e2924.js";import"./axios.62e8f306.js";import"./form-data.7576b880.js";const m={formItems:[{field:"name",type:"input",label:"类别名称",placeholder:"请输入类别名称"},{field:"createAt",type:"datapicker",label:"创建时间",placeholder:"请选择创建时间范围",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],labelWidth:"70px",itemStyle:{padding:"10px 50px 10px 20px"},colLayout:{span:8}},c={title:"类别列表",btnName:"新建类别",propList:[{prop:"name",label:"类别名称",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"170",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"170",slotName:"updateAt"},{label:"操作",minWidth:"100",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},f={formItems:[{field:"name",type:"input",label:"类别名称",placeholder:"请输入类别名称"}],colLayout:{span:24},itemStyle:{padding:"0 50px 0 20px"}},g=l({name:"category",components:{PageSearch:e,PageContent:a,PageModal:o},setup(){const{pageContentRef:e,handleResetClick:a,handleQueryClick:o}=t(),{defaultInfo:l,pageModalRef:i,handleNewData:r,handleEditData:s,isTitleName:d}=n();return{searchFormConfig:m,pageContentRef:e,handleResetClick:a,handleQueryClick:o,contentTableConfig:c,modalConfig:f,defaultInfo:l,pageModalRef:i,handleNewData:r,handleEditData:s,isTitleName:d}}}),u={class:"category"};const h=p(g,[["render",function(e,a,t,o,n,l){const p=i("page-search"),m=i("page-content"),c=i("page-modal");return r(),s("div",u,[d(p,{searchFormConfig:e.searchFormConfig,onResetBtnClick:e.handleResetClick,onQueryBtnClick:e.handleQueryClick},null,8,["searchFormConfig","onResetBtnClick","onQueryBtnClick"]),d(m,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,"page-name":"category",onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),d(c,{ref:"pageModalRef",modalConfig:e.modalConfig,defaultInfo:e.defaultInfo,"page-name":"category","title-name":e.isTitleName?e.contentTableConfig.btnName:"修改"},null,8,["modalConfig","defaultInfo","title-name"])])}]]);export{h as default};
