(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c66b0bd0"],{"088c":function(t,e,r){"use strict";var n=r("9e3d"),s=r.n(n);s.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),s=r("5899"),i="["+s+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,r){var n=r("861d"),s=r("d2bb");t.exports=function(t,e,r){var i,a;return s&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&s(t,a),t}},"8e13":function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"e",(function(){return o})),r.d(e,"i",(function(){return c})),r.d(e,"d",(function(){return u})),r.d(e,"j",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"b",(function(){return d})),r.d(e,"k",(function(){return _})),r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return p})),r.d(e,"h",(function(){return v}));var n=r("773f"),s=r("5147"),i=r("322c"),a=function(){return Object(n["a"])("workouts/byUser/".concat(s["a"].user.id))},o=function(){return Object(n["a"])("workouts/byUser/".concat(i["a"].user.Fid.Follower_id))};function c(t){return Object(n["a"])("reactions",{Workout_id:t,Owner_id:s["a"].user.id})}function u(t,e){return Object(n["a"])("comments",{Workout_id:t,Owner_id:s["a"].user.id,Text:e})}function l(t,e){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Outdoor Run",Note:t,Distance:e})}function f(t,e){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Indoor Run",Note:t,Distance:e})}function d(t,e,r,i){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Bi's and Tri's",Note:t,Sets:e,Reps_Per_Set:r,Weight:i})}function _(t,e,r,i){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Shoulders",Note:t,Sets:e,Reps_Per_Set:r,Weight:i})}function m(t,e,r,i){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Chest",Note:t,Sets:e,Reps_Per_Set:r,Weight:i})}function p(t,e,r,i){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Back",Note:t,Sets:e,Reps_Per_Set:r,Weight:i})}function v(t,e,r,i){return Object(n["a"])("workouts",{Owner_id:s["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Leg Day",Note:t,Sets:e,Reps_Per_Set:r,Weight:i})}},"9e3d":function(t,e,r){},a9e3:function(t,e,r){"use strict";var n=r("83ab"),s=r("da84"),i=r("94ca"),a=r("6eeb"),o=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),_=r("241c").f,m=r("06cf").f,p=r("9bf2").f,v=r("58a8").trim,w="Number",h=s[w],k=h.prototype,b=c(d(k))==w,g=function(t){var e,r,n,s,i,a,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(i=u.slice(2),a=i.length,o=0;o<a;o++)if(c=i.charCodeAt(o),c<48||c>s)return NaN;return parseInt(i,n)}return+u};if(i(w,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var O,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(b?f((function(){k.valueOf.call(r)})):c(r)!=w)?u(new h(g(e)),r,N):g(e)},C=n?_(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)o(h,O=C[y])&&!o(N,O)&&p(N,O,m(h,O));N.prototype=k,k.constructor=N,a(s,w,N)}},ff9b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tracked"},[t._m(0),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-two-thirds"},[t._l(t.workouts,(function(t,e){return r("Completed",{key:e,attrs:{i:e,workouts:t}})})),t._l(t.friendsWorkouts,(function(t,e){return r("Completed",{key:e,attrs:{i:e,friendsWorkouts:t}})}))],2)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title is-4"},[r("br"),r("b",[t._v("These are your tracked workouts:")])])}],i=(r("96cf"),r("1da1")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"panel is-black"},[r("p",{staticClass:"panel-heading"},[t._v(" Users ")]),t._m(0),r("p",{staticClass:"panel-tabs"},[r("a",{on:{click:function(e){return e.preventDefault(),t.clickAll(e)}}},[t._v("All")]),r("a",{on:{click:function(e){return e.preventDefault(),t.clickFollowing(e)}}},[t._v("Friends")])]),this.all?r("div",t._l(t.allUsers,(function(e,n){return r("a",{key:n,staticClass:"panel-block is-active",attrs:{i:n,post:e}},[r("div",[r("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName))]),r("a",{staticClass:"button is-primary",on:{click:function(r){return r.preventDefault(),t.follow(e.id)}}},[t._v(" Follow ")])])])})),0):this.following?r("div",t._l(t.followingUsers,(function(e,n){return r("a",{key:n,staticClass:"panel-block is-active",attrs:{i:n,post:e}},[r("div",[r("b",[t._v(t._s(e.Firstname)+" "+t._s(e.LastName))])])])})),0):t._e()])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-block"},[r("p",{staticClass:"control has-icons-left"},[r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search"}}),r("span",{staticClass:"icon is-left"},[r("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])])}],c=r("bea6"),u=r("5147"),l={data:function(){return{allUsers:[],followingUsers:[],all:!0,following:!1,session:u["a"]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:return t.allUsers=e.sent,e.next=5,Object(c["b"])();case 5:t.followingUsers=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{clickAll:function(){this.all=!0,this.following=!1},clickFollowing:function(){this.all=!1,this.following=!0},follow:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])(t,u["a"].user.id);case 2:e.sent,alert("Follow successful! They now have to follow you back on their profile in order for you to see them on your friends list.");case 4:case"end":return e.stop()}}),e)})))()}}},f=l,d=r("2877"),_=Object(d["a"])(f,a,o,!1,null,null,null),m=_.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-48x48"},[r("img",{attrs:{src:"http://localhost:3001/public/profiles/"+t.workouts.Owner_id+".jpg"}})])]),r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(t.workouts.FirstName)+" "+t._s(t.workouts.LastName))]),r("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.workouts.Exercise_Type))])])]),t._m(0),r("div",{staticClass:"content"},[t._v(" "+t._s(t.workouts.Note)+" "),r("br"),r("time",{attrs:{datetime:t.workouts.created_at}},[t._v(t._s(t.workouts.created_at))])]),t._l(t.workouts.Comments,(function(e){return r("div",{key:e.id,staticClass:"media"},[r("div",{staticClass:"media-content"},[r("span",[r("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName)+" ")]),t._v(" "+t._s(e.Text)+" ")])])])})),r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control is-expanded"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a Comment"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.comment(e)}}},[r("i",{staticClass:"fas fa-comment"})])])]),r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.like(e)}}},[r("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(t.workouts.Reactions)+" ")])])],2)])},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:"https://a.abcnews.com/images/Lifestyle/HT_dailymoves_workouts_mm_151231.gif"}})])])}],w=(r("a9e3"),r("8e13")),h={data:function(){return{commentText:""}},props:{workouts:Object,i:Number},methods:{like:function(){var t=this;Object(w["i"])(this.workouts.id).then((function(e){return t.workouts.Reactions+=1})).catch((function(t){return console.error(t)}))},comment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["d"])(t.workouts.id,t.commentText);case 2:r=e.sent,t.workouts.Comments.push(r);case 4:case"end":return e.stop()}}),e)})))()}}},k=h,b=(r("088c"),Object(d["a"])(k,p,v,!1,null,null,null)),g=b.exports,O=(r("322c"),{data:function(){return{workouts:[],friendsWorkouts:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["f"])();case 2:return t.workouts=e.sent,e.next=5,Object(w["e"])();case 5:t.friendsWorkouts=e.sent;case 6:case"end":return e.stop()}}),e)})))()},components:{Friends:m,Completed:g},methods:{test:function(){console.log(this.workouts),console.log(this.friendsWorkouts)}}}),N=O,C=Object(d["a"])(N,n,s,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-c66b0bd0.2036957d.js.map