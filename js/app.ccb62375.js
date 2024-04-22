(function(){"use strict";var t={453:function(t,e,o){var n=o(5130),A=o(6768);function a(t,e,o,n,a,i){const r=(0,A.g2)("headerComp"),s=(0,A.g2)("homePage"),c=(0,A.g2)("skillsComp"),l=(0,A.g2)("aboutMe"),d=(0,A.g2)("portfolioComp"),N=(0,A.g2)("footerComp");return(0,A.uX)(),(0,A.CE)(A.FK,null,[(0,A.bF)(r),(0,A.bF)(s),(0,A.bF)(c),(0,A.bF)(l),(0,A.bF)(d),(0,A.bF)(N)],64)}var i=o(4232);const r=t=>((0,A.Qi)("data-v-37dfbf78"),t=t(),(0,A.jt)(),t),s={class:"header center"},c=(0,A.Fv)('<nav class="header__nav-left" data-v-37dfbf78><svg width="59" height="42" viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-37dfbf78><path d="M2.41669 22L14.0233 40L29.5 27L2.41669 22Z" stroke="#e25300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-37dfbf78></path><path d="M56.5833 22L44.9768 40L29.5 27L56.5833 22Z" stroke="#d3e200" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-37dfbf78></path><path d="M14.6042 40H44.3959L29.5 27L14.6042 40Z" stroke="#de00e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-37dfbf78></path><path d="M13.25 24L29.5 2L45.75 24" stroke="#26e200" stroke-width="4" stroke-linejoin="round" data-v-37dfbf78></path></svg><h3 class="header__nav-left_h3" data-v-37dfbf78>NM</h3></nav>',1),l={class:"header__nav-right"},d=r((()=>(0,A.Lk)("div",{class:"header__toggle-switch--circle"},null,-1))),N=[d];function u(t,e,o,n,a,r){return(0,A.uX)(),(0,A.CE)("header",null,[(0,A.Lk)("div",s,[c,(0,A.Lk)("nav",l,[(0,A.Lk)("button",{onClick:e[0]||(e[0]=t=>n.scrollToSection("aboutMe")),class:"header__nav-right_btn"},(0,i.v_)(t.$t("buttons.AboutMe")),1),(0,A.Lk)("button",{onClick:e[1]||(e[1]=t=>n.scrollToSection("portfolioComp")),class:"header__nav-right_btn"},(0,i.v_)(t.$t("buttons.Portfolio")),1),(0,A.Lk)("button",{onClick:e[2]||(e[2]=t=>n.scrollToSection("footerComp")),class:"header__nav-right_btn"},(0,i.v_)(t.$t("buttons.Contact")),1),(0,A.Lk)("button",{class:"header__nav-right_btn",onClick:e[3]||(e[3]=(...t)=>r.handleButtonClick&&r.handleButtonClick(...t))},"Ru"),(0,A.Lk)("div",{class:(0,i.C4)(["header__toggle-switch",{active:n.isSwitchActive}])},N,2),(0,A.Lk)("button",{class:"header__nav-right_btn",onClick:e[4]||(e[4]=(...t)=>r.handleButtonClick&&r.handleButtonClick(...t))},"Eng")])])])}var g=o(5384),h={setup(){const{t:t,locale:e}=(0,g.s9)({useScope:"global"}),o=()=>{"en"===e.value?e.value="ru":e.value="en"},n=t=>{const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})};return{t:t,switchLand:o,scrollToSection:n,isSwitchActive:!1}},methods:{handleButtonClick(){this.switchLand(),this.isSwitchActive=!this.isSwitchActive}}},v=o(1241);const L=(0,v.A)(h,[["render",u],["__scopeId","data-v-37dfbf78"]]);var w=L,M=o.p+"img/me.bff669ef.jpg";const f=t=>((0,A.Qi)("data-v-0c119944"),t=t(),(0,A.jt)(),t),p={class:"center"},k={class:"main"},b={class:"main__left-content"},C={class:"main__left-content_h3"},B={class:"main__left-content_h2"},m={class:"main__left-content_text"},Q={href:"https://t.me/TuseaMiki",target:"_blank",class:"main__left-content_btn"},x=f((()=>(0,A.Lk)("div",{class:"main__right-content"},[(0,A.Lk)("img",{class:"main__right-content_myFoto",src:M,alt:"me"})],-1)));function D(t,e,o,n,a,r){return(0,A.uX)(),(0,A.CE)("main",null,[(0,A.Lk)("div",p,[(0,A.Lk)("div",k,[(0,A.Lk)("div",b,[(0,A.Lk)("h3",C,(0,i.v_)(t.$t("title.h3")),1),(0,A.Lk)("h2",B,(0,i.v_)(t.$t("title.h2")),1),(0,A.Lk)("p",m,(0,i.v_)(t.$t("title.text")),1),(0,A.Lk)("a",Q,(0,i.v_)(t.$t("title.btnContent")),1)]),x])])])}var E={};const I=(0,v.A)(E,[["render",D],["__scopeId","data-v-0c119944"]]);var P=I;const F={class:"center"},K={class:"section"},_={class:"section__title"},H={class:"skills"},O={class:"skills__wrapper"},T=["src"],X={class:"skills__wrapper_text"},j={class:"skills__wrapper_about"};function S(t,e,o,n,a,r){return(0,A.uX)(),(0,A.CE)("section",null,[(0,A.Lk)("div",F,[(0,A.Lk)("div",K,[(0,A.Lk)("h2",_,(0,i.v_)(t.$t("skill")),1),(0,A.Lk)("ul",H,[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(a.skills,(t=>((0,A.uX)(),(0,A.CE)("li",O,[(0,A.Lk)("img",{class:"skills__wrapper_img",src:t.img,alt:"photo"},null,8,T),(0,A.Lk)("p",X,(0,i.v_)(t.text),1),(0,A.Lk)("p",j,(0,i.v_)(t.about),1)])))),256))])])])])}var y={data(){return{skills:[{img:"https://cdn-icons-png.flaticon.com/512/174/174854.png",text:"HTML",about:"Semantic, cross-browser, adaptive layout"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",text:"CSS",about:"Flexbox, Grid, animation"},{img:o(5133),text:"JavaScript",about:" Fundamentals, algorithms and data structures, JS API browser"},{img:o(4963),text:"VUE"},{img:o(82),text:"GIT"},{img:o(7136),text:"SCSS"}]}}};const z=(0,v.A)(y,[["render",S],["__scopeId","data-v-9d846b8e"]]);var J=z,Y=o.p+"img/circles.8490c903.png",G=o.p+"img/arrow (2).904c50da.png";const U=t=>((0,A.Qi)("data-v-b65a704a"),t=t(),(0,A.jt)(),t),R=["id"],W=U((()=>(0,A.Lk)("img",{class:"img-bgr",src:Y,alt:"fon"},null,-1))),V={class:"center"},q={class:"aboutMe"},Z={class:"aboutMe__title"},$={class:"aboutMe__text"},tt=U((()=>(0,A.Lk)("img",{src:G,alt:"arrow"},null,-1))),et=[tt];function ot(t,e,o,a,r,s){return(0,A.uX)(),(0,A.CE)("section",{id:r.sectionId},[W,(0,A.Lk)("div",V,[(0,A.Lk)("div",q,[(0,A.Lk)("h2",Z,(0,i.v_)(t.$t("about.h2")),1),(0,A.Lk)("p",$,(0,i.v_)(t.$t("about.text")),1),(0,A.bo)((0,A.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>s.scrollToTop&&s.scrollToTop(...t)),class:"scroll-btn"},et,512),[[n.aG,r.showButton]])])])],8,R)}var nt={data(){return{sectionId:"aboutMe",showButton:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){window.scrollY>700?this.showButton=!0:this.showButton=!1},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};const At=(0,v.A)(nt,[["render",ot],["__scopeId","data-v-b65a704a"]]);var at=At,it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgB7dbNDYMgFMDxB3EJEw8wipt0FLtJN+kokBjDEBAoNPViaiuEz4T/TQ/mFzWPB9Dr9SpOCEHWdV0YYwQiNUBgDqO1fiKEyDC8H7NAhDAEtGOMMcRecqXUAyKFwLMjRko5U0o5RMoLlBrjBcqBuQzKhbkEyon5C8qN+QkqgTkFlcKcgrZtYx9Myvg0TfR4M2hSp+zrWYYxnqv6ZK6qfuqSqLYGYwlUm4drTlTbC1oOVNCkHseRu+FpF3xuL92Sf4NIBR8dO8q+pXvMJb/X66XuBdY7Lh/i90kfAAAAAElFTkSuQmCC",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgB7dbBCcMgFIDhZzFTxIOO0k26STtKNskoCiIOoWgVeipe1Gew1P+UhCR8YKICrFarH8lay7XWLyklh45ugJT3/kEIeW7bdvag0ECU0iOBVDrkPSgCiOVhCyGcMUaeTpVz7i6EUBWvwAVhoNBBvaghoB7UMFAraiioBTUcVIu6BFSDKoKMMfLz4MgUY0x8X0SbqbGipYv7vgtArjRkpfv+76Oe6refamKcaumYanGdavsx1QYNA5ND3eT3YnIUkMqb/ITKsKMVs1qtrugNsmEv8/vEzOcAAAAASUVORK5CYII=";const st=t=>((0,A.Qi)("data-v-7e25ccac"),t=t(),(0,A.jt)(),t),ct=["id"],lt={class:"slider center"},dt={class:"slider__title"},Nt={class:"slider__project"},ut=st((()=>(0,A.Lk)("img",{src:it,alt:""},null,-1))),gt=[ut],ht=["href"],vt=["src"],Lt=st((()=>(0,A.Lk)("img",{src:rt,alt:""},null,-1))),wt=[Lt];function Mt(t,e,o,n,a,r){return(0,A.uX)(),(0,A.CE)("section",{id:a.sectionId},[(0,A.Lk)("div",lt,[(0,A.Lk)("h2",dt,(0,i.v_)(t.$t("sliderTitle")),1),(0,A.Lk)("div",Nt,[(0,A.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.backProject&&r.backProject(...t)),class:"slider__project_btn"},gt),(0,A.Lk)("a",{href:a.project[a.currentIndex].website,target:"_blank"},[(0,A.Lk)("img",{class:"slider__project_foto",src:a.project[a.currentIndex].img,alt:"img"},null,8,vt)],8,ht),(0,A.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>r.nextProject&&r.nextProject(...t)),class:"slider__project_btn"},wt)])])],8,ct)}var ft={data(){return{project:[{img:o(7475),text:"Фрилансовый проект",website:"https://nataliamichitenco.github.io/Acrobatics/"},{img:o(6808),text:"учебный проект",website:"https://nataliamichitenco.github.io/MyShop/"},{img:o(4707),text:"импровизация",website:"https://nataliamichitenco.github.io/burgers/"}],currentIndex:0,sectionId:"portfolioComp"}},methods:{nextProject(){this.currentIndex=(this.currentIndex+1)%this.project.length},backProject(){this.currentIndex=(this.currentIndex-1+this.project.length)%this.project.length}}};const pt=(0,v.A)(ft,[["render",Mt],["__scopeId","data-v-7e25ccac"]]);var kt=pt,bt=o.p+"img/number.68e8d75c.png",Ct=o.p+"img/facebook.c6f78cb4.png",Bt=o.p+"img/linkedin.8e1710d6.png";const mt=["id"],Qt={class:"center"},xt={class:"footerContact"},Dt={class:"footer"},Et=(0,A.Fv)('<svg width="59" height="42" viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3229c283><path d="M2.41669 22L14.0233 40L29.5 27L2.41669 22Z" stroke="#e25300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-3229c283></path><path d="M56.5833 22L44.9768 40L29.5 27L56.5833 22Z" stroke="#d3e200" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-3229c283></path><path d="M14.6042 40H44.3959L29.5 27L14.6042 40Z" stroke="#de00e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-3229c283></path><path d="M13.25 24L29.5 2L45.75 24" stroke="#26e200" stroke-width="4" stroke-linejoin="round" data-v-3229c283></path></svg>',1),It={class:"footer__title"},Pt={class:"footer__mobail"},Ft=(0,A.Fv)('<div class="networks" data-v-3229c283><a href="mailto:tuseamiki@gmail.com" target="_blank" data-v-3229c283><img class="networks__connection" src="'+bt+'" alt="gmail" data-v-3229c283></a><a href="https://www.facebook.com/profile.php?id=100004908824721&amp;locale=ru_RU" target="_blank" data-v-3229c283><img class="networks__connection" src="'+Ct+'" alt="facebook" data-v-3229c283></a><a href="https://www.linkedin.com/in/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-%D0%BC%D0%B8%D0%BA%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE-389727255/" target="_blank" data-v-3229c283><img class="networks__connection" src="'+Bt+'" alt="linkedin" data-v-3229c283></a></div>',1);function Kt(t,e,o,n,a,r){return(0,A.uX)(),(0,A.CE)("footer",null,[(0,A.Lk)("div",{id:a.sectionId},[(0,A.Lk)("div",Qt,[(0,A.Lk)("div",xt,[(0,A.Lk)("div",Dt,[Et,(0,A.Lk)("h3",It,(0,i.v_)(t.$t("footerTitle")),1),(0,A.Lk)("p",Pt,(0,i.v_)(t.$t("number"))+" +37368081188",1)]),Ft])])],8,mt)])}var _t={data(){return{sectionId:"footerComp"}}};const Ht=(0,v.A)(_t,[["render",Kt],["__scopeId","data-v-3229c283"]]);var Ot=Ht,Tt={name:"App",components:{headerComp:w,homePage:P,skillsComp:J,aboutMe:at,portfolioComp:kt,footerComp:Ot}};const Xt=(0,v.A)(Tt,[["render",a]]);var jt=Xt,St=JSON.parse('{"buttons":{"language":"Switch lang","AboutMe":"About me","Portfolio":"Portfolio","Contact":"Contact"},"title":{"h3":"Hello","h2":"I’m Natalia Michitenco","text":"I have been actively involved in frontend development for the last year and I am ready to create modern and stylish websites that will attract users with their unique design and usability. Let\'s collaborate to bring your vision to life and create something truly amazing!","btnContent":"Contact me"},"about":{"h2":"About Me","text":"An enthusiastic and detail-oriented Junior Frontend Developer with proficient knowledge in HTML and CSS. Seeking to utilize my technical skills and expertise to provide value to the employer and contribute to successful projects both today and in the future. Aiming to take on new challenges and utilize my coding and debugging skills for developing new features and enhance the overall user experience. But also I like to meet new people and possibility to work with people from different countries and cultures attracts me. I really loved learning programming and I\'m looking forward to start applying my knowledge and motivated to show my best."},"sliderTitle":"Portfolio","footerTitle":"For contact:","number":"Number","skill":"My skills","skills":[{"text":"HTML","about":"Semantic, cross-browser, adaptive layout"},{"text":"CSS","about":"Flexbox, Grid, animation"},{"text":"JavaScript","about":" Fundamentals, algorithms and data structures, JS API browser\'"}]}'),yt=JSON.parse('{"buttons":{"language":"Переключить язык ","AboutMe":"Обо мне","Portfolio":"Портфолио","Contact":"Контакты"},"title":{"h3":"Привет","h2":"Я Наталья Микитенко","text":"Последний год я активно занималась фронтенд-разработкой. Готова создавать современные и стильные веб-сайты, который будет привлекать пользователей своим уникальным дизайном и удобством использования. Давайте сотрудничать, чтобы воплотить ваше видение в жизнь и создадим что-то по-настоящему удивительное!","btnContent":"Свяжитесь со мной"},"about":{"h2":"Обо мне","text":"Увлеченная и внимательная к деталям, младший фронтенд-разработчик с глубокими знаниями HTML, CSS и JavaScript. Стремлюсь использовать свои технические навыки и опыт, чтобы принести пользу работодателю и внести свой вклад в успешные проекты как сегодня, так и в будущем. Стремлюсь решать новые задачи и использовать свои навыки кодирования и отладки для разработки новых функций и улучшения общего пользовательского опыта. Но также мне нравится знакомиться с новыми людьми, и меня привлекает возможность работать с людьми из разных стран и культур. Мне очень понравилось изучать программирование, и я с нетерпением жду возможности начать применять свои знания и мотивирован показать свои лучшие качества."},"sliderTitle":"Портфолио","footerTitle":"Для связи:","number":"Номер","skill":"Мои навыки","skills":[{"text":"HTML","about":"Семантическая, кросс-браузерная, адаптивная верстка"},{"text":"CSS","about":"Flexbox, Grid, анимация"},{"text":"JavaScript","about":"Основы, алгоритмы и структуры данных, JS про API браузер"}]}');const zt="en",Jt={en:St,ru:yt},Yt=Object.assign(Jt),Gt=(0,g.hU)({legacy:!1,locale:zt,fallbackLocale:"en",messages:Yt});(0,n.Ef)(jt,{setup(){const{t:t}=(0,g.s9)();return{t:t}}}).use(Gt).mount("#app")},7475:function(t,e,o){t.exports=o.p+"img/acrobatica.f4d48af7.png"},4707:function(t,e,o){t.exports=o.p+"img/burger.17efa6d7.png"},82:function(t){t.exports="data:image/png;base64,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"},5133:function(t,e,o){t.exports=o.p+"img/js.2493a5ae.png"},7136:function(t,e,o){t.exports=o.p+"img/scss.56a9ec59.png"},6808:function(t,e,o){t.exports=o.p+"img/shop.55e3b74e.png"},4963:function(t,e,o){t.exports=o.p+"img/vue3.263d7bc2.png"}},e={};function o(n){var A=e[n];if(void 0!==A)return A.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,A,a){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],A=t[l][1],a=t[l][2];for(var r=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(r=!1,a<i&&(i=a));if(r){t.splice(l--,1);var c=A();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,A,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/MyResume/"}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var A,a,i=n[0],r=n[1],s=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(A in r)o.o(r,A)&&(o.m[A]=r[A]);if(s)var l=s(o)}for(e&&e(n);c<i.length;c++)a=i[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(l)},n=self["webpackChunkmyresume_vue"]=self["webpackChunkmyresume_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(453)}));n=o.O(n)})();
//# sourceMappingURL=app.ccb62375.js.map