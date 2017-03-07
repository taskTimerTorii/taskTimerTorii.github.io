(function() {
    var profile = document.getElementsByClassName('profile')[0];
    var hamburger = document.getElementsByClassName('top-bar__hamburger')[0];
    hamburger.addEventListener('click', function() {
        profile.classList.toggle('profile_dark');
    });
}());