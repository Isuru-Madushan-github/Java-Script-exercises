function validateAge(){
    const agecheck=document.getElementById("age");

    if(!agecheck.checkValidity()){
        document.getElementById("demo").innerHTML=agecheck.validationMessage;
    }else{
        document.getElementById("demo").innerHTML="Age verified!";
    }
}