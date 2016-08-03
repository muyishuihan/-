//封装
function addClass(element, classname) {  //添加class  （元素， class的字符串）

    element.className += " " + classname;

}
function removeClass(element, classname) { //删除class    （元素， class的字符串）

    var regular       = new RegExp(' ' + '(' + classname +'' + ')*')

    element.className = element.className.replace(regular, "");
	element.className += " " + classname;

}
function removeClass(element, classname) { //删除class	（元素， class的字符串）

	var regular       = new RegExp(' ' + '(' + classname +'' + ')*')

	element.className = element.className.replace(regular, "");

}
function hasClass(element, index) {  //检测class中是否有要检测的class （元素， 要检测class的字符串）

    if (element.className.indexOf(index) != -1) {  //没有函数就返回true

        return true;

    }else{      //有就返回false

        return false;

    }
	if (element.className.indexOf(index) != -1) {  //没有函数就返回true

		return true;

	}else{		//有就返回false

		return false;

	}

}
var getStyle = function(dom,attr){
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
}






//回到顶部
var backTop = document.querySelector(".back"); //回顶按钮
    backTop.addEventListener("click", function(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    })




//飞机和回顶的隐藏
var tt = 500;
    fix_l = document.querySelector(".fix-l")
    fix_r = document.querySelector(".fix-r");

window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;

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



//计时器
var day_l = document.querySelector(".day-l");
    day_r = document.querySelector(".day-r");
    hour_1 = document.querySelector(".hour-l");
    hour_r = document.querySelector(".hour-r");
    min_1 = document.querySelector(".min-l");
    min_r = document.querySelector(".min-r");
    sec_1 = document.querySelector(".sec-l");
    sec_r = document.querySelector(".sec-r");

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





//地图文字的显示

var map_close = document.querySelector(".close");
	place_det = document.querySelector(".details");

//地名定位图的获取
var old_pos = document.querySelector("#old-pos");
	taiJi_pos = document.querySelector("#taiJi-pos");
	oldDoor_pos = document.querySelector("#oldDoor-pos");
	newDoor_pos = document.querySelector("#newDoor-pos");
	windRain_pos = document.querySelector("#windRain-pos");
	newLib_pos = document.querySelector("#newLib-pos");

//地名的获取
var old_lib = document.querySelector("#old-lib");
	tai_Ji = document.querySelector("#tai-ji");
	old_door = document.querySelector("#old-door");
	new_door = document.querySelector("#new-door");
	wind_rain = document.querySelector("#wind-rain");
	new_lib = document.querySelector("#new-lib");

map_close.addEventListener("click",function(){
    place_det.style.display = 'none';
});
old_pos.addEventListener("click",function(){
    place_det.style.display = "block";
});