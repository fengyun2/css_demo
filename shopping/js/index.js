/* 
* @Author: cs
* @Date:   2015-12-30 02:03:40
* @Last Modified by:   cs
* @Last Modified time: 2016-01-09 00:13:33
*/

'use strict';

$(function(){
	var ShowCountDown=function(year,month,day,divname){
		var now = new Date(); 
		var endDate = new Date(year, month-1, day); 
		var leftTime=endDate.getTime()-now.getTime(); 
		var leftsecond = parseInt(leftTime/1000); 
		//var day1=parseInt(leftsecond/(24*60*60*6)); 
		var day1=Math.floor(leftsecond/(60*60*24)); //向下取正 -1.5就是2  而paeseInt()是去掉小数 -1.5就是-1
		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		var cc = document.getElementById(divname); 
		// cc.innerHTML = hour+" "+minute+" "+second+" "; 
		$('.daojishi li').eq(0).html(hour)
		$('.daojishi li').eq(2).html(minute)
		$('.daojishi li').eq(4).html(second)

	}
	setInterval(function(){
		ShowCountDown(2016,1,6,'divdown1');
	},1000); 
})

	// function ShowCountDown(year,month,day,divname) { 
	// 	var now = new Date(); 
	// 	var endDate = new Date(year, month-1, day); 
	// 	var leftTime=endDate.getTime()-now.getTime(); 
	// 	var leftsecond = parseInt(leftTime/1000); 
	// 	//var day1=parseInt(leftsecond/(24*60*60*6)); 
	// 	var day1=Math.floor(leftsecond/(60*60*24)); //向下取正 -1.5就是2  而paeseInt()是去掉小数 -1.5就是-1
	// 	var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
	// 	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
	// 	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
	// 	var cc = document.getElementById(divname); 
	// 	// cc.innerHTML = hour+" "+minute+" "+second+" "; 
	// 	// alert(hour)
	// } 
	// setInterval(function(){
	// 	ShowCountDown(2016,1,6,'divdown1');
	// },1000); 



$(function(){
	var timer=null;
	var ulIndex=0;
	var olIndex=0;	
	var l;
	var gun=function(){
				olIndex++;
    			// 检测数据是否合法
    			if(olIndex>5){
    				olIndex=0;
    			}  
				ulIndex++;
				if(ulIndex>6){
					ulIndex=1
					$('.slide-show').css('left','0px')
				};

				l=ulIndex*(-715)

				$('.slide-show').stop().animate({'left':l+'px'}, 800);
				$('.p-box li').eq(olIndex).addClass('current').siblings().removeClass('current');
			}

	$('.banner-right').click(gun);

	$('.banner-left').click(function(){
		olIndex--;
		// 检测数据是否合法
		if(olIndex<0){
			olIndex=4;
		} 
		ulIndex--;
		if(ulIndex<0){
			ulIndex=5;
			l=(ulIndex+1)*(-715)
			$('.slide-show').css('left',l+'px')
		}
		l=ulIndex*(-715);
		$('.slide-show').stop().animate({'left':l+'px'}, 800)
	});

	$('.p-box li').click(function(){
  					olIndex=$(this).index()
  					ulIndex=$(this).index()
  					$(this).addClass('current').siblings().removeClass('current');
  					var l=ulIndex*(-715);
  					$('.slide-show').stop().animate({'left':l+'px'}, 800)  					

  				})
		
	timer=setInterval(gun,2000)


	$('.right').mouseover(function(){
		clearInterval(timer)
	}).mouseout(function(){
		clearInterval(timer)
		timer=setInterval(gun,2000)
	});


})
$(function(){
	$('.sideBottom').click(function(){
		$('body,html').animate({'scrollTop': '0px'}, 1000)
	});
	$('.sideBottom').mouseover(function(){
		$(this).css('background-color','#EF2F23')
		$(this).children('a').css('border-color','transparent')
	}).mouseout(function(){
		$(this).css('background-color','#202020')
		$(this).children('a').css('border-color','#fff')
	});
})



$(function(){
	var num=0
	var timer=null
	var l
	var gun=function(){
		num++
		
		if (num>2) {
			num=1;
			$('.ul-box').css('left','0px')
		};
		l=num*(-335)
		$('.ul-box').stop().animate({'left': l+'px'}, 800);

	}
	$('.box-right .jt1').click(gun);
	$('.box-right .jt2').click(function(){
		num--
		
		if (num<0) {
			num=1;
			$('.ul-box').css('left','-670px')
		};
		l=num*(-335)
		$('.ul-box').stop().animate({'left': l+'px'}, 800);
		
	});
	timer=setInterval(gun, 1500);
	$('.box-right').mouseover(function(){

		clearInterval(timer)
	}).mouseout(function() {
		clearInterval(timer);
		timer=setInterval(gun, 1500)
		/* Act on the event */
	});

})