/**
 * Created by Administrator on 2016/10/9.
 */
$(function(){
    //导航栏
    $(".nav").children("li").each(function(index){
        $(this).hover(function(){
            $(this).css("background-color","red");
        } ,function(){
            $(this).css("background-color","");
        })
    });
//city list
    $("#cityList").children("li").each(function(index){
        $(this).hover(function(){
            $(this).css("background-color","#ac2165");
        } ,function(){
            $(this).css("background-color","");
        })
    });
//二级菜单的显示
    $("#photo_shop").hover(
        function(){
            $(".nav-children").stop(true,true).fadeIn();
        },
        function(){
            $(".nav-children").stop(true,true).fadeOut();
        }
    );

//city菜单
    $(".city").hover  (
        function(){
            $("#show_city_nav_top").stop(true,true).fadeIn();
        },
        function(){
            $("#show_city_nav_top").stop(true,true).fadeOut();
        }
    );

});