jQuery(function($){
  
    ///////////////////////////////////////////////////////////////   START DOCUMENT READY  ///////////////////////////////////////////////////////////////
    
    $(document).ready(function() {
        $(".eye-slash").click(function(){
            console.log("eye clicked")
            //event.preventDefault();
            if($('#show_hide_password input').attr("type") == "text"){
                console.log("type text")
                $('#show_hide_password input').attr('type', 'password');
                $('#show_hide_password .bi-eye-fill').removeClass( "d-none" );
                $('#show_hide_password .bi-eye-slash-fill').addClass( "d-none" );
            }else if($('#show_hide_password input').attr("type") == "password"){
                console.log("type password")
                $('#show_hide_password input').attr('type', 'text');
                $('#show_hide_password .bi-eye-fill').addClass( "d-none" );
                $('#show_hide_password .bi-eye-slash-fill').removeClass( "d-none" );
            }
        });

        $('input[name="dates"]').daterangepicker();
        
    });
    
    ///////////////////////////////////////////////////////////////   END DOCUMENT READY  ///////////////////////////////////////////////////////////////



    ///////////////   START DATA SCROLL  ///////////////
    $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];
        
        $(this).each(function(){
        instances.push(new moveItItem($(this)));
        });
        
        window.addEventListener('scroll', function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
        }, {passive: true});
    } 
    var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };
    moveItItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
        this.el.css('margin-bottom', -(scrollTop / this.speed) + 'px');
    }; 
    // Initialization
    $(function(){
        $('[data-scroll-speed]').moveIt();
    });


    $.fn.moveItX = function(){
        var $window = $(window);
        var instances = [];
        
        $(this).each(function(){
        instances.push(new moveItXItem($(this)));
        });
        
        window.addEventListener('scroll', function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
        }, {passive: true});
    } 
    var moveItXItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed-x'));
    };
    moveItXItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
    }; 
    // Initialization
    $(function(){
        $('[data-scroll-speed-x]').moveItX();
    });
    ///////////////   END DATA SCROLL  ///////////////

});