window.onload = function() {
  document.getElementById('p1').style.display = 'block';
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p3').style.display = 'none';
  document.getElementById('p4').style.display = 'none';
}
function filllist(val){
if(val === 'personalize'){
  document.getElementById("p1").style.display="block";
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p3').style.display = 'none';
  document.getElementById('p4').style.display = 'none';
}
else if(val === "promote"){
  document.getElementById("p2").style.display="block";
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p3').style.display = 'none';
  document.getElementById('p4').style.display = 'none';
}
else if(val === "reduce"){
  document.getElementById("p3").style.display="block";
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p4').style.display = 'none';
}
else if(val === "prescribe"){
  document.getElementById("p4").style.display="block";
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p3').style.display = 'none';
}
}
