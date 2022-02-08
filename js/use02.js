console.log("use02로드");

var food01 = document.querySelector(".food01");
var food02 = document.querySelector(".food02");
var food03 = document.querySelector(".food03");
var food_inform = document.querySelector(".food_inform");
var food_title_h2 = document.querySelector(".food_title > h2 > img");
var food_title_h3 = document.querySelector(".food_title > h3 > img");
var coral_back = document.querySelector(".coral-back");
var foodNow = 0;

function onClickFood02(e){
    food01.style.transform = "scale(0.55) translateX(-325px) translateY(-170px)";
    food01.style.opacity = "0.65";
    food02.style.transform = "scale(1) translateX(0) translateY(0)";
    food02.style.opacity = "1";
    food03.style.transform = "scale(0.55) translateX(325px) translateY(-170px)";
    food_inform.style.background = "url('./img/sec04/article03/use02/id01/layout_title02.png')"
    food_title_h2.src = "./img/sec04/article03/use02/id01/title02.png";
    food_title_h3.src = "./img/sec04/article03/use02/id01/title02_sub.png";
    coral_back.style.borderRadius = "0";
    foodNow = 1;

    us04.style.opacity = "0";
    setTimeout(function(e){
        us04.style.display = "none";
        us05.style.display = "flex";
    },700);
    setTimeout(function(e){
        us05.style.opacity = "1";
    },900);
    nowus = 4;

    // console.log("음식02클릭");
}
function onClickFood01(e){
    food02.style.transform = "scale(0.55) translateX(325px) translateY(-170px)";
    food02.style.opacity = "0.65";
    food01.style.transform = "scale(1) translateX(0) translateY(0)";
    food01.style.opacity = "1";
    food03.style.transform = "scale(0.55) translateX(650px) translateY(-170px)";
    food_inform.style.background = "url('./img/sec04/article03/use02/id01/layout_title01.png')"
    food_title_h2.src = "./img/sec04/article03/use02/id01/title01.png";
    food_title_h3.src = "./img/sec04/article03/use02/id01/title01_sub.png";
    coral_back.style.borderRadius = "0 0 0 89px";
    foodNow = 0;

    us04.style.display="flex";
    setTimeout(function(e){
        us04.style.opacity="1";
        us05.style.opacity = "0";
    },700);
    setTimeout(function(e){
        us05.style.display = "none";
    },900);
    // console.log("음식02클릭");
    nowus = 3;
}
food01.addEventListener("click", onClickFood01);
food02.addEventListener("click", onClickFood02);



/* id02 부분*/

var scroll_status = document.querySelector(".scroll_status");
var scroll_status_img = document.querySelector(".scroll_status > img");

var smenu_area = document.querySelector(".smenu_area");
var now_select = document.querySelector(".now-select");
var now_select01 = document.querySelector(".now-select01");

var scroll_down = document.querySelector(".scroll-down");
var scroll_verti = document.querySelector(".scroll-verti");

function onClickScroll_status(e){
    e.preventDefault();
    if(foodNow == 1){
        smenu_area.style.transform = "translateY(-564px)";
        now_select.style.opacity = "0";
        now_select01.style.opacity = "1";
        scroll_down.style.opacity = "0";
        scroll_verti.style.opacity = "1";
    }
    nowus = 5;    
}
scroll_status.addEventListener("click", onClickScroll_status);

/* 메뉴 스크롤 부분 */

var smenu_background = document.querySelector(".smenu-background");
var scroll_moving = document.querySelector(".scroll-moving");
var smenu_scrollbar = document.querySelector(".smenu-scrollbar");
var scrollNow = 0;

function onSmenuScroll(e){    
    if(e.wheelDelta == -120 && scrollNow > -420){
        // console.log("아래스크롤");
        scrollNow -= 30;
        scroll_moving.style.top = scrollNow + "px";
        smenu_scrollbar.style.transform = "translateY(" + -scrollNow/5 + "px)";
        // console.log(scrollNow);

        if(nowus == 6){
            us07.style.opacity = "0";
            setTimeout(function(e){
                us07.style.display = "none";
                us08.style.display = "flex";
            },700);
            setTimeout(function(e){
                us08.style.opacity = "1";
            },900);
            nowus = 7;
        }

    }
    else if(e.wheelDelta == 120 && scrollNow < 0){
        // console.log("위스크롤");
        scrollNow += 30;
        scroll_moving.style.top = scrollNow + "px";
        smenu_scrollbar.style.transform = "translateY(" + -scrollNow/5 + "px)";
        // console.log(scrollNow);
    }
    
}
smenu_background.addEventListener("mousewheel", onSmenuScroll);

/*메뉴 선택부분 */

var sfs = document.getElementsByClassName("sfnow");
sfs = Array.prototype.slice.call(sfs);
var sfnowH2 = document.querySelectorAll(".sfnow > h2");
sfnowH2 = Array.prototype.slice.call(sfnowH2);
var sfbtn = document.querySelectorAll(".sf-btn");
sfbtn = Array.prototype.slice.call(sfbtn);
for(var i = 0; i < sfs.length; i++){
    sfs[i].addEventListener("click", onClickSfs);
}
var toggle = false;

/*음식변수*/
var want_sec = document.querySelector(".want_sec");
var want_food = document.querySelectorAll(".want_food");
var ranT = 0;
want_food = Array.prototype.slice.call(want_food);
for(var i=0;i<want_food.length;i++){
    want_food[i].style.display="none";
}
var step_food = document.querySelectorAll(".step_food");
step_food = Array.prototype.slice.call(step_food);
for(var i=0;i<step_food.length;i++){
    step_food[i].style.display="none";
}
var next = 0;
function onClickSfs(e){
    var STarget = e.currentTarget;
    var index = sfs.indexOf(STarget);
        if(!sfs[index].classList.contains("check")){
            sfs[index].classList.add("check");
            sfs[index].classList.remove("sf");
            next++;
            sfnowH2[index].style.filter = "brightness(1500%)";
            sfbtn[index].style.filter = "brightness(1500%)";
            want_food[index].style.display="inline-block";
            want_food[index].classList.add("selec");
            step_food[index].style.display="inline-block";

            if(nowus == 5){
                us06.style.opacity = "0";
                setTimeout(function(e){
                    us06.style.display = "none";
                    us07.style.display = "flex";
                },600);
                setTimeout(function(e){
                    us07.style.opacity = "1";
                },700);
                nowus = 6;
            }
        }else if(sfs[index].classList.contains("check")){
            sfs[index].classList.remove("check");
            sfs[index].classList.add("sf");
            next--;
            sfnowH2[index].style.filter = "brightness(100%)";
            sfbtn[index].style.filter = "brightness(100%)";
            want_food[index].style.display="none";
            want_food[index].classList.remove("selec");
            step_food[index].style.display="none";
        }

}