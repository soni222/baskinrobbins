//gnb
$(document).ready(function(){
 $('.header_mid > li').on({
     mouseenter:function(){
         $('a',this).css('color','#ff699b')
      $('.gnb_wrap').stop().slideDown();     
     },
     mouseleave:function(){
        $('a',this).css('color','#333')
        $('.gnb_wrap').stop().slideUp();   
     }
 })
 $('.gnb_wrap').on({
     mouseenter:function(){
        $('.gnb_wrap').stop().slideDown();   
     },
     mouseleave:function(){
        $('.gnb_wrap').stop().slideUp();   
     }
 })
 $('.th1 li').on({
     mouseenter:function(){
         $('a',this).css('color','#ff699b')
     },
     mouseleave:function(){
        $('a',this).css('color','#666666')
     }
 })


//검색


 $('.icon_search').on('click',function(){
    $(this).toggleClass('on');
    $('.search').toggleClass('on');
   
 })
    
//visual
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1600,
        speed:2000
      });
})



//이벤트

    $('.event_btn li').each(function(index){
        $(this).on('click',function(e){
            e.preventDefault();
            var thisNum=index;
            $('.event_btn .on').removeClass('on')
            $('a',this).addClass('on')

            $('.event_list').removeClass('on')
            $('.event_list:eq('+thisNum+')').addClass('on')
        })
    })
//sns
    var position=0;
    var distance=-305;
    $('.sns_slide').on({
        mouseenter:function(e){
            position=e.pageX-$(this).offset().left;  //snsslide전체값 0~1600
           
        },
        mouseleave:function(){
            position=0;
            distance=-915
           
            $('.sns_img').animate({
                left:distance+'px'
            },400)
        },
        mousemove:function(e){
            var temp=e.pageX-$(this).offset().left;
           if(temp-position>0){ 
                distance=distance-10;
               if(distance>0){
                   distance=0
               }
           }else{
               distance=distance+10;
               if(distance<-3050){
                   distance=-905  //마우스를 올렷을때 left:-890
               }
               
           }
            $('.sns_img').css({
                left:distance+'px'
            })
            position=temp
        }
    })
    //familysite
    $('.site_map').on('click',function(e){
        e.preventDefault();
        $(this).parent().find('.site_more').toggleClass('open')
    })
    $('.site_more > li >a').on({
        mouseenter:function(){
            $(this).css({
                backgroundColor:'#eb6d85',
                color:'#fff'
            })
        },
         mouseleave:function(){
            $(this).css({
                backgroundColor:'#fff',
                color:'#222'
            })
        }
    })
   
})
$(document).ready(function(){
    $('.slider').bxSlider();
  });
