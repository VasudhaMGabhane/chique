var cpnbtn = document.getElementById("cpnbtn");
var cpncode = document.getElementById("cpncode");

cpnbtn.onclick = function(){
  navigator.clipboard.writeText(cpncode.innerHTML);
  cpnbtn.innerHTML = "COPIED";
  setTimeout(function(){
    cpnbtn.innerHTML = "COPY CODE"
  }, 3000);
}