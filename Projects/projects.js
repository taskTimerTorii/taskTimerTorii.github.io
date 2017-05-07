(function(){
    var projects = document.getElementsByClassName('projects')[0];
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    var arrows = document.getElementsByClassName('project__arrow-down');
    var max = arrows.length;
    for (var i = 0; i < max; i ++){
        arrows[i].addEventListener('click', function(event){
            event.target.parentNode.classList.toggle('project_open');
            event.target.classList.toggle('project__arrow-up');
            event.target.previousElementSibling.classList.toggle('project__tasks_hidden');
        });
    }
    hamburger.addEventListener('click', function() {
        projects.classList.toggle('projects_dark');
    });
}());