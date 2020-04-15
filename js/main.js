//'use strict'
    $(document).ready(function(){
        //slider
        if(window.location.href.indexOf('index') > -1){
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200,
                responsive: true
            });
        }
        //Load theme
        var theme= $('#theme')
        $(window).on("load",function(){
            var saveTheme = localStorage.getItem('theme');
            if(saveTheme){
                theme.attr('href', saveTheme)
            } 
        });        
        /*Theme Selector*/
        $('#to-green').click(function(){
            theme.attr('href', 'css/green.css')
            localStorage.setItem('theme', 'css/green.css');
        });
        $('#to-blue').click(function(){
            theme.attr('href', 'css/blue.css');
            localStorage.setItem('theme', 'css/blue.css');
        });
        $('#to-red').click(function(){
            theme.attr('href', 'css/red.css')
            localStorage.setItem('theme', 'css/red.css');
        });
        //Ajax
        if(window.location.href.indexOf('index') > -1 ){
            var posts = [
                { 
                title:'Article title 1',
                date: 'Posted on: ' + moment().format('MMMM YYYY'),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga aspernatur, iste harum aperiam reprehenderit ipsam animi soluta impedit itaque, quod, nostrum autem fugit expedita odio dolorum nihil eos dolore quaerat unde. Quidem autem facilis earum vel ipsum maxime reprehenderit iste iure tempore dolores exercitationem corporis rem asperiores assumenda nostrum vitae aut, iusto voluptas quam nisi sed fugiat cum consequuntur!'
                },
                {
                title:'Article title 2',
                date: 'Posted on: ' + moment().format('MMMM YYYY'),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga aspernatur, iste harum aperiam reprehenderit ipsam animi soluta impedit itaque, quod, nostrum autem fugit expedita odio dolorum nihil eos dolore quaerat unde. Quidem autem facilis earum vel ipsum maxime reprehenderit iste iure tempore dolores exercitationem corporis rem asperiores assumenda nostrum vitae aut, iusto voluptas quam nisi sed fugiat cum consequuntur!'
                },
                {
                title:'Article title 3',
                date: 'Posted on: ' + moment().format('MMMM YYYY'),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga aspernatur, iste harum aperiam reprehenderit ipsam animi soluta impedit itaque, quod, nostrum autem fugit expedita odio dolorum nihil eos dolore quaerat unde. Quidem autem facilis earum vel ipsum maxime reprehenderit iste iure tempore dolores exercitationem corporis rem asperiores assumenda nostrum vitae aut, iusto voluptas quam nisi sed fugiat cum consequuntur!'
                },
                {
                title:'Article title 4',
                date: 'Posted on: ' + moment().format('MMMM YYYY'),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga aspernatur, iste harum aperiam reprehenderit ipsam animi soluta impedit itaque, quod, nostrum autem fugit expedita odio dolorum nihil eos dolore quaerat unde. Quidem autem facilis earum vel ipsum maxime reprehenderit iste iure tempore dolores exercitationem corporis rem asperiores assumenda nostrum vitae aut, iusto voluptas quam nisi sed fugiat cum consequuntur!'
                }]
                
            posts.forEach((item,index) => {
                var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="buttom-more">Read More</a>
                </article>
                `
                $('.posts').append(post);
            });
        }
        /*Scroll Up*/
        var up = $('.up');
        up.hide();

        $(window).scroll(function(){
            if($(this).scrollTop() > 300){
                up.fadeIn(1000);
            }else{
                up.fadeOut(1000);
            }
            
        });
        up.click(function(){
            $('body, html').animate({
                scrollTop:0
            }, 50);
        });
        //Login with localStorage

        $("#login form").submit(function(){
            var username = $("#name").val();
            localStorage.setItem("username", username);
        });

        var username = localStorage.getItem('username')

        if(username != null && username != 'undefined'){
            $('#about p').html('<strong> Bienvenido, '+ username + '</strong')
            $('#about p').append('<a href="#" class="logout">Logout</a>')
            $('#login').hide();

            $('.logout').click(function(){
                localStorage.clear();
                location.reload();
            });
        }
        /*About Me */
        if(window.location.href.indexOf('about_me') > -1){
            $('#accordion').accordion();
        }
        /*Watch*/
        if(window.location.href.indexOf('watch') > -1){
            setInterval(function(){
                var watch =  moment().format('h:mm:ss')
                $('.watch').html(watch);
            }, 1000);
        }
        /*Contact*/
        if(window.location.href.indexOf('contact') > -1){
            $('form input[name="birthdate"]').datepicker();
            $.validate({
                lang: 'en',
                errorMessagePosition: 'top',
                scrollToTopOnError: true
              });
        }

        /*Homero Animate */
       var animate=  $('#about img')
       animate.click(function(){
           animate.animate({
            marginLeft:'200px',
            borderRadius:'900'
        }, 'slow')
        .animate({
            marginTop:'60px',
        }, 'slow')
        .animate({
            marginLeft:'0px',
            borderRadius: '0px'
        }, 'slow')
        .animate({
            marginTop:'0px',
            fadeIn: 'slow'
        }, 'slow');
         
        });
    });  

