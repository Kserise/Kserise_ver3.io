setTimeout(function(){
    $(".opning").addClass("on");
}, 4000);

setTimeout(function(){
    $(".layerlogo span").addClass("on");
}, 10000);


$(".selectbox").click(function(){
    let index = $(this).index();
    $(".selectbox").removeClass("active").eq(index).addClass("active");
    $(".charinfo").removeClass("active").eq(index).addClass("active");
    let bg_url;
    if(index == 0){
        bg_url = "url(imgs/class.jpg) no-repeat center";
    }else if(index == 1){
        bg_url = "url(imgs/night_sea.jpeg) no-repeat center";
    }else if(index == 2){
        bg_url = "url(imgs/school.jpeg) no-repeat center";
    }else if(index == 3){
        bg_url = "url(imgs/park1.jpeg) no-repeat center";
    }
    $(".charinfo_bg").css({"background":bg_url});
});

$(".toggle").click(function(){
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
});