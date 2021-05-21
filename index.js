function a() {
    console.log("hello");
} // 함수 만드는 법

a()

var a = 0;
let b = 0;
const c = 0;

function asdf() {
    a = 10;
    b = 10;
}

asdf();
console.log(a,b,c);

function warning() {
    if(confirm("확인하시겠습니까?")) {
        alert("확인되셨습니다.")
    }
    else {
        alert("취소되셨습니다.")
    }
}

const button = document.getElementById("button");

function buttonNone() {
    button.style.backgroundColor = "black";
}