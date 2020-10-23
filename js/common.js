$(document).ready( function(){

    $('nav ul li').click( function(){
        $('nav ul li').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass == 'active'){
            $(this).removeClass('active');
        }else{ 
            $(this).addClass('active');
        }
    });
});