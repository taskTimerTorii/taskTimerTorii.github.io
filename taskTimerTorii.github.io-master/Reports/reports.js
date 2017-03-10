(function(){
    var reports = document.getElementsByClassName('reports')[0];
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    var arrows = document.getElementsByClassName('report__arrow-down');
    var max = arrows.length;
    for (var i = 0; i < max; i ++){
        arrows[i].addEventListener('click', function(event){
            event.target.parentNode.classList.toggle('report_open');
            event.target.classList.toggle('report__arrow-up');
        });
    }
    hamburger.addEventListener('click', function() {
        reports.classList.toggle('reports_dark');
    });
}());