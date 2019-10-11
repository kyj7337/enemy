const Character = document.getElementById('hero'); //hero 담고 있는 div 태그
const Background = document.createElement("img");

let Enemylocation = function () {
    random = Math.floor(Math.random() * 910);
    return random;
}
//귀신 위치 랜덤

let speed = 1000; //속도
//0
let distance = 50; //움직이는 거리


let Ground = document.getElementsByClassName('bg')[0]


class Ghost {
    constructor() {

        this.ghostEl = document.createElement("div"); //this.ghostEl 라는 div 생성
        this.ghostEl.className = "enemy"; //div의 클래스 이름은 enemy, 그래서 css의 특성을 받음
        document.getElementsByClassName('bg')[0].appendChild(this.ghostEl);
        //bg라는 클래스 이름을 가진 div(배경)에 this.ghostEl(class이름이 enemy)가 들어감.
        this.ghostEl.style.backgroundPosition = "45px 0px";
        //backgroundposition을 줘서 귀신 정상 모습만 보여짐
        this.ghostEl.style.left = Enemylocation() + 'px';
        //귀신 위치 랜덤 함수
        //this.top = this.top +10 this.top+"px"
        this.ghostEl.style.top = "-50px"; 
        //top 값은 "-50px"으로 고정해서 만들어짐.
        this.move(); //move를 실행시킨다

        this.y = 0; //선언위치가 클래스 내부여야 초기값이 0 이다...
    }
    //set interval --> arrow function

    move() {
        
        let fall = setInterval(() => {
            
            this.y += distance;
            this.ghostEl.style.top = this.y + 'px';
            if (this.y >=700) {
                this.ghostEl.style.backgroundPosition = "-45px 0px";
                setTimeout(() => {
                    Ground.removeChild(this.ghostEl);
                    this.y= 0;
                }, 500);//바뀐모습
            }
            if(this.y>=800){
                
                clearInterval(fall); //fall 끝냄
            }
        }, speed);
    }
}



let start = setInterval(() => {
    var first = new Ghost()
}, 2000);

////////////////////////////////////////////////////////////
//키보드



let x = Character.offsetLeft; //500
document.addEventListener('keydown', function () {
    if (event.keyCode === 78) {
        //N

    }

    if (event.keyCode === 32) {
        //스페이스

        




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