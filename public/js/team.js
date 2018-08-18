require=function e(s,i,r){function a(t,o){if(!i[t]){if(!s[t]){var g="function"==typeof require&&require;if(!o&&g)return g(t,!0);if(n)return n(t,!0);var h=new Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}var c=i[t]={exports:{}};s[t][0].call(c.exports,function(e){var i=s[t][1][e];return a(i||e)},c,c.exports,e,s,i,r)}return i[t].exports}for(var n="function"==typeof require&&require,t=0;t<r.length;t++)a(r[t]);return a}({34:[function(e,s,i){var r=e("./lib/init-page"),a=e("./lib/team/init-investors"),n=e("./lib/team/init-headshots");r(),a(),n()},{"./lib/init-page":13,"./lib/team/init-headshots":29,"./lib/team/init-investors":30}],30:[function(e,s,i){var r=e("jquery"),a=e("../arrays").shuffle,n=e("../init-screen-progress-events"),t=e("../progress").transitionForProgressInRange,o=e("../progress").clampedProgress,g=e("../progress").progressForValueInRange,h=[{img:"../img/investors/ycombinator.jpg",caption:"ycombinator"},{img:"../img/investors/Naval_Ravikant.jpg",caption:"Naval Ravikant"},{img:"../img/investors/Semil_Shah.jpg",caption:"Semil Shah"},{img:"../img/investors/Fred_Ehrsam.jpg",caption:"Fred Ehrsam"},{img:"../img/investors/StartX.jpg",caption:"StartX"},{img:"../img/investors/Digital_Currency_Group.jpg",caption:"Digital Currency Group"},{img:"../img/investors/BlueYard.jpg",caption:"BlueYard"},{img:"../img/investors/Stanford_University.jpg",caption:"Stanford University"},{img:"../img/investors/Winklevoss_Capital.jpg",caption:"Winklevoss Capital"},{img:"../img/investors/Dylan_Field.jpg",caption:"Dylan Field"},{img:"../img/investors/FundersClub.jpg",caption:"FundersClub"},{img:"../img/investors/Vinodan_Lingham.jpg",caption:"Vinodan Lingham"},{img:"../img/investors/Jaan_Tallinn.jpg",caption:"Jaan Tallinn"},{img:"../img/investors/USV.jpg",caption:"USV"}];s.exports=function(){n(),r(".investors").each(function(){var e=r('<figure class="investor fragment"><figcaption><div class="hexagon-form"></div><span></span><div class="hexagon-form"></div></figcaption><span class="hexagon-form"></span></figure>');a(h).forEach(function(s){var i=new window.Image;i.src=s.img,i.className="hexagon-form";var r=e.clone();r.prepend(i),r.find("figcaption span").text(s.caption),this.append(r)},r(this).empty().append('<span class="fragment"/>'))}),r(document).on("screen-progress",".investors-block",function(e,s){var i=o(g(s.progress,.415,.6));if(this.headerProgress!==i){var a=r(this).find(".bordered-header span");a.eq(0).css("opacity",o(g(i,0,.4))),a.eq(1).css("transform","scaleX("+o(g(i,0,.19))+")"),a.eq(2).css("transform","scaleY("+o(g(i,.19,.3))+")"),a.eq(3).css("transform","scaleX("+o(g(i,.3,.69))+")"),a.eq(4).css("transform","scaleY("+o(g(i,.69,.8))+")"),a.eq(5).css("transform","scaleX("+o(g(i,.8,1))+")"),this.headerProgress=i}var n=s.progress>=.6?1:0;if(this.sceneProgress!==n){var h=r(this).find(".investors"),c=h.find(".investor");h.find("span").eq(0).css("opacity",n),[[7,-37],[19,-44],[-52,-31],[-16,-52],[14,-44],[33,-60],[76,-53],[-37,-19],[-44,20],[-22,31],[15,-19],[32,20],[41,-17],[-44,64],[-11,75],[-10,73],[3,67],[61,58],[11,55],[11,34]].forEach(function(e,s){c.eq(s).css({opacity:n,transform:"translate3d("+t(n,e[0],0)+"%, "+t(n,e[1],0)+"%, 0)"})}),this.sceneProgress=n}})}},{"../arrays":9,"../init-screen-progress-events":14,"../progress":26,jquery:35}],29:[function(e,s,i){var r=e("jquery"),a=e("../arrays").shuffle,n=e("../init-screen-progress-events"),t=e("../progress").transitionForProgressInRange,o=e("../progress").bgProgressFn,g=[0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1],h=[{img:"../img/headshots/David-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"David Dias"},{img:"../img/headshots/Friedel-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Friedel Ziegelmayer"},{img:"../img/headshots/Hector-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Hector Sanjuan"},{img:"../img/headshots/Jeromy-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Jeromy Johnson"},{img:"../img/headshots/Jesse-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Jesse Clayburgh"},{img:"../img/headshots/Juan-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Juan Benet"},{img:"../img/headshots/Kuba-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Jakub Sztandera"},{img:"../img/headshots/Lars-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Lars Gierth"},{img:"../img/headshots/Matt-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Matt Zumwalt"},{img:"../img/headshots/Nicola-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Nicola Greco"},{img:"../img/headshots/Victor-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Victor Bjelkholm"},{img:"../img/headshots/Skylar-by-Chris-Marxen-Headshots-Berlin.de.jpg",title:"Skylar Norris"},{img:"../img/headshots/Mosh-Headshot.jpg",title:"Michelle Lee"},{img:"../img/headshots/Colin-Headshot.jpg",title:"Colin Evran"},{img:"../img/headshots/Evan-Headshot.jpg",title:"Evan Miyazono"}],c=[[-12,-30],[-10,-40],[-8,-32],[2,-20],[6,-40],[16,-30],[-16,-50],[-20,-20],[-2,-20],[6,-10],[12,-20],[32,-10],[-40,-2],[-44,2],[-16,-6],[6,8],[18,20],[-60,40],[-20,22],[11,14],[40,-2],[-60,60],[-10,30],[10,26],[30,30]];s.exports=function(){n(),r(".headshots").each(function(){var e=r('<figure class="headshot fragment"><div class="hexagon-form"></div><figcaption><div class="hexagon-border-form"></div><span></span><div class="hexagon-form"></div></figcaption><span></span></figure>'),s=a(h);s=s.map(function(e){var s=new window.Image;return s.src=e.img,s.className="hexagon-form",e.img=s,e}),g.forEach(function(i){var r=e.clone();if(i){var a=s.shift();r.find("> div").append(a.img),r.find("figcaption span").text(a.title)}this.append(r)},r(this).empty())}),r(document).on("screen-progress",".headshots-block",function(e,s){var i=o(s.progress);this.bgProgress!==i&&((this._background=this._background||r(".team-pink-background")).css("opacity",i),this.bgProgress=i);var a=s.progress>=.6?1:0;if(this.sceneProgress!==a){var n=r(this).find(".headshots").find(".headshot");c.forEach(function(e,s){n.eq(s).css({opacity:a,transform:"translate3d("+t(a,e[0],0)+"%, "+t(a,e[1],0)+"%, 0)"})}),this.sceneProgress=a}})}},{"../arrays":9,"../init-screen-progress-events":14,"../progress":26,jquery:35}],9:[function(e,s,i){i.shuffle=function(e){for(var s,i,r=e.length;0!==r;)i=Math.floor(Math.random()*r),s=e[r-=1],e[r]=e[i],e[i]=s;return e}},{}]},{},[34]);