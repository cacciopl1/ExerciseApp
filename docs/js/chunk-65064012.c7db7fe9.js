(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65064012"],{"088c":function(t,e,s){"use strict";var r=s("9e3d"),n=s.n(r);n.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var r=s("1d80"),n=s("5899"),i="["+n+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var s=String(r(e));return 1&t&&(s=s.replace(a,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var r=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var i,a;return n&&"function"==typeof(i=e.constructor)&&i!==s&&r(a=i.prototype)&&a!==s.prototype&&n(t,a),t}},"8e13":function(t,e,s){"use strict";s.d(e,"f",(function(){return a})),s.d(e,"e",(function(){return o})),s.d(e,"i",(function(){return c})),s.d(e,"d",(function(){return u})),s.d(e,"j",(function(){return l})),s.d(e,"g",(function(){return d})),s.d(e,"b",(function(){return f})),s.d(e,"k",(function(){return m})),s.d(e,"c",(function(){return _})),s.d(e,"a",(function(){return p})),s.d(e,"h",(function(){return v}));var r=s("773f"),n=s("5147"),i=s("322c"),a=function(){return Object(r["a"])("workouts/byUser/".concat(n["a"].user.id))},o=function(){return Object(r["a"])("workouts/byUser/".concat(i["a"].user.Fid.Follower_id))};function c(t){return Object(r["a"])("reactions",{Workout_id:t,Owner_id:n["a"].user.id})}function u(t,e){return Object(r["a"])("comments",{Workout_id:t,Owner_id:n["a"].user.id,Text:e})}function l(t,e){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Outdoor Run",Note:t,Distance:e})}function d(t,e){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Indoor Run",Note:t,Distance:e})}function f(t,e,s,i){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Bi's and Tri's",Note:t,Sets:e,Reps_Per_Set:s,Weight:i})}function m(t,e,s,i){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Shoulders",Note:t,Sets:e,Reps_Per_Set:s,Weight:i})}function _(t,e,s,i){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Chest",Note:t,Sets:e,Reps_Per_Set:s,Weight:i})}function p(t,e,s,i){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Back",Note:t,Sets:e,Reps_Per_Set:s,Weight:i})}function v(t,e,s,i){return Object(r["a"])("workouts",{Owner_id:n["a"].user.id,Privacy_Setting:4,Start_Time:"NOW()",End_Time:"NOW()",Exercise_Type:"Leg Day",Note:t,Sets:e,Reps_Per_Set:s,Weight:i})}},"952c":function(t,e,s){"use strict";var r=s("bdf7"),n=s.n(r);n.a},"9e3d":function(t,e,s){},a9e3:function(t,e,s){"use strict";var r=s("83ab"),n=s("da84"),i=s("94ca"),a=s("6eeb"),o=s("5135"),c=s("c6b6"),u=s("7156"),l=s("c04e"),d=s("d039"),f=s("7c73"),m=s("241c").f,_=s("06cf").f,p=s("9bf2").f,v=s("58a8").trim,k="Number",h=n[k],w=h.prototype,b=c(f(w))==k,g=function(t){var e,s,r,n,i,a,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(i=u.slice(2),a=i.length,o=0;o<a;o++)if(c=i.charCodeAt(o),c<48||c>n)return NaN;return parseInt(i,r)}return+u};if(i(k,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var C,O=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof O&&(b?d((function(){w.valueOf.call(s)})):c(s)!=k)?u(new h(g(e)),s,O):g(e)},N=r?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)o(h,C=N[x])&&!o(O,C)&&p(O,C,_(h,C));O.prototype=w,w.constructor=O,a(n,k,O)}},bdf7:function(t,e,s){},ff9b:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tracked"},[t._m(0),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[t._l(t.workouts,(function(t,e){return s("Completed",{key:e,attrs:{i:e,workouts:t}})})),t._l(t.friendsWorkouts,(function(t,e){return s("CompletedFollowers",{key:e,attrs:{i:e,friendsWorkouts:t}})}))],2),s("div",{staticClass:"column is-one-third"},[s("Friends"),s("a",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.test(e)}}},[t._v(" Submit ")])],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"title is-4"},[s("br"),s("b",[t._v("These are your tracked workouts:")])])}],i=(s("96cf"),s("1da1")),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"panel is-black"},[s("p",{staticClass:"panel-heading"},[t._v(" Users ")]),t._m(0),s("p",{staticClass:"panel-tabs"},[s("a",{on:{click:function(e){return e.preventDefault(),t.clickAll(e)}}},[t._v("All")]),s("a",{on:{click:function(e){return e.preventDefault(),t.clickFollowing(e)}}},[t._v("Friends")])]),this.all?s("div",t._l(t.allUsers,(function(e,r){return s("a",{key:r,staticClass:"panel-block is-active",attrs:{i:r,post:e}},[s("div",[s("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName))]),s("a",{staticClass:"button is-primary",on:{click:function(s){return s.preventDefault(),t.follow(e.id)}}},[t._v(" Follow ")])])])})),0):this.following?s("div",t._l(t.followingUsers,(function(e,r){return s("a",{key:r,staticClass:"panel-block is-active",attrs:{i:r,post:e}},[s("div",[s("b",[t._v(t._s(e.Firstname)+" "+t._s(e.LastName))])])])})),0):t._e()])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-block"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search"}}),s("span",{staticClass:"icon is-left"},[s("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])])}],c=s("bea6"),u=s("5147"),l={data:function(){return{allUsers:[],followingUsers:[],all:!0,following:!1,session:u["a"]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:return t.allUsers=e.sent,e.next=5,Object(c["b"])();case 5:t.followingUsers=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{clickAll:function(){this.all=!0,this.following=!1},clickFollowing:function(){this.all=!1,this.following=!0},follow:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])(t,u["a"].user.id);case 2:e.sent,alert("Follow successful! They now have to follow you back on their profile in order for you to see them on your friends list.");case 4:case"end":return e.stop()}}),e)})))()}}},d=l,f=s("2877"),m=Object(f["a"])(d,a,o,!1,null,null,null),_=m.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:"http://localhost:3001/public/profiles/"+t.workouts.Owner_id+".jpg"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.workouts.FirstName)+" "+t._s(t.workouts.LastName))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.workouts.Exercise_Type))])])]),t._m(0),s("div",{staticClass:"content"},[t._v(" "+t._s(t.workouts.Note)+" "),s("br"),s("time",{attrs:{datetime:t.workouts.created_at}},[t._v(t._s(t.workouts.created_at))])]),t._l(t.workouts.Comments,(function(e){return s("div",{key:e.id,staticClass:"media"},[s("div",{staticClass:"media-content"},[s("span",[s("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName)+" ")]),t._v(" "+t._s(e.Text)+" ")])])])})),s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a Comment"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.comment(e)}}},[s("i",{staticClass:"fas fa-comment"})])])]),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.like(e)}}},[s("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(t.workouts.Reactions)+" ")])])],2)])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"https://a.abcnews.com/images/Lifestyle/HT_dailymoves_workouts_mm_151231.gif"}})])])}],k=(s("a9e3"),s("8e13")),h={data:function(){return{commentText:""}},props:{workouts:Object,i:Number},methods:{like:function(){var t=this;Object(k["i"])(this.workouts.id).then((function(e){return t.workouts.Reactions+=1})).catch((function(t){return console.error(t)}))},comment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["d"])(t.workouts.id,t.commentText);case 2:s=e.sent,t.workouts.Comments.push(s);case 4:case"end":return e.stop()}}),e)})))()}}},w=h,b=(s("088c"),Object(f["a"])(w,p,v,!1,null,null,null)),g=b.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:"http://localhost:3001/public/profiles/"+t.friendsWorkouts.Owner_id+".jpg"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.friendsWorkouts.FirstName)+" "+t._s(t.friendsWorkouts.LastName))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.friendsWorkouts.Exercise_Type))])])]),t._m(0),s("div",{staticClass:"content"},[t._v(" "+t._s(t.friendsWorkouts.Note)+" "),s("br"),s("time",{attrs:{datetime:t.friendsWorkouts.created_at}},[t._v(t._s(t.friendsWorkouts.created_at))])]),t._l(t.friendsWorkouts.Comments,(function(e){return s("div",{key:e.id,staticClass:"media"},[s("div",{staticClass:"media-content"},[s("span",[s("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName)+" ")]),t._v(" "+t._s(e.Text)+" ")])])])})),s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a Comment"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.comment(e)}}},[s("i",{staticClass:"fas fa-comment"})])])]),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.like(e)}}},[s("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(t.friendsWorkouts.Reactions)+" ")])])],2)])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"https://a.abcnews.com/images/Lifestyle/HT_dailymoves_workouts_mm_151231.gif"}})])])}],N={data:function(){return{commentText:""}},props:{friendsWorkouts:Object,i:Number},methods:{like:function(){var t=this;Object(k["i"])(this.friendsWorkouts.id).then((function(e){return t.friendsWorkouts.Reactions+=1})).catch((function(t){return console.error(t)}))},comment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["d"])(t.friendsWorkouts.id,t.commentText);case 2:s=e.sent,t.friendsWorkouts.Comments.push(s);case 4:case"end":return e.stop()}}),e)})))()}}},x=N,y=(s("952c"),Object(f["a"])(x,C,O,!1,null,null,null)),T=y.exports,W=(s("322c"),{data:function(){return{workouts:[],friendsWorkouts:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["f"])();case 2:return t.workouts=e.sent,e.next=5,Object(k["e"])();case 5:t.friendsWorkouts=e.sent;case 6:case"end":return e.stop()}}),e)})))()},components:{Friends:_,Completed:g,CompletedFollowers:T},methods:{test:function(){console.log(this.workouts),console.log(this.friendsWorkouts),console.log(u["a"].user)}}}),E=W,j=Object(f["a"])(E,r,n,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-65064012.c7db7fe9.js.map