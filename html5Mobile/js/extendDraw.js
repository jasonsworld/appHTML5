/**
 * Created by zcp2123 on 2014/10/14.
 */
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    //if (w < 2 * r) r = w / 2;
    //if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y, x+w, y+h, r);
    this.arcTo(x+w, y+h, x, y+h, r);
    this.arcTo(x, y+h, x, y, r);
    this.arcTo(x, y, x+w, y, r);
    // this.arcTo(x+r, y);
    this.closePath();
    return this;
}
CanvasRenderingContext2D.prototype.drawRect = function(x, y, w, h, r, color, text, font, fontColor){
    this.fillStyle=color;
    this.roundRect(x,y,w,h,r).fill();
    this.font=font;
    this.textAlign="center";
    this.fillStyle=fontColor;
    this.fillText(text,x+w/2,y+h/2+5);
}
CanvasRenderingContext2D.prototype.drawCircle = function(x,y,r,thickness,color1,color2){
    this.fillStyle=color1;
    this.beginPath();
    this.arc(x,y,r,0,Math.PI*2,true);
    this.closePath();
    this.fill();

    this.fillStyle=color2;
    this.beginPath();
    this.arc(x,y,r-thickness,0,Math.PI*2,true);
    this.closePath();
    this.fill();
}
