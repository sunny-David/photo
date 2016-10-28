/**
 * Created by hxsd on 2016/10/8.
 */
$(function(){
//首页轮播图
    var timer=null;
    var sw = 0;

//点击按钮切换
    $(".prev").hover(
        function(){
            $(this).css("background-position","0px 0px")
            $(this).click(function(){
                sw--;
                if (sw<0) {sw=$("#slider img").length};
                myShow(sw);
            });
        },function(){
            $(this).css("background-position","-83px 0")
        }
    )
    $(".next").hover(
        function(){
            $(this).css("background-position","-42px 0px")
            $(this).click(function(){
                sw--;
                if (sw<0) {sw=$("#slider img").length};
                myShow(sw);
            });
        },function(){
            $(this).css("background-position","-124px 0")
        }
    )

    function myShow(i){
        $("#slider img").eq(i).stop(true,true).fadeIn(600).siblings("img").fadeOut(600);
    }
//滑入停止动画，滑出开始动画
    $(".slider-wrapper").hover(function(){

        if(timer){
            clearInterval(timer);
        }
    },function(){
        interval();
    });
//自动开始
    function interval(){
        timer = setInterval(function(){
            myShow(sw)
            sw++;
            if(sw==$("#slider img").length){sw=0;}
        } , 2000);
    }
    interval();

//图片缩放
    var images = [];
    zoom($(".zoom"),"a","img",360,425)
    function zoom(warp,list,obj,_width,_height){
        warp.find(list).each(function (index) {
            var $img=$(this).find(obj);
            $(this).hover(
                function(){
                    $img.finish();
                    images[index]={width:$img.width(),height:$img.height()};
                    $img.animate({
                        'width':_width,
                        'height':_height,
                        'top':0,
                        'left':0,
                        'opacity':1
                    },1000);
                },
                function(){
                    $img.finish();
                    $img.animate({
                        'width':images[index].width,
                        'height':images[index].height,
                        'top':'-50%',
                        'left':'-50%',
                        'opacity':0.7
                    },1000);
                });
        });
    };

})




























