let canvas = document.getElementById('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-100;
canvas.height = window.innerHeight-100;

// 장애물 그림
var img1 = new Image();
img1.src = '장애물 그림.jpg';

// 오리 그림
var img2 = new Image();
img2.src = '오리 달려.png';

 var duck = {
    x:10, y:230, width:60, height:80,
    draw(){
        ctx.fillStyle='green';
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    }
 }
 duck.draw();

class Con{
    constructor(){
        this.x = 450;
        this.y = 250;
        this.width = 40;
        this.height = 80;
    }
    draw(){
        ctx.fillStyle='red';
        ctx.drawImage(img1, this.x, this.y, this.width, this.height);
    }
} 

var timer = 0;
var Cons = [];

function frame(){       // 1초에 60번 실행할 코드
    animation = requestAnimationFrame(frame);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer % 120 === 0){
        var con = new Con();
        Con2.push(Con);
    }
    Con2.forEach((a, i, o) => {
        if(a.x < 0-a.width){
            o.splice(i,1)
        }
        a.x--;
        a.draw();

        collision(duck, a);
    });

    var jumping = false;
    document.addEventListener('keydown',function(e){
        if(e.code==='Space'){
            jumping = true;
        }
    })
    if(jumping==true){
        duck.y-=2;
        jumpingTime+=2;
    }
    if(jumping==false){
        if(duck.y<230){
            duck.y+=2;
        }
    }
    if(jumpingTime > 100){
        jumping = false;
        jumpingTime=0;
    }
    duck.draw();

    function collision(duck, Con){
        var xDifference = Con.x-(duck.x+duck.width);
        var yDifference = Con.y-(duck.y-duck.height);

        if(xDifference < 0 && yDifference <0){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            cancelAnimationFrame(animation);
        };
    }
}
frame();




