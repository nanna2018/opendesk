(function(){var h=this;var m=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var n;a:{var p=h.navigator;if(p){var q=p.userAgent;if(q){n=q;break a}}n=""};var r=function(a){r[" "](a);return a};r[" "]=function(){};var t=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var aa=function(){if(!h.crypto)return Math.random();try{var a=new Uint32Array(1);h.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},u=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ba=t(function(){return-1!=n.indexOf("Google Web Preview")||1E-4>Math.random()}),ca=t(function(){return-1!=n.indexOf("MSIE")});var ea=m("0.20"),ia=m("0.0"),ja=m("0.02"),ka=m("0.02");var la=/^true$/.test("false"),v=/^true$/.test("true"),ma=/^true$/.test("true");var w=null,oa=function(){var a=na,b=[],c=0,d;for(d in a)b[c++]=a[d];this.c={};this.a={};a=b||[];b=0;for(c=a.length;b<c;++b)this.a[a[b]]=""},x=function(){if(null===w){w="";try{var a="";try{a=h.top.location.hash}catch(c){a=h.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);w=b?b[1]:""}}catch(c){}}return w},z=function(a,b,c){var d=y;if(c?d.a.hasOwnProperty(c)&&""==d.a[c]:1){var e;e=(e=x())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!ca()&&!ba()&&(e=Math.random(),
e<b)){e=aa();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.a.hasOwnProperty(c)&&(d.a[c]=a):d.c[a]=!0)}},A=function(a){var b=y;return b.a.hasOwnProperty(a)?b.a[a]:""},pa=function(){var a=y,b=[];u(a.c,function(a,d){b.push(d)});u(a.a,function(a){""!=a&&b.push(a)});return b};var na={g:2,h:3,j:13,i:14},y=null;var qa=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,ra=/^[\w-]+(?:\.[\w-]+)*$/,C=/^\d+\.fls\.doubleclick\.net$/,sa=/;gac=([^;?]+)/,ta=/;gclaw=([^;?]+)/,D=function(a,b){if(C.test(a.location.host)){if((b=a.location.href.match(ta))&&2==b.length&&b[1].match(ra))return b[1]}else{var c=(b||"_gcl")+"_aw";b=[];a=a.cookie.split(";");c=new RegExp("^\\s*"+c+"=\\s*(.*?)\\s*$");for(var d=0;d<a.length;d++){var e=a[d].match(c);e&&b.push(e[1])}a=[];if(b&&0!=b.length)for(c=0;c<b.length;c++)d=
b[c].split("."),3==d.length&&"GCL"==d[0]&&d[1]&&a.push(d[2]);if(0<a.length)return a.join(".")}return""};var ua=function(a,b,c){a=E(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0},E=function(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var F=null,G=null,va=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}if(!F)for(F={},G={},a=0;65>a;a++)F[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),G[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);a=G;c=[];for(d=0;d<b.length;d+=3){var f=b[d],g=(e=d+1<b.length)?b[d+1]:0,k=d+2<b.length,l=k?b[d+2]:0,B=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<2|l>>6;l&=63;k||(l=64,e||(g=64));c.push(a[B],
a[f],a[g],a[l])}return c.join("")};var H=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,wa=function(a){var b=a.match(H);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d},I=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1},J=/#|$/,K=function(a,b){var c=a.search(J),d=I(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",
d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))},xa=/[?&]($|#)/,M=function(a,b,c){for(var d=a.search(J),e=0,f,g=[];0<=(f=I(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(xa,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=
c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};var N=function(a,b,c,d){var e=K(c,"fmt");if(d){var f=K(c,"random"),g=K(c,"label")||"";if(!f)return!1;f=va(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," "))).replace(/[.]*$/,"");if(!ua(a,f,d))return!1}e&&4!=e&&(c=M(c,"rfmt",e));c=M(c,"fmt",4);e=document.createElement("SCRIPT");e.src=c;e.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var O="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_evaluemrc google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_disable_merchant_reported_conversions".split(" "),
P=function(a){return null!=a?encodeURIComponent(String(a)):""},Q=function(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""},R=function(a,b){b=P(b);return""!=b&&(a=P(a),""!=a)?"&".concat(a,"=",b):""},S=function(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},ya=function(a){if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var b=
[];for(g in a)if(Object.prototype.hasOwnProperty.call(a,g)){var c=a[g];if(c&&"function"==typeof c.join){for(var d=[],e=0;e<c.length;++e){var f=S(c[e]);null!=f&&d.push(f)}c=0==d.length?null:d.join(",")}else c=S(c);(d=S(g))&&null!=c&&b.push(d+"="+c)}var g=b.join(";")}else g="";return""==g?"":"&".concat("data=",encodeURIComponent(g))},za=function(a){if(null!=a){a=a.toString();if(2==a.length)return R("hl",a);if(5==a.length)return R("hl",a.substring(0,2))+R("gl",a.substring(3,5))}return""};
function T(a){return"number"!=typeof a&&"string"!=typeof a?"":P(a.toString())}
var Aa=function(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=[];e&&(f.push(T(e.value)),f.push(T(e.quantity)),f.push(T(e.item_id)),f.push(T(e.adwords_grouping)),f.push(T(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""},Ba=function(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain)return"";var c="";if(b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix))return c=
D(a,b.google_gcl_cookie_prefix),R("gclaw",c);(b=D(a))&&(c=R("gclaw",b));if(C.test(a.location.host))var d=(d=a.location.href.match(sa))&&2==d.length&&d[1].match(qa)?decodeURIComponent(d[1]):"";else{b=[];a=a.cookie.split(";");for(var e=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,f=0;f<a.length;f++){var g=a[f].match(e);g&&b.push({b:g[1],value:g[2]})}a={};if(b&&b.length)for(e=0;e<b.length;e++)f=b[e].value.split("."),"1"==f[0]&&3==f.length&&f[1]&&(a[b[e].b]||(a[b[e].b]=[]),a[b[e].b].push({timestamp:f[1],f:f[2]}));
b=[];for(d in a){e=[];f=a[d];for(g=0;g<f.length;g++)e.push(f[g].f);b.push(d+":"+e.join(","))}d=0<b.length?b.join(";"):""}return c+(d?R("gac",d):"")},Ca=function(a,b,c){var d=[];if(a){var e=a.screen;e&&(d.push(R("u_h",e.height)),d.push(R("u_w",e.width)),d.push(R("u_ah",e.availHeight)),d.push(R("u_aw",e.availWidth)),d.push(R("u_cd",e.colorDepth)));a.history&&d.push(R("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&d.push(R("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&
d.push(R("u_java",b.javaEnabled())),b.plugins&&d.push(R("u_nplug",b.plugins.length)),b.mimeTypes&&d.push(R("u_nmime",b.mimeTypes.length)));return d.join("")};function Da(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(e){return!1}};a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)}
var Ea=function(a,b,c,d){var e="";if(b){if(a.top==a)var f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var k;if(k=!!g&&null!=g.location.href)c:{try{r(g.foo);k=!0;break c}catch(l){}k=!1}f=k}catch(l){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;e+=R("frm",f);e+=R("url",Q(a));e+=R("ref",Q(d||b.referrer))}return e},U=function(a,b){return!(la||b&&Fa.test(navigator.userAgent))||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?
"https:":"http:"},Fa=/Android ([01]\.|2\.[01])/i,V=function(a,b){if(!v||!y||"376635472"!=A(3)){var c=document.createElement("IFRAME");c.style.display="none";c.src=U(a,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE";b.body.appendChild(c)}};function Ga(){return new Image}
var Ha=function(a,b,c,d,e,f){var g=c.onload_callback,k;e&&g&&g.call?k=g:k=function(){};d+=R("async","1");g=(e=c.opt_image_generator)&&e.call;if(!(f=g||!f)){if(c.google_conversion_domain)var l=!1;else try{l=N(a,b,d,k)}catch(B){l=!1}f=!l}f&&(a=Ga,g&&(a=e),a=a(),a.src=d,a.onload=k)},Ia=function(a,b){for(var c=document.createElement("IFRAME"),d=[],e=[],f=0;f<b.google_conversion_items.length;f++){var g=b.google_conversion_items[f];g&&g.quantity&&(g.sku||g.item_id)&&(d.push(g.sku||g.item_id),e.push(g.quantity))}f=
"";null!=b.google_basket_feed_language&&null!=b.google_basket_feed_country?f="&mrc_language="+b.google_basket_feed_language.toString()+"&mrc_country="+b.google_basket_feed_country.toString():null!=b.google_conversion_language&&(g=b.google_conversion_language.toString(),5==g.length&&(f="&mrc_language="+g.substring(0,2)+"&mrc_country="+g.substring(3,5)));a=U(a,!1)+"//www.google.com/ads/mrc";c.src=a+"?sku="+d.join(",")+"&qty="+e.join(",")+"&oid="+b.google_conversion_order_id+"&mcid="+b.google_conversion_merchant_id+
f;c.style.width="1px";c.style.height="1px";c.style.display="none";return c},Ja=function(a,b,c){var d=function(){c.documentElement.appendChild(Ia(a,b))};"complete"===c.readyState?d():a.addEventListener?a.addEventListener("load",d):a.attachEvent("onload",d)},Ka=function(a,b){y&&"376635471"==A(2)&&("complete"===b.readyState?V(a,b):a.addEventListener?a.addEventListener("load",function(){V(a,b)}):a.attachEvent("onload",function(){V(a,b)}))},La=function(a){return!a.google_disable_merchant_reported_conversions&&
!!a.google_conversion_merchant_id&&!!a.google_conversion_order_id&&!!a.google_conversion_items},Ma=function(a,b){for(var c={},d=function(d){c[d]=b&&null!=b[d]?b[d]:a[d]},e=0;e<O.length;e++)d(O[e]);d("onload_callback");return c};var Na=function(a,b,c){var d=c.length+1,e=function(){--d;if(0>=d){var c=E(a,!1),e=c[b];e&&(delete c[b],(c=e[0])&&c.call&&c())}},f=function(a,b){var c=new Image;c.onload=a;c.src=b};if(2==c.length){var g=c[0],k=c[1];0<=I(g,0,"rmt_tld",g.search(J))&&0<=I(g,0,"ipr",g.search(J))&&!k.match(H)[6]&&(k+=wa(g),c[1]=M(k,"rmt_tld","1"))}for(g=0;g<c.length;g++){k=c[g];var l=K(k,"fmt");switch(parseInt(l,10)){case 1:case 2:(l=a.document.getElementById("goog_conv_iframe"))&&!l.src?(l.onload=e,l.src=k):f(e,k);break;
case 4:N(a,a.document,k,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){e();break}else k=M(k,"sendb",2);k=M(k,"fmt",3);default:f(e,k)}}e()},W=["GooglemKTybQhCsO"],X=h;W[0]in X||"undefined"==typeof X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==Na;Z?X[Y]=Na:X[Y]&&X[Y]!==Object.prototype[Y]?X=X[Y]:X=X[Y]={}}
window.google_trackConversion=function(a){var b=window;var c=navigator,d=document;a=Ma(b,a);a.google_conversion_format=3;var e=!1;if(a&&3==a.google_conversion_format){try{if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)var f=!1;else a.google_conversion_date=new Date,a.google_conversion_time=a.google_conversion_date.getTime(),a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?
a.google_conversion_snippets+1:1,"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time),a.google_conversion_js_version="9",0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3),!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0),y=new oa,ma&&(a.google_remarketing_for_search=!1),f=!0;if(f){a.google_remarketing_only&&
a.google_enable_display_cookie_match&&(y&&z(["376635470","376635471"],ea,2),v&&y&&"376635471"==A(2)&&y&&z(["376635472"],ia,3));a.google_remarketing_only&&!a.google_conversion_domain&&y&&z(["759238990","759238991"],ja,13);!a.google_remarketing_only||a.google_conversion_domain||y&&("759248991"==A(14)||"759248990"==A(14))||y&&z(["759248990","759248991"],ka,14);f="/?";"landing"==a.google_conversion_type&&(f="/extclk?");var g=[a.google_remarketing_only?"/pagead/viewthroughconversion/":"/pagead/conversion/",
P(a.google_conversion_id),f,"random=",P(a.google_conversion_time)].join(""),k,l=a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com";g=k=U(b,/www[.]googleadservices[.]com/i.test(l))+"//"+l+g;var B=[R("cv",a.google_conversion_js_version),R("fst",a.google_conversion_first_time),R("num",a.google_conversion_snippets),R("fmt",a.google_conversion_format),R("userId",a.google_user_id),R("value",a.google_conversion_value),R("evaluemrc",a.google_conversion_evaluemrc),
R("currency_code",a.google_conversion_currency),R("label",a.google_conversion_label),R("oid",a.google_conversion_order_id),R("bg",a.google_conversion_color),za(a.google_conversion_language),R("guid","ON"),!a.google_conversion_domain&&"GooglemKTybQhCsO"in h&&"function"==typeof h.GooglemKTybQhCsO?R("resp","GooglemKTybQhCsO"):"",R("disvt",a.google_disable_viewthrough),R("eid",pa().join()),Ca(b,c,a.google_conversion_date),ya(a),R("gtm",a.google_gtm),Ba(d,a),c&&c.sendBeacon?R("sendb","1"):"",Ea(b,d,a.google_conversion_page_url,
a.google_conversion_referrer_url),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":"",Da(d)].join(""),da=x(),L=B+(0<da.length?"&debug_experiment_id="+da:"");if(a.google_remarketing_only||a.google_conversion_domain)var fa=L;else{La(a)&&!a.google_basket_transaction_type&&(a.google_basket_transaction_type="mrc");var ha=[L,[R("mid",a.google_conversion_merchant_id),R("fcntr",a.google_basket_feed_country),R("flng",a.google_basket_feed_language),R("dscnt",a.google_basket_discount),R("bttype",
a.google_basket_transaction_type)].join(""),Aa(a)].join("");fa=2E3<ha.length?[L,R("item","elngth")].join(""):ha}Ha(b,d,a,g+fa,!0,!0);if(a.google_remarketing_for_search&&!a.google_conversion_domain){var Oa=Math.floor(1E9*Math.random()),Pa=[P(a.google_conversion_id),"/?random=",Oa].join(""),Qa=U(b,!1)+"//www.google.com/ads/user-lists/"+Pa;c=Qa;var Ra=[R("label",a.google_conversion_label),R("fmt","3"),Ea(b,d,a.google_conversion_page_url,a.google_conversion_referrer_url)].join("");Ha(b,d,a,c+Ra,!1,!1)}a.google_remarketing_only&&
a.google_enable_display_cookie_match&&Ka(b,d);e=!0}La(a)&&(Ja(b,a,d),e=!0)}catch(Sa){}b=e}else b=!1;return b};}).call(this);