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


//地名的获取和移动  点击地图名字显示详细信息
var place = $(".place-name");
	place_position = $(".place-position");
	details = $(".details");
	list = $(".list");
	prev = $(".arrow-l");
	next = $(".arrow-r");
	close = $(".close");
	datails_name = $(".datails-name");
	datails_write = $(".datails-write")

var	animated = false;
	index = 0;
	pos_left = [];
	pos_top = [];

var place_name = ["老图书馆", "太极操场", "老校门", "新校门", "风雨操场", "数字图书馆"]
	datails_name_a = [
		"重庆邮电大学图书馆始建于1950年。现有馆舍20873平方米（含新建的数字图书馆12219平方米）。2002年重庆邮电大学图书馆自动化建设工作被重庆市教委评为优秀馆。", 
		"操场是供体育锻炼用的场地，多用指学校进行体育活动和教学活动的专置场地。（学习专用）", 
		"1921年，立飞檐翘角牌坊式校门。五十年代初拆除。2004年年末，为纪念建校一百周年，在原址重建，供观瞻和纪念。", 
		"我们学校的新校门愉快的暑假结束了,我们回到了久违的学校,我惊喜地发现,我们的校门 发生了巨大的变化", 
		"《风雨》，《诗经·郑风》篇名。为先秦时代郑地汉族民歌。全诗三章，每章十二字。", 
		"图书馆分类教育教学图书为主，主要包括教育教学，教育研究，教育管理，课外博览，信息技术，社会科学与哲学，文学，科普，政法，经济，历史，生活，体育，艺术，军事等类图书。",
	]

for (var i = 0; i < place_position.children.length; i++) {
	pos_left[i] = parseFloat(place_position.children[i].offsetLeft) + 40;
	pos_top[i] = parseFloat(place_position.children[i].offsetTop) + 20;
}

//详细建筑框的显示
close.addEventListener("click", function(){
	details.style.display = "none";
})

//地名随鼠标的变动
place_position.addEventListener("mouseover", function(e){

	switch (e.target.id) {
		case "old-pos":
				place.innerHTML = place_name[0];
				list.style.left = -465 + "px";
			break;
		case "taiJi-pos":
				place.innerHTML = place_name[1];
				list.style.left = -930 + "px";
			break;
		case "oldDoor-pos":
				place.innerHTML = place_name[2];
				list.style.left = -1395 + "px";
			break;
		case "newDoor-pos":
				place.innerHTML = place_name[3];
				list.style.left = -1860 + "px";
			break;
		case "windRain-pos":
				place.innerHTML = place_name[4];
				list.style.left = -2325 + "px";
			break;
		case "newLib-pos":
				place.innerHTML = place_name[5];
				list.style.left = -2790 + "px";
			break;
	}

	place.style.left = parseFloat(e.target.offsetLeft) + 40 + "px";
	place.style.top = parseFloat(e.target.offsetTop) + 20 + "px";

})

//详细建筑框的隐藏和内容的显示
place_position.addEventListener("click", function(e){

	details.style.display = "block";

	switch (e.target.id) {
		case "old-pos":
				datails_name.innerHTML = place_name[0];
				datails_write.innerHTML = datails_name_a[0]
				list.style.left = -465 + "px";
				index = 0;
			break;
		case "taiJi-pos":
				datails_name.innerHTML = place_name[1];
				datails_write.innerHTML = datails_name_a[1]
				list.style.left = -930 + "px";
				index = 1;
			break;
		case "oldDoor-pos":
				datails_name.innerHTML = place_name[2];
				datails_write.innerHTML = datails_name_a[2]
				list.style.left = -1395 + "px";
				index = 2;
			break;
		case "newDoor-pos":
				datails_name.innerHTML = place_name[3];
				datails_write.innerHTML = datails_name_a[3]
				list.style.left = -1860 + "px";
				index = 3;
			break;
		case "windRain-pos":
				datails_name.innerHTML = place_name[4];
				datails_write.innerHTML = datails_name_a[4]
				list.style.left = -2325 + "px";
				index = 4;
			break;
		case "newLib-pos":
				datails_name.innerHTML = place_name[5];
				datails_write.innerHTML = datails_name_a[5]
				list.style.left = -2790 + "px";
				index = 5;
			break;
	}
	place.style.left = parseFloat(e.target.offsetLeft) + 40 + "px";
	place.style.top = parseFloat(e.target.offsetTop) + 20 + "px";

})


