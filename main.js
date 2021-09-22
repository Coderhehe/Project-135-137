status="";
resultsa=[];
var SpeechRecognition= window.webkitSpeechRecognition;
var r= new SpeechRecognition();
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    video.size(480,380);
}


function draw(){
    image(video,0,0,480,380);
    if (status!="") {
        for (i = 0; i < reultsa.length; i++) {
            percent=floor(object[i].confidence * 100);
            text(object[i].label+" "+percent+"% ",object[i].x+15,object[i].y+15);
          
        }
    }
}
function start() {
     objectdectect=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
tinput=document.getElementById("input").value;
if (object[i].label==tinput) {
    video.stop()
    objectdectect.detect(gotResult);
    document.getElementById("foundstatus").innerHTML="Object Mentioned Found";
    var synth=window.speechSynthesis;
    ut=new SpeechSynthesisUtterance(tinput);
    synth.speak(ut);
  }
  else{
    document.getElementById("foundstatus").innerHTML="Object Mentioned Not Found";  
  }
}

function modelLoaded() {
    console.log("Model Loaded");
    status=true;
    video.speed(1);
    video.volume(0);
    video.loop();
}

function gotResult(results) {
resultsa=results[0];    
}