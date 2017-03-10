    var navBar = document.getElementsByClassName('nav-bar')[0];
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    var cross = document.getElementsByClassName('top-bar__cross')[0];
    hamburger.addEventListener('click', function() {
        navBar.classList.toggle('nav-bar_off');
        navBar.classList.toggle('nav-bar_on');
        hamburger.classList.toggle('top-bar__hamburger_hidden');
        cross.classList.toggle('top-bar__cross_hidden');
        console.log('navbar on/off');
    });

(function() {
    var play = document.getElementsByClassName('nav-bar__play');
    var pause = document.getElementsByClassName('nav-bar__pause');
    var playPause =document.getElementsByClassName('nav-bar__play-pause');
    
    for (var i = 0, max = play.length; i < max; i++){
        playPause[i].addEventListener('click', function(event) {
            if (event.target.classList.contains('nav-bar__play-pause')){
                console.log('nav-bar__play-pause');
            }   else {
                console.log(event.target);
                event.target.classList.toggle('nav-bar__pause_visible');
                event.target.classList.toggle('nav-bar__pause_hidden');
                event.target.previousElementSibling.classList.toggle('nav-bar__play_hidden');
                event.target.previousElementSibling.classList.toggle('nav-bar__play_visible');
            }
        });
    }
        
        
}());