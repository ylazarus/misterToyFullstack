import{_ as m,r as d,o as a,c,a as y,w as f,b as v,d as n,F as x,e as S,f as $,t as _,g as h,v as E,h as C,i as F,j as T,k as O,l as w,C as A,m as N,D as V,n as I,p as M,q as P,s as L,u as R,x as U}from"./vendor.9720b3fd.js";const z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}};z();const q={},G={class:"app-header"},J=v("Mr. Toy"),H=v("Dashboard"),j=v("App"),K=v("About");function Y(t,e,i,u,o,s){const r=d("router-link");return a(),c("section",G,[y(r,{to:"/"},{default:f(()=>[J]),_:1}),y(r,{to:"/dashboard"},{default:f(()=>[H]),_:1}),y(r,{to:"/toy"},{default:f(()=>[j]),_:1}),y(r,{to:"/about"},{default:f(()=>[K]),_:1})])}var W=m(q,[["render",Y]]);const Q={name:"app",created(){this.$store.dispatch({type:"loadToys"})},components:{appHeader:W}};function X(t,e,i,u,o,s){const r=d("app-header"),p=d("RouterView");return a(),c("section",null,[y(r),y(p)])}var Z=m(Q,[["render",X]]);const ee={name:"home"};function te(t,e,i,u,o,s){return a(),c("h1",null,"Home Page")}var oe=m(ee,[["render",te]]);const ne={name:"about",data(){return{center:{lat:32.088179,lng:34.790144},markers:[{position:{lat:32.088179,lng:34.790144}},{position:{lat:32.066278,lng:34.830301}},{position:{lat:32.093869,lng:34.882401}}]}}},se=n("h1",null,"About Page",-1),le=n("h3",null,"Our Locations:",-1),re=n("br",null,null,-1);function ie(t,e,i,u,o,s){const r=d("GMapMarker"),p=d("GMapCluster"),l=d("GMapMap");return a(),c("section",null,[se,le,y(l,{center:o.center,zoom:12,"map-type-id":"terrain"},{default:f(()=>[y(p,null,{default:f(()=>[(a(!0),c(x,null,S(o.markers,(g,D)=>(a(),$(r,{key:D,position:g.position,clickable:!0,draggable:!0,onClick:ht=>o.center=g.position},null,8,["position","onClick"]))),128))]),_:1})]),_:1},8,["center"]),re,n("button",{onClick:e[0]||(e[0]=g=>o.center=o.markers[0].position)},"Tel Aviv"),n("button",{onClick:e[1]||(e[1]=g=>o.center=o.markers[1].position)},"Ramat Gan"),n("button",{onClick:e[2]||(e[2]=g=>o.center=o.markers[2].position)},"Petach Tikva")])}var ae=m(ne,[["render",ie]]);const ue={name:"toy-preview",props:{toy:Object},computed:{isInStock(){return this.toy.inStock?"Item is in stock":"Out of Stock"}},methods:{goToDetail(){this.$router.push(`/toy/${this.toy._id}`)},goToEdit(){this.$router.push(`/toy/edit/${this.toy._id}`)},removeCar(t){console.log(t),this.$emit("removeToy",t)}}},ce={class:"toy-preview"};function de(t,e,i,u,o,s){return a(),c("li",ce,[n("h3",null,"Name: "+_(i.toy.name),1),n("p",null,"Price: "+_(i.toy.price),1),n("p",null,"Type: "+_(i.toy.labels),1),n("p",null,_(s.isInStock),1),n("button",{onClick:e[0]||(e[0]=(...r)=>s.goToEdit&&s.goToEdit(...r))},"Edit"),n("button",{onClick:e[1]||(e[1]=(...r)=>s.goToDetail&&s.goToDetail(...r))},"Details"),n("button",{onClick:e[2]||(e[2]=r=>s.removeCar(i.toy._id))},"Delete")])}var pe=m(ue,[["render",de]]);const ye={props:{toys:{type:Array,required:!0}},components:{toyPreview:pe},methods:{removeToy(t){this.$emit("removeToy",t)}}},me={class:"toy-list"};function _e(t,e,i,u,o,s){const r=d("toy-preview");return a(),c("ul",me,[(a(!0),c(x,null,S(i.toys,p=>(a(),$(r,{onRemoveToy:s.removeToy,toy:p,key:p._id},null,8,["onRemoveToy","toy"]))),128))])}var fe=m(ye,[["render",_e]]);const he={name:"toy-filter",data(){return{filterBy:{name:"",inStock:"",labels:[],sortBy:""},options:[{value:"On wheels",label:"On wheels"},{value:"Box game",label:"Box game"},{value:"Art",label:"Art"},{value:"Baby",label:"Baby"},{value:"Doll",label:"Doll"},{value:"Puzzle",label:"Puzzle"},{value:"Outdoor",label:"Outdoor"}]}},methods:{setFilter(){this.$emit("setFilter",JSON.parse(JSON.stringify(this.filterBy)))}}},ve={class:"toy-filter"},be=v(" Stock: "),ge=n("option",{value:""},"All",-1),Te=n("option",{value:"true"},"In stock",-1),ke=n("option",{value:"false"},"Not in stock",-1),$e=[ge,Te,ke],Be=v(" Labels: "),xe={style:{display:"inline-block","margin-left":"20px"}},Se=v(" Sort By: "),Ee=n("option",{value:"time"},"Time",-1),Ce=n("option",{value:"name"},"Name",-1),Fe=n("option",{value:"price"},"Price",-1),De=[Ee,Ce,Fe];function Oe(t,e,i,u,o,s){const r=d("el-option"),p=d("el-select");return a(),c("section",ve,[h(n("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>o.filterBy.name=l),onInput:e[1]||(e[1]=(...l)=>s.setFilter&&s.setFilter(...l)),type:"text",placeholder:"Search toy name..."},null,544),[[E,o.filterBy.name]]),n("label",null,[be,h(n("select",{onChange:e[2]||(e[2]=(...l)=>s.setFilter&&s.setFilter(...l)),"onUpdate:modelValue":e[3]||(e[3]=l=>o.filterBy.inStock=l)},$e,544),[[C,o.filterBy.inStock]])]),n("label",null,[Be,n("div",xe,[y(p,{modelValue:o.filterBy.labels,"onUpdate:modelValue":e[4]||(e[4]=l=>o.filterBy.labels=l),multiple:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"Select",onChange:s.setFilter,style:{width:"240px"}},{default:f(()=>[(a(!0),c(x,null,S(o.options,l=>(a(),$(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),n("label",null,[Se,h(n("select",{onChange:e[5]||(e[5]=(...l)=>s.setFilter&&s.setFilter(...l)),"onUpdate:modelValue":e[6]||(e[6]=l=>o.filterBy.sortBy=l)},De,544),[[C,o.filterBy.sortBy]])])])])}var we=m(he,[["render",Oe]]);const Ae={name:"toy-app",data(){return{}},computed:{toys(){return this.$store.getters.toys}},created(){},methods:{loadToys(){toyService.query().then(t=>this.toys=t)},setFilter(t){this.$store.dispatch({type:"filter",filterBy:t})},goToEdit(){this.$router.push("/toy/edit")},removeToy(t){this.$store.dispatch({type:"removeToy",id:t})}},components:{toyList:fe,toyFilter:we}},Ne={class:"toy-app"};function Ve(t,e,i,u,o,s){const r=d("toy-filter"),p=d("toy-list");return a(),c("section",Ne,[n("button",{onClick:e[0]||(e[0]=(...l)=>s.goToEdit&&s.goToEdit(...l))},"Add A New Toy"),y(r,{onSetFilter:s.setFilter},null,8,["onSetFilter"]),s.toys?(a(),$(p,{key:0,onRemoveToy:s.removeToy,toys:s.toys},null,8,["onRemoveToy","toys"])):F("",!0)])}var Ie=m(Ae,[["render",Ve]]);const k="/api/toy",b={query:Me,getById:Pe,remove:Le,save:Re,getEmptyToy:Ue};function Me(t){return T.get(k,{params:t}).then(e=>e.data)}function Pe(t){return T.get(k+t).then(e=>e.data)}function Le(t){return T.delete(k+t)}function Re(t){return t._id?T.put(k+t._id,t):T.post(k,t)}function Ue(){return{name:"",price:0,labels:"",reviews:[],type:"",inStock:!0}}const ze={name:"toy-edit",data(){return{toyToEdit:null,options:[{value:"On wheels",label:"On wheels"},{value:"Box game",label:"Box game"},{value:"Art",label:"Art"},{value:"Baby",label:"Baby"},{value:"Doll",label:"Doll"},{value:"Puzzle",label:"Puzzle"},{value:"Outdoor",label:"Outdoor"}]}},created(){const{id:t}=this.$route.params;t?b.getById(t).then(e=>{this.toyToEdit=JSON.parse(JSON.stringify(e))}):this.toyToEdit=b.getEmptyToy()},methods:{goBack(){this.$router.push("/toy")},saveToy(){this.$store.dispatch({type:"saveToy",toy:JSON.parse(JSON.stringify(this.toyToEdit))})}}},qe={key:0,class:"toy-edit"},Ge={class:"form-control"},Je=n("label",{for:"name",class:"form-label"},"Toy Name",-1),He={class:"form-control"},je=n("label",{for:"type",class:"form-label"},"Toy Type",-1),Ke=n("option",{value:"adult"},"Adult",-1),Ye=n("option",{value:"fun"},"Fun",-1),We=n("option",{value:"educational"},"Educational",-1),Qe=[Ke,Ye,We],Xe={class:"form-control"},Ze=n("label",{for:"price",class:"form-label"},"Toy price",-1),et={class:"form-control"},tt=n("label",{for:"in-stock",class:"form-label"},"In Stock",-1),ot={style:{display:"inline-block","margin-left":"20px"}},nt={class:"btn-group"};function st(t,e,i,u,o,s){const r=d("el-option"),p=d("el-select");return o.toyToEdit?(a(),c("section",qe,[n("form",{onSubmit:e[7]||(e[7]=w((...l)=>s.saveToy&&s.saveToy(...l),["prevent"])),class:"form"},[n("div",Ge,[Je,h(n("input",{required:"","onUpdate:modelValue":e[0]||(e[0]=l=>o.toyToEdit.name=l),id:"name",type:"text",class:"form-input",placeholder:"Enter toy name here..."},null,512),[[E,o.toyToEdit.name]])]),n("div",He,[je,h(n("select",{"onUpdate:modelValue":e[1]||(e[1]=l=>o.toyToEdit.type=l)},Qe,512),[[C,o.toyToEdit.type]])]),n("div",Xe,[Ze,h(n("input",{required:"","onUpdate:modelValue":e[2]||(e[2]=l=>o.toyToEdit.price=l),id:"price",type:"number",class:"form-input"},null,512),[[E,o.toyToEdit.price,void 0,{number:!0}]])]),n("div",et,[tt,h(n("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>o.toyToEdit.inStock=l),id:"in-stock",type:"checkbox",class:"form-input"},null,512),[[O,o.toyToEdit.inStock]]),n("div",ot,[y(p,{modelValue:o.toyToEdit.labels,"onUpdate:modelValue":e[4]||(e[4]=l=>o.toyToEdit.labels=l),multiple:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"Select",style:{width:"240px"}},{default:f(()=>[(a(!0),c(x,null,S(o.options,l=>(a(),$(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),n("div",nt,[n("button",{onClick:e[5]||(e[5]=(...l)=>s.saveToy&&s.saveToy(...l))},"Save"),n("button",{onClick:e[6]||(e[6]=(...l)=>s.goBack&&s.goBack(...l))},"Go Back")])],32)])):F("",!0)}var lt=m(ze,[["render",st]]);const rt={name:"toy-detail",data(){return{toy:null}},computed:{isInStock(){return this.toy.inStock?"Item is in stock":"Out of Stock"}},created(){const{id:t}=this.$route.params;b.getById(t).then(e=>{this.toy=e})},methods:{goBack(){this.$router.push("/toy")}}},it={key:0,class:"toy-details flex flex-col items-center gap-2"};function at(t,e,i,u,o,s){return o.toy?(a(),c("section",it,[n("article",null,[n("p",null,"ID: "+_(o.toy._id),1),n("p",null,"Name: "+_(o.toy.name),1),n("p",null,"Price: "+_(o.toy.price),1),n("p",null,"Labels: "+_(o.toy.label),1),n("p",null,"Reviews: "+_(o.toy.reviews),1),n("p",null,_(s.isInStock),1)]),n("button",{onClick:e[0]||(e[0]=(...r)=>s.goBack&&s.goBack(...r))},"Back")])):F("",!0)}var ut=m(rt,[["render",at]]);A.register(...N);const ct={components:{DoughnutChart:V},created(){this.toys=this.$store.getters.toys,this.testData.datasets[0].data=[this.educationalToys,this.funToys,this.adultToys]},computed:{educationalToys(){return this.toys.filter(e=>e.type==="educational").length/this.toys.length},funToys(){return this.toys.filter(e=>e.type==="fun").length/this.toys.length},adultToys(){return this.toys.filter(e=>e.type==="adult").length/this.toys.length}},data(){return{toys:null,testData:{labels:["Educational","Fun","Adult"],datasets:[{data:[],backgroundColor:["#77CEFF","#0079AF","#123E6B"]}]}}}},dt=n("h1",null,"Percent of Toys by Type",-1);function pt(t,e,i,u,o,s){const r=d("DoughnutChart");return a(),c("section",null,[dt,y(r,{chartData:o.testData},null,8,["chartData"])])}var yt=m(ct,[["render",pt]]);const mt=I({history:M(),linkActiveClass:"active",routes:[{path:"/",name:"home",component:oe},{path:"/toy",name:"toy-app",component:Ie},{path:"/toy/:id",name:"toy-details",component:ut},{path:"/toy/edit/:id?",name:"toy-edit",component:lt},{path:"/dashboard",name:"dashboard",component:yt},{path:"/about",name:"about",component:ae}]});var _t={state:{toys:null,filterBy:null},getters:{toys(t){return t.toys}},mutations:{setToys(t,{toys:e}){t.toys=e},removeToy(t,{id:e}){console.log("in mutations");const i=t.toys.findIndex(u=>u._id===e);t.toys.splice(i,1),console.log(t.toys)},saveToy(t,{toy:e}){const i=t.toys.findIndex(u=>u.id===e.id);i!==-1?t.toys.splice(i,1,e):t.toys.push(e)},setFilter(t,{filterBy:e}){t.filterBy=e}},actions:{loadToys({commit:t,state:e}){b.query(e.filterBy).then(i=>{t({type:"setToys",toys:i})})},removeToy({commit:t},{id:e}){console.log("in actions"),b.remove(e).then(()=>{t({type:"removeToy",id:e})})},saveToy({commit:t},{toy:e}){console.log("in action"),b.save(e).then(i=>{t({type:"saveToy",toy:i})})},filter({commit:t,dispatch:e},{filterBy:i}){t({type:"setFilter",filterBy:i}),e({type:"loadToys"})}}};const ft=P({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{toyStore:_t}});const B=L(Z);B.use(R,{load:{key:{}.API_KEY}});B.use(mt);B.use(ft);B.use(U);B.mount("#app");