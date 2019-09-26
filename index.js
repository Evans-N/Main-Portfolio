document.addEventListener("DOMContentLoaded", function() {
    console.log('Hi mom!')
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
        console.log('Hi Dad!')
        mainNav.classList.toggle('active');
    });
});