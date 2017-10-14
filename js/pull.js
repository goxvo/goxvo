/*
��筝�筝��������絽�羌�
*/
var pull=function(i){
	var 
	tRe,
	C={
		def:document.createElement('div'),
		padding:40,
		width:300,
		allwidth:0,
		trNum:0
	},
	init=function(o){
		C.oname=o;
		if(!o||!(o=document.getElementById(o)))
			return;

		C.o=o;

		if(o.getAttribute('data-width')){
			C.width=o.getAttribute('data-width');
		}

		if(o.getAttribute('data-padding')){
			C.padding=o.getAttribute('data-padding');
		}

		o.innerHTML=o.style.cssText='';

		C.def.className=C.oname;


		window.onresize=function(){
			if(!C.o)
				return this.onresize=null;
			clearTimeout(tRe);
			tRe=setTimeout(resize,500);
		};
		resize();
	},
	resize=function(){
		C.allwidth=C.o.clientWidth-C.padding;
		var NewtrNum=Math.floor(C.allwidth/(C.width+C.padding));



		C.o.style.cssText+='width:'+(NewtrNum*(C.width+C.padding)-C.padding)+'px;';

		if(C.o.innerHTML&&C.trNum==NewtrNum)
			return;// console.log('���井押����鐔�');

		C.o.style.cssText+='height:500px;';

		C.trNum=NewtrNum;

		C.table={};
		for(var i=0,l=C.trNum;i<l;i++)
			C.table[i]=0;

		resetall();
	},setpo=function(o){

		var 
		trNumn=function(g){
			var o=0,i;
			for(i in g)
				if(g[i]<g[o])
					o=i;
			return o;
		}(C.table);

		var 
		reNowheight=C.table[trNumn]||0;


		o.style.cssText='height:'+o.d.height+'px;top:'+reNowheight+'px;left:'+trNumn*(C.width+C.padding)+'px;';

		C.table[trNumn]=reNowheight+o.d.height+C.padding;
		
		if(C.o.clientHeight<(C.table[trNumn]+100))
			C.o.style.cssText+=';height:'+C.table[trNumn]+'px';

	},resetall=function(){
		var gs=C.o.querySelectorAll('.'+C.oname);
		if(!gs)
			return;
		for(var i=0,l=gs.length;i<l;i++)
			setpo(gs[i]);

	},add=function(h,d){
		var grid=C.def.cloneNode(1);

		grid.innerHTML=h;

		grid.d=d/*?d:{
			height:Math.round(C.width*o.scale)
		};*/
		setpo(grid);

		C.o.appendChild(grid);
		return grid;
	};
	return {
		init:init,
		add:add
	}
}();
