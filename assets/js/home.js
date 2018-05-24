// alert('ddd')
	var wacthType = 0; //0-home;1-strain;2-pressure;3-structure;4-weather;
	var showType = 4;
	var base=[];
	var targetBase;
	var targetId = 1;
	var baseImgUrl;
	// 选择视图
	var MenuSelect = function(id){
		$(id).siblings().removeClass('menuSelected');
		$(id).addClass('menuSelected');
	}
	// var baseImgTag = '<img class="base" id="baseImg" src="'+baseImgUrl+'" />'

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
		// if([1,2,3,4].indexOf(wType)!=-1){
		// 	BuildPointBase(wType);
		// } else {
		// 	$('#accurate').empty();
		// }
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

});