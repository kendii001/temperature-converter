const textBox= document.getElementById("textBox");
const tofahrenheit= document.getElementById("tofahrenheit") ;
const tocelcius= document.getElementById("tocelcius") ;
const result= document.getElementById("result") ;

let temp;

function convert(){
if (tofahrenheit.checked) {
    temp=number(textBox.value);
    temp=temp*9/5+32;

    result.textContent=temp+"F";
}
else if( tocelcius.checked) { 
    temp=number(textBox.value);
    temp=(temp-32) * (5/9);
    result.textContent=temp.fixed(1)+"C";
}
else{
    result.textContent="select a unit";

}
}