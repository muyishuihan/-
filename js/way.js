var doc = document,
    fivtabs = doc.querySelector("#third_nav_five").children,
    thrtabs = doc.querySelector("#third_nav_three").children,
    fivcontent = doc.querySelectorAll(".content"),//重邮攻略内容
    thrcontent = doc.querySelectorAll(".thrcontent"),//重邮周边内容
    thrnav = doc.querySelector("#third_nav_three"),
    fivnav = doc.querySelector("#third_nav_five"),
    surround = doc.querySelector(".surround"),
    playCqupt = doc.querySelector(".play_cqupt");

//重邮攻略选项卡与展示内容的切换
for (var i = fivtabs.length - 1; i >= 0; i--) {
    fivtabs[i].index = i;
    fivtabs[i].addEventListener("click", function () {
        clearName(fivtabs);
        this.className = "strategy_way_click";
        showMsg(this.index);
    })
};

//重邮周边选项卡与展示内容的切换
for (var i = thrtabs.length - 1; i >= 0; i--) {
    thrtabs[i].index = i;
    thrtabs[i].addEventListener("click",function () {
        clearClass(thrtabs);
        this.className = "su_play_click";
        showCon(this.index);
    })
};
//点击重邮周边
surround.addEventListener("click",function () {
    surround.id = "clicked";
    playCqupt.id = "unclick";
    thrnav.style.display = "block";
    fivnav.style.display = "none";
    clearClass(thrtabs);
    thrtabs[0].className = ("su_play_click");
    notShow(fivcontent);
    thrcontent[0].style.display = "block";
});

// 点击重邮攻略
playCqupt.addEventListener("click",function () {
    playCqupt.id = "clicked";
    surround.id = "unclick";
    fivnav.style.display = "block";
    thrnav.style.display = "none";
    clearName(fivtabs);
    fivtabs[0].className = "strategy_way_click";
    notShow(thrcontent);
    fivcontent[0].style.display = "block";
});

//清除重邮攻略选项卡样式
function  clearName(elem) {
    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].className = "strategy_way";
        fivcontent[i].style.display = "none";
    }
}

//清除重邮周边选项卡样式
function clearClass(elem) {
    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].className = "su_play";
        thrcontent[i].style.display = "none";
        index_three = 0;
    }
}

//展示信息 of 重邮攻略
function showMsg(n) {
    fivcontent[n].style.display = "block";
}

//展示信息 of 重邮周边
function showCon(n) {
    thrcontent[n].style.display = "block";
}

//隐藏信息
function notShow(elem) {
    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].style.display = "none";
    }
}







//封装
var getStyle = function(dom,attr){
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
}

var dom = function (event) {
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
  var result = arr.replace(/^\s+|\s+dom/g,'');
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
};




//飞机和回顶的闭包
(function(){

    var fix_l = dom(".fix-l");
        fix_r = dom(".fix-r");
        backTop = dom(".back"); //回顶按钮

    var tt = 500;
    
    //飞机和回顶按钮的隐藏
    window.onscroll = function(){  //兼容ie8
        var t = document.documentElement.scrollTop || document.body.scrollTop;
            bottom_t = document.documentElement.offsetHeight || document.body.offsetHeight;
            bottom_b = document.documentElement.clientHeight || document.body.clientHeight;
            bottom = bottom_t - bottom_b - t;

        if (bottom <= 10) {
            backTop.style.bottom = (-bottom) + 70 + "px";
        }else {
            backTop.style.bottom = 30 + "px";
        };

        if(t < tt && getStyle(backTop,"opacity")!="0"){
            backTop.style.opacity="0";
        }else if(t > tt && getStyle(backTop,"opacity")=="0"){
            backTop.style.opacity="1";
        }else{
            return false;
        };

        if(t < 1500 && getStyle(fix_l,"opacity")!="1"){
            fix_l.style.opacity="1";
        }else if(t > tt && getStyle(fix_l,"opacity")=="1"){
            fix_l.style.opacity="0";
        }else{
            return false;
        };

        if(t < 1500 && getStyle(fix_r,"opacity")!="1"){
            fix_r.style.opacity="1";
        }else if(t > tt && getStyle(fix_r,"opacity")=="1"){
            fix_r.style.opacity="0";
        }else{
            return false;
        };
    };


    //回到顶部
    backTop.addEventListener("click", back);
    function back() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
            speed = 100;  //每次位移量
            interval = 20;
        if (t > 0) {
            document.documentElement.scrollTop = t - speed;
            document.body.scrollTop = t - speed;
            setTimeout(back, interval);
        };
    };

})();

