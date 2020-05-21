let paddle = document.querySelector(".paddle");
document.addEventListener('mousemove', logKey);

function logKey(e) {
    if (e.clientX > 1315) {
        e.clientX = paddle.style.left = "1265px";
    } else if (e.clientX < 50) {
        e.clientX = paddle.style.left = "0";
    } else {
        paddle.style.left = `${e.clientX - 50}px`;
    }
}