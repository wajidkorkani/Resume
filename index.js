let head = document.querySelector("head");
let style = document.createElement("style");
let img = document.getElementsByClassName("imgMode")[0];
let projectImg = document.getElementsByClassName("projectImg")[0];
let experienceImg = document.getElementsByClassName("experienceImg")[0];
let lightModeOn = true;

function DarkMode(){
  lightModeOn = false;
  style.innerText = ":root{--darkColor: black; --lightColor: white;}"
  head.appendChild(style)
  img.src = "light_mode.png";
  projectImg.src = "projects.png";
  experienceImg.src = "darkExperience.png";
}

function LightMode(){
  lightModeOn = true;
  style.innerText = ":root{--darkColor: white; --lightColor: black;}"
  head.appendChild(style)
  img.src = "dark_mode.png";
  projectImg.src = "lightProjects.png";
  experienceImg.src = "lightExperience.png";
}

function clickHandler() {
  if(lightModeOn){
    DarkMode();
  }else{
    LightMode();
  }
}

window.onload = LightMode();