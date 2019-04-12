// alert('ddd')
	var checkedMonitor;
	var wacthType = 2; //0-home;1-strain;2-pressure;3-structure;4-weather;
	var showType = 2;
	var base=[];
	var targetBase;
	var targetId = 1;
	var pointBase = [];
	var targetPointId;
	var order;
	var baseImgUrl;
	// var usedPoint1 = [42,44,46,52,54,57,99,101,103,109,111,114,156,158,160,166,168,171,213,215,217,223,225,228]
	var usedPoint2 = [1,2,4,6,8,20,21,23,25,27,39,40,42,44,46,58,59,61,63,65,77,78,80,82,84,96,97,99,101,103,115,116,118,120,122,134,135,137,139,141,153,154,156,158,160,172,173,175,177,179,191,192,194,196,198,210,211,213,215,217]
	// var usedPoint3 = [39,40,44,96,97,101,153,154,158,210,211,215]
	// var usedPoint4 = [153,171]
	var usedPoint = []
	// console.log(usedPoint2.length);
	var uesdCode2 = ['FY-A-03','FY-B-03','FY-C-03','FY-E-03','FY-F-03','FY-A-02','FY-B-02','FY-C-02','FY-E-02','FY-F-02','FY-A-01','FY-B-01','FY-C-01','FY-E-01','FY-F-01','FY-A-12','FY-B-12','FY-C-12','FY-E-12','FY-F-12','FY-A-11','FY-B-11','FY-C-11','FY-E-11','FY-F-11','FY-A-10','FY-B-10','FY-C-10','FY-E-10','FY-F-10','FY-A-09','FY-B-09','FY-C-09','FY-E-09','FY-F-09','FY-A-08','FY-B-08','FY-C-08','FY-E-08','FY-F-08','FY-A-07','FY-B-07','FY-C-07','FY-E-07','FY-F-07','FY-A-06','FY-B-06','FY-C-06','FY-E-06','FY-F-06','FY-A-05','FY-B-05','FY-C-05','FY-E-05','FY-F-05','FY-A-04','FY-B-04','FY-C-04','FY-E-04','FY-F-04']; 

	var wacthTypeArr = [1,2,3,4,5,6,7]
	// console.log(uesdCode2.length);
	// 选择视图
	var MenuSelect = function(id){
		$(id).siblings().removeClass('menuSelected');
		$(id).addClass('menuSelected');
	}
	MenuSelect('#pressure');
	// var baseImgTag = '<img class="base" id="baseImg" src="'+baseImgUrl+'" />'
	// 定义点渲染变量
	var BuildPointBase = function(wacthType){
		// console.log(wacthType);
		// console.log(targetId);
		// 清空点位
		$('#accurate').empty();
		if(wacthTypeArr.indexOf(wacthType)!=-1&&targetId===1){
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
		} else if(wacthTypeArr.indexOf(wacthType)!=-1&&targetId!=1){
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
		  	var b=0;
		  	for(var i=76;i<133; i++){
					b++;
					pointBase[i]['pointId'] = a;
					ConfigPointUsed(i,b);
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
		} else if(wacthType === 5){
			usedPoint = usedPoint5;
		} else if(wacthType === 6){
			usedPoint = usedPoint6;
		} else if(wacthType === 7){
			usedPoint = usedPoint7;
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
		// var pointDiv = '<div class="point'+id+'"><div id="'+pointId+'">'+pointId+'</div></div>';
		var pointDiv = '<div class="point'+id+'"><div id="'+pointId+'"></div></div>';
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
		if(wacthTypeArr.indexOf(wType)!=-1){
			BuildPointBase(wType);
		} else {
			$('#accurate').empty();
		}
	}
	// BuildBaseImg(1,4);
	BuildBaseImg(targetId,showType,wacthType);

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
	BaseImgSelect(4);//set south

	// 配置加载等待窗口
	var timer;
	var WaitPage = function(){
				// $('.waitBox').hide();
		$('.waitBox').show();
		$('#timeLast').text('4s');
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

	// 点击事件方法封装
	var TargetPointValue = function(one,value){
		$('#accurate').children().removeClass('selected');
		$(one).addClass('selected');
		// console.log(typeof(value));
		checkedMonitor = uesdCode2[usedPoint2.indexOf(Number(value))];
		// console.log(checkedMonitor);
		// checkedMonitor = value;
		// console.log(checkedMonitor,one);
	}


	// 设置首先显示的视图为正南
	targetId = 4;

$(document).ready(function(){
	// 切换视图


	// 向左
	$('#left').click(function(){
		// console.log(targetId);
		if(targetId===1){
		 	targetId = 12;
		} else{
		 	targetId--;
		}
 		BaseImgSelect(targetId);
 		// var childId = $('.point58').children().attr('id');
 		// console.log(targetId+'-度-'+childId);
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


	// 点击点位$('父元素').on('click','动态的子元素',function(){});
	$('#accurate').on('click','.point1',function(){
		// 获取子元素的id
		var childId = $('.point1').children().attr('id');
		TargetPointValue('.point1',childId);
	})
	$('#accurate').on('click','.point2',function(){
		// 获取子元素的id
		var childId = $('.point2').children().attr('id');
		TargetPointValue('.point2',childId);
	})
	$('#accurate').on('click','.point3',function(){
		// 获取子元素的id
		var childId = $('.point3').children().attr('id');
		TargetPointValue('.point3',childId);
	})
	$('#accurate').on('click','.point4',function(){
		// 获取子元素的id
		var childId = $('.point4').children().attr('id');
		TargetPointValue('.point4',childId);
	})
	$('#accurate').on('click','.point5',function(){
		// 获取子元素的id
		var childId = $('.point5').children().attr('id');
		TargetPointValue('.point5',childId);
	})
	$('#accurate').on('click','.point6',function(){
		// 获取子元素的id
		var childId = $('.point6').children().attr('id');
		TargetPointValue('.point6',childId);
	})
	$('#accurate').on('click','.point7',function(){
		// 获取子元素的id
		var childId = $('.point7').children().attr('id');
		TargetPointValue('.point7',childId);
	})
	$('#accurate').on('click','.point8',function(){
		// 获取子元素的id
		var childId = $('.point8').children().attr('id');
		TargetPointValue('.point8',childId);
	})
	$('#accurate').on('click','.point9',function(){
		// 获取子元素的id
		var childId = $('.point9').children().attr('id');
		TargetPointValue('.point9',childId);
	})
	$('#accurate').on('click','.point10',function(){
		// 获取子元素的id
		var childId = $('.point10').children().attr('id');
		TargetPointValue('.point10',childId);
	})
	$('#accurate').on('click','.point11',function(){
		// 获取子元素的id
		var childId = $('.point11').children().attr('id');
		TargetPointValue('.point11',childId);
	})
	$('#accurate').on('click','.point12',function(){
		// 获取子元素的id
		var childId = $('.point12').children().attr('id');
		TargetPointValue('.point12',childId);
	})
	$('#accurate').on('click','.point13',function(){
		// 获取子元素的id
		var childId = $('.point13').children().attr('id');
		TargetPointValue('.point13',childId);
	})
	$('#accurate').on('click','.point14',function(){
		// 获取子元素的id
		var childId = $('.point14').children().attr('id');
		TargetPointValue('.point14',childId);
	})
	$('#accurate').on('click','.point15',function(){
		// 获取子元素的id
		var childId = $('.point15').children().attr('id');
		TargetPointValue('.point15',childId);
	})
	$('#accurate').on('click','.point16',function(){
		// 获取子元素的id
		var childId = $('.point16').children().attr('id');
		TargetPointValue('.point16',childId);
	})
	$('#accurate').on('click','.point17',function(){
		// 获取子元素的id
		var childId = $('.point17').children().attr('id');
		TargetPointValue('.point17',childId);
	})
	$('#accurate').on('click','.point18',function(){
		// 获取子元素的id
		var childId = $('.point18').children().attr('id');
		TargetPointValue('.point18',childId);
	})
	$('#accurate').on('click','.point19',function(){
		// 获取子元素的id
		var childId = $('.point19').children().attr('id');
		TargetPointValue('.point19',childId);
	})
	$('#accurate').on('click','.point20',function(){
		// 获取子元素的id
		var childId = $('.point20').children().attr('id');
		TargetPointValue('.point20',childId);
	})
	$('#accurate').on('click','.point21',function(){
		// 获取子元素的id
		var childId = $('.point21').children().attr('id');
		TargetPointValue('.point21',childId);
	})
	$('#accurate').on('click','.point22',function(){
		// 获取子元素的id
		var childId = $('.point22').children().attr('id');
		TargetPointValue('.point22',childId);
	})
	$('#accurate').on('click','.point23',function(){
		// 获取子元素的id
		var childId = $('.point23').children().attr('id');
		TargetPointValue('.point23',childId);
	})
	$('#accurate').on('click','.point24',function(){
		// 获取子元素的id
		var childId = $('.point24').children().attr('id');
		TargetPointValue('.point24',childId);
	})
	$('#accurate').on('click','.point25',function(){
		// 获取子元素的id
		var childId = $('.point25').children().attr('id');
		TargetPointValue('.point25',childId);
	})
	$('#accurate').on('click','.point26',function(){
		// 获取子元素的id
		var childId = $('.point26').children().attr('id');
		TargetPointValue('.point26',childId);
	})
	$('#accurate').on('click','.point27',function(){
		// 获取子元素的id
		var childId = $('.point27').children().attr('id');
		TargetPointValue('.point27',childId);
	})
	$('#accurate').on('click','.point28',function(){
		// 获取子元素的id
		var childId = $('.point28').children().attr('id');
		TargetPointValue('.point28',childId);
	})
	$('#accurate').on('click','.point29',function(){
		// 获取子元素的id
		var childId = $('.point29').children().attr('id');
		TargetPointValue('.point29',childId);
	})
	$('#accurate').on('click','.point30',function(){
		// 获取子元素的id
		var childId = $('.point30').children().attr('id');
		TargetPointValue('.point30',childId);
	})
	$('#accurate').on('click','.point31',function(){
		// 获取子元素的id
		var childId = $('.point31').children().attr('id');
		TargetPointValue('.point31',childId);
	})
	$('#accurate').on('click','.point32',function(){
		// 获取子元素的id
		var childId = $('.point32').children().attr('id');
		TargetPointValue('.point32',childId);
	})
	$('#accurate').on('click','.point33',function(){
		// 获取子元素的id
		var childId = $('.point33').children().attr('id');
		TargetPointValue('.point33',childId);
	})
	$('#accurate').on('click','.point34',function(){
		// 获取子元素的id
		var childId = $('.point34').children().attr('id');
		TargetPointValue('.point34',childId);
	})
	$('#accurate').on('click','.point35',function(){
		// 获取子元素的id
		var childId = $('.point35').children().attr('id');
		TargetPointValue('.point35',childId);
	})
	$('#accurate').on('click','.point36',function(){
		// 获取子元素的id
		var childId = $('.point36').children().attr('id');
		TargetPointValue('.point36',childId);
	})
	$('#accurate').on('click','.point37',function(){
		// 获取子元素的id
		var childId = $('.point37').children().attr('id');
		TargetPointValue('.point37',childId);
	})
	$('#accurate').on('click','.point38',function(){
		// 获取子元素的id
		var childId = $('.point38').children().attr('id');
		TargetPointValue('.point38',childId);
	})
	$('#accurate').on('click','.point39',function(){
		// 获取子元素的id
		var childId = $('.point39').children().attr('id');
		TargetPointValue('.point39',childId);
	})
	$('#accurate').on('click','.point40',function(){
		// 获取子元素的id
		var childId = $('.point40').children().attr('id');
		TargetPointValue('.point40',childId);
	})
	$('#accurate').on('click','.point41',function(){
		// 获取子元素的id
		var childId = $('.point41').children().attr('id');
		TargetPointValue('.point41',childId);
	})
	$('#accurate').on('click','.point42',function(){
		// 获取子元素的id
		var childId = $('.point42').children().attr('id');
		TargetPointValue('.point42',childId);
	})
	$('#accurate').on('click','.point43',function(){
		// 获取子元素的id
		var childId = $('.point43').children().attr('id');
		TargetPointValue('.point43',childId);
	})
	$('#accurate').on('click','.point44',function(){
		// 获取子元素的id
		var childId = $('.point44').children().attr('id');
		TargetPointValue('.point44',childId);
	})
	$('#accurate').on('click','.point45',function(){
		// 获取子元素的id
		var childId = $('.point45').children().attr('id');
		TargetPointValue('.point45',childId);
	})
	$('#accurate').on('click','.point46',function(){
		// 获取子元素的id
		var childId = $('.point46').children().attr('id');
		TargetPointValue('.point46',childId);
	})
	$('#accurate').on('click','.point47',function(){
		// 获取子元素的id
		var childId = $('.point47').children().attr('id');
		TargetPointValue('.point47',childId);
	})
	$('#accurate').on('click','.point48',function(){
		// 获取子元素的id
		var childId = $('.point48').children().attr('id');
		TargetPointValue('.point48',childId);
	})
	$('#accurate').on('click','.point49',function(){
		// 获取子元素的id
		var childId = $('.point49').children().attr('id');
		TargetPointValue('.point49',childId);
	})
	$('#accurate').on('click','.point50',function(){
		// 获取子元素的id
		var childId = $('.point50').children().attr('id');
		TargetPointValue('.point50',childId);
	})
	$('#accurate').on('click','.point51',function(){
		// 获取子元素的id
		var childId = $('.point51').children().attr('id');
		TargetPointValue('.point51',childId);
	})
	$('#accurate').on('click','.point52',function(){
		// 获取子元素的id
		var childId = $('.point52').children().attr('id');
		TargetPointValue('.point52',childId);
	})
	$('#accurate').on('click','.point53',function(){
		// 获取子元素的id
		var childId = $('.point53').children().attr('id');
		TargetPointValue('.point53',childId);
	})
	$('#accurate').on('click','.point54',function(){
		// 获取子元素的id
		var childId = $('.point54').children().attr('id');
		TargetPointValue('.point54',childId);
	})
	$('#accurate').on('click','.point55',function(){
		// 获取子元素的id
		var childId = $('.point55').children().attr('id');
		TargetPointValue('.point55',childId);
	})
	$('#accurate').on('click','.point56',function(){
		// 获取子元素的id
		var childId = $('.point56').children().attr('id');
		TargetPointValue('.point56',childId);
	})
	$('#accurate').on('click','.point57',function(){
		// 获取子元素的id
		var childId = $('.point57').children().attr('id');
		TargetPointValue('.point57',childId);
	})
	$('#accurate').on('click','.point58',function(){
		// 获取子元素的id
		var childId = $('.point58').children().attr('id');
		TargetPointValue('.point58',childId);
	})
	$('#accurate').on('click','.point59',function(){
		// 获取子元素的id
		var childId = $('.point59').children().attr('id');
		TargetPointValue('.point59',childId);
	})
	$('#accurate').on('click','.point60',function(){
		// 获取子元素的id
		var childId = $('.point60').children().attr('id');
		TargetPointValue('.point60',childId);
	})
	$('#accurate').on('click','.point61',function(){
		// 获取子元素的id
		var childId = $('.point61').children().attr('id');
		TargetPointValue('.point61',childId);
	})
	$('#accurate').on('click','.point62',function(){
		// 获取子元素的id
		var childId = $('.point62').children().attr('id');
		TargetPointValue('.point62',childId);
	})
	$('#accurate').on('click','.point63',function(){
		// 获取子元素的id
		var childId = $('.point63').children().attr('id');
		TargetPointValue('.point63',childId);
	})
	$('#accurate').on('click','.point64',function(){
		// 获取子元素的id
		var childId = $('.point64').children().attr('id');
		TargetPointValue('.point64',childId);
	})
	$('#accurate').on('click','.point65',function(){
		// 获取子元素的id
		var childId = $('.point65').children().attr('id');
		TargetPointValue('.point65',childId);
	})
	$('#accurate').on('click','.point66',function(){
		// 获取子元素的id
		var childId = $('.point66').children().attr('id');
		TargetPointValue('.point66',childId);
	})
	$('#accurate').on('click','.point67',function(){
		// 获取子元素的id
		var childId = $('.point67').children().attr('id');
		TargetPointValue('.point67',childId);
	})
	$('#accurate').on('click','.point68',function(){
		// 获取子元素的id
		var childId = $('.point68').children().attr('id');
		TargetPointValue('.point68',childId);
	})
	$('#accurate').on('click','.point69',function(){
		// 获取子元素的id
		var childId = $('.point69').children().attr('id');
		TargetPointValue('.point69',childId);
	})
	$('#accurate').on('click','.point70',function(){
		// 获取子元素的id
		var childId = $('.point70').children().attr('id');
		TargetPointValue('.point70',childId);
	})
	$('#accurate').on('click','.point71',function(){
		// 获取子元素的id
		var childId = $('.point71').children().attr('id');
		TargetPointValue('.point71',childId);
	})
	$('#accurate').on('click','.point72',function(){
		// 获取子元素的id
		var childId = $('.point72').children().attr('id');
		TargetPointValue('.point72',childId);
	})
	$('#accurate').on('click','.point73',function(){
		// 获取子元素的id
		var childId = $('.point73').children().attr('id');
		TargetPointValue('.point73',childId);
	})
	$('#accurate').on('click','.point74',function(){
		// 获取子元素的id
		var childId = $('.point74').children().attr('id');
		TargetPointValue('.point74',childId);
	})
	$('#accurate').on('click','.point75',function(){
		// 获取子元素的id
		var childId = $('.point75').children().attr('id');
		TargetPointValue('.point75',childId);
	})
	$('#accurate').on('click','.point76',function(){
		// 获取子元素的id
		var childId = $('.point76').children().attr('id');
		TargetPointValue('.point76',childId);
	})
	$('#accurate').on('click','.point77',function(){
		// 获取子元素的id
		var childId = $('.point77').children().attr('id');
		TargetPointValue('.point77',childId);
	})
	$('#accurate').on('click','.point78',function(){
		// 获取子元素的id
		var childId = $('.point78').children().attr('id');
		TargetPointValue('.point78',childId);
	})
	$('#accurate').on('click','.point79',function(){
		// 获取子元素的id
		var childId = $('.point79').children().attr('id');
		TargetPointValue('.point79',childId);
	})
	$('#accurate').on('click','.point80',function(){
		// 获取子元素的id
		var childId = $('.point80').children().attr('id');
		TargetPointValue('.point80',childId);
	})
	$('#accurate').on('click','.point81',function(){
		// 获取子元素的id
		var childId = $('.point81').children().attr('id');
		TargetPointValue('.point81',childId);
	})
	$('#accurate').on('click','.point82',function(){
		// 获取子元素的id
		var childId = $('.point82').children().attr('id');
		TargetPointValue('.point82',childId);
	})
	$('#accurate').on('click','.point83',function(){
		// 获取子元素的id
		var childId = $('.point83').children().attr('id');
		TargetPointValue('.point83',childId);
	})
	$('#accurate').on('click','.point84',function(){
		// 获取子元素的id
		var childId = $('.point84').children().attr('id');
		TargetPointValue('.point84',childId);
	})
	$('#accurate').on('click','.point85',function(){
		// 获取子元素的id
		var childId = $('.point85').children().attr('id');
		TargetPointValue('.point85',childId);
	})
	$('#accurate').on('click','.point86',function(){
		// 获取子元素的id
		var childId = $('.point86').children().attr('id');
		TargetPointValue('.point86',childId);
	})
	$('#accurate').on('click','.point87',function(){
		// 获取子元素的id
		var childId = $('.point87').children().attr('id');
		TargetPointValue('.point87',childId);
	})
	$('#accurate').on('click','.point88',function(){
		// 获取子元素的id
		var childId = $('.point88').children().attr('id');
		TargetPointValue('.point88',childId);
	})
	$('#accurate').on('click','.point89',function(){
		// 获取子元素的id
		var childId = $('.point89').children().attr('id');
		TargetPointValue('.point89',childId);
	})
	$('#accurate').on('click','.point90',function(){
		// 获取子元素的id
		var childId = $('.point90').children().attr('id');
		TargetPointValue('.point90',childId);
	})
	$('#accurate').on('click','.point91',function(){
		// 获取子元素的id
		var childId = $('.point91').children().attr('id');
		TargetPointValue('.point91',childId);
	})
	$('#accurate').on('click','.point92',function(){
		// 获取子元素的id
		var childId = $('.point92').children().attr('id');
		TargetPointValue('.point92',childId);
	})
	$('#accurate').on('click','.point93',function(){
		// 获取子元素的id
		var childId = $('.point93').children().attr('id');
		TargetPointValue('.point93',childId);
	})
	$('#accurate').on('click','.point94',function(){
		// 获取子元素的id
		var childId = $('.point94').children().attr('id');
		TargetPointValue('.point94',childId);
	})
	$('#accurate').on('click','.point95',function(){
		// 获取子元素的id
		var childId = $('.point95').children().attr('id');
		TargetPointValue('.point95',childId);
	})
	$('#accurate').on('click','.point96',function(){
		// 获取子元素的id
		var childId = $('.point96').children().attr('id');
		TargetPointValue('.point96',childId);
	})
	$('#accurate').on('click','.point97',function(){
		// 获取子元素的id
		var childId = $('.point97').children().attr('id');
		TargetPointValue('.point97',childId);
	})
	$('#accurate').on('click','.point98',function(){
		// 获取子元素的id
		var childId = $('.point98').children().attr('id');
		TargetPointValue('.point98',childId);
	})
	$('#accurate').on('click','.point99',function(){
		// 获取子元素的id
		var childId = $('.point99').children().attr('id');
		TargetPointValue('.point99',childId);
	})
	$('#accurate').on('click','.point100',function(){
		// 获取子元素的id
		var childId = $('.point100').children().attr('id');
		TargetPointValue('.point100',childId);
	})
	$('#accurate').on('click','.point101',function(){
		// 获取子元素的id
		var childId = $('.point101').children().attr('id');
		TargetPointValue('.point101',childId);
	})
	$('#accurate').on('click','.point102',function(){
		// 获取子元素的id
		var childId = $('.point102').children().attr('id');
		TargetPointValue('.point102',childId);
	})
	$('#accurate').on('click','.point103',function(){
		// 获取子元素的id
		var childId = $('.point103').children().attr('id');
		TargetPointValue('.point103',childId);
	})
	$('#accurate').on('click','.point104',function(){
		// 获取子元素的id
		var childId = $('.point104').children().attr('id');
		TargetPointValue('.point104',childId);
	})
	$('#accurate').on('click','.point105',function(){
		// 获取子元素的id
		var childId = $('.point105').children().attr('id');
		TargetPointValue('.point105',childId);
	})
	$('#accurate').on('click','.point106',function(){
		// 获取子元素的id
		var childId = $('.point106').children().attr('id');
		TargetPointValue('.point106',childId);
	})
	$('#accurate').on('click','.point107',function(){
		// 获取子元素的id
		var childId = $('.point107').children().attr('id');
		TargetPointValue('.point107',childId);
	})
	$('#accurate').on('click','.point108',function(){
		// 获取子元素的id
		var childId = $('.point108').children().attr('id');
		TargetPointValue('.point108',childId);
	})
	$('#accurate').on('click','.point109',function(){
		// 获取子元素的id
		var childId = $('.point109').children().attr('id');
		TargetPointValue('.point109',childId);
	})
	$('#accurate').on('click','.point110',function(){
		// 获取子元素的id
		var childId = $('.point110').children().attr('id');
		TargetPointValue('.point110',childId);
	})
	$('#accurate').on('click','.point111',function(){
		// 获取子元素的id
		var childId = $('.point111').children().attr('id');
		TargetPointValue('.point111',childId);
	})
	$('#accurate').on('click','.point112',function(){
		// 获取子元素的id
		var childId = $('.point112').children().attr('id');
		TargetPointValue('.point112',childId);
	})
	$('#accurate').on('click','.point113',function(){
		// 获取子元素的id
		var childId = $('.point113').children().attr('id');
		TargetPointValue('.point113',childId);
	})
	$('#accurate').on('click','.point114',function(){
		// 获取子元素的id
		var childId = $('.point114').children().attr('id');
		TargetPointValue('.point114',childId);
	})
	$('#accurate').on('click','.point115',function(){
		// 获取子元素的id
		var childId = $('.point115').children().attr('id');
		TargetPointValue('.point115',childId);
	})
	$('#accurate').on('click','.point116',function(){
		// 获取子元素的id
		var childId = $('.point116').children().attr('id');
		TargetPointValue('.point116',childId);
	})
	$('#accurate').on('click','.point117',function(){
		// 获取子元素的id
		var childId = $('.point117').children().attr('id');
		TargetPointValue('.point117',childId);
	})
	$('#accurate').on('click','.point118',function(){
		// 获取子元素的id
		var childId = $('.point118').children().attr('id');
		TargetPointValue('.point118',childId);
	})
	$('#accurate').on('click','.point119',function(){
		// 获取子元素的id
		var childId = $('.point119').children().attr('id');
		TargetPointValue('.point119',childId);
	})
	$('#accurate').on('click','.point120',function(){
		// 获取子元素的id
		var childId = $('.point120').children().attr('id');
		TargetPointValue('.point120',childId);
	})
	$('#accurate').on('click','.point121',function(){
		// 获取子元素的id
		var childId = $('.point121').children().attr('id');
		TargetPointValue('.point121',childId);
	})
	$('#accurate').on('click','.point122',function(){
		// 获取子元素的id
		var childId = $('.point122').children().attr('id');
		TargetPointValue('.point122',childId);
	})
	$('#accurate').on('click','.point123',function(){
		// 获取子元素的id
		var childId = $('.point123').children().attr('id');
		TargetPointValue('.point123',childId);
	})
	$('#accurate').on('click','.point124',function(){
		// 获取子元素的id
		var childId = $('.point124').children().attr('id');
		TargetPointValue('.point124',childId);
	})
	$('#accurate').on('click','.point125',function(){
		// 获取子元素的id
		var childId = $('.point125').children().attr('id');
		TargetPointValue('.point125',childId);
	})
	$('#accurate').on('click','.point126',function(){
		// 获取子元素的id
		var childId = $('.point126').children().attr('id');
		TargetPointValue('.point126',childId);
	})
	$('#accurate').on('click','.point127',function(){
		// 获取子元素的id
		var childId = $('.point127').children().attr('id');
		TargetPointValue('.point127',childId);
	})
	$('#accurate').on('click','.point128',function(){
		// 获取子元素的id
		var childId = $('.point128').children().attr('id');
		TargetPointValue('.point128',childId);
	})
	$('#accurate').on('click','.point129',function(){
		// 获取子元素的id
		var childId = $('.point129').children().attr('id');
		TargetPointValue('.point129',childId);
	})
	$('#accurate').on('click','.point130',function(){
		// 获取子元素的id
		var childId = $('.point130').children().attr('id');
		TargetPointValue('.point130',childId);
	})
	$('#accurate').on('click','.point131',function(){
		// 获取子元素的id
		var childId = $('.point131').children().attr('id');
		TargetPointValue('.point131',childId);
	})
	$('#accurate').on('click','.point132',function(){
		// 获取子元素的id
		var childId = $('.point132').children().attr('id');
		TargetPointValue('.point132',childId);
	})
	$('#accurate').on('click','.point133',function(){
		// 获取子元素的id
		var childId = $('.point133').children().attr('id');
		TargetPointValue('.point133',childId);
	})
});