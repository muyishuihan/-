var sub_nav_g = document.querySelector('#sub_nav_g').children,
    third_nav = document.querySelector('#third_nav'),
    college_club = document.querySelector('#college_club'), 
    stu_club = document.querySelector('#stu_club'),
    redrock_club = document.querySelector('#redrock_club'),
    great_vedio = document.querySelector('#great_vedio'),
    great_tech = document.querySelector('#great_tech'),
    great_stu = document.querySelector('#great_stu'),
    t_n_c = document.querySelector('#third_nav').children,
    left_side = document.querySelector('#left_sid').children,
    tuanwei = document.querySelector('#tuanwei_det'),
    stu_union = document.querySelector('#col_stu_union_det'),
    sci_union = document.querySelector('#sci_union_det'),
    club_union = document.querySelector('#club_union_det'),
    teen_volum = document.querySelector('#teen_volum_det'),
    stu_art = document.querySelector('#stu_art_det');
function bo_no(ele){
    if (ele.style.display="block") {
        ele.style.display = "none";
    };
}
function dis_nav(ele,newc){
    for (var i = ele.length - 1; i >= 0; i--) {
        ele[i].className = newc;
    }
};
function dis_fc(){
    bo_no(third_nav);
    bo_no(college_club);
    bo_no(stu_club);
    bo_no(redrock_club);
    bo_no(great_vedio);
    bo_no(great_stu);
    bo_no(great_tech);
};
function play_fc(){
    if (sub_nav_g[0].className == "clicked") {
            third_nav.style.display = "block";
            college_club.style.display = "block";
            dis_nav(t_n_c,"great_unclick");
            t_n_c[0].className = "great_click";
        } ;
    if (sub_nav_g[1].className == "clicked") {
            great_vedio.style.display = "block";
        };
    if (sub_nav_g[2].className == "clicked") {
            great_stu.style.display = "block";
        };
    if (sub_nav_g[3].className == "clicked") {
            great_tech.style.display = "block";
        };
}
function dis_club(){
    bo_no(college_club);
    bo_no(stu_club);
    bo_no(redrock_club);
}
function play_club(){
    if (t_n_c[0].className == "great_click") {
            college_club.style.display = "block";
        };
    if (t_n_c[1].className == "great_click") {
            stu_club.style.display = "block";
        };
    if (t_n_c[2].className == "great_click") {
            redrock_club.style.display = "block";
        };
}
function dis_cl(){
    bo_no(tuanwei);
    bo_no(stu_union);
    bo_no(sci_union);
    bo_no(club_union);
    bo_no(teen_volum);
    bo_no(stu_art);
};
function play_cl(){
    if (left_side[0].className == "col_club_class_click") {
            tuanwei.style.display = "block";
        };
    if (left_side[1].className == "col_club_class_click") {
            stu_union.style.display = "block";
        };
    if (left_side[2].className == "col_club_class_click") {
            sci_union.style.display = "block";
        };
    if (left_side[3].className == "col_club_class_click") {
            club_union.style.display = "block";
        }
    if (left_side[4].className == "col_club_class_click") {
            teen_volum.style.display = "block";
        };
    if (left_side[5].className == "col_club_class_click") {
            stu_art.style.display = "block";
        };
}
for (var i = sub_nav_g.length - 1; i >= 0; i--) {
    sub_nav_g[i].addEventListener('click', function(){
        dis_nav(sub_nav_g,"unclick");
        dis_fc();
        this.className = "clicked";
        play_fc();
    })
};
for (var i = t_n_c.length - 1; i >= 0; i--) {
    t_n_c[i].addEventListener('click',function(){
        dis_nav(t_n_c,"great_unclick");
        dis_club();
        this.className = "great_click";
        play_club();
    })
}
for (var i = left_side.length - 1; i >= 0; i--) {
    left_side[i].addEventListener('click',function(){
        dis_nav(left_side,"col_club_class");
        dis_cl();
        this.className = "col_club_class_click";
        play_cl();
    })
}
