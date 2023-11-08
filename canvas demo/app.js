/*畫布1*/
const c = document.getElementById("myCanvas");
//綁定2d物件，才可以繪製畫布
const ctx = c.getContext("2d");

//繪製方形(Rect)
function drawSquare() {
  //設定方形顏色
  ctx.fillStyle = "rgba(0,0,155,0.3)";
  // x座標, y座標, 寬度, 高度
  ctx.fillRect(10, 10, 100, 50); //填滿
  ctx.strokeRect(10, 70, 100, 50); //邊界
  ctx.clearRect(15, 15, 50, 25); //清除
}

drawSquare();

/*畫布2*/
const c2 = document.getElementById("myCanvas2");
const ctx2 = c2.getContext("2d");

//繪製三角形(path)
function drawTriangle() {
  ctx2.beginPath(); //創建一個新路徑
  ctx2.moveTo(50, 50); //將畫筆移動到指定座標
  ctx2.lineTo(200, 50); //將畫筆從當前座標到(200,50)指定座標
  ctx2.lineTo(200, 150);
  ctx2.closePath(); //關閉路徑，繪製一個從當前位置到起始點的重合，如果當前路徑跟起始點重合，則什麼都不做

  //設定邊框顏色
  ctx2.strokeStyle = "red";
  ctx2.stroke(); //繪製路徑
}

drawTriangle();

/*畫布3*/
const c3 = document.getElementById("myCanvas3");
const ctx3 = c3.getContext("2d");

//繪製弧形的方法1(arc)
function drawCircle() {
  ctx3.beginPath();
  //arc參數(x,y,r,startAngle,endAngle,anticlockwise)
  /*x,y是圓心座標，r表示半徑，startAngle~endAngle是初始弧度~結束弧度
  anticlockwise是一個布林值false是順時針(預設是false)*/
  ctx3.arc(50, 25, 25, 0, Math.PI / 2, false);
  ctx3.stroke();
}

drawCircle();

//繪製弧形的方法2(arcTo)
function drawCircle2() {
  ctx3.beginPath();
  //arcTo(x1,y1,x2,y2,r)
  //根據給定的控制點畫一段圓弧，再以直線連接兩控制點
  ctx3.arcTo(75, 75, 100, 100, 25);
  ctx3.lineTo(100, 100);
  ctx3.stroke();
}

drawCircle2();
