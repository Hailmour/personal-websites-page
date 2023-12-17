const butt = document.getElementById('theme-toggler');

butt.onclick() = function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    var element = document.getElementById('html-tag');
    element.classList.toggle('global-transition');

    document.documentElement.setAttribute('data-theme', targetTheme)
    setTimeout(() => { element.classList.toggle('global-transition'); }, 250);
}