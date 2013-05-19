function adjust(){
    var pics =  document.getElementsByTagName("div");
    var cnt = 10;
    for(var i = 1;i < cnt;i ++){
        var p = pics[i];
        var img = p.getElementsByTagName("img")[0];
        img.width = p.offsetWidth-30;
        p.style["height"] = img.offsetHeight + "px";
    }
}

document.onreadystatechange= function() {
	var p = 1;
    if(document.readyState=="complete")
    {
		var load = document.getElementById("loading");
		var timer = setInterval(function(){
			if(p > 0){
			load.style["opacity"] = p;
			if(load.style.filter){
				load.style.filter="alpha(opacity="+(p*100)+")";		
			}
			p -= 0.1;
			}else {
				clearInterval(timer);
				load.style["display"] = "none";
			}
		},100);
	}
}


window.onload = function(){
    adjust();
	
}
