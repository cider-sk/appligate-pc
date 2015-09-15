$(function(){
    if($(".main-menu .col-xs-4").hasClass("now-select")){
        $(".now-select").append('<div class="now"><'+'/'+'div>');
    }
});
$(function(){
    $(".gacharank,.jizen-app,.haisin-app").click(function(){
        $(".col-xs-4.now-select").each(function(){
            $(this).removeClass("now-select");
            $(this).children(".now").remove();
        });
    });
    $(".gacharank").click(function(){
        $(this).addClass("now-select");
        $(this).append('<div class="now"><'+'/'+'div>');
        $(".all-gacha-num").show();
    });
    $(".jizen-app").click(function(){
        $(this).addClass("now-select");
        $(this).append('<div class="now"><'+'/'+'div>');
        $(".all-gacha-num").hide();
    });
    $(".haisin-app").click(function(){
        $(this).addClass("now-select");
        $(this).append('<div class="now"><'+'/'+'div>');
        $(".all-gacha-num").hide();
    });
});

