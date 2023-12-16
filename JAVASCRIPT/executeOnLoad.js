function toBeExecutedOnFirstLoad(){
    document.getElementsByClassName('nav-container').style.animation = "load-nav 2s linear forwards"
  }

window.onload = function(){
    if(localStorage.getItem('first') === null){
      toBeExecutedOnFirstLoad();
      localStorage.setItem('first','nope!');
    }
}