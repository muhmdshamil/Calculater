var screen = document.getElementById("screen");

function screenInput(value){
   screen.value += value;
}

function Clearscreen(){
    screen.value = '';
}

function result(value){
   try{
    screen.value=eval(screen.value);
  
   }catch{
      screen.value ="Error"
   }
}