let paddle = document.querySelector(".paddle");
let btnBlack = document.querySelector(".btn-black");
let btnRed = document.querySelector(".btn-red");
let btnGreen = document.querySelector(".btn-green");
let btnOrange = document.querySelector(".btn-orange");
let btnPurple = document.querySelector(".btn-purple");
let btnBlue = document.querySelector(".btn-blue");

document.addEventListener('mousemove', translate);

function translate(position) {

    if (position.clientX > 1315) {
        position.clientX = paddle.style.marginLeft = "1265px";
    } else if (position.clientX < 50) {
        position.clientX = paddle.style.marginLeft = "0";
    } else {
        paddle.style.marginLeft = `${position.clientX - 50}px`;
    }
}

btnBlack.addEventListener('click', function(){paddle.style.backgroundColor = "black"});
btnRed.addEventListener('click', function(){paddle.style.backgroundColor = "red"});
btnGreen.addEventListener('click', function(){paddle.style.backgroundColor = "green"});
btnOrange.addEventListener('click', function(){paddle.style.backgroundColor = "orange"});
btnPurple.addEventListener('click', function(){paddle.style.backgroundColor = "purple"});
btnBlue.addEventListener('click', function(){paddle.style.backgroundColor = "blue"});