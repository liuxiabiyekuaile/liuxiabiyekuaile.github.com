function enlargeFont(){
    var timer;
    var t = $("#main span.title");
    var fnt = 10;
    var speed = 6;
    timer = setInterval(function(){
        $(t).css("font-size",fnt + "px");
        fnt += speed;
        if(fnt <= 80+speed&&fnt >= 80 - speed) clearInterval(timer);
    },30);
}
var timer = [null,null,null];
function up(obj1,dir,t){
    var obj= obj1.getElementsByTagName("ul")[0];
    var speed = 10;
    var h = obj.getElementsByTagName("li")[0].offsetHeight;
    speed *= dir;
    clearInterval(timer[t]);
    timer[t] = setInterval(function(){
        if((dir-1)*h/2 == obj.offsetTop){
            clearInterval(timer[t]);
        }
        else {
            obj.style["top"] = obj.offsetTop + speed + "px";
        }
     },30);

}
function goUp(){
    var p = document.getElementById("nav");
    var oSlide = p.getElementsByTagName("div");
    oSlide[0].onmouseover = function(){up(oSlide[0],-1,0);}
    oSlide[0].onmouseout = function(){up(oSlide[0],1,0);}
    oSlide[1].onmouseover = function(){up(oSlide[1],-1,1);}
    oSlide[1].onmouseout = function(){up(oSlide[1],1,1);}
    oSlide[2].onmouseover = function(){up(oSlide[2],-1,2);}
    oSlide[2].onmouseout = function(){up(oSlide[2],1,2);}

}
window.onload = function(){
    enlargeFont();
    goUp();
}
