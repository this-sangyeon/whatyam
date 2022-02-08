console.log("자바스크립트 로드");
/* smenu 백그라운드 윈도우 스크롤 방지 */
var verScroll = document.querySelector(".vertical-scroll");

var smenu_background = document.querySelector(".smenu-background");

function smenuOver(e){
    // console.log("smenu over");
    window.addEventListener("wheel", winScroll, { passive: false });
}
function smenuOut(e){
    // console.log("smenu out");
    window.removeEventListener("wheel", winScroll, { passive: true });
}
function winScroll(e){
    
    e.preventDefault();
    
    // event.stopPropagation();
}
smenu_background.addEventListener("mouseover", smenuOver);
smenu_background.addEventListener("mouseout", smenuOut);



/*좌우 스크롤 변형 영역 */

/* step 01 */
var box_count_btn = document.querySelector(".box_count_btn > div");
var app_scroll = document.querySelector(".vertical-scroll");
var step = document.querySelectorAll(".step");
step = Array.prototype.slice.call(step);
for(var i=0; i < step.length;i++){
    step[i].style.opacity = 0;
    step[0].style.opacity = 1;
}

var interOp = document.querySelectorAll(".inter");
interOp = Array.prototype.slice.call(interOp);
for(var i=0;i < interOp.length;i++){
    interOp[0].style.opacity=1;
    interOp[1].style.opacity=0.5;
    interOp[2].style.opacity=0.5;
}

var scrollLeft = 0;
var limit = 0;

function onUse01BtnUp(e){
    var pos = 0;
    console.log("마우스땜");
    if(limit == 0){
        var sclvar = setInterval(scl, 1);
    

        function scl(){
            if (pos == 30){
                clearInterval(sclvar);
            } else {
                
                scrollLeft = scrollLeft -1;
                pos++;
                
            }
            // console.log("아래스크롤");
            app_scroll.style.transform = "translateX(" + scrollLeft + "%)";
        }
        limit++;
        for(var i = 0; i < interOp.length; i++){
            interOp[i].style.opacity = 0;
            interOp[i].style.transform = "scale(0)"
            interOp[limit].style.opacity = 1;
            interOp[limit].style.transform = "scale(1)"
            step[i].style.opacity = 0;
            step[limit].style.opacity = 1;
        }
        nowus = 3;
    }
}

box_count_btn.addEventListener("mouseup", onUse01BtnUp);

/* step 02 */

var btnChooseDone = document.querySelector(".btn-choosedone");

function onUse02BtnUp(e){
    var pos = 0;
    console.log("마우스땜");
    nowus = 8;
    if(limit == 1){
        var sclvar = setInterval(scl, 1);
        function scl(){
            if (pos == 30){
                clearInterval(sclvar);
            } else {
                
                scrollLeft = scrollLeft -1;
                pos++;
                
            }
            //console.log("아래스크롤");
            app_scroll.style.transform = "translateX(" + scrollLeft + "%)";
            console.log(scrollLeft);
        }
        limit++;
        for(var i = 0; i < interOp.length; i++){
            interOp[i].style.opacity = 0;
            interOp[i].style.transform = "scale(0)"
            interOp[limit].style.opacity = 1;
            interOp[limit].style.transform = "scale(1)"
            step[i].style.opacity = 0;
            step[limit].style.opacity = 1;
        }
    }
    
}

btnChooseDone.addEventListener("mouseup", onUse02BtnUp);

var btndayDone = document.querySelector(".now-ver");
var want_div = document.querySelector(".want_div");
want_div.style.opacity=0;
want_div.style.display="none";
var want_food = document.querySelectorAll(".want_food");
var box_top = document.querySelector(".box_top");
var box_shadow = document.querySelector(".box_shadow");
var box_box = document.querySelector(".box_box");
var what_h3 = document.querySelector(".want_container > h3");
var what_p = document.querySelector(".want_container > p");
var ranN = 0;
function onUse03BtnUp(e){
    var pos = 0;
    console.log("버튼눌림");
    if(percent == 100){
        console.log("100%버튼눌림");
        if(limit == 2){
            var sclvar = setInterval(scl, 1);
            function scl(){
                if (pos == 100){
                    clearInterval(sclvar);
                } else {
                    
                    scrollLeft = scrollLeft -1;
                    pos++;
                    
                }
                //console.log("아래스크롤");
                app_scroll.style.transform = "translateX(" + scrollLeft + "%)";
                // console.log(scrollLeft);
            }
            limit++;
            for(var i = 0; i < interOp.length; i++){
                interOp[i].style.opacity = 0;
                interOp[i].style.transform = "scale(0)"
                step[i].style.opacity = 0;
            }
            setTimeout(function(e){
                want_div.style.display="flex";
            },700);
            setTimeout(function(e){
                want_div.style.opacity=1;
            },900);
            var ran = setInterval(ranS, 200);
            function ranS(){
                ranN = Math.floor(Math.random() * 10);
                for(var i=0;i < want_food.length;i++){
                    if(want_food[i].classList.contains("selec")){
                        want_food[i].style.zIndex =1;
                    }
                    
                }
                want_food[ranN].style.zIndex=2000;
                // console.log(ranN);
            }
            setTimeout(function(e){
                clearInterval(ran);
                for(var i=0;i<want_food.length;i++){
                    // want_food[i].style.opacity=0;
                    want_food[ranN].style.opacity=1;
                    want_food[ranN].style.zIndex=10;
                }
            },5000);
            setTimeout(function(e){
                
                // want_food[ranN].style.transition="all 1s ease";
                for(var i=0;i<want_food.length;i++){
                    want_food[i].style.top="250px";
                }
                want_food[ranN].style.opacity=1;
                what_h3.style.opacity=0;            
            },5800)
            setTimeout(function(e){
                what_p.style.opacity=1;
                // want_food[ranN].style.opacity=0;
                console.log("타이머제거");
                box_top.style.opacity=1;
                box_top.style.transform = "translateY(0)";
            },6700);
        }    
    }
}


