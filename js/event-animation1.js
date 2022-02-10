const eventSlide = document.querySelector('.swiper-wrapper');
const eventContent = document.querySelectorAll('.swiper-slide');

const prevBtn = document.querySelector('.prev-event');
const nextBtn = document.querySelector('.next-event');

let counter = 0;
const size = eventContent[0].clientWidth;

eventSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

nextBtn.addEventListener('click', () =>{
   if (counter >= eventContent.length - 1) return;
    eventSlide.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    eventSlide.style.transform = 'translateX(' + (-size * (counter)) +'px)';
});

prevBtn.addEventListener('click', () =>{
    if (counter <= 0) return;
    eventSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    eventSlide.style.transform = 'translateX(' + (-size * (counter)) +'px)';
});

eventSlide.addEventListener('transitionend', () => {
    if(eventContent[counter].id === 'lastClone'){
      eventSlide.style.transition = "none";
      counter = eventContent.length - 2;
        eventSlide.style.transform = 'translateX(' + (-size * (counter)) +'px)';
    }
    if(eventContent[counter].id === 'firstClone'){
      eventSlide.style.transition = "none";
      counter = eventContent.length - counter;
        eventSlide.style.transform = 'translateX(' + (-size * (counter)) +'px)';
    }
});
