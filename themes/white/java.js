//   ##############  SIMPLE  BROWSER SNIFFER
if (document.layers) {navigator.family = "nn4"}
if (document.all) {navigator.family = "ie4"}
if (window.navigator.userAgent.toLowerCase().match("gecko")) {navigator.family = "gecko"}

overdiv="0";
//  #########  CREATES POP UP BOXES 
function popLayer(a){
//if(!descarray[a]){descarray[a]="<font color=red>This popup (#"+a+") isn't setup correctly - needs description</font>";}
if (navigator.family == "gecko") {pad="0"; bord="1 bordercolor=black";}
else {pad="1"; bord="0";}
desc = 	  "<table cellspacing=0 cellpadding="+pad+" border="+bord+"  bgcolor=000000><tr><td>\n"
	+"<table cellspacing=0 cellpadding=3 border=0 width=100%><tr><td bgcolor=ffffdd><center><font size=-1>\n"
	+a
	+"\n</td></tr></table>\n"
	+"</td></tr></table>";
if(navigator.family =="nn4") {
	document.object1.document.write(desc);
	document.object1.document.close();
	document.object1.left=x+15;
	document.object1.top=y-5;
	}
else if(navigator.family =="ie4"){
	object1.innerHTML=desc;
	object1.style.pixelLeft=x+15;
	object1.style.pixelTop=y-5;
	}
else if(navigator.family =="gecko"){
	document.getElementById("object1").innerHTML=desc;
	document.getElementById("object1").style.left=x+15;
	document.getElementById("object1").style.top=y-5;
	}
}
function hideLayer(){
if (overdiv == "0") {
	if(navigator.family =="nn4") {eval(document.object1.top="-500");}
	else if(navigator.family =="ie4"){object1.innerHTML="";}
	else if(navigator.family =="gecko") {document.getElementById("object1").style.top="-500";}
	}
}

//  ########  TRACKS MOUSE POSITION FOR POPUP PLACEMENT
var isNav = (navigator.appName.indexOf("Netscape") !=-1);
function handlerMM(e){
x = (isNav) ? e.pageX : event.clientX + document.body.scrollLeft;
y = (isNav) ? e.pageY : event.clientY + document.body.scrollTop;
}
if (isNav){document.captureEvents(Event.MOUSEMOVE);}
document.onmousemove = handlerMM;
