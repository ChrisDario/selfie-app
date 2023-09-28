var SpeechRecognition=window.webkitSpeechRecognition;
 
var recognition =  new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";

recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if (content=="Take my selfie.") {
        speak()
    }
    
}

function speak() {

    var synth=window.speechSynthesis;

    speak_data="taking your selfie in 4 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

  Webcam.attach(camera)
  
  setTimeout(function(){
    takesnapshot();
    save();
  },50000);

}

Webcam.set({
  width:360,
  height:250,
  image_format:"png",
  png_quality:90  
});
camera=document.getElementById("camera");    

function takesnapshot() {
   
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfy_image" src="'+data_uri+'" >'

    })

}
function save (){

link=document.getElementById("link");
image=document.getElementById("selfy_image").src;
link.href=image;
link.click();
}