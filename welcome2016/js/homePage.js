//封装
var getStyle = function(dom,attr){
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
}

var $ = function (event) {
	return document.querySelector(event);
}


//飞机和回顶的隐藏
var tt = 500;
    fix_l = $(".fix-l")
    fix_r = $(".fix-r");

window.onscroll = function(){  //兼容ie8
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    	bottom_t = document.documentElement.offsetHeight || document.body.offsetHeight;
    	bottom_b = document.documentElement.clientHeight || document.body.clientHeight;
    	bottom = bottom_t - bottom_b - t;

	if (bottom <= 10) {
		backTop.style.bottom = (-bottom) + 30 + "px";
	}else {
		backTop.style.bottom = 30 + "px";
	}

    if(t < tt && getStyle(backTop,"opacity")!="0"){
        backTop.style.opacity="0";
    }else if(t > tt && getStyle(backTop,"opacity")=="0"){
        backTop.style.opacity="1";
    }else{
        return false;
    }

    if(t < 1500 && getStyle(fix_l,"opacity")!="1"){
        fix_l.style.opacity="1";
    }else if(t > tt && getStyle(fix_l,"opacity")=="1"){
        fix_l.style.opacity="0";
    }else{
        return false;
    }

    if(t < 1500 && getStyle(fix_r,"opacity")!="1"){
        fix_r.style.opacity="1";
    }else if(t > tt && getStyle(fix_r,"opacity")=="1"){
        fix_r.style.opacity="0";
    }else{
        return false;
    }
}


//回到顶部
var backTop = $(".back"); //回顶按钮
    backTop.addEventListener("click", function(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    })

//计时器
var day_l = $(".day-l");
    day_r = $(".day-r");
    hour_1 = $(".hour-l");
    hour_r = $(".hour-r");
    min_1 = $(".min-l");
    min_r = $(".min-r");
    sec_1 = $(".sec-l");
    sec_r = $(".sec-r");

function change(event, num){
    if (num == 0) {
        event.style.top = 0 + "px";
    }
    if (num == 1) {
        event.style.top = -37 + "px";
    }
    if (num == 2) {
        event.style.top = -73 + "px";
    }
    if (num == 3) {
        event.style.top = -110 + "px";
    }
    if (num == 4) {
        event.style.top = -147 + "px";
    }
    if (num == 5) {
        event.style.top = -183 + "px";
    }
    if (num == 6) {
        event.style.top = -220 + "px";
    }
    if (num == 7) {
        event.style.top = -257 + "px";
    }
    if (num == 8) {
        event.style.top = -293 + "px";
    }
    if (num == 9) {
        event.style.top = -330 + "px";
    }
}

var startTime = new Date().getTime();
	count = 0;
	timeNew = new Date();
    month = timeNew.getMonth() + 1;
    year = timeNew.getFullYear()
    day = 0;
    stop = 0;

	if (month == 8 && year == 2016){
	    day = 31+5;
	}else if (month == 9 && year == 2016) {
	    day = 5;
	}else {
		stop = 1
	}

function timeChange(stop) {
    count++;

    var offset = new Date().getTime() - (startTime + count * 1000);
        nextTime = 1000 - offset;
        timeNew = new Date();
        sec = timeNew.getSeconds();
        min = timeNew.getMinutes();
        hour = timeNew.getHours();
        dayNew = day - timeNew.getDay();

    if (nextTime < 0) nextTime = 0;

    if (stop != 1) {
	    var secL = 5 - parseInt((sec%100)/10);
	    	secR = 9 - sec%10;
	    	minL = 5 - parseInt((min%100)/10);
	    	minR = 9 - min%10;
	    	hourL = 2 - parseInt((hour%100)/10);
	    	hourR = 4 - hour%10;
		    dayL = parseInt((dayNew%100)/10);
		    dayR = dayNew%10;
		    change(day_l, dayL);
		    change(day_r, dayR);

	    change(sec_1, secL);
	    change(sec_r, secR);
	    change(min_1, minL);
	    change(min_r, minR);
	    change(hour_1, hourL);
	    change(hour_r, hourR);
	    change(day_l, dayL);
	    change(day_r, dayR);
    }else{
    	change(sec_1, 0);
	    change(sec_r, 0);
	    change(min_1, 0);
	    change(min_r, 0);
	    change(hour_1, 0);
	    change(hour_r, 0);
	    change(day_l, 0);
	    change(day_r, 0);
    }

    setTimeout(timeChange, nextTime);

}
setTimeout("timeChange(" + stop + ")", 1000);


