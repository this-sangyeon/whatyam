console.log("use01로드");

var slider = document.querySelector(".slider");
var state_bar = document.querySelector(".state-bar");
var box_el_p = document.querySelector(".box_el > p");
var box_el = document.querySelector(".box_el");
var countbox_p = document.querySelector(".btn-countbox > p");
var daybtn_left = document.querySelector(".day-btn-left");
var daybtn_right = document.querySelector(".day-btn-right");

var boxCount = 0;
var stateP = 0;

slider.addEventListener("mousedown", onMouseDownSlider);
function onMouseDownSlider(e){
    slider.addEventListener("mousemove", onMouseMoveSlider);
    function onMouseMoveSlider(e){
        boxCount = parseInt(slider.value, 10);
        
        // if(boxCount <= 4){
        //     
        //     console.log("4입니다");
        // }else if(boxCount >= 5 && boxCount < 8){
        //     stateP = boxCount * 2.5;            
        // }else if(boxCount >= 8 && boxCount < 11){
        //     stateP = boxCount * 3.6;            
        // }else if(boxCount >= 11 && boxCount < 14){
        //     stateP = boxCount * 4.8;            
        // }else if(boxCount >= 17 && boxCount < 20){
        //     stateP = boxCount * 5.5;            
        // }else if(boxCount >= 20 && boxCount < 23){
        //     stateP = boxCount * 5.6;            
        // }else if(boxCount >= 23 && boxCount < 26){
        //     stateP = boxCount * 5.9;            
        // }else if(boxCount >= 26 && boxCount <= 30){
        //     stateP = boxCount * 6.4;            
        // }
        if(boxCount == 4){
            stateP = boxCount - boxCount;
        }else if(boxCount == 5){
            stateP = boxCount * 2;
        }else if(boxCount == 6){
            stateP = boxCount * 2.5;
        }else if(boxCount == 7){
            stateP = boxCount * 3.3;
        }else if(boxCount == 8){
            stateP = boxCount * 3.7;
        }else if(boxCount == 9){
            stateP = boxCount * 4;
        }else if(boxCount == 10){
            stateP = boxCount * 4.5;
        }else if(boxCount == 11){
            stateP = boxCount * 5;
        }else if(boxCount == 12){
            stateP = boxCount * 5.2;
        }else if(boxCount == 13){
            stateP = boxCount * 5.3;
        }else if(boxCount == 14){
            stateP = boxCount * 5.4;
        }else if(boxCount == 15){
            stateP = boxCount * 5.5;
        }else if(boxCount == 16){
            stateP = boxCount * 5.6;
        }else if(boxCount == 17){
            stateP = boxCount * 5.7;
        }else if(boxCount == 18){
            stateP = boxCount * 5.8;
        }else if(boxCount == 19){
            stateP = boxCount * 5.9;
        }else if(boxCount == 20){
            stateP = boxCount * 6;
        }else if(boxCount == 21){
            stateP = boxCount * 6.05;
        }else if(boxCount == 22){
            stateP = boxCount * 6.1;
        }else if(boxCount == 23){
            stateP = boxCount * 6.15;
        }else if(boxCount == 24){
            stateP = boxCount * 6.2;
        }else if(boxCount == 25){
            stateP = boxCount * 6.25;
        }else if(boxCount == 26){
            stateP = boxCount * 6.28;
        }else if(boxCount == 27){
            stateP = boxCount * 6.31;
        }else if(boxCount == 28){
            stateP = boxCount * 6.34;
        }else if(boxCount == 29){
            stateP = boxCount * 6.37;
        }else if(boxCount == 30){
            stateP = boxCount * 6.4;
        }
        
        if(boxCount >= 4 && boxCount < 10){
            box_el_p.innerText = "0" + boxCount;
            countbox_p.innerText = "0" + boxCount;
            boxnow.src = "./img/sec04/article03/use01/boxcount/box0" + boxCount + ".png";
            daybtn_right.src = "./img/sec04/article03/use03/count/dc_0" + boxCount + ".png";
        }else if(boxCount >= 10 ){
            box_el_p.innerText = boxCount;
            countbox_p.innerText = boxCount;
            boxnow.src = "./img/sec04/article03/use01/boxcount/box" + boxCount + ".png";
            daybtn_right.src = "./img/sec04/article03/use03/count/dc_" + boxCount + ".png";
        }
        state_bar.style.width = stateP + "px";
        box_el.style.left = stateP + 35 + "px";
        
    }
}

var boxnow = document.querySelector(".boxnow");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");

