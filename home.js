
const dayNight = document.querySelector(".day");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");

dayNight.onclick = function(){
    body.classList.toggle("dark");
    dayNight.classList.toggle("active");
};

menu.onclick = function(){
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
};
