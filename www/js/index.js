document.addEventListener('deviceready', function(){

    $('#today-button').click(function(){
        $('#today-content').toggleClass('show', 10000, 'easeOutSine');
    });

    $('#this-week-button').click(function(){
        $('#this-week-content').toggleClass('show', 10000, 'easeOutSine');
    });

    $('#next-week-button').click(function(){
        $('#next-week-content').toggleClass('show', 10000), 'easeOutSine';
    });

            
}, false);