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

var place_name = ["老图书馆", "太极操场", "八十万", "新校门", "风雨操场", "八教", "春华秋实广场", "二教", "红房子", "情人坡", "五栋篮球场", "信科", "逸夫楼"]
	datails_name_a = [
		"沉浸于书海，听不见一丝的声音，只剩知识在脑海里交响，喧腾。翻页，亦或是轻轻合拢，用不着辗转反侧，你所思所求，可都在这殿堂中。", 
		"这里有我们挥汗拼搏的运动赛事，有我们军训铁一般的坚强意志，更有我们开学典礼上充满希望的新奇。", 
		"据民间神秘知情人士透露，建造八十万花了整整80万大洋。这二楼小洋房般的豪华公厕给予多少邮子便捷，释放了多少匆匆过客的压力！", 
		"谈不上气派，可就是有一种说不清的韵味。一枚小小的邮票，任邮戳在湛蓝的天空下飞舞。站在门前，享受着微风抚摸脸颊，淡淡的书香，吹进耳朵，变成了闲时嬉戏打闹的声音，不一会儿，就成了运动时的呐喊了。", 
		"这里是挥洒汗水的场馆，这里是见证友谊的舞台，这个地方神采万千，这个地方激情飞扬，起跳后仰，发力扣杀，双眼从不迷茫，胜利，竭尽全力。",
		"经典的红绿蓝，高高地矗立在云端。浪漫，文艺，汇集于一体，这梦想的帆船载着重邮人的信念一路向前。", 
		"当黄桷馨声与草坪音乐的歌声在这里响起，当辛勤的学子从这里经过走进老图，奔向信科...她在这里见证了一代又一代邮子的成长，见证了 一个又一个的成功。",
		"在咱们这个学术气息浓厚的皇家大重邮，老图和数字图书馆的自习室座位往往是等不到你的到来的，那么这时候位于老图对面，老操场对面的近便的第二教学楼便是你最好的选择。",
		"这里蕴藏着重邮万丈豪情中的那一抹柔情。这是充满着青春与活力的红色，展示着重邮人蓬勃向上的朝气；这是代表着庄严法律的红色，展示着重邮人踏实律己的作风。",
		"于百花中寻觅，于千草间踱行。池畔桥旁，莺声燕语；鸾凤和鸣，长歌当行。",
		"在这里，有排球小将们的身影，有羽球达人们的足迹，更有灌篮高手门的飒爽英姿。",
		"也许它不是最别致的建筑，但它却是重邮最高（sao）的建筑。这里还聚集着一群程序猿，是工科学子实现梦想的摇篮。",
		"这里有着其他地方无可比拟的厚度，一个甲子的沉淀，使得历史的气息从一进门便扑面而来，校史馆的每一件展品都藏着一个老故事，只要你看过，就有动力为重邮未来添上一笔。",
	]

for (var i = 0; i < place_position.children.length; i++) {
	pos_left[i] = parseFloat(place_position.children[i].offsetLeft) + 40;
	pos_top[i] = parseFloat(place_position.children[i].offsetTop) - 20;
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
		case "eightyWc-pos":
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
		case "eightBuilding-pos":
				place.innerHTML = place_name[5];
				list.style.left = -2790 + "px";
			break;
		case "spring-pos":
				place.innerHTML = place_name[6];
				list.style.left = -3255 + "px";
			break;
		case "twoBuilding-pos":
				place.innerHTML = place_name[7];
				list.style.left = -3720 + "px";
			break;
		case "redBuilding-pos":
				place.innerHTML = place_name[8];
				list.style.left = -4185 + "px";
			break;
		case "love-pos":
				place.innerHTML = place_name[9];
				list.style.left = -4650 + "px";
			break;
		case "basketball-pos":
				place.innerHTML = place_name[10];
				list.style.left = -5115 + "px";
			break;
		case "shineford-pos":
				place.innerHTML = place_name[11];
				list.style.left = -5580 + "px";
			break;
		case "houseBuilding-pos":
				place.innerHTML = place_name[12];
				list.style.left = -6045 + "px";
			break;
	}

	place.style.left = parseFloat(e.target.offsetLeft) + 40 + "px";
	place.style.top = parseFloat(e.target.offsetTop) - 20  + "px";

})

