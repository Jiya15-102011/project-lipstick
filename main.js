nosex=0;
nosey=0;
function preload(){
    b=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    d=createCapture(VIDEO);
    d.size(300,300);
    d.hide();
    y=ml5.poseNet(d,loaded);
    y.on('pose',poseparts);
}
function loaded(){
console.log("poseNet is intilized");
}
function poseparts(answer){
if(answer.length>0){
console.log(answer);
nosex=answer[0].pose.nose.x-15;
nosey=answer[0].pose.nose.y+15;
}
}
function draw(){
    image(d,0,0,300,300)
    image(b,nosex,nosey,50,40);
    //fill("red");
    //stroke("yellow")
    //circle(nosex,nosey,30)

}
function a(){
    save('lipstick.jpeg');
}