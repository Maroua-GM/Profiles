let buton_Gag = document.getElementById("gag");
buton_Gag.addEventListener("click", f_ouvrirLaPageGag);


function f_ouvrirLaPageGag(){
    buton_Gag.setAttribute("href", "./gag.html")
    // open("./gag.html")
    window.location.href="./gag.html"
    console.log("clock")
}