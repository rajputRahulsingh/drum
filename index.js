// var elemet=document.getElementsByClassName("Drum");
// for(var i=0;i<document.getElementsByClassName("Drum").length;i++){
//     elemet[i].addEventListener("click",function(){
//         alert("hello");
//     })
// }
// function handleclick(){
//     alert("hellow");
// }
// document.querySelector("button").addEventListener("click",handleclick);

 var len=document.querySelectorAll(".drum").length;
 for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //    if(i<4) {
    //     var link="./sounds/tom-"+(i+1)+".mp3"

    //     var audio=new Audio('link');
    //    audio.play();  
    // }
    //  else if((i+1)===5){
    //    var audio=new Audio('./sounds/kick-bass.mp3');
    //    audio.play();
    //  }
    //  else if((i+1)===6){
    //     var audio=new Audio('./sounds/crash.mp3');
    //     audio.play();
    //   }
    //   else{
    //     var audio=new Audio('./sounds/snare.mp3'); //audio here it shd be capital A.
    //     audio.play();  
    //   }
  // var link="./sounds/tom-"+(i+1)+".mp3"

       
//         var audio = new Audio("./sounds/tom-1.mp3");
//        audio.play();
      var buttonvalue = this.innerHTML;
      switch(buttonvalue){
         case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break; 
                case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
                 case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break; 
                case "j":
                var tom5 = new Audio("./sounds/snare.mp3");
                tom5.play();
                break;  
                case "k":
                var tom6 = new Audio("./sounds/kick-bass.mp3");
                tom6.play();
                break; 
                case "l":
                 var tom7 = new Audio("./sounds/crash.mp3");
                 tom7.play();
                break; 
                default: console.log(this.innerHTML);                      
      }    

    })
 }