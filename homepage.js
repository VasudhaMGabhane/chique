// hamburger icon
function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
    return false;
  } else {
    x.style.display = "none";
    
  }
  
}

// coupon
window.onload = function(){
  document.getElementById('close').onclick = function(){
   this.parentNode.parentNode.style.display = "none";
   return false;
  }

  document.getElementById('couponopen').onclick = function(){
    this.parentNode.parentNode.style.display = "block";
   
  }
}

// dark mode
const colorSwitch = document.getElementById('input-color-switch');

colorSwitch.addEventListener('click',checkMode);

function checkMode(){
  console.log('checking');
  if(colorSwitch.checked){
    console.log('dark on');
    darkModeOn();
  }
   else{
    console.log('dark off');
    darkModeOff();
   }
}
function darkModeOn(){
  document.body.classList.add("dark-mode");
}
function darkModeOff(){
  document.body.classList.remove("dark-mode");
}
