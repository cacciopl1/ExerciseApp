(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423d114c"],{"1dde":function(e,t,r){var n=r("d039"),i=r("b622"),a=r("2d00"),o=i("species");e.exports=function(e){return a>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,r){"use strict";var n=r("6eeb"),i=r("825a"),a=r("d039"),o=r("ad6d"),u="toString",c=RegExp.prototype,s=c[u],d=a((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=u;(d||f)&&n(RegExp.prototype,u,(function(){var e=i(this),t=String(e.source),r=e.flags,n=String(void 0===r&&e instanceof RegExp&&!("flags"in c)?o.call(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"2d3b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[e._m(0),r("h1",[e._v("This is how far I got with the search feature. It took me the better of the two hours to try and get data to read the json array but finally figured it out around 2:00pm. My next step was going to have the users be able to pull up tracked data but I ran out of time unfortunately. Although, I think the important part is that I got the search function to read from the database")]),r("br"),r("section",[r("p",{staticClass:"content"},[r("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),r("b-field",{attrs:{label:"Search for posted workouts, other users, etc."}},[r("b-autocomplete",{attrs:{rounded:"",data:e.filteredDataArray,placeholder:"e.g. jQuery",icon:"magnify",clearable:""},on:{select:function(t){return e.selected=t}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[r("template",{slot:"empty"},[e._v("No results found")])],2)],1)],1)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[r("b",[e._v("Welcome to the search page!")])])}],a=(r("4de4"),r("c975"),r("d81d"),r("b0c0"),r("d3b7"),r("25f0"),r("96cf"),r("1da1")),o=r("bea6"),u=(r("8e13"),{data:function(){return{data:[],userData:[],trackedData:[],name:"",selected:null}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["c"])();case 2:e.userData=t.sent,e.data=e.userData.map((function(e){return e.FirstName+" "+e.LastName+" => DOB: "+e.DOB+" User Type: "+e.User_Type}));case 4:case"end":return t.stop()}}),t)})))()},computed:{filteredDataArray:function(){var e=this;return this.data.filter((function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0}))}}}),c=u,s=r("2877"),d=Object(s["a"])(c,n,i,!1,null,null,null);t["default"]=d.exports},"4de4":function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").filter,a=r("1dde"),o=r("ae40"),u=a("filter"),c=o("filter");n({target:"Array",proto:!0,forced:!u||!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");e.exports=function(e,t){var r;return i(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"8e13":function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"e",(function(){return u})),r.d(t,"i",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"j",(function(){return d})),r.d(t,"g",(function(){return f})),r.d(t,"b",(function(){return l})),r.d(t,"k",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"a",(function(){return _})),r.d(t,"h",(function(){return b}));var n=r("773f"),i=r("5147"),a=r("322c"),o=function(){return Object(n["a"])("workouts/byUser/".concat(i["a"].user.id))},u=function(){return Object(n["a"])("workouts/byUser/".concat(a["a"].user.Fid.Follower_id))};function c(e){return Object(n["a"])("reactions",{Workout_id:e,Owner_id:i["a"].user.id})}function s(e,t){return Object(n["a"])("comments",{Workout_id:e,Owner_id:i["a"].user.id,Text:t})}function d(e,t){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Outdoor Run",Note:e,Distance:t})}function f(e,t){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Indoor Run",Note:e,Distance:t})}function l(e,t,r,a){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Bi's and Tri's",Note:e,Sets:t,Reps_Per_Set:r,Weight:a})}function p(e,t,r,a){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Shoulders",Note:e,Sets:t,Reps_Per_Set:r,Weight:a})}function h(e,t,r,a){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Chest",Note:e,Sets:t,Reps_Per_Set:r,Weight:a})}function _(e,t,r,a){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Back",Note:e,Sets:t,Reps_Per_Set:r,Weight:a})}function b(e,t,r,a){return Object(n["a"])("workouts",{Owner_id:i["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Leg Day",Note:e,Sets:t,Reps_Per_Set:r,Weight:a})}},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,u={},c=function(e){throw e};e.exports=function(e,t){if(a(u,e))return u[e];t||(t={});var r=[][e],s=!!a(t,"ACCESSORS")&&t.ACCESSORS,d=a(t,0)?t[0]:c,f=a(t,1)?t[1]:void 0;return u[e]=!!r&&!i((function(){if(s&&!n)return!0;var e={length:-1};s?o(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,d,f)}))}},b0c0:function(e,t,r){var n=r("83ab"),i=r("9bf2").f,a=Function.prototype,o=a.toString,u=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(e){return""}}})},b727:function(e,t,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),u=r("65f0"),c=[].push,s=function(e){var t=1==e,r=2==e,s=3==e,d=4==e,f=6==e,l=5==e||f;return function(p,h,_,b){for(var m,v,g=a(p),O=i(g),y=n(h,_,3),S=o(O.length),w=0,x=b||u,T=t?x(p,S):r?x(p,0):void 0;S>w;w++)if((l||w in O)&&(m=O[w],v=y(m,w,g),e))if(t)T[w]=v;else if(v)switch(e){case 3:return!0;case 5:return m;case 6:return w;case 2:c.call(T,m)}else if(d)return!1;return f?-1:s||d?d:T}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c975:function(e,t,r){"use strict";var n=r("23e7"),i=r("4d64").indexOf,a=r("a640"),o=r("ae40"),u=[].indexOf,c=!!u&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!s||!d},{indexOf:function(e){return c?u.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},d81d:function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),o=r("ae40"),u=a("map"),c=o("map");n({target:"Array",proto:!0,forced:!u||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-423d114c.b7e8cb1a.js.map