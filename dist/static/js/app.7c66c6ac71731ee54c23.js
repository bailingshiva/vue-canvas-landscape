webpackJsonp([1],{NHnr:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t("7+uW"),i={render:function(){var a=this.$createElement,s=this._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=t("VU/8")({name:"App"},i,!1,function(a){t("l3wy")},null,null).exports,e=t("/ocq"),h=t("Zrlr"),o=t.n(h),c=t("wxAW"),l=t.n(c),d=function(){function a(s){var t=s.el,r=s.background,i=s.width,n=s.height;o()(this,a),this.ele=t,this.ele.width=i,this.ele.height=n,this.ele.style.backgroundColor=r,this.canvas=t.getContext("2d"),this.elements=[],this.flower={},this.grass={},this.init()}return l()(a,[{key:"init",value:function(){this.initFlowerDraw(),this.initGlass(),this.initBackdrop()}},{key:"initBackdrop",value:function(){var a=this.canvas.createLinearGradient(0,0,0,this.ele.height);a.addColorStop(0,"#2a5caa"),a.addColorStop(1,"#afb4db"),this.canvas.save(),this.canvas.beginPath(),this.canvas.fillStyle=a,this.canvas.fillRect(0,0,this.ele.width,this.ele.height),this.canvas.restore(),this.tree({x:this.ele.width/2,y:this.ele.height-10,radius:15});for(var s=this.incRandom(10,5),t=0;t<s;t++){var r=this.incRandom(80,50);new this.grass.daisy({x:this.ele.width*this.floatRandom(0,1),y:this.ele.height,height:r,radius:r/50})}for(var i=0;i<this.ele.width;i++)new this.grass.weed({x:i,y:this.ele.height})}},{key:"setBglmage",value:function(a){var s=this,t=new Image;t.src=a,t.onload=function(){s.initFlowerDraw(),s.tree({x:s.ele.width/2,y:s.ele.height-100,radius:15}),s.initGlass(),s.moon(),new s.grass.weed({x:100,y:800}),new s.grass.daisy({x:300,y:s.ele.height,radius:2.5,height:200})}}},{key:"moon",value:function(){this.canvas.save(),this.canvas.beginPath(),this.canvas.moveTo(200,200),this.canvas.quadraticCurveTo(265,250,180,300),this.canvas.quadraticCurveTo(245,235,200,200),this.canvas.fillStyle="rgba(255,255,0,0.8)",this.canvas.fill(),this.canvas.restore()}},{key:"incRandom",value:function(a,s){return Math.round(a+s*Math.random())}},{key:"floatRandom",value:function(a,s){return a+(s-a)*Math.random()}},{key:"tree",value:function(a){var s=this,t={branchs:[],x:a.x,y:a.y,radius:a.radius,grap:1,setBranchStructure:function(a,r){if(t.grap++,!a.length)for(var i=s.incRandom(2,2),n=0;n<i;n++)a.push({radius:r.radius,pointArr:[],x:r.x,y:r.y,inc:{x:s.floatRandom(-1.5,1.5),y:s.floatRandom(3.5,5)},branchs:[]});for(var e=0;e<a.length;e++){for(var h=s.incRandom(50,20),o=0;o<h;o++){if(a[e].radius<.8){a[e].isEnd=!0;break}a[e].radius*=.99,a[e].x+=a[e].inc.x,a[e].y-=a[e].inc.y;var c={x:a[e].x,y:a[e].y,radius:a[e].radius},l=.18-.1/t.grap,d=s.floatRandom(-l,l);a[e].inc.x=Math.cos(d)*a[e].inc.x-Math.sin(d)*a[e].inc.y,a[e].inc.y=Math.sin(d)*a[e].inc.x+Math.cos(d)*a[e].inc.y,a[e].pointArr.push(c)}if(a[e].radius>.8){a[e].branchs=[];for(var p=s.incRandom(1,2),v=0;v<p;v++)a[e].branchs.push({radius:a[e].radius,pointArr:[],x:a[e].x,y:a[e].y,inc:{x:a[e].inc.x,y:a[e].inc.y},branchs:[]});var u={x:a[e].x,y:a[e].y,radius:a[e].radius};t.setBranchStructure(a[e].branchs,u)}}},draw:function(a){for(var r=0;r<a.length;r++){for(var i=a[r].pointArr,n=0;n<i.length;n++)s.canvas.save(),s.canvas.beginPath(),s.canvas.arc(i[n].x,i[n].y,i[n].radius,0,2*Math.PI),s.canvas.globalAlpha=.3,s.canvas.fillStyle="#53261f",s.canvas.fill(),s.canvas.restore();if(a[r].isEnd)new s.flower.pearch({x:i[i.length-1].x,y:i[i.length-1].y,radius:6});t.draw(a[r].branchs)}}},r={x:t.x,y:t.y,radius:t.radius};t.setBranchStructure(t.branchs,r),t.draw(t.branchs)}},{key:"initFlowerDraw",value:function(){var a=this;a.flower.pearch=function(s){this.params={x:s.x,y:s.y,radius:s.radius,petals:[],feelers:[]},this.setStructure=function(){for(var s=0;s<5;s++){var t=[],r=72*s,i=r-24,n=.6*this.params.radius,e=r-45,h=.6*this.params.radius;t.push({point:{x:this.params.x+n*Math.cos(i*Math.PI/180),y:this.params.y+n*Math.sin(i*Math.PI/180)},qpoint:{x:this.params.x+h*Math.cos(e*Math.PI/180),y:this.params.y+h*Math.sin(e*Math.PI/180)}});var o=r+24,c=.6*this.params.radius,l=r,d=this.params.radius;t.push({point:{x:this.params.x+c*Math.cos(o*Math.PI/180),y:this.params.y+c*Math.sin(o*Math.PI/180)},qpoint:{x:this.params.x+d*Math.cos(l*Math.PI/180),y:this.params.y+d*Math.sin(l*Math.PI/180)}});var p=r+45,v=.4*this.params.radius;t.push({point:{x:this.params.x,y:this.params.y},qpoint:{x:this.params.x+v*Math.cos(p*Math.PI/180),y:this.params.y+v*Math.sin(p*Math.PI/180)}}),this.params.petals.push(t)}for(var u=a.incRandom(18,22),m=0;m<u;m++){var y=360*a.floatRandom(0,1),f=this.params.radius*a.floatRandom(.1,.4),x=y-10;this.params.feelers.push({point:{x:this.params.x+f*Math.cos(y*Math.PI/180),y:this.params.y+f*Math.sin(y*Math.Pl/180)},qpoint:{x:this.params.x+.6*f*Math.cos(x*Math.PI/180),y:this.params.y+.6*f*Math.sin(x*Math.PI/180)}})}},this.draw=function(){var t=a.canvas.createRadialGradient(this.params.x,this.params.y,.2*this.params.radius,this.params.x,this.params.y,this.params.radius);t.addColorStop(0,"#f05b72"),t.addColorStop(1,"#feeeed");var r=a.canvas.createRadialGradient(this.params.x,this.params.y,.1*this.params.radius,this.params.x,this.params.y,this.params.radius);r.addColorStop(0,"rgba(255,131,250,0.26)"),r.addColorStop(1,"rgba(205,0,205,0.26)");for(var i=0;i<this.params.petals.length;i++){var n=this.params.petals[i];a.canvas.save(),a.canvas.beginPath(),a.canvas.moveTo(this.params.x,this.params.y);for(var e=0;e<n.length;e++)a.canvas.quadraticCurveTo(n[e].qpoint.x,n[e].qpoint.y,n[e].point.x,n[e].point.y);a.canvas.fillStyle=t,a.canvas.strokeStyle=r,a.canvas.fill(),a.canvas.restore()}var h=a.canvas.createRadialGradient(s.x,s.y,.1*s.radius,s.x,s.y,.3*s.radius);h.addColorStop(0,"#8B008B"),h.addColorStop(1,"#8B2252");for(var o=0;o<this.params.feelers.length;o++)a.canvas.save(),a.canvas.beginPath(),a.canvas.moveTo(this.params.feelers[o].point.x,this.params.feelers[o].point.y),a.canvas.quadraticCurveTo(this.params.feelers[o].qpoint.x,this.params.feelers[o].qpoint.y,this.params.x,this.params.y),a.canvas.strokeStyle="#faa755",a.canvas.lineWidth=.2,a.canvas.stroke(),a.canvas.restore(),a.canvas.save(),a.canvas.beginPath(),a.canvas.arc(this.params.feelers[o].point.x,this.params.feelers[o].point.y,.7,0,2*Math.PI),a.canvas.fillStyle="#905a3d",a.canvas.fill(),a.canvas.restore()},this.setStructure(),this.draw()},a.flower.daisy=function(s){this.params={x:s.x,y:s.y,radius:s.radius,petals:[],feelers:[]},this.setDaisyStuct=function(){for(var s=a.incRandom(18,22),t=360/s,r=0;r<s;r++){var i={},n=t*r;i.start={x:this.params.x+.2*this.params.radius*Math.cos(n*Math.PI/180),y:this.params.y+.2*this.params.radius*Math.sin(n*Math.PI/180)},i.left_q={x:i.start.x+this.params.radius*a.floatRandom(.6,.8)*Math.cos((n-a.floatRandom(8,10))*Math.PI/180),y:i.start.y+this.params.radius*a.floatRandom(.6,.8)*Math.sin((n-a.floatRandom(8,10))*Math.PI/180)},i.top={x:i.start.x+this.params.radius*a.floatRandom(.7,.8)*Math.cos(n*Math.PI/180),y:i.start.y+this.params.radius*a.floatRandom(.7,.8)*Math.sin(n*Math.PI/180)},i.right_q={x:i.start.x+this.params.radius*a.floatRandom(.6,.8)*Math.cos((n+a.floatRandom(8,10))*Math.PI/180),y:i.start.y+this.params.radius*a.floatRandom(.6,.8)*Math.sin((n+a.floatRandom(8,10))*Math.PI/180)},i.end={X:i.start.X,y:i.start.y},this.params.petals.push(i)}for(var e=a.incRandom(48,52),h=0;h<e;h++){var o=360*Math.random(),c=this.params.radius*a.floatRandom(.01,.22),l={x:this.params.x+c*Math.cos(o*Math.PI/180),y:this.params.y+c*Math.sin(o*Math.PI/180),radius:this.params.radius*a.floatRandom(.02,.03)};this.params.feelers.push(l)}},this.draw=function(){var s=a.canvas.createRadialGradient(this.params.x,this.params.y,.3*this.params.radius,this.params.x,this.params.y,this.params.radius);s.addColorStop(0,"#FF1493"),s.addColorStop(1,"#FF69B4");for(var t=0;t<this.params.petals.length;t++){var r=this.params.petals[t];a.canvas.save(),a.canvas.beginPath(),a.canvas.moveTo(r.start.x,r.start.y),a.canvas.quadraticCurveTo(r.left_q.x,r.left_q.y,r.top.x,r.top.y),a.canvas.quadraticCurveTo(r.right_q.x,r.right_q.y,r.end.x,r.end.y),a.canvas.fillStyle=s,a.canvas.strokeStyle="rgba(176,48,96,0.6)",a.canvas.fill(),a.canvas.stroke(),a.canvas.restore()}var i=a.canvas.createRadialGradient(this.params.x,this.params.y,0*this.params.radius,this.params.x,this.params.y,.25*this.params.radius);i.addColorStop(0,"#fcaf17"),i.addColorStop(1,"#c88400"),a.canvas.save(),a.canvas.beginPath(),a.canvas.fillStyle=i,a.canvas.arc(this.params.x,this.params.y,.25*this.params.radius,0,2*Math.PI),a.canvas.fill(),a.canvas.restore();for(var n=0;n<this.params.feelers.length;n++){var e=a.canvas.createRadialGradient(this.params.feelers[n].x,this.params.feelers[n].y,0,this.params.feelers[n].x,this.params.feelers[n].y,this.params.feelers[n].radius);e.addColorStop(0,"#B8860B"),e.addColorStop(1,"#FFA500"),a.canvas.save(),a.canvas.beginPath(),a.canvas.fillStyle=e,a.canvas.arc(this.params.feelers[n].x,this.params.feelers[n].y,this.params.feelers[n].radius,0,2*Math.PI),a.canvas.fill(),a.canvas.restore()}},this.setDaisyStuct(),this.draw()}}},{key:"initGlass",value:function(){var a=this;a.grass.daisy=function(s){this.params={x:s.x,y:s.y,height:s.height,radius:s.radius,trunk:[],leafs:[]},this.setDaisyStruct=function(){for(var s={x:this.params.x,y:this.params.y},t=0;t<this.params.height;t++){s.x+=a.floatRandom(-.3,.3),s.y-=1,this.params.radius*=.998;var r={x:s.x,y:s.y,radius:this.params.radius};this.params.trunk.push(r)}for(var i=Math.round(this.params.height/24),n=a.incRandom(i,1),e=this.params.height/n,h=1;h<n;h++){var o={x:this.params.x,y:this.params.y-(e*h+e/4*a.floatRandom(-1,1))},c=a.floatRandom(150,190);h%2==0&&(c=a.floatRandom(-10,30));var l=Math.round(this.params.height/4),d=a.incRandom(l,l/2),p={x:o.x+d*Math.cos(c*Math.PI/180),y:o.y+d*Math.sin(c*Math.PI/180)},v={x:o.x+d*a.floatRandom(.9,1)*Math.cos((c-10)*Math.PI/180),y:o.y+d*a.floatRandom(.9,1)*Math.sin((c-10)*Math.PI/180)},u={x:o.x+d*a.floatRandom(.9,1)*Math.cos((c+10)*Math.PI/180),y:o.y+d*a.floatRandom(.9,1)*Math.sin((c+10)*Math.PI/180)};this.params.leafs.push({start:o,left_q:v,end:p,right_q:u})}},this.draw=function(){for(var s=0;s<this.params.trunk.length;s++)a.canvas.save(),a.canvas.beginPath(),a.canvas.fillStyle="rgba(139,119,101,0.7)",a.canvas.arc(this.params.trunk[s].x,this.params.trunk[s].y,this.params.trunk[s].radius,0,2*Math.PI),a.canvas.fill(),a.canvas.restore();for(var t=0;t<this.params.leafs.length;t++){var r=this.params.leafs[t];a.canvas.save(),a.canvas.beginPath(),a.canvas.fillStyle="#556B2F",a.canvas.moveTo(r.start.x,r.start.y),a.canvas.quadraticCurveTo(r.left_q.x,r.left_q.y,r.end.x,r.end.y),a.canvas.quadraticCurveTo(r.right_q.x,r.right_q.y,r.start.x,r.start.y),a.canvas.fill(),a.canvas.restore()}new a.flower.daisy({x:this.params.trunk[this.params.trunk.length-1].x,y:this.params.trunk[this.params.trunk.length-1].y,radius:this.params.height/6})},this.setDaisyStruct(),this.draw()},a.grass.weed=function(s){var t=a.floatRandom(250,290),r=a.floatRandom(20,50),i={x:s.x+r*Math.cos(t*Math.PI/180),y:s.y+r*Math.sin(t*Math.PI/180)},n={x:s.x+.5*r*Math.cos((t-10)*Math.PI/180),y:s.y+.5*r*Math.sin((t-10)*Math.PI/180)},e={x:s.x+.5*r*Math.cos((t+10)*Math.PI/180),y:s.y+.5*r*Math.sin((t+10)*Math.PI/180)};a.canvas.save(),a.canvas.beginPath(),a.canvas.fillStyle="#556B2F",a.canvas.moveTo(s.x-2,s.y),a.canvas.quadraticCurveTo(n.x,n.y,i.x,i.y),a.canvas.quadraticCurveTo(e.x,e.y,s.x+2,s.y),a.canvas.fill(),a.canvas.restore()}}}]),a}(),p={name:"App",data:function(){return{}},mounted:function(){var a=document.getElementById("canvas"),s=window.innerWidth||document.body.clientWidth,t=window.innerHeight||document.body.clientHeight;this.Landscape=new d({el:a,background:"rgba(255,255,255)",width:s,height:t})}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var a=this.$createElement,s=this._self._c||a;return s("div",{},[s("canvas",{attrs:{id:"canvas"}})])}]},u=t("VU/8")(p,v,!1,null,null,null).exports;r.a.use(e.a);var m=new e.a({routes:[{path:"/",name:"landscape",component:u}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:m,components:{App:n},template:"<App/>"})},l3wy:function(a,s){}},["NHnr"]);
//# sourceMappingURL=app.7c66c6ac71731ee54c23.js.map