//地名的获取和移动  点击地图名字显示详细信息
var place_name = $(".place-name");
	place_position = $(".place-position");

place_position.addEventListener("mouseover", function(e){

	switch (e.target.id) {
		case "old-pos":
				place_name.innerHTML = "老图书馆"
			break;
		case "taiJi-pos":
				place_name.innerHTML = "太极操场"
			break;
		case "oldDoor-pos":
				place_name.innerHTML = "老校门"
			break;
		case "newDoor-pos":
				place_name.innerHTML = "新校门"
			break;
		case "windRain-pos":
				place_name.innerHTML = "风雨操场"
			break;
		case "newLib-pos":
				place_name.innerHTML = "数字图书馆"
			break;
	}

	place_name.style.left = parseFloat(e.target.offsetLeft) + 40 + "px";
	place_name.style.top = parseFloat(e.target.offsetTop) + 20 + "px";

})


//建筑物的详细情况切换
var details = $(".details");
	close = $(".close");
	datails_p = $(".datails-p");
	datails_name = $(".datails-name");
	datails_write = $(".datails-write")

close.addEventListener("click", function(){
	details.style.display = "none";
})

place_position.addEventListener("click", function(e){
	details.style.display = "block";
	switch (e.target.id) {
		case "old-pos":
				datails_p.src = "../datails/oldLib.png";
				datails_name.innerHTML = "老图书馆";
				datails_write.innerHTML = "重庆邮电大学图书馆始建于1950年。现有馆舍20873平方米（含新建的数字图书馆12219平方米）。2002年重庆邮电大学图书馆自动化建设工作被重庆市教委评为优秀馆。"
			break;
		case "taiJi-pos":
				datails_p.src = "../datails/1.jpg"
				datails_name.innerHTML = "太极操场";
				datails_write.innerHTML = "操场是供体育锻炼用的场地，多用指学校进行体育活动和教学活动的专置场地。（学习专用）"
			break;
		case "oldDoor-pos":
				datails_p.src = "../datails/2.jpg"
				datails_name.innerHTML = "老校门";
				datails_write.innerHTML = "1921年，立飞檐翘角牌坊式校门。五十年代初拆除。2004年年末，为纪念建校一百周年，在原址重建，供观瞻和纪念。"
			break;
		case "newDoor-pos":
				datails_p.src = "../datails/3.jpg"
				datails_name.innerHTML = "新校门";
				datails_write.innerHTML = "我们学校的新校门愉快的暑假结束了,我们回到了久违的学校,我惊喜地发现,我们的校门 发生了巨大的变化"
			break;
		case "windRain-pos":
				datails_p.src = "../datails/4.jpg"
				datails_name.innerHTML = "风雨操场";
				datails_write.innerHTML = "《风雨》，《诗经·郑风》篇名。为先秦时代郑地汉族民歌。全诗三章，每章十二字。"
			break;
		case "newLib-pos":
				datails_p.src = "../datails/5.jpg"
				datails_name.innerHTML = "数字图书馆";
				datails_write.innerHTML = "图书馆分类教育教学图书为主，主要包括教育教学，教育研究，教育管理，课外博览，信息技术，社会科学与哲学，文学，科普，政法，经济，历史，生活，体育，艺术，军事等类图书。"
			break;
	}
});


