let navigate=document.getElementById("navigate");

navigate.addEventListener("change",function(){
    // window.open(navigate.value,"_self");     //   open the website in same window
    window.open(navigate.value,"myWindow","width=500px,height=300px");  //open the website in pop-up window
    console.log(navigate.value);
})

/////////////////////////////////////////////////////////////////////////////

let province=document.getElementById("province");

province.addEventListener("change",function(){
    let provinceDistrict=province.value;
    console.log(provinceDistrict);


    document.getElementById("space").classList.add("hide");
    document.getElementById("space").classList.remove("show");

    document.getElementById("western").classList.add("hide");
    document.getElementById("eastern").classList.add("hide");
    document.getElementById("northcentral").classList.add("hide");
    document.getElementById("southern").classList.add("hide");
    document.getElementById("northern").classList.add("hide");
    document.getElementById("central").classList.add("hide");
    document.getElementById("sabaragamuwa").classList.add("hide");
    document.getElementById("northwestern").classList.add("hide");
    document.getElementById("uva").classList.add("hide");

    document.getElementById(provinceDistrict).classList.remove("hide");
    document.getElementById(provinceDistrict).classList.add("show");
    
    
});
 
   






















   //let district=document.querySelectorAll(".district");

//    switch(provinceDistrict){
//     case "western":
//         district[0].innerHTML=district[0].innerHTML+`<option value="colombo">Colombo</option>
//         <option value="gampaha">Gampaha</option><option value="kaluthara">Kaluthara</option>`;
//         break;
//     case "eastern":
//         district[0].innerHTML=district[0].innerHTML+`<option value="ampara">Ampara</option>
//         <option value="Batticaloa">Batticaloa</option><option value="trincomalee">Trincomalee</option>`;
//         break;
//     case "northcentral":
//         district[0].innerHTML=district[0].innerHTML+`<option value="anuradhapura">Anuradhapura</option>
//         <option value="polonnaruwa">Polonnaruwa</option>`;
//         break;
//     case "uva":
//         district[0].innerHTML=district[0].innerHTML+`<option value="badulla">Badulla</option>
//         <option value="monaragala">Monaragala</option>`;
//         break;
//     case "southern":
//         district[0].innerHTML=district[0].innerHTML+`<option value="galle">Galle</option>
//         <option value="hambanthota">Hambanthota</option><option value="Matara">Matara</option>`;
//         break;
//     case "northern":
//         district[0].innerHTML=district[0].innerHTML+`<option value="jaffna">Jaffna</option>
//         <option value="kilinochchi">Kilinochchi</option><option value="Mannar">Mannar</option>
//         <option value="mullaitivu">Mullaitivu</option><option value="vavuniya">Vavuniya</option>
//         `;
//         break
//     case "central":
//         district[0].innerHTML=district[0].innerHTML+`<option value="kandy">Kandy</option>
//         <option value="matale">Matale</option><option value="nuwaraeliya">Nuwara Eliya</option>`;
//         break;
//     case "sabaragamuwa":
//         district[0].innerHTML=district[0].innerHTML+`<option value="kegalle">kegalle</option>
//         <option value="rathnapura">Rathnapura</option>`;
//         break;
//     case "northwesten":
//         district[0].innerHTML=district[0].innerHTML+`<option value="kurunegala">Kurunegala</option>
//         <option value="puttalam">Puttalam</option>`;
//         break;
//    }