btndayDone.addEventListener("mouseup", onUse03BtnUp);



var us01 = document.querySelector(".us01");
var us02 = document.querySelector(".us02");
var us03 = document.querySelector(".us03");
var us04 = document.querySelector(".us04");
var us05 = document.querySelector(".us05");
var us06 = document.querySelector(".us06");
var us07 = document.querySelector(".us07");
var us08 = document.querySelector(".us08");
var us09 = document.querySelector(".us09");
var us10 = document.querySelector(".us10");

var nowus = 0;

us01.addEventListener("mouseenter", onMouseUs01C);
us02.addEventListener("mouseenter", onMouseUs02C);
us03.addEventListener("mouseenter", onMouseUs03C);
us04.addEventListener("mouseenter", onMouseUs04C);
us05.addEventListener("mouseenter", onMouseUs05C);
us06.addEventListener("mouseenter", onMouseUs06C);
us07.addEventListener("mouseenter", onMouseUs07C);
us08.addEventListener("mouseenter", onMouseUs08C);
us09.addEventListener("mouseenter", onMouseUs09C);
us10.addEventListener("mouseenter", onMouseUs10C);

function onMouseUs01C(e){
    if(nowus == 0){
        console.log("us01mouseon");
        us01.style.opacity = "0";
        setTimeout(function(e){
            us01.style.display = "none";
            us02.style.display = "flex";
        },700);
        setTimeout(function(e){
            us02.style.opacity = "1";
        },900);
        nowus = 1;
    }
}

function onMouseUs02C(e){
    if(nowus == 1){
        us02.style.opacity = "0";
        setTimeout(function(e){
            us02.style.display = "none";
            us03.style.display = "flex";
        },700);
        setTimeout(function(e){
            us03.style.opacity = "1";
        },900);
        nowus = 2;
    }
}

function onMouseUs03C(e){
    if(nowus == 2){
        us03.style.opacity = "0";
        setTimeout(function(e){
            us03.style.display = "none";
            // us04.style.display = "flex";
        },700);
        setTimeout(function(e){
            // us04.style.opacity = "1";
        },900);
        nowus = 3;
    }
}

function onMouseUs04C(e){
    if(nowus == 3){
        us04.style.opacity = "0";
        setTimeout(function(e){
            us04.style.display = "none";
            // us05.style.display = "flex";
        },700);
        // setTimeout(function(e){
        //     // us05.style.opacity = "1";
        // },900);
        nowus = 4;
    }
}

function onMouseUs05C(e){
    if(nowus == 4){
        us05.style.opacity = "0";
        setTimeout(function(e){
            us05.style.display = "none";
            us06.style.display = "flex";
        },700);
        setTimeout(function(e){
            us06.style.opacity = "1";
        },900);
        nowus = 5;
    }
}

function onMouseUs06C(e){
    if(nowus == 5){
        us06.style.opacity = "0";
        setTimeout(function(e){
            us06.style.display = "none";
            // us06.style.display = "flex";
        },700);
        // setTimeout(function(e){
        //     // us06.style.opacity = "1";
        // },900);
        nowus = 5;
    }
}
function onMouseUs07C(e){
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

function onMouseUs08C(e){
    if(nowus == 7){
        us08.style.opacity = "0";
        setTimeout(function(e){
            us08.style.display = "none";
            // us06.style.display = "flex";
        },700);
        // setTimeout(function(e){
        //     // us06.style.opacity = "1";
        // },900);
        nowus = 8;
    }
}

function onMouseUs09C(e){
    if(nowus == 8){
        us09.style.opacity = "0";
        setTimeout(function(e){
            us09.style.display = "none";
            // us10.style.display = "flex";
        },700);
        // setTimeout(function(e){
        //     // us06.style.opacity = "1";
        // },900);
        nowus = 9;
    }
}
function onMouseUs10C(e){
    if(nowus == 9){
        us10.style.opacity = "0";
        setTimeout(function(e){
            us10.style.display = "none";
            // us10.style.display = "flex";
        },500);
    }
}