function onClickminus(e){
    e.preventDefault();
    slider.value--;
    boxCount = parseInt(slider.value, 10);
        
    if(boxCount == 4){
        stateP = boxCount - boxCount;
    }else if(boxCount == 5){
        stateP = boxCount * 2;
    }else if(boxCount == 6){
        stateP = boxCount * 2.5;
    }else if(boxCount == 7){
        stateP = boxCount * 3.3;
    }else if(boxCount == 8){
        stateP = boxCount * 3.7;
    }else if(boxCount == 9){
        stateP = boxCount * 4;
    }else if(boxCount == 10){
        stateP = boxCount * 4.5;
    }else if(boxCount == 11){
        stateP = boxCount * 5;
    }else if(boxCount == 12){
        stateP = boxCount * 5.2;
    }else if(boxCount == 13){
        stateP = boxCount * 5.3;
    }else if(boxCount == 14){
        stateP = boxCount * 5.4;
    }else if(boxCount == 15){
        stateP = boxCount * 5.5;
    }else if(boxCount == 16){
        stateP = boxCount * 5.6;
    }else if(boxCount == 17){
        stateP = boxCount * 5.7;
    }else if(boxCount == 18){
        stateP = boxCount * 5.8;
    }else if(boxCount == 19){
        stateP = boxCount * 5.9;
    }else if(boxCount == 20){
        stateP = boxCount * 6;
    }else if(boxCount == 21){
        stateP = boxCount * 6.05;
    }else if(boxCount == 22){
        stateP = boxCount * 6.1;
    }else if(boxCount == 23){
        stateP = boxCount * 6.15;
    }else if(boxCount == 24){
        stateP = boxCount * 6.2;
    }else if(boxCount == 25){
        stateP = boxCount * 6.25;
    }else if(boxCount == 26){
        stateP = boxCount * 6.28;
    }else if(boxCount == 27){
        stateP = boxCount * 6.31;
    }else if(boxCount == 28){
        stateP = boxCount * 6.34;
    }else if(boxCount == 29){
        stateP = boxCount * 6.37;
    }else if(boxCount == 30){
        stateP = boxCount * 6.4;
    }
        
    if(boxCount >= 4 && boxCount < 10){
        box_el_p.innerText = "0" + boxCount;
        countbox_p.innerText = "0" + boxCount;
        boxnow.src = "./img/sec04/article03/use01/boxcount/box0" + boxCount + ".png";
        daybtn_right.src = "./img/sec04/article03/use03/count/dc_0" + boxCount + ".png";
    }else if(boxCount >= 10 ){
        box_el_p.innerText = boxCount;
        countbox_p.innerText = boxCount;
        boxnow.src = "./img/sec04/article03/use01/boxcount/box" + boxCount + ".png";
        daybtn_right.src = "./img/sec04/article03/use03/count/dc_" + boxCount + ".png";
    }
    state_bar.style.width = stateP + "px";
    box_el.style.left = stateP + 35 + "px";
        
}
function onClickplus(e){
    e.preventDefault();
    slider.value++;
    boxCount = parseInt(slider.value, 10);
        
    if(boxCount == 4){
        stateP = boxCount - boxCount;
    }else if(boxCount == 5){
        stateP = boxCount * 2;
    }else if(boxCount == 6){
        stateP = boxCount * 2.5;
    }else if(boxCount == 7){
        stateP = boxCount * 3.3;
    }else if(boxCount == 8){
        stateP = boxCount * 3.7;
    }else if(boxCount == 9){
        stateP = boxCount * 4;
    }else if(boxCount == 10){
        stateP = boxCount * 4.5;
    }else if(boxCount == 11){
        stateP = boxCount * 5;
    }else if(boxCount == 12){
        stateP = boxCount * 5.2;
    }else if(boxCount == 13){
        stateP = boxCount * 5.3;
    }else if(boxCount == 14){
        stateP = boxCount * 5.4;
    }else if(boxCount == 15){
        stateP = boxCount * 5.5;
    }else if(boxCount == 16){
        stateP = boxCount * 5.6;
    }else if(boxCount == 17){
        stateP = boxCount * 5.7;
    }else if(boxCount == 18){
        stateP = boxCount * 5.8;
    }else if(boxCount == 19){
        stateP = boxCount * 5.9;
    }else if(boxCount == 20){
        stateP = boxCount * 6;
    }else if(boxCount == 21){
        stateP = boxCount * 6.05;
    }else if(boxCount == 22){
        stateP = boxCount * 6.1;
    }else if(boxCount == 23){
        stateP = boxCount * 6.15;
    }else if(boxCount == 24){
        stateP = boxCount * 6.2;
    }else if(boxCount == 25){
        stateP = boxCount * 6.25;
    }else if(boxCount == 26){
        stateP = boxCount * 6.28;
    }else if(boxCount == 27){
        stateP = boxCount * 6.31;
    }else if(boxCount == 28){
        stateP = boxCount * 6.34;
    }else if(boxCount == 29){
        stateP = boxCount * 6.37;
    }else if(boxCount == 30){
        stateP = boxCount * 6.4;
    }
        
    if(boxCount >= 4 && boxCount < 10){
        box_el_p.innerText = "0" + boxCount;
        countbox_p.innerText = "0" + boxCount;
        boxnow.src = "./img/sec04/article03/use01/boxcount/box0" + boxCount + ".png";
        daybtn_right.src = "./img/sec04/article03/use03/count/dc_0" + boxCount + ".png";
    }else if(boxCount >= 10 ){
        box_el_p.innerText = boxCount;
        countbox_p.innerText = boxCount;
        boxnow.src = "./img/sec04/article03/use01/boxcount/box" + boxCount + ".png";
        daybtn_right.src = "./img/sec04/article03/use03/count/dc_" + boxCount + ".png";
    }
    state_bar.style.width = stateP + "px";
    box_el.style.left = stateP + 35 + "px";
}

minus.addEventListener("click", onClickminus);
plus.addEventListener("click", onClickplus);

