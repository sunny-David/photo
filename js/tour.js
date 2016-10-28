/**
 * Created by hxsd on 2016/10/8.
 */
$(function(){
    var ImgOne=$("#banner img");
    var ImgTwo=$("#bannerTwo img");
    var ImgThree=$("#bannerThree img");
    var ImgFour=$("#bannerFour img");
    show(ImgOne);
    show(ImgTwo);
    show(ImgThree);
    show(ImgFour);
    function show(obj){
        var imgL= obj.size();
        var mIndex = Math.floor( imgL/2 );
        function addLeft(){
            var winW = $(".inner") .width();
            var imgW = $(obj).width();
            var mLeft = (winW - imgW)/2	;
            obj.each(function(i){
                $(this).css('left',mLeft - 100*(mIndex-i) + 'px')

            })
        };
        addLeft();
        $(".inner").resize(function(){
            //尺寸发生变化时调用。
            addLeft();
        });
        obj.each(function(i){
            if (i<mIndex)
            {
                $(this).attr("class","left")
            }
            else if (i==mIndex)
            {
                $(this).attr("class","middle")
            }
            else
            {
                $(this).attr("class","right")
            }
        })

        obj.click(function(){
            var index = $(this).index();


            obj.each(function(i){
                //parseInt( $(this).css('left') ) - 100 );
                //下面的css是设置位移
                //$(this).css('left')输出的是left的值  如果index是8 - 11= -3    mindex=11   -300

                $(this).css('left',parseInt( $(this).css('left') ) - 100*(index-mIndex) +"px");


                if (i<index)
                {
                    $(this).attr("class","left")
                }
                else if (i==index)
                {
                    $(this).attr("class","middle")
                }
                else
                {
                    $(this).attr("class","right")
                }
            });
            mIndex = index;
        });
    };
});
