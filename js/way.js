var doc = document,
    dormitory = doc.querySelector("#dormitory"),
    necessary = doc.querySelector("#necessary"),
    entrance = doc.querySelector("#entrance"),
    traffic = doc.querySelector("#traffic"),
    qq = doc.querySelector("#qq_group"),
    dormitory_d = doc.querySelector("#dormitory_d"),
    necessary_d = doc.querySelector("#necessary_d"),
    entrance_d = doc.querySelector("#entrance_d"),
    traffic_d = doc.querySelector("#traffic_d"),
    qq_d = doc.querySelector("#qq_group_d"),
    surround = doc.querySelector(".surround"),
    playCqupt = doc.querySelector(".play_cqupt"),
    thrnav = doc.querySelector("#third_nav_three"), 
    fivnav = doc.querySelector("#third_nav_five"), 
    life = doc.querySelector("#com_life"),
    food = doc.querySelector("#love_food"),
    scenery = doc.querySelector("#love_fengjin"),
    life_d = doc.querySelector("#life_d"),
    food_d = doc.querySelector("#food_d"),
    scenery_d = doc.querySelector("#fengjin_d");

dormitory.addEventListener("click",function () {
    show(dormitory_d);
    dormitory.className = "strategy_way_click";
    var dod = [entrance_d,traffic_d,necessary_d,qq_d,life_d,food_d,scenery_d];
    notshow(dod);
    var dor = [necessary,entrance,traffic,qq];
    changename(dor);
});

necessary.addEventListener("click",function () {
    show(necessary_d);
    necessary.className = "strategy_way_click";
    var nnd = [entrance_d,traffic_d,dormitory_d,qq_d,life_d,food_d,scenery_d];
    notshow(nnd);
    var nn = [dormitory,entrance,traffic,qq];
    changename(nn);
});

entrance.addEventListener("click",function () {
    show(entrance_d);
    entrance.className = "strategy_way_click";
    var end = [necessary_d,traffic_d,dormitory_d,qq_d,life_d,food_d,scenery_d];
    notshow(end);
    var en = [dormitory,necessary,traffic,qq];
    changename(en);
});

traffic.addEventListener("click",function () {
    show(traffic_d);
    traffic.className = "strategy_way_click";
    var tnd = [necessary_d,entrance_d,dormitory_d,qq_d,life_d,food_d,scenery_d];
    notshow(tnd);
    var tn = [dormitory,necessary,entrance,qq];
    changename(tn);
});

qq.addEventListener("click",function () {
    show(qq_d);
    qq.className = "strategy_way_click";
    var qnd = [dormitory_d,necessary_d,entrance_d,traffic_d,life_d,food_d,scenery_d];
    notshow(qnd);
    var qn = [dormitory,necessary,entrance,traffic,];
    changename(qn);
});

surround.addEventListener("click",function () {
    surround.id = "clicked";
    playCqupt.id = "unclick";
    show(thrnav);
    show(life_d);
    fivnav.style.display = "none";
    life.className = "su_play_click";
    var lnd = [dormitory_d,necessary_d,entrance_d,traffic_d,qq_d,food_d,scenery_d];
    notshow(lnd);
    var ln = [food,scenery];
    changeclass(ln);
});

playCqupt.addEventListener("click",function () {
    playCqupt.id = "clicked";
    surround.id = "unclick";
    show(fivnav);  
    show(dormitory_d);
    thrnav.style.display = "none";
    dormitory.className = "strategy_way_click";
    var dod = [entrance_d,traffic_d,necessary_d,qq_d,life_d,food_d,scenery_d];
    notshow(dod);
    var dor = [necessary,entrance,traffic,qq];
    changename(dor);
});

life.addEventListener("click",function () {
    show(life_d);
    life.className = "su_play_click";
    var lnd = [dormitory_d,necessary_d,entrance_d,traffic_d,qq_d,food_d,scenery_d];
    notshow(lnd);
    var ln = [food,scenery];
    changeclass(ln);
});

