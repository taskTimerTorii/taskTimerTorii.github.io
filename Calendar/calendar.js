(function() {
    var calendar = document.getElementsByClassName('opakowanie')[0];
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    var current = document.getElementsByClassName('current')[0];
    var containerCalendar = document.getElementsByClassName('container_calendar')[0];
    hamburger.addEventListener('click', function() {
        calendar.classList.toggle('opakowanie_dark');
    });
    
    containerCalendar.addEventListener('click', function(event) {
        var current = document.getElementsByClassName('current')[0];
        if(event.target.classList.contains('item') && !event.target.classList.contains('month') && !event.target.classList.contains('day')) {
            current.classList.remove('current');
            event.target.classList.add('current');
        }
    });
}());