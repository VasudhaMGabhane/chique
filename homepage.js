function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("icon");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  
  }
}

// coupon
window.onload = function(){
  document.getElementById('close').onclick = function(){
   this.parentNode.parentNode.remove();
   return false;
  }
}