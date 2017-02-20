console.log('hello there my friends');
if(process.env.NODE_ENV!=='production'){
  if(module.hot){
    module.hot.accept()
  }
}
require("./styles.css");
import Please from 'pleasejs';
/*const Please=require("pleasejs");*/
const div=document.getElementById("color");
const button=document.getElementById("button");
const changeColor=() => div.style.backgroundColor=Please.make_color();
/*function changeColor(){
  div.style.backgroundColor=Please.make_color();
}*/
button.addEventListener("click",changeColor);