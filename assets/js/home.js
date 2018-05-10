// alert('ddd')
	var wacthType = 0; //0-home;1-strain;2-pressure;3-structure;4-weather;
	var showType = 4;
	var base=[];
	var targetBase;
	var targetId = 1;
	var pointBase = [];
	var targetPointId;
	var order;
	var baseImgUrl;
	var usedPoint1 = [42,44,46,52,54,57,99,101,103,109,111,114,156,158,160,166,168,171,213,215,217,223,225,228]
	var usedPoint2 = [1,2,4,6,8,20,21,23,25,27,39,40,42,44,46,58,59,61,63,65,77,78,80,82,84,96,97,99,101,103,115,116,118,120,122,134,135,137,139,141,153,154,156,158,160,172,173,175,177,179,191,192,194,196,198,210,211,213,215,217]
	var usedPoint3 = [39,40,44,96,97,101,153,154,158,210,211,215]
	var usedPoint4 = [153,171]
	var usedPoint = []
	// 选择视图
	var MenuSelect = function(id){
		$(id).siblings().removeClass('menuSelected');
		$(id).addClass('menuSelected');
	}
	// var baseImgTag = '<img class="base" id="baseImg" src="'+baseImgUrl+'" />'
	// 定义点渲染变量
	var BuildPointBase = function(wacthType){
		// console.log(wacthType);
		// console.log(targetId);
		// 清空点位
		$('#accurate').empty();
		if([1,2,3,4].indexOf(wacthType)!=-1&&targetId===1){
			var a=0;
			for(var i=0; i<133;i++){
				var pointList = {};
				a++;
				pointList['id'] = a;
				pointList['isUse'] = 0;
				pointList['pointId'] = a;
				pointBase[i] = pointList;
				ConfigPointUsed(i,a);
			}
		} else if([1,2,3,4].indexOf(wacthType)!=-1&&targetId!=1){
			// console.log('渲染点')
			if(targetId===2){
				var a=19;
		  	for(var i=0;i<133; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
			} else if (targetId===3){
				var a=38;
		  	for(var i=0;i<133; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
			} else if (targetId===4){
				var a=57;
		  	for(var i=0;i<133; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
			} else if (targetId===5){
				var a=76;
		  	for(var i=0;i<133; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
			} else if (targetId===6){
				var a=95;
		  	for(var i=0;i<133; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
			} else if (targetId===7){
				var a=114;
		  	for(var i=0;i<114; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
		  	var b=0;
		  	for(var i=114;i<133; i++){
					b++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,b);
		  	}
			} else if (targetId===8){
				var a=133;
		  	for(var i=0;i<95; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
		  	var b=0;
		  	for(var i=95;i<133; i++){
					b++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,b);
		  	}
			} else if (targetId===9){
				var a=152;
		  	for(var i=0;i<76; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
			} else if (targetId===10){
				var a=171;
		  	for(var i=0;i<57; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
		  	var b=0;
		  	for(var i=57;i<133; i++){
					b++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,b);
		  	}
			} else if (targetId===11){
				var a=190;
		  	for(var i=0;i<38; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
		  	var b=0;
		  	for(var i=38;i<133; i++){
					b++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,b);
		  	}
			} else if (targetId===12){
				var a=209;
		  	for(var i=0;i<19; i++){
					// var pointList = {};
					a++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,a);
		  	}
		  	var b=0;
		  	for(var i=19;i<133; i++){
					b++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,b);
		  	}
		  	// console.log(pointBase);
			}
		}
	}

	// 配置是否启用点
	var ConfigPointUsed = function(i,pointId){
		if(wacthType===1){
			usedPoint = usedPoint1;
		} else if(wacthType === 2){
			usedPoint = usedPoint2;
		} else if(wacthType === 3){
			usedPoint = usedPoint3;
		} else if(wacthType === 4){
			usedPoint = usedPoint4;
		}
		if(usedPoint.indexOf(pointId)!=-1){
			pointBase[i]['isUse'] = 1;
			var id = pointBase[i]['id'];
			ConfigPointHtml(id,pointId);
		} else {
			pointBase[i]['isUse'] = 0;
		}
		// console.log(pointBase);
	}

	// 配置点位html
	var ConfigPointHtml = function(id,pointId){
		// 如果需要隐藏点位注释此处的poin
		var pointDiv = '<div class="point'+id+'"><div id="pointSelect'+id+'">'+pointId+'</div></div>'
		// $('#accurate').empty();
		$('#accurate').append(pointDiv);
	}

	// 预设基础图片
	var BuildBaseImg = function(id,sType,wType){
		// console.log('input',id,sType,wType);
		$('#baseImgBox').empty();
		showType = sType;
		base = [
			{
				"img":"./assets/image/"+showType+"/1.jpg",
				"id":1
			},
			{
				"img":"./assets/image/"+showType+"/2.jpg",
				"id":2
			},
			{
				"img":"./assets/image/"+showType+"/3.jpg",
				"id":3
			},
			{
				"img":"./assets/image/"+showType+"/4.jpg",
				"id":4
			},
			{
				"img":"./assets/image/"+showType+"/5.jpg",
				"id":5
			},
			{
				"img":"./assets/image/"+showType+"/6.jpg",
				"id":6
			},
			{
				"img":"./assets/image/"+showType+"/7.jpg",
				"id":7
			},
			{
				"img":"./assets/image/"+showType+"/8.jpg",
				"id":8
			},
			{
				"img":"./assets/image/"+showType+"/9.jpg",
				"id":9
			},
			{
				"img":"./assets/image/"+showType+"/10.jpg",
				"id":10
			},
			{
				"img":"./assets/image/"+showType+"/11.jpg",
				"id":11
			},
			{
				"img":"./assets/image/"+showType+"/12.jpg",
				"id":12
			}
		]
		//配置基础图片
		for(var i=0; i<base.length; i++){
			baseImgUrl = base[i].img;
			// console.log(baseImgUrl);
			$('#baseImgBox').append('<img class="base" id="baseImg'+(i+1)+'" src="'+baseImgUrl+'" />');
			// console.log(id,i+1);
			if(id===(i+1)){
				// console.log('激活')
				$('#baseImg'+id).addClass('activation');
			}
		}
		// 配置渲染点
		if([1,2,3,4].indexOf(wType)!=-1){
			BuildPointBase(wType);
		}
	}
	BuildBaseImg(1,4);

	// 导航
	var BaseImgSelect = function(id){
		// console.log(id);
		var degCss; 
		if(id===1){
			degCss = 'deg0';
		} else if(id===2){
			degCss = 'deg30';
		} else if(id===3){
			degCss = 'deg60';
		} else if(id===4){
			degCss = 'deg90';
		} else if(id===5){
			degCss = 'deg120';
		} else if(id===6){
			degCss = 'deg150';
		} else if(id===7){
			degCss = 'deg180';
		} else if(id===8){
			degCss = 'deg210';
		} else if(id===9){
			degCss = 'deg240';
		} else if(id===10){
			degCss = 'deg270';
		} else if(id===11){
			degCss = 'deg300';
		} else if(id===12){
			degCss = 'deg330';
		}
		// console.log(degCss);
		$('#direction').removeClass();
		$('#direction').addClass(degCss);
		$('#direction').addClass('wide');
		BuildBaseImg(id,showType,wacthType);
	}
	BaseImgSelect(1);

	// 配置加载等待窗口
	var timer;
	var WaitPage = function(){
		$('.waitBox').show();
		$('#timeLast').text('');
		var timeLast = 4;
		timer = setInterval(function(){
			timeLast--;
			$('#timeLast').text(timeLast+'s');
			if(timeLast<1){
				$('.waitBox').hide();
				clearInterval(timer);
				// console.log('gameOver');
			}
		},1000)
	}
	WaitPage();

$(document).ready(function(){
	// 切换视图
	$('#home').click(function(){
		WaitPage();
		MenuSelect('#home');
		wacthType = 0;
		showType = 4;
		targetId = 1;
		BuildBaseImg(targetId,showType,wacthType);
	})
	$('#strain').click(function(){
		WaitPage();
		MenuSelect('#strain');
		wacthType = 1;
		showType = 1;
		targetId = 1;
		BuildBaseImg(targetId,showType,wacthType);
	})
	$('#pressure').click(function(){
		WaitPage();
		MenuSelect('#pressure');
		wacthType = 2;
		showType = 2;
		targetId = 1;
		BuildBaseImg(targetId,showType,wacthType);
	})
	$('#structure').click(function(){
		WaitPage();
		MenuSelect('#structure');
		wacthType = 3;
		showType = 3;
		targetId = 1;
		BuildBaseImg(targetId,showType,wacthType);
	})
	$('#weather').click(function(){
		WaitPage();
		MenuSelect('#weather');
		wacthType = 4;
		showType = 4;
		targetId = 1;
		BuildBaseImg(targetId,showType,wacthType);
	})

	// 向左
	$('#left').click(function(){
		// console.log(targetId);
		if(targetId===1){
		 	targetId = 12;
		} else{
		 	targetId--;
		}
 		BaseImgSelect(targetId);
	})

	// 向右
	$('#right').click(function(){
	 if(targetId===12){
	 	 targetId = 1;
	 } else{
	 	 targetId++;
	 }
 		BaseImgSelect(targetId);
	})

	// 点击点位
	// $('.point42').click(function(){
	// 	console.log('42');
	// 	// alert('1');
	// })
});