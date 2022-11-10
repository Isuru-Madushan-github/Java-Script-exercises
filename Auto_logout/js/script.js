
let timer=document.getElementById("timer");
let duration=300;

setInterval(updateTimer,1000);

function updateTimer(){
    duration--;
    if(duration<1){
        window.location="logout.html";
    }else{
        let minutes="0"+Math.floor(duration/60);
        let seconds=Math.floor(duration%60);
        if(seconds<10){
            seconds="0"+seconds;
        }
        if(minutes<2){
           timer.style.color="red";
        }
        timer.innerText=minutes+":"+seconds;
    }
}
window.addEventListener("mousemove",resetTimer);

function resetTimer(){
    duration=300;
}