//回到顶部
var backTop = document.querySelector(".back"); //回顶按钮
	backTop.addEventListener("click", function(){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	})

//滚动倒计时
var day_l = document.querySelector(".day-l");
	day_r = document.querySelector(".day-r");
	hour_1 = document.querySelector(".hour-l");
	hour_r = document.querySelector(".hour-r");
	min_1 = document.querySelector(".min-l");
	min_r = document.querySelector(".min-r");
	sec_1 = document.querySelector(".sec-l");
	sec_r = document.querySelector(".sec-r");

	// dayNew = timeNew.getDay();
	// hourNew = timeNew.getHours();
	// minNew = timeNew.getMinutes();

function change(event, num){
	if (num == 0) {
		event.style.top = 0 + "px";
	}
	if (num == 1) {
		event.style.top = -36 + "px";
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

function secChange(){
	var timeNew = new Date();
		sec = timeNew.getSeconds();
	secL = parseInt((sec%100)/10);
	secR = sec%10;
	change(sec_1, secL);
	change(sec_r, secR);
}
secChange();