const open=document.querySelector('.open_menu'),
      menu=document.querySelector('.menu'),
      close=document.querySelector('.menu_block_close');

open.addEventListener('click',()=>{
    menu.classList.add('menu_active')
});

close.addEventListener('click',()=>{
    menu.classList.remove('menu_active')
});

$(document).ready(function(){
        
    
        //для перемещения стрелки на верх
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
                
        });
        
    });

      