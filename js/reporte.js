
//una funcion para poder insertar un script en el html que incluye link al reporte de manera dinamica
function load(link){
    var src= document.createElement("script")
    src.setAttribute("type","text/javascript")
    src.setAttribute("src",link)
    document.getElementsByTagName("head")[0].appendChild(src)
}


//codigo para que el gif loeder se oculte cuando la página terminó decargar
var loader =document.getElementById("preloader");
window.addEventListener("load",function(){
     loader.style.display="none";
 })



//se crea un script el script con el link del usurio que inicio sesion
load(sessionStorage.getItem("current_user_report_link"))

var btncon = document.getElementById("lista_de_reportes")
var bt=["reporte1","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21191&authkey=%21AAPqS8eMcnnwP8o&em=3&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdHideHeaders=1&wdActiveCell=%22'Hoja1'!H39%22&wdAllowInteractivity=0",
"reporte2","pollll",
"reporte3","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21235&authkey=%21ACCrYePcpBzLH7c&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A50%22",
"reporte4","polll"]
for(let i = 0; i < bt.length; i=i+2){
    if(bt[i]!="2"){
    var cbt = document.createElement("BUTTON")
    cbt.innerHTML=bt[i]
    cbt.className="botones_reportes"
    cbt.onclick = function(){
        sessionStorage.setItem("current_user_report_link",bt[i+1])
        location.reload()
        window.scrollTo(top)

    }
    btncon.appendChild(cbt)
    }
}

load(sessionStorage.getItem("current_user_report_link"))