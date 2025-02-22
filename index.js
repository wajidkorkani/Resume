let head = document.querySelector("head");
let style = document.createElement("style");
// let changeModeBtn = document.getElementsByClassName("changeMode");
let img = document.getElementsByClassName("imgMode")[0];
let lightModeOn = true;

function DarkMode(){
  lightModeOn = false;
  style.innerText = ":root{--darkColor: black; --lightColor: white;}"
  head.appendChild(style)
}

function LightMode(){
  lightModeOn = true;
  style.innerText = ":root{--darkColor: white; --lightColor: black;}"
  head.appendChild(style)
}

function clickHandler() {
  if(lightModeOn){
    DarkMode();
    img.src = "light_mode.png";
  }else{
    LightMode();
    img.src = "dark_mode.png";
  }
}

window.onload = LightMode();