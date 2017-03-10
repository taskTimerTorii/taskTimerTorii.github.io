(function() {
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    var tasks = document.getElementsByClassName('tasks')[0];
    
    hamburger.addEventListener('click', function() {
       tasks.classList.toggle('tasks_dark');
    });
}());