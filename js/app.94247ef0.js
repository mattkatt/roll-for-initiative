(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],v=0,d=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/roll-for-initiative/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("8a23"),n=r.n(a);n.a},"27c8":function(t,e,r){"use strict";var a=r("44a8"),n=r.n(a);n.a},3185:function(t,e,r){t.exports=r.p+"img/logo-white.0f7572ab.svg"},"380b":function(t,e,r){},"44a8":function(t,e,r){},"55fe":function(t,e,r){"use strict";var a=r("6ede"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("d3b7"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"my-3 mr-3",attrs:{src:t.logo,contain:"",width:"40",height:"40"}})],1),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:t.openAddActor}},[r("v-icon",[t._v(t._s(t.icons.plus))])],1),t.$vuetify.breakpoint.mdAndDown?r("v-app-bar-nav-icon",{on:{click:t.openDrawer}},[r("v-icon",[t._v(t._s(t.icons.menu))])],1):t._e()],1),r("v-content",{staticClass:"mx-auto",staticStyle:{width:"100%","max-width":"960px"},attrs:{id:"main"}},[r("Tracker",{attrs:{tracker:t.tracker}}),r("AddActor",{on:{"add-actor":t.addActor}})],1),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.tracker.length,expression:"tracker.length"}],staticClass:"btn--left",attrs:{fab:"",fixed:"",bottom:"",left:"",dark:"",color:"primary"},on:{click:t.resetTracker}},[r("v-icon",{attrs:{size:32}},[t._v(t._s(t.icons.reload))])],1)],1),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.tracker.length,expression:"tracker.length"}],class:{"btn--right":t.$vuetify.breakpoint.lgAndUp},attrs:{fab:"",fixed:"",bottom:"",right:"",dark:"",color:"primary"},on:{click:t.rollForInitiative}},[t.rolling?r("v-progress-circular",{attrs:{indeterminate:!0,rotate:0,size:32,width:4,color:"white"}}):r("v-icon",{attrs:{size:32}},[t._v(t._s(t.icons.d20))])],1)],1),r("SideDrawer",{attrs:{actors:t.actors},on:{"destroy-actor":t.destroyActor,"move-to-tracker":t.moveToTracker}})],1)},i=[],o=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("3ca3"),r("159b"),r("ddb0"),r("96cf"),r("1da1")),c=r("2909"),s=r("94ed"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{rounded:""}},[r("v-subheader",[t._v("Characters")]),t._l(t.actorsCharacters,(function(e){return r("v-list-item",{key:e.id,staticClass:"actor character",attrs:{link:""},on:{click:function(r){return r.stopPropagation(),t.moveToTracker(e)}}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),r("v-list-item-action",[r("v-btn",{attrs:{icon:"",outlined:""},on:{click:function(r){return r.stopPropagation(),t.destroyActor(e.id)}}},[r("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.closeIcon))])],1)],1)],1)})),r("v-subheader",[t._v("Monsters/NPCs")]),t._l(t.actorsMonsters,(function(e){return r("v-list-item",{key:e.id,staticClass:"actor monster",attrs:{link:""},on:{click:function(r){return r.stopPropagation(),t.moveToTracker(e)}}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),r("v-list-item-action",[r("v-btn",{attrs:{icon:"",outlined:""},on:{click:function(r){return r.stopPropagation(),t.destroyActor(e.id)}}},[r("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.closeIcon))])],1)],1)],1)}))],2)],1)},u=[],v={name:"SideDrawer",props:{actors:Array},computed:{actorsCharacters:function(){return this.actors.filter((function(t){return"character"===t.class}))},actorsMonsters:function(){return this.actors.filter((function(t){return"monster"===t.class}))}},data:function(){return{drawer:!1,initiativeActive:!1,closeIcon:s["a"]}},created:function(){var t=this;xt.$on("open-drawer",(function(e){t.initiativeActive=e,t.drawer=!0}))},mounted:function(){this.$vuetify.breakpoint.lgAndUp&&(this.drawer=!0)},methods:{destroyActor:function(t){this.$emit("destroy-actor",t)},moveToTracker:function(t){this.$emit("move-to-tracker",t),this.initiativeActive&&(this.drawer=!1)}}},d=v,f=(r("55fe"),r("2877")),p=r("6544"),h=r.n(p),m=r("8336"),b=r("132d"),k=r("8860"),w=r("da13"),g=r("1800"),y=r("5d23"),x=r("f774"),I=r("e0c7"),A=Object(f["a"])(d,l,u,!1,null,null,null),_=A.exports;h()(A,{VBtn:m["a"],VIcon:b["a"],VList:k["a"],VListItem:w["a"],VListItemAction:g["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VNavigationDrawer:x["a"],VSubheader:I["a"]});var V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-flex",{staticClass:"tracker",attrs:{"flex-column":""}},t._l(t.tracker,(function(t){return r("Actor",{key:t.id,staticClass:"ma-2",attrs:{actor:t}})})),1)],1)},O=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"actor",class:t.actor.class},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(t.actor.name)}}),r("v-list-item-subtitle",[t._v("Initiative: +"+t._s(t.actor.bonus))])],1),r("v-list-item-avatar",[!1===t.actor.currentInitiative?r("v-icon",{staticClass:"icon--spinning",attrs:{color:"primary"}},[t._v(t._s(t.loadingIcon))]):r("span",[t._v(" "+t._s(t.actor.currentInitiative)+" ")])],1)],1)],1)},S=[],T={name:"Actor",props:["actor"],data:function(){return{loadingIcon:s["c"]}}},$=T,j=(r("27c8"),r("b0af")),R=r("8270"),P=Object(f["a"])($,C,S,!1,null,"7ca30d82",null),F=P.exports;h()(P,{VCard:j["a"],VIcon:b["a"],VListItem:w["a"],VListItemAvatar:R["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"]});var N={name:"Tracker",components:{Actor:F},props:{tracker:Array}},L=N,D=(r("c5ec"),r("a523")),M=r("0e8f"),B=Object(f["a"])(L,V,O,!1,null,null,null),E=B.exports;h()(B,{VContainer:D["a"],VFlex:M["a"]});var J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{model:{value:t.showOverlay,callback:function(e){t.showOverlay=e},expression:"showOverlay"}},[r("v-card",[r("v-card-title",[t._v("Add Actor")]),r("v-card-text",[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("v-text-field",{attrs:{type:"number",label:"Initiative Bonus"},model:{value:t.bonus,callback:function(e){t.bonus=e},expression:"bonus"}}),r("v-switch",{attrs:{label:"Character"},model:{value:t.character,callback:function(e){t.character=e},expression:"character"}}),r("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:t.validate}},[t._v("Add")])],1)],1)],1)],1)},z=[],q=(r("b0c0"),r("11c1")),U=r.n(q),G={name:"AddActor",created:function(){var t=this;xt.$on("open-add-actor",(function(e){t.showOverlay=e}))},data:function(){return{showOverlay:!1,name:"",nameRules:[function(t){return!!t||"Name is required"}],bonus:0,character:!1,valid:!1}},methods:{validate:function(){this.$refs.form.validate()&&this.addActor()},addActor:function(){this.$emit("add-actor",{id:U.a.v4(),name:this.name,currentInitiative:!1,bonus:this.bonus,class:this.character?"character":"monster"}),xt.$emit("open-drawer",!0),this.showOverlay=!1}}},H=G,K=r("99d9"),Q=r("169a"),W=r("4bd4"),X=r("b73d"),Y=r("8654"),Z=Object(f["a"])(H,J,z,!1,null,"400b1c84",null),tt=Z.exports;h()(Z,{VBtn:m["a"],VCard:j["a"],VCardText:K["a"],VCardTitle:K["b"],VDialog:Q["a"],VForm:W["a"],VSwitch:X["a"],VTextField:Y["a"]});var et={name:"App",components:{SideDrawer:_,Tracker:E,AddActor:tt},mounted:function(){this.loadState(),window.addEventListener("beforeunload",this.saveState),window.setInterval(this.saveState,6e4)},data:function(){return{logo:r("3185"),tracker:[],actors:[],initiativeActive:!1,rolling:!1,activeActor:null,icons:{menu:s["d"],plus:s["e"],reload:s["f"],d20:s["b"]}}},methods:{openAddActor:function(){xt.$emit("open-add-actor",!0)},openDrawer:function(){xt.$emit("open-drawer",this.initiativeActive)},addActor:function(t){this.actors=[].concat(Object(c["a"])(this.actors),[t])},destroyActor:function(t){this.actors=this.actors.filter((function(e){return e.id!==t}))},moveToTracker:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.tracker=[].concat(Object(c["a"])(this.tracker),[e]),this.destroyActor(e.id),!this.initiativeActive){t.next=10;break}if("character"!==e.class){t.next=8;break}return t.next=6,this.rollInitiativeForCharacter(e);case 6:r=t.sent,e.currentInitiative=parseInt(r);case 8:"monster"===e.class&&this.rollInitiativeForActor(e),this.sortTracker();case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),rollForInitiative:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.initiativeActive=!0,this.rolling=!0,e=!0,r=!1,a=void 0,t.prev=5,n=this.tracker[Symbol.iterator]();case 7:if(e=(i=n.next()).done){t.next=18;break}if(o=i.value,"character"!==o.class){t.next=14;break}return t.next=12,this.rollInitiativeForCharacter(o);case 12:c=t.sent,o.currentInitiative=parseInt(c);case 14:"monster"===o.class&&this.rollInitiativeForActor(o);case 15:e=!0,t.next=7;break;case 18:t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](5),r=!0,a=t.t0;case 24:t.prev=24,t.prev=25,e||null==n.return||n.return();case 27:if(t.prev=27,!r){t.next=30;break}throw a;case 30:return t.finish(27);case 31:return t.finish(24);case 32:this.rolling=!1,this.sortTracker();case 34:case"end":return t.stop()}}),t,this,[[5,20,24,32],[25,,27,31]])})));function e(){return t.apply(this,arguments)}return e}(),rollInitiativeForActor:function(t){var e=Math.floor(19*Math.random())+1;t.currentInitiative=parseInt(t.bonus)+e},rollInitiativeForCharacter:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.activeActor=e,t.next=3,this.$root.getInitiative(e);case 3:return r=t.sent,t.abrupt("return",r+parseInt(e.bonus));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),sortTracker:function(){this.tracker.sort(this.compareInitiative)},compareInitiative:function(t,e){var r=t,a=e;return r.currentInitiative<a.currentInitiative?1:r.currentInitiative>a.currentInitiative?-1:r.bonus<a.bonus?1:r.bonus>a.bonus?-1:r.class!==a.class?"character"===a.class?1:-1:0},resetTracker:function(){var t=this;this.tracker.forEach((function(e){e.currentInitiative=!1,t.actors=[].concat(Object(c["a"])(t.actors),[e])})),this.tracker=[],this.initiativeActive=!1},saveState:function(){var t=localStorage;t.setItem("tracker",JSON.stringify(this.tracker)),t.setItem("actors",JSON.stringify(this.actors)),t.setItem("initiativeActive",JSON.stringify(this.initiativeActive))},loadState:function(){var t=localStorage,e=t.getItem("tracker"),r=t.getItem("actors"),a=t.getItem("initiativeActive");this.tracker=e?JSON.parse(e):this.tracker,this.actors=r?JSON.parse(r):this.actors,this.initiativeActive=a?JSON.parse(a):this.initiativeActive}}},rt=et,at=(r("034f"),r("7496")),nt=r("40dc"),it=r("5bc1"),ot=r("a75b"),ct=r("0789"),st=r("adda"),lt=r("490a"),ut=r("2fa4"),vt=Object(f["a"])(rt,n,i,!1,null,null,null),dt=vt.exports;h()(vt,{VApp:at["a"],VAppBar:nt["a"],VAppBarNavIcon:it["a"],VBtn:m["a"],VContent:ot["a"],VFabTransition:ct["c"],VIcon:b["a"],VImg:st["a"],VProgressCircular:lt["a"],VSpacer:ut["a"]});var ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:""},model:{value:t.showOverlay,callback:function(e){t.showOverlay=e},expression:"showOverlay"}},[r("v-card",[r("v-card-title",{staticClass:"mb-4"},[t._v("Initiative Roll for "+t._s(t.actor.name))]),r("v-card-text",[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-select",{attrs:{outlined:"",items:t.possibleRolls,rules:t.rules,label:"Die Roll"},model:{value:t.initiativeRoll,callback:function(e){t.initiativeRoll=e},expression:"initiativeRoll"}}),r("v-btn",{attrs:{block:"",rounded:"",color:"primary"},on:{click:t.validate}},[t._v("Add")])],1)],1)],1)],1)},pt=[],ht={name:"InitiativePrompt",created:function(){for(var t=1;t<=20;t++)this.possibleRolls=[].concat(Object(c["a"])(this.possibleRolls),[{text:t,value:t}])},data:function(){return{showOverlay:!0,valid:!1,possibleRolls:[{text:"Select Result",value:0}],rules:[function(t){return t>0||"Please select a roll"}],initiativeRoll:0}},methods:{validate:function(){this.$refs.form.validate()&&this.setInitiative()},setInitiative:function(){this.$emit("submit-initiative",this.initiativeRoll)}}},mt=ht,bt=r("b974"),kt=Object(f["a"])(mt,ft,pt,!1,null,"3ef6f0e8",null),wt=kt.exports;h()(kt,{VBtn:m["a"],VCard:j["a"],VCardText:K["a"],VCardTitle:K["b"],VDialog:Q["a"],VForm:W["a"],VSelect:bt["a"]});var gt=r("f309");a["a"].use(gt["a"]);var yt=new gt["a"]({});r.d(e,"eventBus",(function(){return xt}));var xt=new a["a"];a["a"].config.productionTip=!1,new a["a"]({vuetify:yt,render:function(t){return t(dt)},methods:{getInitiative:function(t){return new Promise((function(e){var r=a["a"].extend(wt),n=new r({vuetify:yt,data:function(){return{actor:t}}});n.$once("submit-initiative",(function(t){n.$destroy(),n.$el.remove(),e(t)})),n.$mount(),document.body.appendChild(n.$el)}))}}}).$mount("#app")},"6ede":function(t,e,r){},"8a23":function(t,e,r){},c5ec:function(t,e,r){"use strict";var a=r("380b"),n=r.n(a);n.a}});
//# sourceMappingURL=app.94247ef0.js.map