//计时器的闭包
(function(){

    var timer = [dom(".day-l"), dom(".day-r"), dom(".hour-l"), dom(".hour-r"), dom(".min-l"), dom(".min-r"), dom(".sec-l"), dom(".sec-r")]
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
        };
        if (num == 1) {
            event.style.top = -37 + "px";
        };
        if (num == 2) {
            event.style.top = -73 + "px";
        };
        if (num == 3) {
            event.style.top = -110 + "px";
        };
        if (num == 4) {
            event.style.top = -147 + "px";
        };
        if (num == 5) {
            event.style.top = -183 + "px";
        };
        if (num == 6) {
            event.style.top = -220 + "px";
        };
        if (num == 7) {
            event.style.top = -257 + "px";
        };
        if (num == 8) {
            event.style.top = -293 + "px";
        };
        if (num == 9) {
            event.style.top = -330 + "px";
        };

    };

    if (month == 8 && year == 2016){
        day = 31+9;
    }else if (month == 9 && year == 2016) {
        day = 9;
    }else {
        stop = 1;
    };

    function timeChange(stop) {
        count++;

        var offset = new Date().getTime() - (startTime + count * 1000);
            nextTime = 1000 - offset;
            timeNew = new Date();
            sec = timeNew.getSeconds();
            min = timeNew.getMinutes();
            hour = timeNew.getHours();
            dayNew = day - timeNew.getDate();
            // console.log(timeNew.getDay())

        if (nextTime < 0) nextTime = 0;

        if (stop != 1) {
            var time = [parseInt((dayNew%100)/10), dayNew%10, (2 - parseInt((hour%100)/10)), (4 - hour%10), (5 - parseInt((min%100)/10)), (9 - min%10), (5 - parseInt((sec%100)/10)), (9 - sec%10)];
                length = timer.length;

            for (var i = 0; i < length; i++) {
                change(timer[i], time[i])
            };
            
        }else{
            for (var i = 0; i < length; i++) {
                change(timer[i], 0);
            };
        };
        setTimeout(timeChange, nextTime);
    };

    function _timeChange(stop) {
        return function(){
            timeChange(stop);
        }
    };
    setTimeout(_timeChange(stop), 1000);

})();


var left_arr = dom("#left_arr");
    right_arr = dom("#right_arr");
    list = dom(".list");
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
                list.style.left = -2149 + "px";
            }
            if (newleft < -2149) {
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
var flaot_d = dom(".flaot_d");
    float_line = dom(".float_line");
    entr_flaot_d = dom(".entr_flaot_d");
    qq_det = dom("#qq_det");
    must_det = dom("#must_det");
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
        four_new = dom("#left_side_det").children;
        num = 0;
    if (top >= 0 && top < 379) {
        num = 0;
        four_new[1].style.background = "#fed18d"
        four_new[2].style.background = "#fed18d"
        four_new[3].style.background = "#fed18d"
    }
    if (top >= 379 && top < 419) {
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
//须知按动按钮
var left_side_det = dom('#left_side_det')
left_side_det.addEventListener("click", function (e) {
    // console.log(e.target)
    if (e.target.className == "four_new_click") {
        contentChange(e.target, e.target.children[0].id);
    }
    if (e.target.className == "four_new") {
        contentChange(e.target, e.target.children[0].id);
    }
    if (e.target.className == "cut_top") {
        contentChange(e.target.parentNode, e.target.id);
    }
    if (e.target.className == "cut_t") {
        contentChange(e.target.parentNode. e.target.id);
    }
});
function contentChange(event, event1){
    for (var i = 0; i < left_side_det.children.length; i++) {
        left_side_det.children[i].style.background = "#fed18d";
    }
    event.style.background = "#9ae4e9";

    switch (event1) {
        case "know1":
            must_det.scrollTop = 0;
            entr_flaot_d.style.top = 0 + "px";
            break;
        case "know2":
            must_det.scrollTop = 5986;
            entr_flaot_d.style.top = 379 + "px";
            break;
        case "know3":
            must_det.scrollTop = 6617;
            entr_flaot_d.style.top = 419 + "px";
            break;
        case "know4":
            must_det.scrollTop = 8560;
            entr_flaot_d.style.top = 542 + "px";
            break;
    }
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

//重邮周边轮播

var life_bottom_left = dom("#life_bottom_left");
    life_bottom_right = dom("#life_bottom_right");
    food_bottom_left = dom("#food_bottom_left");
    food_bottom_right = dom("#food_bottom_right");
    fengjin_bottom_left = dom("#fengjin_bottom_left");
    fengjin_bottom_right = dom("#fengjin_bottom_right");
    list_1 = dom(".list_1");
    list_2 = dom(".list_2");
    list_3 = dom(".list_3");
    index_three = 0;
    animated_three = false;




function animate_three(offset, list_three){
    animated_three = true;
    var newleft = parseInt(list_three.style.left) + offset;
    var time = 500;  //位移总的时间
    var interval = 5;  //位移间隔
    var speed = offset/(time/interval);  //每次位移量

    function go() {
        if ((speed < 0 && parseInt(list_three.style.left) > newleft) || (speed > 0 && parseInt(list_three.style.left) < newleft)){
            list_three.style.left = parseInt(list_three.style.left) + speed + "px";
            setTimeout(go, interval);
        }else{
            animated_three = false;
            list_three.style.left = newleft + 'px';
            if (newleft > -679) {
                list_three.style.left = -1358 + "px";
            }
            if (newleft < -1358) {
                list_three.style.left = -679 + "px";
            }
        }
    }
    go();
}

function three_right(event) {
    if (index_three == 1) {
        index_three = 0;
    }else{
        index_three += 1;
    }
    if (!animated_three) {
        animate_three(-679, event);
    }
}
function three_left(event) {
    if (index_three == 0) {
        index_three = 1;
    }else{
        index_three -= 1;
    }
    if (!animated_three) {
        animate_three(679, event);
    }
}

//日常生活
life_bottom_right.addEventListener("click", function(){
    three_right(list_1)
});
life_bottom_left.addEventListener("click", function(){
    three_left(list_1)
});

//周边美食
food_bottom_right.addEventListener("click", function(){
    three_right(list_2)
});
food_bottom_left.addEventListener("click", function(){
    three_left(list_2)
});

//周边美景
fengjin_bottom_right.addEventListener("click", function(){
    three_right(list_3)
});
fengjin_bottom_left.addEventListener("click", function(){
    three_left(list_3)
});