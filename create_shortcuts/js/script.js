document.addEventListener("keypress",function(event){
    let key=event.key;
    console.log(key);

    if(key=="g"){
        window.open("https://www.google.com");
    }else if(key=="y"){
        window.open("https://www.yahoo.com");
    }else if(key=="b"){
        window.open("https://www.bing.com");
    }else{
        alert("Please press correct key");
    }
})

