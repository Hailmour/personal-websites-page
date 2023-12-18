const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.carousel-track');
var containerWidth = document.querySelector('.carousel-card-container').offsetWidth; 

var sectionIndex = 0;
var querryID = 0;

if (document.querySelector('.carousel-track').children.length - 3 == 0) {
    document.getElementById("next-button").classList.add('hidden');
}

function NextPage() {
    sectionIndex = (sectionIndex < (document.querySelector('.carousel-track').children.length) - 3) ? sectionIndex + 1 : (document.querySelector('.carousel-track').children.length - 3);
    track.style.transform = 'translate(' + (sectionIndex) * -containerWidth + 'px)';
    containerWidth = document.querySelector('.carousel-card-container').offsetWidth;

    document.getElementById("prev-button").classList.remove('hidden');
    if(sectionIndex >= (document.querySelector('.carousel-track').children.length) - 3){
        document.getElementById("next-button").classList.add('hidden');
    }
}

function PrevPage() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    track.style.transform = 'translate(' + (sectionIndex) * -containerWidth + 'px)';

    document.getElementById("next-button").classList.remove('hidden');
    if(sectionIndex == 0){
        document.getElementById("prev-button").classList.add('hidden');
    }
}

next.addEventListener('click', NextPage);

prev.addEventListener('click', PrevPage);


const media_query1 = window.matchMedia(`(max-width: 1550px)`);
const media_query2 = window.matchMedia(`(max-width: 1350px)`);
const media_query3 = window.matchMedia(`(max-width: 1150px)`);
const media_query4 = window.matchMedia(`(max-width: 950px)`);
const media_query5 = window.matchMedia(`(max-width: 750px)`);
const media_query6 = window.matchMedia(`(max-width: 550px)`);
function updatepage(e) {
  if (e.matches) {
    containerWidth = document.querySelector('.carousel-card-container').offsetWidth;
  } else {
    containerWidth = document.querySelector('.carousel-card-container').offsetWidth;
  }
}
// call the function immediately to set the initial value:
updatepage(media_query1);
// watch for changes to update the value:
media_query1.addEventListener("change", updatepage);
media_query2.addEventListener("change", updatepage);
media_query3.addEventListener("change", updatepage);
media_query4.addEventListener("change", updatepage);
media_query5.addEventListener("change", updatepage);
media_query6.addEventListener("change", updatepage);

var  initialDragPos = 0;
var finalDragPos = 0;
var dif = 0;

const draggingStart = (e) => {
  initialDragPos = e.touches[0].pageX;
}

const draggingEnd = (e) => {
  finalDragPos = e.touches[0].pageX;
  let difer = initialDragPos - finalDragPos;
  dif = difer
}



track.addEventListener("touchstart", draggingStart);
track.addEventListener("touchmove", draggingEnd);
track.addEventListener("touchend", () => {

  if(dif > 0 && dif >= 100){
    NextPage();
    initialDragPos = 0;
    finalDragPos = 0
    dif = 0;
  }
  if (dif < 0 && dif <= -100) {
    PrevPage();
    initialDragPos = 0;
    finalDragPos = 0
    dif = 0;
  }
  if (dif == 0){
    initialDragPos = 0;
    finalDragPos = 0
    dif = 0;
  }
});


