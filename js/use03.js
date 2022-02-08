console.log("use03로드");

var day = document.querySelectorAll(".day_row > .sel");
day = Array.prototype.slice.call(day);
var day_img = document.querySelectorAll(".day_row > .sel > img");
var day_img = Array.prototype.slice.call(day_img);
var slider = document.querySelector(".slider");
var daybtn_left = document.querySelector(".day-btn-left");
var day_progress = document.querySelector(".now-ver");
var day_btn = document.querySelector(".day-btn-text");
var day_btn_change = document.querySelector(".change-day-btn");

var boxCount = 0;
var countday = 0;
for(var i=0;i < day.length; i++){
    day[i].addEventListener("click", onClickDay);
}
var percent = 0;
function onClickDay(e){
    e.preventDefault();
    boxCount = parseInt(slider.value, 10);
    var dayTarget = e.currentTarget;
    var index = day.indexOf(dayTarget);
    
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
        if(day[index].classList.contains("can") && boxCount > countday){
            day[index].classList.add("not");
            day[index].classList.remove("can");
            day_img[index].style.filter = "brightness(1500%)";
            countday++;
            console.log(countday);
            if(countday < 10){
                daybtn_left.src = "./img/sec04/article03/use03/count/dc_0" + countday + ".png";
            }else if(countday >= 10){
                console.log("10넘어감");
                daybtn_left.src = "./img/sec04/article03/use03/count/dc_" + countday + ".png";
            }
            percent = (countday / boxCount)*100;
            day_progress.style.width = percent + "%";
            if(percent == 100){
                console.log("100퍼센트");
                day_btn_change.style.opacity = 1;
                day_btn.style.opacity = 0;
                day_progress.style.backgroundColor = "#ff3f83";
                day_progress.style.cursor="pointer";
                nowus = 9;
                if(nowus == 9){
                    us10.style.display = "flex";
                    setTimeout(function(e){
                        us10.style.opacity = "1";
                    },500);
                }
            }
        }else if(day[index].classList.contains("not")){
            day[index].classList.remove("not");
            day[index].classList.add("can");
            day_img[index].style.filter = "brightness(100%)";
            countday--;
            if(countday < 10){
                daybtn_left.src = "./img/sec04/article03/use03/count/dc_0" + countday + ".png";
            }else if(countday >= 10){
                daybtn_left.src = "./img/sec04/article03/use03/count/dc_" + countday + ".png";
                console.log("10넘어감");
            }
            percent = (countday / boxCount)*100;
            day_progress.style.width = percent + "%";
            if(percent !== 100){
                day_btn_change.style.opacity = 0;
                day_btn.style.opacity = 1;
                day_progress.style.backgroundColor = "#9a39de";
                day_progress.style.cursor="auto";
                if(nowus == 9){
                    us10.style.opacity = "0";
                    setTimeout(function(e){
                        us10.style.display = "none";
                    },500);
                }
            }
        }

}

