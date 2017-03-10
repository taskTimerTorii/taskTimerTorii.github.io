(function() {
    var calendar = document.getElementsByClassName('opakowanie')[0];
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    hamburger.addEventListener('click', function() {
        calendar.classList.toggle('opakowanie_dark');
    });
}());