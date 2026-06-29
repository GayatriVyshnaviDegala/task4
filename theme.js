const themeBtn=document.getElementById("themeBtn");

let dark=false;

themeBtn.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="#121212";

document.body.style.color="#ffffff";

themeBtn.innerHTML="☀️";

}

else{

document.body.style.background="#f5f8fc";

document.body.style.color="#222";

themeBtn.innerHTML="🌙";

}

}