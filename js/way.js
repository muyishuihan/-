//封装
var getStyle = function(dom,attr){
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
}

var $ = function (event) {
	return document.querySelector(event);
}


//飞机和回顶按钮的隐藏
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
    backTop.addEventListener("click", back)
function back() {
	var	t = document.documentElement.scrollTop || document.body.scrollTop;
		speed = 100;  //每次位移量
		interval = 20
	if (t > 0) {
		document.documentElement.scrollTop = t - speed;
		document.body.scrollTop = t - speed;
		setTimeout(back, interval);
	} 
}

//计时器
var timer = [$(".day-l"), $(".day-r"), $(".hour-l"), $(".hour-r"), $(".min-l"), $(".min-r"), $(".sec-l"), $(".sec-r")]
	startTime = new Date().getTime();
	timeNew = new Date();
    month = timeNew.getMonth() + 1;
    year = timeNew.getFullYear()
    day = 0;
	count = 0;
    stop = 0;

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
		var time = [parseInt((dayNew%100)/10), dayNew%10, (2 - parseInt((hour%100)/10)), (4 - hour%10), (5 - parseInt((min%100)/10)), (9 - min%10), (5 - parseInt((sec%100)/10)), (9 - sec%10)]
			length = timer.length

		for (var i = 0; i < length; i++) {
			change(timer[i], time[i])
		}
	    
    }else{
    	for (var i = 0; i < length; i++) {
    		change(timer[i], 0);
    	}
    }
    setTimeout(timeChange, nextTime);
}
setTimeout("timeChange(" + stop + ")", 1000);








//游舒婕的
  dormitory = $("#dormitory"),
  necessary = $("#necessary"),
  entrance = $("#entrance"),
  traffic = $("#traffic"),
  qq = $("#qq_group"),
  dormitory_d = $("#dormitory_d"),
  necessary_d = $("#necessary_d"),
  entrance_d = $("#entrance_d"),
  traffic_d = $("#traffic_d"),
  qq_group_d = $("#qq_group_d");

dormitory.addEventListener("click",function () {
  dormitory_d.style.display = "block";
  entrance_d.style.display = "none";
  traffic_d.style.display = "none";
  necessary_d.style.display = "none";
  qq_group_d.style.display = "none"; 
});
necessary.addEventListener("click",function () {
  necessary_d.style.display = "block";
  entrance_d.style.display = "none";
  traffic_d.style.display = "none";
  dormitory_d.style.display = "none";
  qq_group_d.style.display = "none"; 
});
entrance.addEventListener("click",function () {
  entrance_d.style.display = "block";
  necessary_d.style.display = "none";
  traffic_d.style.display = "none";
  dormitory_d.style.display = "none";
  qq_group_d.style.display = "none"; 
});
traffic.addEventListener("click",function () {
  traffic_d.style.display = "block";
  entrance_d.style.display = "none";
  necessary_d.style.display = "none";
  dormitory_d.style.display = "none";
  qq_group_d.style.display = "none"; 
});
qq.addEventListener("click",function () {
  qq_group_d.style.display = "block";
  entrance_d.style.display = "none";
  necessary_d.style.display = "none";
  traffic_d.style.display = "none";
  dormitory_d.style.display = "none"; 
});