//详细建筑框的轮播
function animate(offset){
	animated = true;
	var newleft = parseInt(list.style.left) + offset;
	var time = 300;  //位移总的时间
	var interval = 20;  //位移间隔
	var speed = offset/(time/interval);  //每次位移量

	function go() {
		if ((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft)){
			list.style.left = parseInt(list.style.left) + speed + "px";
			setTimeout(go, interval);
		}else{
			animated = false;
			list.style.left = newleft + 'px';
			if (newleft > -465) {
				list.style.left = -2790 + "px";
			}
			if (newleft < -2790) {
				list.style.left = -465 + "px";
			}
		}
	}
	go();
}
next.addEventListener("click", function () {
	if (index == 5) {
		index = 0;
	}else{
		index += 1;
	}
	if (!animated) {
		console.log(index)
		animate(-465);
		datails_name.innerHTML = place_name[index];
		datails_write.innerHTML = datails_name_a[index];
		ani_pos(index);
	}
});

prev.addEventListener("click", function () {
	if (index == 0) {
		index = 5;
	}else{
		index -= 1;
	}
	if (!animated) {
		animate(465);
		datails_name.innerHTML = place_name[index];
		datails_write.innerHTML = datails_name_a[index];
		ani_pos(index);
	}
});

var ani_pos = function (num) {
	switch (num) {
		case 0:
			place.style.left = pos_left[0] + "px";
			place.style.top = pos_top[0] + "px";
			place.innerHTML = place_name[0];
			break;
		case 1:
			place.style.left = pos_left[1] + "px";
			place.style.top = pos_top[1] + "px";
			place.innerHTML = place_name[1];
			break;
		case 2:
			place.style.left = pos_left[2] + "px";
			place.style.top = pos_top[2] + "px";
			place.innerHTML = place_name[2];
			break;
		case 3:
			place.style.left = pos_left[3] + "px";
			place.style.top = pos_top[3] + "px";
			place.innerHTML = place_name[3];
			break;
		case 4:
			place.style.left = pos_left[4] + "px";
			place.style.top = pos_top[4] + "px";
			place.innerHTML = place_name[4];
			break;
		case 5:
			place.style.left = pos_left[5] + "px";
			place.style.top = pos_top[5] + "px";
			place.innerHTML = place_name[5];
			break;
	}
}



//地图放大
var big_button = $(".big-c");
	small_button = $(".small-c");
	map_box_small = $(".map-box-small");
	map_cqupt = $(".map-cqupt");
	big_map = $(".big-map-cqupt");
	masking = $(".masking")

var move = 0;

big_button.addEventListener("click", function(){
	map_cqupt.style.opacity = "0";
	big_map.style.opacity = "1";
	details.style.display = "none";
	place.style.display = "none";
	place_position.style.display = "none";

	switch (parseFloat(getStyle(place,"left"))) {
		case 560:
			big_map.style.left = -1194 + "px";
			big_map.style.top = -1135 + "px";
			break;
		case 436:
			big_map.style.left = -828 + "px";
			big_map.style.top = -552 + "px";
			break;
		case 410:
			big_map.style.left = -879 + "px";
			big_map.style.top = -1465 + "px";
			break;
		case 260:
			big_map.style.left = -434 + "px";
			big_map.style.top = -1361 + "px";
			break;
		case 330:
			big_map.style.left = -517 + "px";
			big_map.style.top = -727 + "px";
			break;
		case 310:
			big_map.style.left = -391 + "px";
			big_map.style.top = -1228 + "px";
			break;
	}
})
small_button.addEventListener("click", function(){
	map_cqupt.style.opacity = "1";
	big_map.style.opacity = "0";
	place.style.display = "block";
	place_position.style.display = "block";
})

function mousedown() {
	X1 = window.event.x - parseInt(big_map.offsetLeft);
	Y1 = window.event.y - parseInt(big_map.offsetTop);
	move = 1;
}
function mousestop() {
	window.event.returnValue = false;
}
function mousemove(){
	if (move == 1)
	{	
		big_map.style.left = (window.event.x - X1) + "px";
		big_map.style.top = (window.event.y - Y1) + "px";
		if ((window.event.x - X1) < -2539) {
			big_map.style.left = -2539 + "px";
		}
		if ((window.event.x - X1) > 0) {
			big_map.style.left = 0 + "px";
		}
		if ((window.event.y - Y1) < -1840) {
			big_map.style.top = -1840 + "px";
		}
		if ((window.event.y - Y1) > 0) {
			big_map.style.top = 0 + "px";
		}
	}
}
function mouseup(){
	move = 0;
}
function remove(){
	masking.onmousemove = mousemove;
	masking.onmousedown = mousedown;
	masking.onmouseup = mouseup;
	masking.ondragstart  = mousestop;
}
remove()