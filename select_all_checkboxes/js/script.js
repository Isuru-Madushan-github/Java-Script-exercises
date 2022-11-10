let checkBoxes=document.getElementsByClassName("chbx");
console.log(checkBoxes);

let all=document.getElementById("all");

all.addEventListener("click",function(event){
    event.preventDefault();
    for(let a=0; a<checkBoxes.length; a++){
        checkBoxes[a].checked=true;
    }
});

let none=document.getElementById("none");

none.addEventListener("click",function(){
    for(let a=0; a<checkBoxes.length; a++){
        checkBoxes[a].checked=false;
    }
});