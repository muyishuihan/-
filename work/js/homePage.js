//封装
function addClass(element, classname) {  //添加class  （元素， class的字符串）

	element.className += " " + classname;

}
function removeClass(element, classname) { //删除class	（元素， class的字符串）

	var regular       = new RegExp(' ' + '(' + classname +'' + ')*')

	element.className = element.className.replace(regular, "");

}
function hasClass(element, index) {  //检测class中是否有要检测的class （元素， 要检测class的字符串）

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