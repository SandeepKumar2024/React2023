const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const slider = document.querySelector(".faeture");
const images = document.querySelectorAll(".sliderImages");

const length = images.length;
let index = 1;

const nextslide=()=>{
    slider.style.transform = `translate(-${index * 100}vw)`;
    index++;
};
const firstSlide=()=>{
    slider.style.transform = `translate(400px)`;
    index++;
};

leftArrow.addEventListener("click", () => {
  index < length ? nextslide() : firstSlide();
});

rightArrow.addEventListener("click",()=>{
    index < length ?nextslide():firstSlide();
})
