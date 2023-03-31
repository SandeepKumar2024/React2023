const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let sliderIndex = 1;
const length = images.length;

const nextslide = () => {
  slider.style.transform = `translateX(-${sliderIndex * 400}px)`;
  sliderIndex++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-0px)`;
  sliderIndex = 1;
};
right.addEventListener("click", () => {
  sliderIndex < length ? nextslide() : prevSlide();
});

left.addEventListener("click",()=>{
    
})