//详细建筑框的隐藏和内容的显示
place_position.addEventListener("click", function(e){
	details.style.display = "block";

		switch (e.target.id) {
		case "old-pos":
				datails_name.innerHTML = place_name[0];
				datails_write.innerHTML = datails_name_a[0];
				index = 0;
			break;
		case "taiJi-pos":
				datails_name.innerHTML = place_name[1];
				datails_write.innerHTML = datails_name_a[1];
				index = 1;
			break;
		case "eightyWc-pos":
				datails_name.innerHTML = place_name[2];
				datails_write.innerHTML = datails_name_a[2];
				index = 2;
			break;
		case "newDoor-pos":
				datails_name.innerHTML = place_name[3];
				datails_write.innerHTML = datails_name_a[3];
				index = 3;
			break;
		case "windRain-pos":
				datails_name.innerHTML = place_name[4];
				datails_write.innerHTML = datails_name_a[4];
				index = 4;
			break;
		case "eightBuilding-pos":
				datails_name.innerHTML = place_name[5];
				datails_write.innerHTML = datails_name_a[5];
				index = 5;
			break;
		case "spring-pos":
				datails_name.innerHTML = place_name[6];
				datails_write.innerHTML = datails_name_a[6];
				index = 6;
			break;
		case "twoBuilding-pos":
				datails_name.innerHTML = place_name[7];
				datails_write.innerHTML = datails_name_a[7];
				index = 7;
			break;
		case "redBuilding-pos":
				datails_name.innerHTML = place_name[8];
				datails_write.innerHTML = datails_name_a[8];
				index = 8;
			break;
		case "love-pos":
				datails_name.innerHTML = place_name[9];
				datails_write.innerHTML = datails_name_a[9];
				index = 9;
			break;
		case "basketball-pos":
				datails_name.innerHTML = place_name[10];
				datails_write.innerHTML = datails_name_a[10];
				index = 10;
			break;
		case "shineford-pos":
				datails_name.innerHTML = place_name[11];
				datails_write.innerHTML = datails_name_a[11];
				index = 11;
			break;
		case "houseBuilding-pos":
				datails_name.innerHTML = place_name[12];
				datails_write.innerHTML = datails_name_a[12];
				index = 12;
			break;
	}
});


//详细建筑框的轮播
function animate(offset){
	animated = true;
	var newleft = parseInt(list.style.left) + offset;
	var time = 465;  //位移总的时间
	var interval = 5;  //位移间隔
	var speed = offset/(time/interval);  //每次位移量

	function go() {
		if ((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft)){
			list.style.left = parseInt(list.style.left) + speed + "px";
			setTimeout(go, interval);
		}else{
			animated = false;
			list.style.left = newleft + 'px';
			if (newleft > -465) {
				list.style.left = -6045 + "px";
			}
			if (newleft < -6045) {
				list.style.left = -465 + "px";
			}
		}
	}
	go();
}
next.addEventListener("click", function () {
	if (index == 12) {
		index = 0;
	}else{
		index += 1;
	}
	if (!animated) {
		animate(-465);
		datails_name.innerHTML = place_name[index];
		datails_write.innerHTML = datails_name_a[index];
		ani_pos(index);
	}
});

prev.addEventListener("click", function () {
	if (index == 0) {
		index = 12;
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
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 1:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 2:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 3:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 4:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 5:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 6:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 7:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 8:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 9:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 10:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 11:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
			break;
		case 12:
			place.style.left = pos_left[num] + "px";
			place.style.top = pos_top[num] + "px";
			place.innerHTML = place_name[num];
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
		case 580 || 495 || 520 || 540 || 640://老图，二教，春华秋实，红房子，情人坡
			big_map.style.left = -1209 + "px"; //ok
			big_map.style.top = -1117 + "px";
			break;
		case 436 || 350 || 460: //太极，风雨，篮球
			big_map.style.left = -947 + "px";//ok
			big_map.style.top = -644 + "px";
			break;
		case 450 || 230: //八十万，信科
			big_map.style.left = -995 + "px";//ok
			big_map.style.top = -1401 + "px";
			break;
		case 270://新校门
			big_map.style.left = -434 + "px";
			big_map.style.top = -1361 + "px";
			break;
		case 310: //八教
			big_map.style.left = -454 + "px";//ok
			big_map.style.top = -302 + "px";
			break;
		case 230: //逸夫楼
			big_map.style.left = -312 + "px";
			big_map.style.top = -925 + "px";
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