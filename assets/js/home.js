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
	// 选择视图
	var menuSelect = function(id){
		$(id).siblings().removeClass('menuSelected');
		$(id).addClass('menuSelected');
	}
	// var baseImgTag = '<img class="base" id="baseImg" src="'+baseImgUrl+'" />'
	// 定义点渲染变量
	var buildPointBase = function(wacthType){
		console.log(wacthType);
	}

	// 预设基础图片
	var buildBaseImg = function(id,sType,wType){
		// console.log(id,type);
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
			$('#baseImgBox').append('<img class="base" id="baseImg" src="'+baseImgUrl+'" />');
			// console.log(id,i+1);
			if(id===(i+1)){
				$('#baseImg').addClass('activation');
			}
		}
		// 配置渲染点
		if([1,2,3,4].indexOf(wType)!=-1){
			buildPointBase(wType);
		}
	}
	buildBaseImg(1,4);



$(document).ready(function(){
	// 切换视图
	$('#home').click(function(){
		menuSelect('#home');
		wacthType = 0;
		showType = 4;
		targetId = 1;
		buildBaseImg(targetId,showType,wacthType);
	})
	$('#strain').click(function(){
		// alert('1');
		menuSelect('#strain');
		wacthType = 1;
		showType = 1;
		targetId = 1;
		buildBaseImg(targetId,showType,wacthType);
	})
	$('#pressure').click(function(){
		menuSelect('#pressure');
		wacthType = 2;
		showType = 2;
		targetId = 1;
		buildBaseImg(targetId,showType,wacthType);
	})
	$('#structure').click(function(){
		menuSelect('#structure');
		wacthType = 3;
		showType = 3;
		targetId = 1;
		buildBaseImg(targetId,showType,wacthType);
	})
	$('#weather').click(function(){
		menuSelect('#weather');
		wacthType = 4;
		showType = 4;
		targetId = 1;
		buildBaseImg(targetId,showType,wacthType);
	})

	// 向左

	// 向右

});