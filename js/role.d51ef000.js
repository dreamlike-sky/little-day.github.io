import{Q as e}from"./element-plus.d5014fd1.js";import{P as a}from"./page-search.75678187.js";import{P as t}from"./page-content.dd14e9b5.js";import{P as o,u as n}from"./use-page-modal.c2bd0c3e.js";import{u as l,m as i,_ as s}from"./index.6a87d953.js";import{J as r,d,j as m,n as p,ag as c,o as f,c as h,X as u,R as g,a as b}from"./@vue.962d419f.js";import"./lodash-es.603b8f1d.js";import"./@vueuse.2c61da4b.js";import"./@element-plus.bc468cf4.js";import"./@popperjs.fd04dfd6.js";import"./@ctrl.5f67d428.js";import"./dayjs.0f6007d7.js";import"./async-validator.73a10b83.js";import"./memoize-one.c87f6fc8.js";import"./escape-html.86960cf8.js";import"./normalize-wheel-es.e2b4fa49.js";import"./@floating-ui.cac404ee.js";import"./pinia.c32067d4.js";/* empty css                      */import"./vue-router.be8e2924.js";import"./axios.62e8f306.js";import"./form-data.7576b880.js";const C={formItems:[{field:"name",type:"input",label:"角色名称",placeholder:"请输入角色名称"},{field:"intro",type:"input",label:"角色权限",placeholder:"请输入角色权限"},{field:"createTime",type:"datapicker",label:"创建时间",placeholder:"请选择创建时间范围",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"datetimerange"}}],labelWidth:"70px"},j={title:"角色列表",btnName:"新建角色",propList:[{prop:"name",label:"角色名",minWidth:"100"},{prop:"intro",label:"角色权限",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"170",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"170",slotName:"updateAt"},{label:"操作",minWidth:"100",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},k={formItems:[{field:"name",type:"input",label:"角色名",placeholder:"请输入角色名"},{field:"intro",type:"input",label:"角色权限",placeholder:"请输入角色权限"}],colLayout:{span:24},itemStyle:{padding:"0 50px 0 20px"}},y=r({name:"role",components:{PageSearch:a,PageContent:t,PageModal:o},setup(){const e=d(),{pageModalRef:a,defaultInfo:t,handleNewData:o,handleEditData:s,isTitleName:r}=n(void 0,(a=>{const t=i(a.menuList);p((()=>{e.value?.setCheckedKeys(t,!1)}))})),c=l(),f=m((()=>c.$state.entireMenu)),h=d({});return{searchFormConfig:C,contentTableConfig:j,modalConfig:k,handleNewData:o,handleEditData:s,pageModalRef:a,defaultInfo:t,isTitleName:r,menus:f,otherInfo:h,handleCheckChange:(e,a)=>{const t=[...a.checkedKeys,...a.halfCheckedKeys];h.value={menuList:t}},elTreeRef:e}}}),N={class:"role"},I={class:"menu-tree"};const T=s(y,[["render",function(a,t,o,n,l,i){const s=c("page-search"),r=c("page-content"),d=e,m=c("page-modal");return f(),h("div",N,[u(s,{searchFormConfig:a.searchFormConfig},null,8,["searchFormConfig"]),u(r,{contentTableConfig:a.contentTableConfig,"page-name":"role",onNewBtnClick:a.handleNewData,onEditBtnClick:a.handleEditData},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),u(m,{modalConfig:a.modalConfig,"page-name":"role",ref:"pageModalRef",defaultInfo:a.defaultInfo,"title-name":a.isTitleName?a.contentTableConfig.btnName:"修改","other-info":a.otherInfo},{default:g((()=>[b("div",I,[u(d,{data:a.menus,"show-checkbox":"","node-key":"id",props:{children:"children",label:"name"},onCheck:a.handleCheckChange,ref:"elTreeRef"},null,8,["data","onCheck"])])])),_:1},8,["modalConfig","defaultInfo","title-name","other-info"])])}],["__scopeId","data-v-8cb70a16"]]);export{T as default};
