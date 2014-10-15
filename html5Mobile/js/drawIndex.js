/**
 * Created by zcp2123 on 2014/10/14.
 */
var c=document.getElementById("index_edit");
var cvs=document.getElementById("cvs");
var head = document.getElementsByTagName("header");
c.width=cvs.clientWidth;
c.height=document.documentElement.clientHeight-head[0].clientHeight*2-5;
var cxt=c.getContext("2d");
cxt.save();

cxt.drawCircle(c.width/2,60,50,5,"#DCFEFD","#9AE8F2");
cxt.font="bold 20px Arial";
cxt.textAlign="center";
cxt.fillStyle="#5F5F5F";
cxt.fillText("编 辑",c.width/2,65);

cxt.strokeStyle="#B3E9F5";
cxt.beginPath();
var len = 50;//横线的长度
var h = 145;//第一条线的高度
var rectHeight=c.height/12;//矩形的高度
var rectWidth=c.width/2-len-25;//矩形的宽度
var space1=(c.height-110)/30;//相邻的不同方向（左右）的线的垂直距离
var space2 = space1*4;//相邻的同一方向的线的垂直距离
cxt.moveTo(c.width/2,110);
cxt.lineTo(c.width/2,c.height);

for(var i=0; i<4; i++){
    cxt.moveTo(c.width/2,h+space1+space2*i);
    cxt.lineTo(c.width/2-len,h+space1+space2*i);
}
for(var i=0; i<5; i++){
    cxt.moveTo(c.width/2,h+space2*i);
    cxt.lineTo(c.width/2+len,h+space2*i);
}
cxt.closePath();
cxt.stroke();
var arr1=[{name:"高血压",date:"05-07"}, {name:"心脏病",date:"04-07"}, {name:"感冒",date:"03-07"}, {name:"胃病",date:"02-07"}];
for(i=0; i<4; i++){
    cxt.drawRect(c.width/2-len-rectWidth,h+space1+space2*i-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2",arr1[i].name,"20px Arial","#31B7DA");
    cxt.font="bold 15px Arial";
    cxt.textAlign="right";
    cxt.fillStyle="#8D8D8D";
    cxt.fillText(arr1[i].date,c.width/2-5,h+space1+space2*i-5);
}
var arr2=[{name:"PIC手术",date:"06-07"}, {name:"检查4",date:"07-07"}, {name:"检查3",date:"08-07"}, {name:"检查2",date:"02-01"}, {name:"检查1",date:"01-01"}];
for(var i=0; i<5; i++){
    cxt.drawRect(c.width/2+len,h+space2*i-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2",arr2[i].name,"20px Arial","#31B7DA");
    cxt.font="bold 15px Arial";
    cxt.textAlign="left";
    cxt.fillStyle="#8D8D8D";
    cxt.fillText(arr2[i].date,c.width/2+5,h+space2*i-5);
}
cxt.drawCircle(c.width/2+len+rectWidth,h-10-rectHeight/2,15,2,"#DCFEFD","#F1A7A6");
cxt.font="bold 20px Arial";
cxt.textAlign="center";
cxt.fillStyle="#F5F1F0";
cxt.fillText("3",c.width/2+len+rectWidth,h-3-rectHeight/2);

var img=new Image();
img.src='img/index_intro.png';
img.onload=function()
{
    cxt.drawImage(img,c.width/2-len-rectWidth+5,h-rectHeight*3/2,rectWidth,rectHeight);
    cxt.font="bold 15px Arial";
    cxt.textAlign="center";
    cxt.fillStyle="#008ACB";
    cxt.fillText("循症",c.width/2-len-rectWidth*2/3,h-rectHeight);

    cxt.font="bold 15px Arial";
    cxt.textAlign="center";
    cxt.fillStyle="#FFFDFF";
    cxt.fillText("查看",c.width/2-len-rectWidth/5,h-rectHeight);
}

//    cxt.moveTo(c.width/2,h);
//    cxt.lineTo(c.width/2+len,h);
//
//    cxt.moveTo(c.width/2,h+space1);
//    cxt.lineTo(c.width/2-len,h+space1);
//
//    cxt.moveTo(c.width/2,h+space1+space2);
//    cxt.lineTo(c.width/2-len,h+space1+space2);
//
//    cxt.moveTo(c.width/2,h+space1*2+space2);
//    cxt.lineTo(c.width/2+len,h+space1*2+space2);
//
//    cxt.moveTo(c.width/2,h+space1*2+space2*2);
//    cxt.lineTo(c.width/2-len,h+space1*2+space2*2);
//
//    cxt.moveTo(c.width/2,h+space1*3+space2*2);
//    cxt.lineTo(c.width/2+len,h+space1*3+space2*2);
//
//    cxt.moveTo(c.width/2,h+space1*3+space2*3);
//    cxt.lineTo(c.width/2-len,h+space1*3+space2*3);
//
//    cxt.moveTo(c.width/2,h+space1*4+space2*3);
//    cxt.lineTo(c.width/2+len,h+space1*4+space2*3);
//
//    cxt.moveTo(c.width/2,h+space1*4+space2*4);
//    cxt.lineTo(c.width/2+len,h+space1*4+space2*4);
//    cxt.closePath();
//    cxt.stroke();
//
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="left";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("06-07",c.width/2+5,h-5);
//
//    cxt.drawRect(c.width/2+len,h-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","PIC手术","20px Arial","#31B7DA");
//
//    cxt.drawCircle(c.width/2+len+rectWidth,h-10-rectHeight/2,15,2,"#DCFEFD","#F1A7A6");
//    cxt.font="bold 20px Arial";
//    cxt.textAlign="center";
//    cxt.fillStyle="#F5F1F0";
//    cxt.fillText("3",c.width/2+len+rectWidth,h-3-rectHeight/2);
//
//    cxt.drawRect(c.width/2-len-rectWidth,h+space1-rectHeight/2,rectWidth,rectHeight,6,"#31B7DA","高血压","20px Arial","#FCFCFC");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="right";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("05-07",c.width/2-5,h+space1-5);
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="right";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("2014",c.width/2-5,h+space1+15);
//
//    cxt.drawRect(c.width/2-len-rectWidth,h+space1+space2-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","心脏病","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="right";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("04-07",c.width/2-5,h+space1+space2-5);
//
//    cxt.drawRect(c.width/2+len,h+space1*2+space2-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","检查4","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="left";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("07-07",c.width/2+5,h+space1*2+space2-5);
//
//    cxt.drawRect(c.width/2-len-rectWidth,h+space1*2+space2*2-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","感冒","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="right";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("03-07",c.width/2-5,h+space1*2+space2*2-5);
//
//    cxt.drawRect(c.width/2+len,h+space1*3+space2*2-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","检查3","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="left";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("08-07",c.width/2+5,h+space1*3+space2*2-5);
//
//    cxt.drawRect(c.width/2-len-rectWidth,h+space1*3+space2*3-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","胃病","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="right";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("02-07",c.width/2-5,h+space1*3+space2*3-5);
//
//    cxt.drawRect(c.width/2+len,h+space1*4+space2*3-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","检查2","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="left";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("02-01",c.width/2+5,h+space1*4+space2*3-5);
//
//    cxt.drawRect(c.width/2+len,h+space1*4+space2*4-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2","检查1","20px Arial","#31B7DA");
//    cxt.font="bold 15px Arial";
//    cxt.textAlign="left";
//    cxt.fillStyle="#8D8D8D";
//    cxt.fillText("01-01",c.width/2+5,h+space1*4+space2*4-5);
//
//    var img=new Image();
//    img.src='img/index_intro.png';
//    img.onload=function()
//    {
//        cxt.drawImage(img,c.width/2-len-rectWidth+5,h-rectHeight*3/2,rectWidth,rectHeight);
//        cxt.font="bold 15px Arial";
//        cxt.textAlign="center";
//        cxt.fillStyle="#008ACB";
//        cxt.fillText("循症",c.width/2-len-rectWidth*2/3,h-rectHeight);
//
//        cxt.font="bold 15px Arial";
//        cxt.textAlign="center";
//        cxt.fillStyle="#FFFDFF";
//        cxt.fillText("查看",c.width/2-len-rectWidth/5,h-rectHeight);
//    }

cxt.restore();

var pX,pY;//canvas的touchstart事件被触发的位置
c.addEventListener("touchstart", function(event){
    var bbox =this.getBoundingClientRect();
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
        pX=touch.pageX;
        pY=touch.pageY;
        var x=pX-bbox.left*(this.width/bbox.width);
        var y=pY-bbox.top*(this.height/bbox.height);
        for(var i=0; i<4; i++){
            if(x>=c.width/2-len-rectWidth && y>=h+space1+space2*i-rectHeight/2 && x<=c.width/2-len && y<=h+space1+space2*i+rectHeight/2){
                for(var j=0; j<4; j++) {
                    cxt.clearRect(c.width / 2 - len - rectWidth, h + space1 + space2 * j - rectHeight / 2, rectWidth, rectHeight);
                    cxt.drawRect(c.width / 2 - len - rectWidth, h + space1 + space2 * j - rectHeight / 2, rectWidth, rectHeight, 6, "#9BE8F2", arr1[j].name, "20px Arial", "#31B7DA");
                }
                cxt.drawRect(c.width/2-len-rectWidth,h+space1+space2*i-rectHeight/2,rectWidth,rectHeight,6,"#31B7DA",arr1[i].name,"20px Arial","#FCFCFE");
            }
        }
    }
},false);

c.addEventListener("touchend", function(event){
    var bbox =this.getBoundingClientRect();
    // 把元素放在手指所在的位置
    var x=pX-bbox.left*(this.width/bbox.width);
    var y=pY-bbox.top*(this.height/bbox.height);
    for(var i=0; i<4; i++){
        if(x>=c.width/2-len-rectWidth && y>=h+space1+space2*i-rectHeight/2 && x<=c.width/2-len && y<=h+space1+space2*i+rectHeight/2){
            cxt.clearRect(c.width/2-len-rectWidth,h+space1+space2*i-rectHeight/2,rectWidth,rectHeight);
            cxt.drawRect(c.width/2-len-rectWidth,h+space1+space2*i-rectHeight/2,rectWidth,rectHeight,6,"#9BE8F2",arr1[i].name,"20px Arial","#31B7DA");
        }
    }

},false);

var index_set=document.getElementById("index_set");
var sideX;//index_set的touchstart事件被触发的位置
var htmlLis1 = function(event){
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
        sideX=touch.pageX;
    }
};
var htmlLis2 = function(){
    if (sideX > document.documentElement.clientWidth*3/4) {
        document.getElementById("index_map").style.display = "none";
        document.getElementById("index_side").style.display = "none";
    }
};
index_set.addEventListener("touchend",function(){
    document.getElementById("index_map").style.display = "block";
    document.getElementById("index_side").style.display = "block";
},false);
document.getElementById("index_map").addEventListener("touchstart",htmlLis1,false);
document.getElementById("index_map").addEventListener("touchend",htmlLis2,false);

