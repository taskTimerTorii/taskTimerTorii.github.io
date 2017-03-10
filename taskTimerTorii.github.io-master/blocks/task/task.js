(function() {
    var checkBox = document.getElementsByClassName('task__check-box-icon');
    var play = document.getElementsByClassName('task__play');
    var pause = document.getElementsByClassName('task__pause');
    var playPause =document.getElementsByClassName('task__play-pause');
    
    for (var i = 0, max = checkBox.length; i < max; i++){
        checkBox[i].addEventListener('click', function(event){
            event.target.classList.toggle('task__check-box-icon_visible');
            console.log('clicknalem');
        });
    }
    
    for (var i = 0, max = play.length; i < max; i++){
        playPause[i].addEventListener('click', function(event) {
            if (event.target.classList.contains('task__play-pause')){
                console.log('task__play-pause');
            }   else {
                console.log(event.target);
                event.target.classList.toggle('task__pause_visible');
                event.target.classList.toggle('task__pause_hidden');
                event.target.previousElementSibling.classList.toggle('task__play_hidden');
                event.target.previousElementSibling.classList.toggle('task__play_visible');
            }
        });
    }
        
        
}());