(function() {
    var checkBox = document.getElementsByClassName('task__check-box-icon');
    var play = document.getElementsByClassName('task__play');
    var pause = document.getElementsByClassName('task__pause');
    var playPause =document.getElementsByClassName('task__play-pause');
    var archive = document.getElementsByClassName('archive')[0];
    var toCheck = 0;
    
    for (var i = 0, max = checkBox.length; i < max; i++){
        checkBox[i].addEventListener('click', function(event){
            event.target.classList.toggle('task__check-box-icon_visible');
            console.log('clicknalem');
            for(var j = 0, max = checkBox.length; j < max; j++){
                if(checkBox[j].classList.contains('task__check-box-icon_visible')) {
                    toCheck += 1;
                }
            }
            if(!toCheck) {
                    archive.classList.add('archive_hidden');
                } else {
                    archive.classList.remove('archive_hidden');
                }
            toCheck = 0;
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
                console.log(event.target.parentElement.parentElement.parentElement);
                event.target.parentElement.parentElement.parentElement.classList.toggle('task_open');
                event.target.parentElement.parentElement.lastChild.previousSibling.classList.toggle('task__task-time_visible');
            }
        });
    }
    
    archive.addEventListener('click', function(event){
        var selected = document.getElementsByClassName('task__check-box-icon_visible');
        for(var k=0; k < selected.length; k++){
            selected[k].parentElement.parentElement.parentElement.style.display='none';
        }
    });
        
}());