const display = document.getElementById("calci-display")

function appendToDisplay(input){
display.value += input;
}


function cleardisplay(){
display.value = "";
}

function calculate(){
try{
    display.value=eval(display.value);
}
catch{
    display.value="Error";
}
}