food.addEventListener("click",function () {
    show(food_d);
    food.className = "su_play_click";
    var fnd = [dormitory_d,necessary_d,entrance_d,traffic_d,qq_d,life_d,scenery_d];
    notshow(fnd);
    var fn = [life,scenery];
    changeclass(fn);
});

scenery.addEventListener("click",function () {
    show(scenery_d);
    scenery.className = "su_play_click";
    var snd = [dormitory_d,necessary_d,entrance_d,traffic_d,qq_d,life_d,food_d];
    notshow(snd);
    var sd = [life,food];
    changeclass(sd);
});

function changeclass(elem) {
    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].className = "su_play";
    }
}//重邮周边选项卡切换

function changename(elem) {
    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].className = "strategy_way";
    }
}//重邮攻略选项卡切换

function notshow(elem) {
    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].style.display = "none";
    }
}//隐藏信息

function show(elem) {
    elem.style.display = "block";
}






//封装
var getStyle = function(dom,attr){
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
}

var $ = function (event) {
    return document.querySelector(event);
}

function indexOf(arr,value,start){
  //如果不设置start,则默认start为0
  if(arguments.length == 2){
    start = 0;
  }
  //如果数组中存在indexOf方法，则用原生的indexOf方法
  if(arr.indexOf){
    return arr.indexOf(value,start);
  }
  for( var i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return i;
    }
  }
  return -1;
}
//数组去重方法封装
function noRepeat(arr){
  var result = [];
  for( var i = 0; i < arr.length; i++){
    if(indexOf(result,arr[i]) == -1){
      result.push(arr[i]);
    }
  }
  return result;
}
//inArray方法封装
function inArray(arr,value){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}
//去除首尾空格函数封装
function trim(arr){
  var result = arr.replace(/^\s+|\s+$/g,'');
  return result;
}
function addClass(obj,classStr){
  var array = noRepeat(trim(obj.className).split('\s+'));
  if(!inArray(array,classStr)){
    array.push(classStr);
  }
  obj.className = array.join(' ');
  return obj;
}

