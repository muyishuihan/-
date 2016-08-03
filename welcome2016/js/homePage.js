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

var tt = 500;
    back = document.querySelector(".back");
    fix_l = document.querySelector(".fix-l")
    fix_r = document.querySelector(".fix-r");





//飞机和回顶的隐藏
	backTop.addEventListener("click", function(){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	})

var tt = 500;
	back = document.querySelector(".back");
	fix_l = document.querySelector(".fix-l")
	fix_r = document.querySelector(".fix-r");


window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;

    if(t < tt && getStyle(back,"opacity")!="0"){
        back.style.opacity="0";
    }else if(t > tt && getStyle(back,"opacity")=="0"){
        back.style.opacity="1";
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

    // dayNew = timeNew.getDay();

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
var count = 0;
function secChange() {
    count++;
    var offset = new Date().getTime() - (startTime + count * 1000);
        nextTime = 1000 - offset;
        timeNew = new Date();
        sec = timeNew.getSeconds();
    if (nextTime < 0) nextTime = 0;

    secL = 5 - parseInt((sec%100)/10);
    secR = 9 - sec%10;
    change(sec_1, secL);
    change(sec_r, secR);

    setTimeout(secChange, nextTime);
}
setTimeout(secChange, 1000);

var startTime_min = new Date().getTime();
var count_min = 0;
function minChange() {
    count_min++;
    var offset = new Date().getTime() - (startTime_min + count_min * 1000);
        nextTime = 1000 - offset;
        timeNew = new Date();
        min = timeNew.getMinutes();
    if (nextTime < 0) nextTime = 0;

    minL = 5 - parseInt((min%100)/10);
    minR = 9 - min%10;
    change(min_1, minL);
    change(min_r, minR);

    setTimeout(minChange, nextTime);
}
setTimeout(minChange, 1000);

var startTime_hour = new Date().getTime();
var count_hour = 0;
function hourChange() {
    count_hour++;
    var offset = new Date().getTime() - (startTime_hour + count_hour * 1000);
        nextTime = 1000 - offset;
        timeNew = new Date();
        hour = timeNew.getHours();
    if (nextTime < 0) nextTime = 0;

    hourL = 2 - parseInt((hour%100)/10);
    hourR = 4 - hour%10;
    change(hour_1, hourL);
    change(hour_r, hourR);

    setTimeout(hourChange, nextTime);
}
setTimeout(hourChange, 1000);




var timeNew = new Date();
    month = timeNew.getMonth() + 1;
    year = timeNew.getFullYear()
    day = 0;
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ){
    day = 31+5;
}
if (month == 4 || month == 6 || month == 9 || month == 11) {
    day =5;
}
if (year%4 == 0 && month == 2) {
    day == 29;
}
if (year%4 != 0 && month == 2) {
    day = 28;
}



var startTime_day = new Date().getTime();
var count_day = 0;
function dayChange() {
    count_day++;
    var offset = new Date().getTime() - (startTime_day + count_day * 1000);
        nextTime = 1000 - offset;
        timeNew = new Date();
        dayNew = timeNew.getDay();
    if (nextTime < 0) nextTime = 0;

    dayNew = day - dayNew;
    dayL = parseInt((dayNew%100)/10);
    dayR = dayNew%10;
    change(day_l, dayL);
    change(day_r, dayR);

    setTimeout(dayChange, nextTime);
}
setTimeout(dayChange, 1000);


  //地图的显示
var map_close = document.querySelector(".close"),
    place_position = document.querySelector(".position"),
    place_name = document.querySelector("#old-lib"),
    place_det = document.querySelector(".details");
map_close.addEventListener("click",function(){
    place_det.style.display = 'none';
});
place_position.addEventListener("click",function(){
    place_det.style.display = "block";
});
place_position.addEventListener("mouseover",function(){
    place_name.style.display = "block";
});
place_position.addEventListener("mouseout",function(){
    place_name.style.display = "none";
});