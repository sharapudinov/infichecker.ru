"undefined"==typeof CE2&&(CE2={}),CE2.deviceType=function(t){var e,n,r=t.toLowerCase(),i=0;if(-1==(e=t.indexOf("(")))return 1;if(e++,-1!=(n=t.indexOf("Android",e))){if(n+=8,t.length>n&&(i=t.charAt(n)))switch(i){case"2":if(-1!=t.indexOf("BNTV",n))return 3;if(-1!=r.indexOf("nook",n))return 3;if(-1!=t.indexOf("Kindle",n))return 3;if(-1!=t.indexOf("Touchpad",n))return 3;break;case"3":return 3;case"4":if(-1!=t.indexOf("Silk",n))return 3}return-1!=r.indexOf("tablet",n)?3:-1!=t.indexOf("Mobi",n)?2:3}if(-1!=(n=t.indexOf("iP",e)))switch(i=t.charAt(n+2)){case"a":return 3;case"h":case"o":return 2}return-1!=(n=t.indexOf("BlackBerry",e))?-1!=t.indexOf("Tablet",n+10)?3:2:-1!=t.indexOf("Windows Phone",e)?2:-1!=t.indexOf("BB10",e)?2:"M"!=t.charAt(0)&&-1!=t.indexOf("Opera Mini",e)?2:1},"undefined"==typeof CE2&&(CE2={}),CE2.ignoredElements=[],CE2.clickCaptors=[],CE2.d=document,CE2.w=window,CE2.n=navigator,CE2.p={},function(){var t=CE2.n.userAgent;/\bMSIE\b/.test(t)&&(CE2.ie=1,CE2.ieVersion=parseInt(/MSIE (\d+)\.\d+/.exec(t)[1],10),CE2.ieQuirksMode="BackCompat"==CE2.d.compatMode)}(),CE2.ignore=function(t){t&&(CE2.ignoredElements.push(t),CE2.tracker&&CE2.tracker.ignoredElements.push(t))},CE2.capture=function(t){CE2.clickCaptors.push(t),CE2.tracker&&CE2.tracker.clickCaptors.push(t)},CE2.findMatchingSnapshot=function(t,e,n){var r,i,o,s;if(t&&t.length){for(i=0;o=t[i++];)r=Math.floor((new Date).getTime()/1e3),o.e&&o.e<=r||n&&!/n/.test(o.o||"")||CE2.matchURL(o.u,n||e,o.o,o.d,CE2.n.userAgent)&&(o.s&&o.s>r?CE2.p[o.id]=o:s||(s=o));return s}},CE2.findMatchingLiveSessions=function(t,e){var n,r,i=[];if(t&&t.length){for(n=0;r=t[n++];)CE2.matchURL(r.u,e,r.o,r.d,CE2.n.userAgent)&&i.push(r.id);return i.length?(i.sort(),i):void 0}},CE2.sameSessions=function(t,e){var n,r;if(!t||!e)return!1;if(t.length!=e.length)return!1;for(n=0,r=t.length;n<r;n++)if(t[n]!=e[n])return!1;return!0},CE2.startTracking=function(t,e){var n,r;if(t)if(CE2.sampleVisit(t))CE2.testID=t.id,CE2.testVersion=t.v||1;else if(!e)return;e&&(CE2.sessionIDs=e),n=CE2.d.createElement("script"),r="https:"==CE2.w.location.protocol?CE2.TRACKING_SCRIPT_SECURE:CE2.TRACKING_SCRIPT,n.src=r+(t?"?s="+t.id+"&":"?")+"t="+(new Date).getTime(),n.type="text/javascript",n.async=!0,CE2.d.body.appendChild(n)},CE2.unescape=function(t){try{return decodeURIComponent(t)}catch(e){return unescape(t)}},CE2.qs2obj=function(t,e){if(null==t||/^\s*$/.test(t))return null;var n,r,i={},o=null,s=t.replace(/\+/g," ").split(e||"&");for(n=0,r=s.length;n<r;n++)(o=s[n].split("="))[0]&&(i[CE2.unescape(o[0])]=null==o[1]?null:CE2.unescape(o[1]));return i},CE2.each=function(t,e,n){if(t){var r;if("number"==typeof t.length&&"function"==typeof t.concat)for(var i=0,o=t.length;i<o&&(r=t[i],!1!==e.call(n,r,i));i++);else{var s;for(s in t)if((r=t[s])!==Object.prototype[s]&&!1===e.call(n,r,s))break}}},CE2.indexOf=function(t,e,n){var r,i;for(r=n||0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},CE2.listen=CE2.addListener=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!0):t.attachEvent("on"+e,n)},CE2.removeListener=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!0):t.detachEvent("on"+e,n)},CE2.userData={},CE2.set=function(t,e){1<=(t=parseInt(t,10))&&t<=5&&(CE2.userData[t]=e+"")},CE2.click=function(){if(CE2.tracker)return CE2.tracker.click.apply(CE2.tracker,arguments)},CE2.getBox=function(){},CE2.sampleVisit=function(t){return null==t.r||(!1!==t.r&&!0!==t.r&&(Math.random()>=1/t.r?t.r=!1:t.r=!0),t.r)},CE2.dontTrack=function(t,e,n,r){if(r&&void 0!==t.external)try{if(!0===t.external.InPrivateFilteringEnabled())return!0}catch(t){}var i=e.doNotTrack||n.doNotTrack||n.msDoNotTrack||t.doNotTrack;return"1"==i||"yes"==i},CE2.cookies=function(){try{return CE2.qs2obj(document.cookie,/;\s*/g)||{}}catch(t){return{}}}(),CE2.parseJSON=function(src){return void 0!==JSON&&"function"==typeof JSON.parse?JSON.parse(src):eval("("+src+")")},CE2.isBot=function(t){return/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(t)},"undefined"==typeof CE2&&(CE2={}),CE2.READY_STATE_PATTERN=CE2.ie?/complete/:/complete|interactive/,CE2.autoStart="undefined"==typeof CE_MANUAL_START||!CE_MANUAL_START,CE2.domReady=document.readyState&&CE2.READY_STATE_PATTERN.test(document.readyState),CE2.domReadyListeners=[],CE2.onDOMReady=function(t){if(CE2.domReady)return setTimeout(t,1);CE2.domReadyListeners.push(t)},CE2.domReadySetup=function(){var t=function(t){for(var e=CE2.domReadyListeners;e.length>0;)e.pop().call();CE2.domReady=!0};if(CE2.domReady&&t(),CE2.listen(window,"load",t),document.addEventListener&&CE2.listen(document,"DOMContentLoaded",t),document.readyState){var e=CE2.READY_STATE_PATTERN;!function(){e.test(document.readyState)?t():setTimeout(arguments.callee,10)}()}},CE2.autoStart&&CE2.domReadySetup(),"undefined"==typeof CE2&&(CE2={}),CE2.matchURL=function(t,e,n,r,i){var o,s,a,E,c,C,u,f,$,d,h,p,l,g,m,R,T=/(default|index)($|\..*)/i,S=!1;if(!t||!e)return!1;if(r&&CE2.indexOf(r,CE2.deviceType(i))<0)return!1;if(n=n||"",/n/.test(n))return t===e;if(/[re]/.test(n))try{return RegExp(t,"i").test(e)}catch(t){return!1}if(o=new CE2.URI(e.toLowerCase()),/h/.test(n)&&t.protocol!=o.protocol)return!1;if(a=o.host,s=a.replace(/^www\./,""),f=t.host,$=t.ihost,/w/.test(n)&&a!=f&&a!=$)return!1;if(s!=f.replace(/^www\./,"")&&s!=($&&$.replace(/^www\./,"")))return!1;if(d=t.path?t.path:"/",E=o.path,d!=E){if(/\//.test(n))return!1;for(h=d.split("/"),c=E.split("/"),m=0,R=Math.max(h.length,c.length);m<R;m++)if(h[m]||(h[m]=""),c[m]||(c[m]=""),m==R-1&&(h[m]=h[m].replace(T,""),c[m]=c[m].replace(T,"")),h[m]!=c[m])return!1}return C=o.qs,g=/\?/.test(n),p=t.qs||"",!(g&&C&&!p||!C&&p)&&(CE2.each(p,function(t,e){if(C[e]!==t)return S=!0,!1}),!S&&((!g||(CE2.each(C,function(t,e){if(t!=p[e])return S=!0}),!S))&&(l=t.hash||"",u=o.hash||"",!(g=/#/.test(n))&&!l||l==u)))},"undefined"==typeof CE2&&(CE2={}),void 0===CE2.URI&&(CE2.URI=function(t){if(this.src=t,this.protocol=this.host=this.port=this.path=this.qs=this.hash=this.query=null,t){var e=typeof t;"string"==e?this.initWithString(t):"object"==e&&this.initWithURI(t)}},CE2.URI.pattern=/^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i,CE2.URI.prototype={initWithString:function(t){var e,n,r,i,o,s=CE2.URI.pattern.exec(t);s[1]||"/"==t.charAt(0)?((e=s[1])&&(this.protocol=e.substr(0,e.indexOf(":"))),this.host=s[3]||null,(n=s[4])&&(this.port=+n.substr(1)),(r=s[5])?this.path=CE2.unescape(r):this.host&&(this.path="/")):this.path=CE2.unescape((s[3]||"")+(s[5]||"")),(i=s[6])&&(this.qs=CE2.qs2obj(i.substr(1)),this.query=i.substr(1)),(o=s[7])&&(this.hash=CE2.unescape(o.substr(1)))},initWithURI:function(t){CE2.each(t,function(t,e){this[e]=t},this)},isAbsolute:function(){return this.isURL()||this.path&&"/"==this.path.charAt(0)},isURL:function(){return this.protocol&&this.host},getDomain:function(){return this.host&&this.host.replace(/^www\./,"")}}),CE2.userMain=function(){var t=CE2.snapshots,e=CE2.sessions,n=CE2.sites,r=CE2.liveBootstrap||function(){};if(!CE2.isBot(CE2.n.userAgent)&&!CE2.dontTrack(CE2.w,CE2.d,CE2.n,CE2.ie)){CE2.testID=CE2.testVersion=CE2.sessionIDs=null,CE2.GTRK_DEST&&CE2.gtrk&&CE2.gtrk(CE2.GTRK_DEST),CE2.initPageEdits&&CE2.initPageEdits(),CE2.initFlowTracking&&CE2.initFlowTracking();var i=function(){var t,e="!$%&()*+,-.0123456789;<=>?@[]^_`{|}~",n={};for(t=0;t<36;t++)n[e.charAt(t)]=t.toString(36);return n}(),o=function(t){return parseInt(t.replace(/./g,function(t){return i[t]}),36)},s=function(t){for(var e,n="",r=/(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi,i=String.fromCharCode;null!=(e=r.exec(t));)e[1]||e[2]?n+=i(o(e[0])):e[3]?n+=i(o(e[3].substr(1))):e[4]&&(n+=i(o(e[4].substr(1))));return n};"function"==typeof s&&("string"==typeof t&&(t=CE2.parseJSON(s(t))),"string"==typeof e&&(e=CE2.parseJSON(s(e))),"string"==typeof n&&(n=CE2.parseJSON(s(n)))),CE2.recording&&CE2.recording.main&&CE2.recording.main(n);var a=function(){try{var n=CE2.w.location.href,i=CE2.findMatchingSnapshot(t,n,"string"==typeof CE_SNAPSHOT_NAME&&CE_SNAPSHOT_NAME),o=CE2.findMatchingLiveSessions(e,n);if(r())return;if(!i&&!o)return CE2.testID=CE2.testVersion=CE2.sessionIDs=null,void(CE2.tracker&&(CE2.tracker.cleanup(),CE2.tracker=null));(i&&i.id!=CE2.testID||o&&!CE2.sameSessions(o,CE2.sessionIDs))&&(CE2.startTracking(i,o),CE2.badge&&CE2.badge())}catch(t){}};a(),CE2.autoStart&&(CE2.monitorInterval=setInterval(a,1e3))}},CE2.autoStart&&CE2.onDOMReady(CE2.userMain),"function"==typeof CE_READY?CE2.onDOMReady(CE_READY):"object"==typeof CE_READY&&CE2.onDOMReady(function(){CE2.each(CE_READY,function(t){"function"==typeof t&&t()})}),CE2.TRACKING_SCRIPT="http://trk.cetrk.com/8/t.js",CE2.TRACKING_SCRIPT_SECURE="https://s3.amazonaws.com/trk.cetrk.com/8/t.js",CE2.TRACKING_DEST="http://trk.cetrk.com/",CE2.TRACKING_DEST_SECURE="https://s3.amazonaws.com/trk.cetrk.com/",CE2.uid=260255,"undefined"==typeof CE2&&(CE2={}),CE2.gtrk=function(t){function e(e,n){var r=new Date,i=Math.floor(r.getTime()/1e3),o="_ceg."+e,s=CE2.cookies[o],a=s&&parseInt(s,36),E=new CE2.URI(CE2.w.location.href).getDomain(),c=new Date(r.getFullYear(),r.getMonth()+3,r.getDate()).toUTCString();(!a||i-a>n)&&function(e,n){CE2.d.createElement("img").src=t+"/"+e+"?u="+CE2.uid+"&t="+n.toString(36)}(e,i),CE2.d.cookie=o+"="+i.toString(36)+";path=/;domain="+E+";expires="+c}/^https?:\/\//.test(t)||(t="https://"+t),e("s",1800),e("u",2592e3)},CE2.GTRK_DEST="gtrk.s3.amazonaws.com",CE2.snapshots="%8&4!}%|%]!}$<$3$6$9$5$7$3$7$,!}&.!}$<$6$,!}%^!}$<$2$6$3$3$5$4$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&-%~&*%?%|&%%|%?&%$.&.&&%?&%%^&0&+$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0!}&6$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$6$9$5$7$4$1$,!}&.!}$<$6$,!}%^!}$<$2$6$3$3$5$4$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&-%~&*%?%|&%%|%?&%$.&.&&%?&%%^&0&+$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0!}&6$,!}%]!}$<%8$3%;&6$,&4!}%|%]!}$<$3$6$9$5$7$4$3$,!}&.!}$<$6$,!}%^!}$<$2$6$3$3$5$4$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%`&!%?&+%?&$%^&*%|%~%^$.&%%^&,!}$,!}&(%?&,%{!}$<!}$0!}&6$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$3$6$9$5$7$4$6$,!}&.!}$<$6$,!}%^!}$<$2$6$3$3$5$4$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%`&!%?&+%?&$%^&*%|%~%^$.&%%^&,!}$,!}&(%?&,%{!}$<!}$0!}&6$,!}%]!}$<%8$4$,$3%;&6%;",CE2.sessions=null,CE2.PAGE_VIEWS_LIMIT_REACHED=!1;
