$(".windowmenu_ul li").click(function(){
    let index = $(this).index();
    $(".screen-child").removeClass("active").eq(index).addClass("active");
    $(".de_infobox").removeClass("active").eq(index).addClass("active");
});

let timer = setInterval(function(){
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    $(".windowmenu > div > span").eq(0).text(hr);
    $(".windowmenu > div > span").eq(1).text(mn);
    if(hr < 12){
        $(".windowmenu > div > span").eq(2).text("AM");
    }
}, 1000);