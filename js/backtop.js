// IIFE立即执行
(function() {
    var backtopEl = document.getElementById('backtop');

    var root = document.documentElement;
    var timer;

    backtopEl.addEventListener('click',function() {
        //设表先关
        clearInterval(timer);
        timer = setInterval(function() {
            root.scrollTop -= 100;
            if(root.scrollTop <= 0) {
                clearInterval(timer);
            }
        },20)
    },false)

    window.onscroll = function() {
        //获取窗口滚动值
        var scrollTop = root.scrollTop || window.scrollY;

        if(scrollTop <= 0) {
            backtopEl.style.display = 'none';
        }else {
            backtopEl.style.display = 'block';
        }
    }
})()
