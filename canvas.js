var mouseEvent="empty";
var lastPositionOfX,lastPositionOfy;
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
color="aliceblue";
widthOfLine=30;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthOfLine=document.getElementById("Ancho").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthOfLine;
    console.log("last position of x and y=");
    console.log("X="+lastPositionOfX+"Y="+lastPositionOfy);
    ctx.moveTo(lastPositionOfX,lastPositionOfy);
    console.log("current position of x and y=");
    console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
lastPositionOfX=current_position_of_mouse_x;
lastPositionOfy=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}