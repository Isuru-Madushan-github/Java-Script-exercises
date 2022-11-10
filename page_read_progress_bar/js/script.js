const progress=document.querySelector(".progress");

const pageHeight=document.body.clientHeight-window.innerHeight;


window.addEventListener("scroll",function(){
    const progressBar=Math.floor((window.scrollY/pageHeight)*100);
    console.log(progressBar);
    progress.style.width=progressBar+'%';
});

//window.scrollY====>get a pixel value of specific position of Y axis, when scrolling page.
//document.body.clientHeight====>page full height.
//window.innerHeight===>returns the height of a window's content area.