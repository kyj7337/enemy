
const Character = document.getElementById('hero') //hero 담고 있는 div 태그

const Enemy = document.getElementsByClassName('enemy')[0] //enemy

let aa = document.createElement('div')






































let Enemylocation = function () {
    //귀신 위치 랜덤
    random = Math.floor(Math.random() * 1000);
    if (random > 45 && random <= 910) {
        result = random;
    }
    return result;
}


Enemy.style.left = Enemylocation() + 'px';
//맨 왼쪽으로 갔을 시 오류가 있음 ;
let EnemyRandomLocation = Enemy.style.left;


/*
let Enemylocation = Math.floor(Math.random()*1000);
*/
Enemy.style.backgroundPosition = "45px 0px"
//귀신 처음 모습(45px 0px))
let x = Character.offsetLeft; //500
let start_x = 0; //맨왼쪽 위치
let dest_x = 965; //끝나는 위치
let distance = 35; //움직이는 px 거리



let speed = 200;
let y = Enemy.offsetTop; //0

function move() {
    y += distance;
    let fall = setInterval(function () {
        Enemy.style.top = y + 'px';
    }, speed)
    if (y >= 750) {
        y = 750;
        Enemy.style.backgroundPosition = "-45px 0px" //바뀐모습
        setTimeout(function(){
            Enemy.style.display = 'none';
        },1000)//땅에 떨어지면 사라짐
        clearInterval();
    }
    
}//귀신 내려오는 함수

function randomenemy(){
    Enemylocation();
    Enemy.style.left = Enemylocation() +'px';
    return;
}//랜덤위치 정해주는 함수

function down(){
    setInterval(function(){
        move();
    },speed);
} // 실행시 귀신 내려오는 함수

document.addEventListener('keydown', function () {
    if(event.keyCode ===78){
        //N
        randomenemy();
        down();

    }
    
    if (event.keyCode === 32) {
        //스페이스
        
        down();
        
        


    }
    if (event.keyCode === 37) {
        //왼쪽
        Character.style.backgroundPosition = "-70px 0"
        x -= distance;
        Character.style.left = x + 'px';
        if (x <= 35) {
            x += distance;
        }
    }
    if (event.keyCode === 39) {
        //오른쪽
        Character.style.backgroundPosition = "-105px 0"

        x += distance;
        Character.style.left = x + 'px';
        if (x >= 930) {
            x -= distance;
        }
    }
})

document.addEventListener('keyup', function () {
    //키때면 앞모습
    Character.style.backgroundPosition = "0px 0"
})



//왼쪽 키 누르면 현재위치 = 현재위치 + 왼쪽으로 1px 움직

//현재 위치를 알 수 있는 값이 필요하다!!
/*
4. 귀신 위치
    1. Top 0하고 left를 random으로 위치 시키면 된다.
5. 귀신 내려 오는거
    1. setInterval(윈도우 내장함수)에서 new Enemy(); 호출
6. 부딪혔을 때
    귀신이랑 높이랑 left확인해서 영역에 들어오면 귀신 요소 삭제하고 죽인 귀신 이미지로 바꾸고
    죽이고 1초 뒤에 사라지게 함.
New Enemy() ; << 새 귀신 나올 때마다.
    construct () {
    this. H = 000
    this.move();
    }
    move() {
        setInterval() << 1초에 하나씩 내려오게 하기.
    }
    */