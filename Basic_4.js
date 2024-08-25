function check(){
let num = document.getElementById("num").value;
let numberis;
if(num%2==0){
        numberis="even number";
}
else{
    numberis="odd number";
    }
document.getElementById("first").innerHTML=numberis;
    }
