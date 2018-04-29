var images = document.images;
var images_total_count = images.length;
var image_loaded_count = 0;
var perc_display = document.getElementById('load_perc');

for( var i = 0; i < images_total_count; i++) {
    images_clone = new Image();
    images_clone.onload = images_loaded;
    images_clone.onerror = images_loaded;
    images_clone.src = images[i].src;
}

function images_loaded() {
    image_loaded_count++;

    //perc_display.innerHTML = (( (100 / images_total_count) * image_loaded_count ) << 0) + '%';

    if( image_loaded_count >= images_total_count){
        setTimeout(function() {
            var preloader = document.getElementById('page-preloader');
            if( !preloader.classList.contains('done') )
            {
                preloader.classList.add('done');
            }
        }, 1000);
    }
}

$(document).ready(function(){

    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $(".p-header__top").css('background', '#000');
            $(".p-header__top").css('border-bottom', 'none');
        } else {
            $(".p-header__top").css('background', 'rgba(0,0,0,.5)');
            $(".p-header__top").css('border-bottom', '1px solid rgba(150, 150, 150, 0.3)');
        }
    });

    $(".p-header__m-toggle").on("click", function(e){
        $(".p-header__m-menu").toggleClass("g-d-b");
    });

    $(".p-portfolio__overlay").on("click", function(){ 
        
        $title = $(this).children(".title").text();
        $desc = $(this).children(".desc").text(); 
        $src = $(this).children(".title").attr('data-item');

        $(".title_push").text($title);
        $(".desc_push").text($desc);    
        $(".modal-content__img").attr("src", "img/" + $src + ".webp");    

        $(".modal").fadeIn(500); 
        });

        $(".modal-content__close").on("click", function(){
            $(".modal").fadeOut(500);
            console.log("123");
        });

        $(document).mouseup(function (e) {
            var container = $(".modal-content");
            if (container.has(e.target).length === 0){
                $(".modal").fadeOut(500);
            }
        });

        $("a.scrollto").click(function() {
          var elementClick = $(this).attr("href")
          var destination = $(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
          }, 800);
          return false;
        });

});