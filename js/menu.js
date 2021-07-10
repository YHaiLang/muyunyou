(function() {
    //获取节点
    var banner_nav_ul = document.getElementById('banner-nav-ul');
    var banner_nav_lis = banner_nav_ul.getElementsByTagName('li');
    var menusEl = document.querySelectorAll('.menu-list .menu')
    var banner_nav = document.getElementById('banner-nav');
    //鼠标进入监听事件
    banner_nav_ul.addEventListener('mouseover',function(e) {
        if(e.target.tagName.toLowerCase() == 'li') {
            //排他操作
            for(var i=0;i<banner_nav_lis.length;i++) {
                banner_nav_lis[i].className = banner_nav_lis[i].getAttribute('data-t');
            }
            // 这里current前面加空格
            e.target.className +=' current';

            var t = e.target.getAttribute('data-t');
            var themenu = document.querySelector('.menu[data-t='+ t +']');
            //排他操作
            for(var i=0;i<menusEl.length;i++) {
                menusEl[i].className = 'menu';
            }
            // console.log(themenu);
            themenu.className = 'menu current'; 
        }
    },false)

    //鼠标离开监听事件
    banner_nav.addEventListener('mouseleave',function() {
        //遍历所有的左菜单li，去掉current
        for(var i=0;i<banner_nav_lis.length;i++) {
            banner_nav_lis[i].className = banner_nav_lis[i].getAttribute('data-t');
            menusEl[i].className = 'menu';
        }
    },false)
})()