"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[8],{4008:(K,R,c)=>{c.r(R),c.d(R,{AuthModule:()=>Y});var y=c(6895),p=c(6286),t=c(8256),g=c(1922),m=c(892),O=c(8712);function b(i,r,e,o,s,n,a){try{var l=i[n](a),d=l.value}catch(_){return void e(_)}l.done?r(d):Promise.resolve(d).then(o,s)}function I(i){return function(){var r=this,e=arguments;return new Promise(function(o,s){var n=i.apply(r,e);function a(d){b(n,o,s,a,l,"next",d)}function l(d){b(n,o,s,a,l,"throw",d)}a(void 0)})}}var P=c(1135),T=c(9300);function w(i){return(0,T.h)((r,e)=>i<=e)}var U=c(5698),k=c(7579);const L={now:()=>(L.delegate||Date).now(),delegate:void 0};class A extends k.x{constructor(r=1/0,e=1/0,o=L){super(),this._bufferSize=r,this._windowTime=e,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,r),this._windowTime=Math.max(1,e)}next(r){const{isStopped:e,_buffer:o,_infiniteTimeWindow:s,_timestampProvider:n,_windowTime:a}=this;e||(o.push(r),!s&&o.push(n.now()+a)),this._trimBuffer(),super.next(r)}_subscribe(r){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(r),{_infiniteTimeWindow:o,_buffer:s}=this,n=s.slice();for(let a=0;a<n.length&&!r.closed;a+=o?1:2)r.next(n[a]);return this._checkFinalizedStatuses(r),e}_trimBuffer(){const{_bufferSize:r,_timestampProvider:e,_buffer:o,_infiniteTimeWindow:s}=this,n=(s?1:2)*r;if(r<1/0&&n<o.length&&o.splice(0,o.length-n),!s){const a=e.now();let l=0;for(let d=1;d<o.length&&o[d]<=a;d+=2)l=d;l&&o.splice(0,l+1)}}}class C extends k.x{constructor(){super(...arguments),this._value=null,this._hasValue=!1,this._isComplete=!1}_checkFinalizedStatuses(r){const{hasError:e,_hasValue:o,_value:s,thrownError:n,isStopped:a,_isComplete:l}=this;e?r.error(n):(a||l)&&(o&&r.next(s),r.complete())}next(r){this.isStopped||(this._value=r,this._hasValue=!0)}complete(){const{_hasValue:r,_value:e,_isComplete:o}=this;o||(this._isComplete=!0,r&&super.next(e),super.complete())}}var M=c(9751),E=c(576);class D{constructor(){}loadScript(r,e,o,s=null){if(typeof document<"u"&&!document.getElementById(r)){let n=document.createElement("script");n.async=!0,n.src=e,n.onload=o,s||(s=document.head),s.appendChild(n)}}}class N{}const Z={oneTapEnabled:!0};let h=(()=>{class i extends D{constructor(e,o){super(),this.clientId=e,this.initOptions=o,this.changeUser=new t.vpe,this._socialUser=new P.X(null),this._accessToken=new P.X(null),this._receivedAccessToken=new t.vpe,this.initOptions={...Z,...this.initOptions},this._socialUser.pipe(w(1)).subscribe(this.changeUser),this._accessToken.pipe(w(1)).subscribe(this._receivedAccessToken)}initialize(e){return new Promise((o,s)=>{try{this.loadScript(i.PROVIDER_ID,"https://accounts.google.com/gsi/client",()=>{if(google.accounts.id.initialize({client_id:this.clientId,auto_select:e,callback:({credential:n})=>{const a=this.createSocialUser(n);this._socialUser.next(a)},prompt_parent_id:this.initOptions?.prompt_parent_id,itp_support:this.initOptions.oneTapEnabled}),this.initOptions.oneTapEnabled&&this._socialUser.pipe((0,T.h)(n=>null===n)).subscribe(()=>google.accounts.id.prompt(console.debug)),this.initOptions.scopes){const n=this.initOptions.scopes instanceof Array?this.initOptions.scopes.filter(a=>a).join(" "):this.initOptions.scopes;this._tokenClient=google.accounts.oauth2.initTokenClient({client_id:this.clientId,scope:n,prompt:this.initOptions.prompt,callback:a=>{a.error?this._accessToken.error({code:a.error,description:a.error_description,uri:a.error_uri}):this._accessToken.next(a.access_token)}})}o()})}catch(n){s(n)}})}getLoginStatus(){return new Promise((e,o)=>{this._socialUser.value?e(this._socialUser.value):o(`No user is currently logged in with ${i.PROVIDER_ID}`)})}refreshToken(){return new Promise((e,o)=>{google.accounts.id.revoke(this._socialUser.value.id,s=>{s.error?o(s.error):e(this._socialUser.value)})})}getAccessToken(){return new Promise((e,o)=>{this._tokenClient?(this._tokenClient.requestAccessToken({hint:this._socialUser.value?.email}),this._receivedAccessToken.pipe((0,U.q)(1)).subscribe(e)):o(this._socialUser.value?"No token client was instantiated, you should specify some scopes.":"You should be logged-in first.")})}revokeAccessToken(){return new Promise((e,o)=>{this._tokenClient?this._accessToken.value?google.accounts.oauth2.revoke(this._accessToken.value,()=>{this._accessToken.next(null),e()}):o("No access token to revoke"):o("No token client was instantiated, you should specify some scopes.")})}signIn(){return Promise.reject('You should not call this method directly for Google, use "<asl-google-signin-button>" wrapper or generate the button yourself with "google.accounts.id.renderButton()" (https://developers.google.com/identity/gsi/web/guides/display-button#javascript)')}signOut(){var e=this;return I(function*(){google.accounts.id.disableAutoSelect(),e._socialUser.next(null)})()}createSocialUser(e){const o=new N;o.idToken=e;const s=this.decodeJwt(e);return o.id=s.sub,o.name=s.name,o.email=s.email,o.photoUrl=s.picture,o.firstName=s.given_name,o.lastName=s.family_name,o}decodeJwt(e){const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(s).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(n)}}return i.PROVIDER_ID="GOOGLE",i})(),f=(()=>{class i{get authState(){return this._authState.asObservable()}get initState(){return this._initState.asObservable()}constructor(e,o,s){this._ngZone=o,this._injector=s,this.providers=new Map,this.autoLogin=!1,this._user=null,this._authState=new A(1),this.initialized=!1,this._initState=new C,e instanceof Promise?e.then(n=>{this.initialize(n)}):this.initialize(e)}initialize(e){this.autoLogin=void 0!==e.autoLogin&&e.autoLogin;const{onError:o=console.error}=e;e.providers.forEach(s=>{this.providers.set(s.id,"prototype"in s.provider?this._injector.get(s.provider):s.provider)}),Promise.all(Array.from(this.providers.values()).map(s=>s.initialize(this.autoLogin))).then(()=>{if(this.autoLogin){const s=[];let n=!1;this.providers.forEach((a,l)=>{const d=a.getLoginStatus();s.push(d),d.then(_=>{this.setUser(_,l),n=!0}).catch(console.debug)}),Promise.all(s).catch(()=>{n||(this._user=null,this._authState.next(null))})}this.providers.forEach((s,n)=>{(function S(i){return!!i&&(i instanceof M.y||(0,E.m)(i.lift)&&(0,E.m)(i.subscribe))})(s.changeUser)&&s.changeUser.subscribe(a=>{this._ngZone.run(()=>{this.setUser(a,n)})})})}).catch(s=>{o(s)}).finally(()=>{this.initialized=!0,this._initState.next(this.initialized),this._initState.complete()})}getAccessToken(e){var o=this;return I(function*(){const s=o.providers.get(e);if(!o.initialized)throw i.ERR_NOT_INITIALIZED;if(!s)throw i.ERR_LOGIN_PROVIDER_NOT_FOUND;if(!(s instanceof h))throw i.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN;return yield s.getAccessToken()})()}refreshAuthToken(e){return new Promise((o,s)=>{if(this.initialized){const n=this.providers.get(e);n?"function"!=typeof n.refreshToken?s(i.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN):n.refreshToken().then(a=>{this.setUser(a,e),o()}).catch(a=>{s(a)}):s(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}else s(i.ERR_NOT_INITIALIZED)})}refreshAccessToken(e){return new Promise((o,s)=>{if(this.initialized)if(e!==h.PROVIDER_ID)s(i.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);else{const n=this.providers.get(e);n instanceof h?n.revokeAccessToken().then(o).catch(s):s(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}else s(i.ERR_NOT_INITIALIZED)})}signIn(e,o){return new Promise((s,n)=>{if(this.initialized){let a=this.providers.get(e);a?a.signIn(o).then(l=>{this.setUser(l,e),s(l)}).catch(l=>{n(l)}):n(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}else n(i.ERR_NOT_INITIALIZED)})}signOut(e=!1){return new Promise((o,s)=>{if(this.initialized)if(this._user){let a=this.providers.get(this._user.provider);a?a.signOut(e).then(()=>{o(),this.setUser(null)}).catch(l=>{s(l)}):s(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}else s(i.ERR_NOT_LOGGED_IN);else s(i.ERR_NOT_INITIALIZED)})}setUser(e,o){e&&o&&(e.provider=o),this._user=e,this._authState.next(e)}}return i.ERR_LOGIN_PROVIDER_NOT_FOUND="Login provider not found",i.ERR_NOT_LOGGED_IN="Not logged in",i.ERR_NOT_INITIALIZED="Login providers not ready yet. Are there errors on your console?",i.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN="Chosen login provider is not supported for refreshing a token",i.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN="Chosen login provider is not supported for getting an access token",i.\u0275fac=function(e){return new(e||i)(t.LFG("SocialAuthServiceConfig"),t.LFG(t.R0b),t.LFG(t.zs3))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),z=(()=>{class i{constructor(e,o){this.type="icon",this.size="medium",this.text="signin_with",this.shape="rectangular",this.theme="outline",this.logo_alignment="left",this.width="",this.locale="",o.initState.pipe((0,U.q)(1)).subscribe(()=>{Promise.resolve(this.width).then(s=>{s>"400"||s<"200"&&""!=s?Promise.reject("Please note .. max-width 400 , min-width 200 (https://developers.google.com/identity/gsi/web/tools/configurator)"):google.accounts.id.renderButton(e.nativeElement,{type:this.type,size:this.size,text:this.text,width:this.width,shape:this.shape,theme:this.theme,logo_alignment:this.logo_alignment,locale:this.locale})})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(f))},i.\u0275dir=t.lG2({type:i,selectors:[["asl-google-signin-button"]],inputs:{type:"type",size:"size",text:"text",shape:"shape",theme:"theme",logo_alignment:"logo_alignment",width:"width",locale:"locale"}}),i})(),F=(()=>{class i{static initialize(e){return{ngModule:i,providers:[f,{provide:"SocialAuthServiceConfig",useValue:e}]}}constructor(e){if(e)throw new Error("SocialLoginModule is already loaded. Import it in the AppModule only")}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(i,12))},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[f],imports:[y.ez]}),i})();var u=c(433);let V=(()=>{class i{constructor(e,o,s,n,a){this.route=e,this.toast=o,this.http=s,this.recaptchaV3Service=n,this.authService=a,this.msg="",this.loginUser={email:"",password:"",captcha:""}}ngOnInit(){this.authService.signOut(),this.recaptchaV3Service.execute("importantAction").subscribe(e=>{this.authService.authState.subscribe(o=>{this.user=o,this.loggedIn=null!=o,this.http.googlelogin({token:o.idToken,captcha:e}).subscribe(s=>{this.route.navigate(["setting","my-profile"]),this.loginsuccess(s)},s=>{this.toast.error({detail:"Authentication failed",summary:s.error.message,duration:5e3})})})})}loginsuccess(e){this.toast.success({detail:"Authentication Successful",summary:"User is loged in...",duration:5e3}),localStorage.setItem("activeuser",e.token)}login(){this.recaptchaV3Service.execute("importantAction").subscribe(e=>{this.loginUser.captcha=e,this.http.login(this.loginUser).subscribe(o=>{this.loginsuccess(o),document.querySelector(".grecaptcha-badge").style.display="none",this.route.navigate(["setting","my-profile"])},o=>{this.toast.error({detail:"Authentication failed",summary:o.error.message,duration:5e3})})})}forgetpassword(){this.recaptchaV3Service.execute("importantAction").subscribe(e=>{this.http.forgetpassword({email:this.email,captcha:e}).subscribe(o=>{this.toast.success({detail:"Email Send Successfully",summary:"Check your email",duration:3e3})},o=>{this.toast.error({summary:o.error.message,duration:3e3})})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.F0),t.Y36(g.s),t.Y36(m.e),t.Y36(O.YC),t.Y36(f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-login"]],decls:37,vars:4,consts:[[1,"container","h-75","mt-5"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-lg-4","col-sm-12"],[1,"card","border-0","shadow-lg","p-5",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-floating","mb-3"],["type","email","name","email","placeholder","Email\n                        address",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],["type","password","name","password","placeholder","Password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],[1,"btn","btn-dark","mt-3"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"mt-2","text-dark","text-center"],[1,"mt-2","text-dark","text-center",3,"routerLink"],[1,"w-100","line","border-bottom","border-dashed","border-dark","my-4"],["type","standard","size","large","theme","filled_black","shape","pill",1,"mx-auto"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],["type","email","id","floatingInput","placeholder","name@example.com","name","email",1,"form-control","border-dark",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-outline-dark",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3,4),t.NdJ("ngSubmit",function(){return o.login()}),t.TgZ(5,"div",5)(6,"input",6),t.NdJ("ngModelChange",function(n){return o.loginUser.email=n}),t.qZA(),t.TgZ(7,"label",7),t._uU(8,"Email address"),t.qZA()(),t._UZ(9,"br"),t.TgZ(10,"div",5)(11,"input",8),t.NdJ("ngModelChange",function(n){return o.loginUser.password=n}),t.qZA(),t.TgZ(12,"label",7),t._uU(13,"Password"),t.qZA()(),t.TgZ(14,"button",9),t._uU(15,"Login"),t.qZA(),t.TgZ(16,"a",10),t._uU(17,"Forget Password"),t.qZA(),t.TgZ(18,"a",11),t._uU(19,"Click here for registration"),t.qZA(),t._UZ(20,"div",12)(21,"asl-google-signin-button",13),t.qZA()()()(),t.TgZ(22,"div",14)(23,"div",15)(24,"div",16)(25,"div",17)(26,"h1",18),t._uU(27,"Enter Password"),t.qZA(),t._UZ(28,"button",19),t.qZA(),t.TgZ(29,"div",20)(30,"div",5)(31,"input",21),t.NdJ("ngModelChange",function(n){return o.email=n}),t.qZA(),t.TgZ(32,"label",7),t._uU(33,"Email address"),t.qZA()()(),t.TgZ(34,"div",22)(35,"button",23),t.NdJ("click",function(){return o.forgetpassword()}),t._uU(36,"Save changes"),t.qZA()()()()()),2&e&&(t.xp6(6),t.Q6J("ngModel",o.loginUser.email),t.xp6(5),t.Q6J("ngModel",o.loginUser.password),t.xp6(7),t.Q6J("routerLink","/auth/register"),t.xp6(13),t.Q6J("ngModel",o.email))},dependencies:[p.rH,u._Y,u.Fj,u.JJ,u.JL,u.On,u.F,z],styles:[".line[_ngcontent-%COMP%]{height:1px}"]}),i})(),x=(()=>{class i{constructor(e,o,s,n){this.route=e,this.toast=o,this.service=s,this.recaptchaV3Service=n,this.User={email:"",password:"",name:"",company:"",captcha:""}}register(){this.recaptchaV3Service.execute("importantAction").subscribe(e=>{this.User.captcha=e,this.service.set(this.User).subscribe(o=>{console.log("My HTTP response",o),this.toast.success({detail:"Registration Successful",summary:"User is Registrated...",duration:5e3}),this.route.navigate(["/auth/login"])},o=>{console.log("My HTTP Error",o),this.toast.error({detail:"Registration failed",summary:o.error.message,duration:5e3})})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.F0),t.Y36(g.s),t.Y36(m.e),t.Y36(O.YC))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-registration"]],decls:28,vars:5,consts:[[1,"container","h-100"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-4"],[1,"card","border-0","shadow-lg","p-5",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-floating","mb-3"],["type","email","name","email","placeholder","Email\n                        address",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],["type","password","name","password","placeholder","Password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["type","text","name","fullname","placeholder","Password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["type","text","name","companyname","placeholder","Password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],[1,"btn","btn-dark","mt-3"],[1,"mt-3","text-dark","text-center",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3,4),t.NdJ("ngSubmit",function(){return o.register()}),t.TgZ(5,"div",5)(6,"input",6),t.NdJ("ngModelChange",function(n){return o.User.email=n}),t.qZA(),t.TgZ(7,"label",7),t._uU(8,"Email address"),t.qZA()(),t._UZ(9,"br"),t.TgZ(10,"div",5)(11,"input",8),t.NdJ("ngModelChange",function(n){return o.User.password=n}),t.qZA(),t.TgZ(12,"label",7),t._uU(13,"Password"),t.qZA()(),t._UZ(14,"br"),t.TgZ(15,"div",5)(16,"input",9),t.NdJ("ngModelChange",function(n){return o.User.name=n}),t.qZA(),t.TgZ(17,"label",7),t._uU(18,"Full Name"),t.qZA()(),t._UZ(19,"br"),t.TgZ(20,"div",5)(21,"input",10),t.NdJ("ngModelChange",function(n){return o.User.company=n}),t.qZA(),t.TgZ(22,"label",7),t._uU(23,"Company Name"),t.qZA()(),t.TgZ(24,"button",11),t._uU(25,"Regiter"),t.qZA(),t.TgZ(26,"a",12),t._uU(27,"Click here for Login"),t.qZA()()()()()),2&e&&(t.xp6(6),t.Q6J("ngModel",o.User.email),t.xp6(5),t.Q6J("ngModel",o.User.password),t.xp6(5),t.Q6J("ngModel",o.User.name),t.xp6(5),t.Q6J("ngModel",o.User.company),t.xp6(5),t.Q6J("routerLink","auth/login"))},dependencies:[p.rH,u._Y,u.Fj,u.JJ,u.JL,u.On,u.F]}),i})(),j=(()=>{class i{constructor(e,o,s,n){this.activatedroute=e,this.service=o,this.toast=s,this.router=n}ngOnInit(){this.token=this.activatedroute.snapshot.queryParams}reset(){this.password==this.confirmpassword?this.service.resetpassword({password:this.password},this.token).subscribe(e=>{this.toast.success({detail:"Password Reset",duration:3e3}),this.router.navigate(["auth/login"])},e=>{this.toast.error({summary:e.error.message,duration:3e3})}):this.toast.error({detail:"Password and Confirmpassword dosen't match!",duration:3e3})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.gz),t.Y36(m.e),t.Y36(g.s),t.Y36(p.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-reset-password"]],decls:15,vars:2,consts:[[1,"container","mt-5"],[1,"row","mt-5"],[1,"col-lg-3","col-md-12","mt-5","mx-auto","card","p-4"],[1,"form-floating"],["type","password","id","floatingPassword","placeholder","Password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingPassword"],[1,"form-floating","mb-3"],["type","text","id","floatingInput","placeholder","name@example.com",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],[1,"btn","btn-outline-dark",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("ngModelChange",function(n){return o.password=n}),t.qZA(),t.TgZ(5,"label",5),t._uU(6,"Password"),t.qZA()(),t._UZ(7,"br"),t.TgZ(8,"div",6)(9,"input",7),t.NdJ("ngModelChange",function(n){return o.confirmpassword=n}),t.qZA(),t.TgZ(10,"label",8),t._uU(11,"Confirm Password"),t.qZA()(),t._UZ(12,"br"),t.TgZ(13,"button",9),t.NdJ("click",function(){return o.reset()}),t._uU(14,"Submit"),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("ngModel",o.password),t.xp6(5),t.Q6J("ngModel",o.confirmpassword))},dependencies:[u.Fj,u.JJ,u.On]}),i})(),J=(()=>{class i{constructor(e,o,s,n){this.activeroute=e,this.authservice=o,this.toast=s,this.router=n}ngOnInit(){this.authservice.verifyaccount(this.activeroute.snapshot.queryParams).subscribe(e=>{console.log(e),this.toast.success({detail:"Email is verified successfully",summary:"",duration:3e3}),this.router.navigate([""])},e=>{console.log(e),this.toast.error({detail:"Email verifiction failed",summary:e.error.message,duration:3e3}),this.router.navigate([""])})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.gz),t.Y36(m.e),t.Y36(g.s),t.Y36(p.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-verify-email"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"soon you will be redirected"),t.qZA())}}),i})(),v=(()=>{class i{constructor(e){this.routes=e}canActivate(e,o){return null==localStorage.getItem("activeuser")||this.routes.navigate(["setting","my-profile"])}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(p.F0))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const q=[{path:"login",component:V,canActivate:[v]},{path:"register",component:x,canActivate:[v]},{path:"reset-password",component:j,canActivate:[v]},{path:"verify-email",component:J}];let G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(q),p.Bz]}),i})();var B=c(6729);let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[{provide:"SocialAuthServiceConfig",useValue:{authLogin:!0,providers:[{id:h.PROVIDER_ID,provider:new h(B.N.google_clientid.clientId)}]}}],imports:[y.ez,G,u.u5,F]}),i})()}}]);