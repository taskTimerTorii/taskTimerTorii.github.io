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