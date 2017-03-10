(function(){
    var searchBar = document.getElementsByClassName('top-bar__search-bar')[0];
    var searchIcon = document.getElementsByClassName('top-bar__search')[0];
    searchIcon.addEventListener('click', function(){
       searchBar.classList.toggle('top-bar__search-bar_visible'); 
    });
}());