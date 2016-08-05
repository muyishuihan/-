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