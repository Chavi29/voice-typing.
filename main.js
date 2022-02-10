function voice(){
  
  var recognition = new webkitSpeechRecognition();
  
  recognition.lang="en-GB";
  recognition.onresult= function(event){
    console.log(event);
    
    document.getElementById("speechtotext").value = event.results[0][0].transcript;
    
    
  }
  recognition.start();
  
}



/* function voice(){
  var recognition = new webkitSpeechRecognition();
  
  recognition.lang="en-GB";
  recognition.onresult= function(event){
      console.log(event);
      
      
    document.getElementById("speechtotext").value = event.results[0][0].transcript;


  }
  recognition.start();
} */ 


/* function voice(){
  
  var recognition = webkitSpeechRecognition();
  
  recognition="en GB";
  recognition.onresult=function(event){
    
    console.log(event);
    
    document.getElementById("speechtotext").value = event.result[0][0].transcript;
    
    
  }
  
  
  recognition.start();
  
  
}*/
