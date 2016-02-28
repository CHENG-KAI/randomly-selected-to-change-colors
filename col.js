

function getdat_random() {
    var d = new Date();
    var n = d.getMilliseconds();
    //document.getElementById("demo").innerHTML = n;
    var random_subj = n % 16 ;
    return random_subj;
}

function change(){
divs();
if (getdat_random()==0){
   document.getElementById("a_1").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==1){
   document.getElementById("a_2").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==2){
   document.getElementById("a_3").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==3){
   document.getElementById("a_4").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==4){
   document.getElementById("a_5").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==5){
   document.getElementById("a_6").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==6){
   document.getElementById("a_7").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==7){
   document.getElementById("a_8").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==9){
   document.getElementById("a_10").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==10){
   document.getElementById("a_11").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==11){
   document.getElementById("a_12").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==12){
   document.getElementById("a_13").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==13){
   document.getElementById("a_14").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==14){
   document.getElementById("a_15").style.backgroundColor = "#8cc8f0"

}
else if(getdat_random()==15){
   document.getElementById("a_16").style.backgroundColor = "#8cc8f0"

}
}


function timecount(){

myVar = setInterval(change, 250);

}

function divs(){
for (i=1; i<=16; i++){
document.getElementById("a_" + i).style.backgroundColor = "#b48cf0";

 }
}
