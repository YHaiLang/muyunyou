// 立即执行
(function() {
    // 获取节点
    var banner_lis = document.getElementById('banner-lis');
    var banner_leftbtn = document.getElementById('banner-leftbtn');
    var banner_rightbtn = document.getElementById('banner-rightbtn');
    var circle = document.getElementById('circle');
    var circle_lis = circle.getElementsByTagName('li');
    var bannerEl = document.getElementById('banner');

    //克隆
    var clone_li = banner_lis.firstElementChild.cloneNode(true);
    banner_lis.appendChild(clone_li);

    //当前图片序号
    var idx = 0;

    //节流锁
    var lock = true;

    //右按钮监听事件
    banner_rightbtn.addEventListener('click',rightbtn,false)

    //右按钮方法
    function rightbtn() {
        if(!lock) return;

        lock = false;

        banner_lis.style.transition = 'transform .5s ease 0s';
        idx++;
       banner_lis.style.transform = 'translateX(' + -16.66 * idx +'%)';
       if(idx > 4) {
           setTimeout(() => {
            //    去掉过度和transform
               banner_lis.style.transition = 'none';
               banner_lis.style.transform = 'none';
               idx = 0;
               banner_lis.style.transform = 'translateX(' + -16.66 * idx +'%)';
           }, 500);
       }
       setCircle();
       setTimeout(() => {
           lock = true;
       }, 500);
    }
    var timer = setInterval(rightbtn,2000)
    bannerEl.onmouseenter = function() {
        clearInterval(timer);
    }
    bannerEl.onmouseleave = function() {
        clearInterval(timer);
        timer = setInterval(rightbtn,2000)
    }
    // 左按钮监听事件
    banner_leftbtn.addEventListener('click',function() {
        if(!lock) return;

        lock = false;

        if(idx == 0) {
            banner_lis.style.transition = 'none';
            banner_lis.style.transform = 'translateX(' + -16.66 * 5 +'%)';
            
            // 改变idx的值
            idx = 4;
            // 小技巧，利用延时器添加过渡
            setTimeout(() => {
                banner_lis.style.transition = 'transform .5s ease 0s';
                banner_lis.style.transform = 'translateX(' + -16.66 * idx +'%)';
            }, 0);
        }else {
            idx--;
            banner_lis.style.transform = 'translateX(' + -16.66 * idx +'%)';
        }
        setCircle();
        setTimeout(() => {
            lock = true;
        }, 500);
    },false)

    // 设置小圆点
    function setCircle() {
        //遍历小圆点
        for(var i=0;i<=4;i++) {
            if(i == idx%5) {
                circle_lis[i].className = 'current';
            }else {
                circle_lis[i].className = '';
            }
        }
    }
    //事件委托处理小圆点点击事件
    circle.addEventListener('click',function(e) {
        if(e.target.tagName.toLowerCase() == 'li') {
            var n = e.target.getAttribute('data-n');
            idx = n;
            banner_lis.style.transform = 'translateX(' + -16.66 * idx +'%)';
        }
        setCircle();
    },false)
})();