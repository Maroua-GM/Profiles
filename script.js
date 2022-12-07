document.getElementById("BMaroua").addEventListener('click',()=>{
 window.open("CvMaroua.html")
 
}) 
document.getElementById("fatmaCV").addEventListener('click',()=>{
    window.open("fatmaCV.html")
   })
   document.getElementById("gaetan").addEventListener('click',()=>{
    window.open("Gaetan.html")
   })
   

 document.getElementById("lien_phil").addEventListener('click', () => {
   window.open("cv_phil.html");    
 })

let buton_Gag = document.getElementById("gag");
buton_Gag.addEventListener("click", f_ouvrirLaPageGag);


function f_ouvrirLaPageGag(){
    buton_Gag.setAttribute("href", "./gag.html")
     open("./gag.html")
    window.location.href="./gag.html"
    console.log("clock")
}