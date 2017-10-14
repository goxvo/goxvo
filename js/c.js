var 
en=encodeURIComponent,
alert=function(){
	var
	T,
	A=$.D.m('div'),
	alert=function(i){
		A.innerHTML=i;
		setTimeout(function(){
			A.className='alert';
		},10);

		clearTimeout(T);
		T=setTimeout(function(){
			A.className='alert h';
		},3e3);
	};

	A.className='alert h';
	$.D.a(A);
	return alert;
}(),
Q=function($,win,doc){
	var
	M=$('#m'),
	AB=$('#ab'),
	html=$('html'),
	body=$('body'),
	X,
	Pnum=20,
	x=function(t,d,r,f){
		//t='simple'
		t=$('#_'+t+'_').innerHTML;

		X=$.x(d,function(i){
			f(Mustache.render(t,r(i)));
		});
	},
	de=function(text,r){
		try{
			r=decodeURIComponent(text);
		}catch(e){
			r=text;
		}
		return r;
	},
	qr=function(){
		$.x('x/?a=qr&t='+encodeURIComponent(location.href),function(o){
			if(o.error)
				return alert(o.error);
			if(o.hash)
				$('footer').innerHTML='<img class="qr" src="x/q/'+o.hash+'.png">';
			
		});
	},
	Title=function(t){
		return function(){
			var a=Array.prototype.slice.apply(arguments);
			a.push(t);
			document.title=a.join(' | ');
		};
	}(document.title),
	本地存用户们=function(us){
		if(!Q.UID)
			Q.UID={};

		if(!Q.UNAME)
			Q.UNAME={};

		us.forEach(function(u){
			Q.UID[u.uid]=u;
			Q.UNAME[u.name]=u;
		});
	},
	根据唯一值取用户信息=function(uid){
		
		return Q.UID[uid];
	},
	根据用户名取用户信息=function(uname){
		uname=de(uname);

		return Q.UNAME[uname];		
	},
	evalHtml=function(i){
		$.x('i/m/'+i+'.html?_r=123',function(H){
			M.innerHTML=H;
			eval(H.split('<script>')[1].split('<\/script>')[0]);
		});
	},
	Q={
		x:x,
		imghref:'//dev-vscam-co.static.smartgslb.com/',
		load:function(){

			$.x('x/?a=allu&sss='+$.cookie('sss'),function(o){
				本地存用户们(o);
				popstate();
			});

			$.x('x/?a=u&'+($.cookie('sss')?'sss='+$.cookie('sss'):'_r='+Math.random()),function(o){
				if(!o.error){
					Q.me=o;
					$('.user').innerHTML=
					//'<li><a href="#!box"><i class="i i4v0"></i></a></li>'+ multiple="true"
					'<li class="up-li"><i class="i i7v1"></i><input type="file" id="dragF"></li>'+
					'<li>'+function(){
						if(o.avatar)
							return '<a href="#!u/'+encodeURI(o.name)+'" class="u"><img src="avatar/s/'+o.uid+'.jpg"></a>';
						else
							return '<a href="#!u/'+encodeURI(o.name)+'" class="u"><i class="i i4v1"></i></a>';
					}()+'</li>'+
					'<li><a href="#!set"><i class="i i8v1"></i></a></li>'
					//+
					//'<li><a href="#!logout"><i class="i i6v1"></i></a></li>'
					//<li><a href="#!ring"><b>0</b><i class="i"></i></a></li>';
					$.j('i/up.js');
				}else{
					
					$('.user').innerHTML='\
					<li><a href="#!login"><i class="i i4v1"></i></a></li>';
				}
			});
		},
		home:function(s,c,U,f){
			M.innerHTML='<div id="grid"></div><div id="more"></div>';

			f();

			var uid=U?U.uid:'';

			pull.init('grid');

			$.x('x/?a=h&n='+Pnum+'&s='+(s||'')+'&c='+(c||'')+'&u='+uid,function(r){

				var 
				ps=r.grids;

				本地存用户们(r.users);

				if(!ps){
					$('#more').innerHTML='<p class="banner">没有更多啦</p>';
					return;
				}
				var
				i=0,
				o,
				oTime=2000000000,
				li;
				while(o=ps[i++]){
				//for(var i=0,o,l=ps.length,oTime=2000000000;i<l;i++){
				//	o=ps[i];
					//pull.add(ps[i]);
					var 
					u=根据唯一值取用户信息(o.uid);
					li=pull.add('<a class="co" href="#!g/'+o.pid+'">\
						'+function(o){
							if(o.wbpid)
								return '<img class="wbpic load" onerror="this.src=\'img/s/'+o.origin+'.jpg\'" src="//ws2.sinaimg.cn/bmiddle/'+o.wbpid;
							else
								return '<img class="load" src="img/s/'+o.origin+'.jpg';

						}(o)+'" style="height:'+Math.round(300*o.scale)+'px">\
						<b class="co-pr"><i>'+(o.preset||'vs')+'</i></b>\
					</a>'+
					(uid?'':'<div class="info"><a href="#!u/'+u.name+'">'+u.name+'</a></div>'),{
						height:uid?Math.round(300*o.scale):Math.round(300*o.scale)+40,
						wbpid:o.wbpid,
						pid:o.pid
					});

					li.o=o;
					li.onmouseover=function(){
						//console.log(this.d.wbpid);

						this.onmouseover=null;
						$.x('x/?a=p&id='+this.d.pid);

						if(this.d.wbpid)
							new Image().src='//ws2.sinaimg.cn/large/'+this.d.wbpid+'.jpg';

					};
					li.onclick=function(e){
						if(window.event.altKey){
							e.preventDefault();
							e.stopPropagation();

							var 
							that=this;

							if(!prompt('请输入 VSCAM 来确认删除照片！','').match(/^vscam$/i))
								return false;

							$.x('x/?a=remove','pid='+that.o.pid,function(r){
								if(r.error)
									return alert(r.error);

									that.setAttribute('removed','1');
									alert(/删除成功/);

							})
							return false;
						}
					};

					if(oTime>o.unix)
						oTime=o.unix;
				}

				for(var _o=$.S('.co .load'),i=0,l=_o.length;i<l;i++){
					_o[i].onload=function(that){
						return function(){
							that.className=that.className.replace(/load/,'');
						};
					}(_o[i]);
					if(_o[i].complete)setTimeout(_o[i].onload,10);
				}

				if(U){
					if(ps.length==Pnum){
						$('#more').innerHTML='<a href="#!u/'+encodeURI(U.name)+'/'+oTime+'" class="more">- 查看 '+$.re_date(oTime)+' 之前的照片 -</a>';
					}else if(s&&(!ps||ps.length<Pnum)){
						$('#more').innerHTML='<a href="#!u/'+encodeURI(U.name)+'" class="more">- 返回最新 -</a>';
					}
				}else{
					if(ps.length==Pnum){
						$('#more').innerHTML='<a href="#!grid/'+oTime+'" class="more">- 查看 '+$.re_date(oTime)+' 之前的照片 -</a>';
					}else if(s&&(!ps||ps.length<Pnum)){
						$('#more').innerHTML='<a href="#!grid" class="more">- 返回最新 -</a>';
					}
				}
			});
		},grid:function(s){
			Title();

			Q.home(s[0],0,0,function(){
				AB.innerHTML='<i class="i i5v0"></i>';
				AB.className='home';
			});
		},c:function(s){

			//Title();
			Q.home(s[1],s[0]);
		},u:function(hs){
			var 
			u=根据用户名取用户信息(hs[0]),
			s=hs[1];//&c='+(c||'')+'


			$.x('x/?a=u&name='+en(de(hs[0])),function(u){
				u=u[0];
				if(!u){
					alert('用户不存在');
					location.hash='#!grid';
				};

				if(AB.className!='u-'+hs[0])
					Title(u.name);

				Q.home(s,0,u,function(){
					AB.className='u'+u.uid;
					AB.innerHTML='<div class="u-info">\
						<!--<img src="i/logo.svg">-->'+function(){
							if(u.avatar)
								return '<a href="#!u/'+encodeURI(u.name)+'" class="co" style="background-image:url(avatar/s/'+u.uid+'.jpg)"><img src="avatar/b/'+u.uid+'.jpg"></a>\
								<b>'+u.name+'</b>';
							else
								return '<a href="#!u/'+encodeURI(u.name)+'" class="co-b"><b>'+u.name+'</b></a>';

						}()+'<p>'+(u.des||'').enTxt()+'</p>'+function(){
							if(!u.url)
								return '';
							else if(u.url.match(/^@/))
								return '<div class="u-url u-url-weibo"><a href="//weibo.com/n/'+u.url.substr(1)+'" target="_blank">'+u.url+'</a></div>';
							else
								return '<div class="u-url"><a href="'+u.url+'" target="_blank">'+u.url+'</a></div>';

						}()+
						'<!--<a href="#!" class="follow">关注</a>-->\
					</div>';
				});
			});

		},g:function(s){
			if(!s)
				return location.hash='#!grid';

			M.innerHTML='<div id="pp"><i class="loading"></i></div><div id="more"></div>';



			$.x('x/?a=p&id='+s[0],function(pp){
				if(!pp||pp.error){
					alert('地址不正确');
					location.hash='#!grid';
					return;
				}

				if(AB.className!='u-p-'+pp.uid){

					u=pp.user;

					Title(pp.text,u.name);

					AB.className='u';
					AB.innerHTML='<div class="u-info">\
						<a href="#!u/'+u.name+'"><b>'+u.name+'</b></a>\
					</div>';
				}

				$('#pp').innerHTML='<div class="pp-co" style="background-image:url('+
				function(){
					if(pp.wbpid)
						return '//ws2.sinaimg.cn/bmiddle/'+pp.wbpid;
					else
						return 'img/s/'+pp.origin+'.jpg';
				}()+')">'+
				function(){
					if(pp.wbpid)
						return '<img class="img load" src="//ws2.sinaimg.cn/large/'+pp.wbpid+'.jpg">';
					else
						return '<img class="img load" src="img/m/'+pp.origin+'.jpg">';
				}()+
				'</div>\
				<div class="pp-text">'+pp.text+'</div>'+
				(pp.preset?'<div class="pp-pre-box"><span id="pp-info-btn" class="pp-preset">'+pp.preset+'</span></div>':'')+//'<i id="pp-info-btn" class="i i1v1" id="pp-info-btn"></i>')+
				'<div id="pp-info"></div>'//class="h"
				/*
				 style="height:'+800*pp.scale+'px"
				*/
				var 
				_ppCo=$('.pp-co'),
				_ppHeight=$('#pp').offsetWidth*pp.scale;

				if(_ppHeight>800)
					_ppHeight=800;
				_ppCo.style.cssText+=';height:'+_ppHeight+'px';


				var _o=$('.img.load');

				_o.onload=function(){
					this.className='img';
					setTimeout(function(){
						if(_ppCo)
							_ppCo.style.cssText='';
					},1000);
				};
				if(_o.complete)
					setTimeout(_o.onload,10);
				
				var bkimg='img/m/'+pp.origin+'.jpg';
				_o.onerror=function(){
					this.src=bkimg;
				};

				var 
				exif=(pp.exif);//JSON.parse

				$('#pp-info').innerHTML='<time>'+$.re_date(pp.unix)+'</time>'

				+

				(exif&&exif['COMPUTED']&&exif['COMPUTED']['ApertureFNumber']?'<div class="pp-exif-info">\
					<p><i class="i i0v2"></i>'+exif['COMPUTED']['ApertureFNumber']+'</p>\
					<p><i class="i i1v2"></i>'+exif['EXIF']['ISOSpeedRatings']+'</p>\
				</div>':'')+
				(pp.gps?'<div id="pp-map-cover"></div>':'')

				+

				('<div class="cm-article" data-key="'+pp.pid+'"></div>');
				
				萌评.运转();
				
				if(pp.gps&&$('#pp-map-cover')){
					var 
					gps=pp.gps;
					/*gps=gps.split(',');
					
					gps[0]=gps[0]*1+.004;
					gps[1]=gps[1]*1+.0007;
					
					gps=gps.join();
					*/

					$.x('x/?a=maps&size=800*300&gps='+gps,function(o){
						if(o.url)
							$('#pp-map-cover').innerHTML='<img src="x/'+o.url+'">';
					});
				}
				if($('#pp-info-btn'))$('#pp-info-btn').onclick=function(){
					var o=$('#pp-info');
					o.className=o.className?'':'h';
					return false;
				}
			});
		},login:function(){
			Title('登录')
			AB.innerHTML='<i class="i i4v1"></i>';
			evalHtml('login');
		},reg:function(){
			Title('加入');
			AB.innerHTML='<i class="i i5v1"></i>';
			evalHtml('reg');
		},logout:function(){
			$.x('x/?a=logout&_r='+Math.random(),function(i){
				if(i.error)
					return alert(i.error);

				location.hash='#!grid';

				Q.load();
			});

		},up:function(){
			Title('上传');
			AB.innerHTML='<i class="i i7v1"></i>';
			evalHtml('up');
		},flag:function(){
			Title('确认信息');
			AB.innerHTML='';
			evalHtml('flag');
		},set:function(){
			Title('用户设置');
			evalHtml('set');

		}
		
	};

/*

 	$('#nav').innerHTML=Mustache.render($('#_nav_').innerHTML,function(){
		var r=[];
		for(var i in INF.c)
			if(i&&INF.c[i][1])
				r.push({
					id:i,
					name:INF.c[i][0],
					des:INF.c[i][1]
				});
		return r;
	}());
*/
//+=' - '+$('p').innerHTML;

	var laHash='简直惨惨惨OAQ',popstate=function(){
		//console.log(location.hash);
		if('onhashchange' in win)
			win.onhashchange=popstate;

		if(laHash==location.hash)
			return;


		var lash=location.hash.substring(2);
		var L=lash.split('/');

		if(!Q[L[0]]){
			location.hash='#!grid';
			return
		}
			
		
		/*

		($('#h a.a')||M).className='';
		($('#h a[href="#'+L[0]+'"]')||M).className='a';
		*/

		if(laHash.split('/')[0]!=L[0]){
			M.style.cssText='transition:none';
			M.className='h';
			setTimeout(function(){
				M.style.cssText='';
				M.className='';
			},10);
		}
		
		laHash=location.hash;

		
		body.className='body-'+L[0];
		Q[L.shift()](L);

		qr();
		
		/*
		if($.cookie('wb')&&$.stat)
			$.stat($.cookie('wb'));
*/
	};

	if(!'onhashchange' in win)
		setInterval(function(){
			if(laHash!=location.hash){
				popstate();
				laHash=location.hash;
			}
		},100);

	var UA=navigator.userAgent;
	$('meta[name="viewport"]').content=UA.match(/ipad/i)?'width=720':
		UA.match(/iphone/i)?'width=300':
		'width=720';

	if(UA.match(/ipad|iphone|android/i)){
		var Css=$.D.m('style');
		Css.innerHTML='.nav .up-li{display:none;}';
		$.D.a(Css);
	}

	Q.load();


	setTimeout(function(){$.j('//1.mouto.org/x.js')},100);
	console.log('٩͡[๏v͡๏]۶ VScam @卜卜口<vscam.co> 2014/09/16');
	return Q
}(iTorr,window,document);