function removeClass(obj,classStr){
  var array = noRepeat(trim(obj.className).split('\s+'));
  var index = indexOf(array,classStr);
  if(index != -1){
    array.splice(index,1);
    obj.className = array.join(' ');
  }
  return obj;
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
        backTop.style.bottom = (-bottom) + 70 + "px";
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
    var t = document.documentElement.scrollTop || document.body.scrollTop;
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


var left_arr = $("#left_arr");
    right_arr = $("#right_arr");
    list = $(".list");
    index_ani = 0;
    animated = false;


function animate(offset){
    animated = true;
    var newleft = parseInt(list.style.left) + offset;
    var time = 500;  //位移总的时间
    var interval = 5;  //位移间隔
    var speed = offset/(time/interval);  //每次位移量

    function go() {
        if ((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft)){
            list.style.left = parseInt(list.style.left) + speed + "px";
            setTimeout(go, interval);
        }else{
            animated = false;
            list.style.left = newleft + 'px';
            if (newleft > -428) {
                list.style.left = -1712 + "px";
            }
            if (newleft < -1712) {
                list.style.left = -428 + "px";
            }
        }
    }
    go();
}
right_arr.addEventListener("click", function () {
    if (index_ani == 3) {
        index_ani = 0;
    }else{
        index_ani += 1;
    }
    if (!animated) {
        animate(-428);
    }
});

left_arr.addEventListener("click", function () {
    if (index_ani == 0) {
        index_ani = 3;
    }else{
        index_ani -= 1;
    }
    if (!animated) {
        animate(428);
    }
});

//滚动条
var flaot_d = $(".flaot_d");
    float_line = $(".float_line");
    entr_flaot_d = $(".entr_flaot_d");
    qq_det = $("#qq_det");
    must_det = $("#must_det");
    move1 = 0;
    move2 = 0;

qq_det.onscroll = function(){
    var t = qq_det.scrollTop;
    flaot_d.style.top = (t/(1268/399)) + "px";
}
must_det.onscroll = function(){
    var t = must_det.scrollTop;
    entr_flaot_d.style.top = (t/(9919/628)) + "px";
    four_buttom();
}

//须知四个按钮变色
function four_buttom() {
    var top = entr_flaot_d.offsetTop;
        four_new = $("#left_side_det").children;
        num = 0;
    if (top >= 0 && top < 380) {
        num = 0;
        four_new[1].style.background = "#fed18d"
        four_new[2].style.background = "#fed18d"
        four_new[3].style.background = "#fed18d"
    }
    if (top >= 380 && top < 419) {
        num = 1;
        four_new[0].style.background = "#fed18d"
        four_new[2].style.background = "#fed18d"
        four_new[3].style.background = "#fed18d"
    }
    if (top >= 419 && top < 542) {
        num = 2;
        four_new[0].style.background = "#fed18d"
        four_new[1].style.background = "#fed18d"
        four_new[3].style.background = "#fed18d"
    }
    if (top >= 542 && top < 628) {
        num = 3;
        four_new[0].style.background = "#fed18d"
        four_new[1].style.background = "#fed18d"
        four_new[2].style.background = "#fed18d"
    }
    four_new[num].style.background = "#9ae4e9"
}

//须知按动滚
function mousedown1() {
    Y1 = window.event.y - parseInt(entr_flaot_d.offsetTop);
    move1 = 1;
}
function mousestop1() {
    window.event.returnValue = false;
}
function mousemove1(){
    if (move1 == 1)
    {   
        entr_flaot_d.style.top = (window.event.y - Y1) + "px";
        must_det.scrollTop = ((9919/628)*(window.event.y - Y1));
        addClass(must_det, "way_masking");
        four_buttom();
        if ((window.event.y - Y1) < 0) {
            entr_flaot_d.style.top = 0 + "px";
            must_det.scrollTop = 0;
        }
        if (entr_flaot_d.offsetTop > 628) {
            entr_flaot_d.style.top = 628 + "px";
            must_det.scrollTop = 1268;
        }
    }
}
function mouseup1(){
    removeClass(must_det, "way_masking");
    removeClass(qq_det, "way_masking");
    move1 = 0;
}
function remove1(){
    entr_flaot_d.onmousemove = mousemove1;
    entr_flaot_d.onmousedown = mousedown1;
    entr_flaot_d.onmouseup = mouseup1;
    entr_flaot_d.ondragstart  = mousestop1;

    must_det.onmousemove = mousemove1;
    must_det.onmouseup = mouseup1;
    must_det.ondragstart  = mousestop1;
}
remove1()


//qq按动滚
function mousedown2() {
    Y1 = window.event.y - parseInt(flaot_d.offsetTop);
    move2= 1;
}
function mousestop2() {
    window.event.returnValue = false;
}
function mousemove2(){
    if (move2 == 1)
    {   
        flaot_d.style.top = (window.event.y - Y1) + "px";
        qq_det.scrollTop = ((1268/399)*(window.event.y - Y1));
        addClass(qq_det, "way_masking");
        if ((window.event.y - Y1) < 0) {
            flaot_d.style.top = 0 + "px";
            qq_det.scrollTop = 0;
        }
        if ((window.event.y - Y1) > 399) {
            flaot_d.style.top = 399 + "px";
            qq_det.scrollTop = 1268;
        }
    }
}
function mouseup2(){
    move2 = 0;
}
function remove2(){
    flaot_d.onmousemove = mousemove2;
    flaot_d.onmousedown = mousedown2;
    flaot_d.onmouseup = mouseup2;
    flaot_d.ondragstart  = mousestop2;

    qq_det.onmousemove = mousemove2;
    qq_det.onmouseup = mouseup2;
    qq_det.ondragstart  = mousestop2;
}
remove2()