document.getElementById('theme-toggler').onclick = function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }

    document.querySelector("html").classList.toggle('global-transition');

    document.documentElement.setAttribute('data-theme', targetTheme)
    setTimeout(() => { document.querySelector("html").classList.toggle('global-transition');}, 250);
}