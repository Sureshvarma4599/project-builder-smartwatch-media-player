setInterval(displayclock,500)
function displayclock(){
  var time= new Date();
  var hrs=time.getHours();
  var min=time.getMinutes();
  

  if(hrs>12){
    hrs=hrs-12;
  }
  if(hrs==0){
    hrs=12;
  }
  if(hrs<10){
    hrs="0"+hrs;
  }
  if(min<10){
    min="0"+min
  }
  document.getElementById("demo").innerHTML=hrs +" : "+ min;
  document.getElementById("demo1").innerHTML=hrs +" : "+ min;

}
function myMusic(){
    document.getElementById("songs").style.display='block';
    document.getElementById("demo").style.display='none';
}
function s1(){
    var sng1=document.getElementById("song1");
    sng1.play();
    
    sng1.style.display="block";
    document.getElementById("song2").pause();
    document.getElementById("song2").style.display="none";
    document.getElementById("song3").pause();
    document.getElementById("song3").style.display="none";
    document.getElementById("audio1").src="./pause1.png";
    document.getElementById("audio2").src="./play.png";
    document.getElementById("audio3").src="./play.png";
}

function s2(){
   document.getElementById("song1").pause();
   document.getElementById("song1").style.display="none";
   document.getElementById("song2").play();
   document.getElementById("song2").style.display="block";
   document.getElementById("song3").pause();
   document.getElementById("song3").style.display="none";
   document.getElementById("audio2").src="./pause1.png";
   document.getElementById("audio3").src="./play.png";
   document.getElementById("audio1").src="./play.png";
   
}
function s3(){
    document.getElementById("song1").pause();
    document.getElementById("song1").style.display="none";
    document.getElementById("song2").pause();
    document.getElementById("song2").style.display="none";
    document.getElementById("song3").play();
    document.getElementById("song3").style.display="block";
    document.getElementById("audio1").src="./play.png";
    document.getElementById("audio2").src="./play.png";
    document.getElementById("audio3").src="./pause1.png";
}