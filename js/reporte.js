
let reports_list = []
reports_list=JSON.parse(sessionStorage.getItem("current_user_reports_list"))


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

//se crea una serie de botones en un div en base a los reportes a los que tiene acceso el cliente, los botones hacen que la pagina se recargue y se muestre el nuevo reporte
var btncon = document.getElementById("lista_de_reportes")
var bt=reports_list
for(let i = 0; i < bt.length; i=i+3){
    if(bt[i]!="0"){
    var cbt = document.createElement("BUTTON")
    cbt.innerHTML=bt[i+1]
    cbt.className="botones_reportes"
    cbt.onclick = function(){
        sessionStorage.setItem("current_user_report_link",bt[i+2])
        location.reload()
        window.scrollTo(top)
    }
    btncon.appendChild(cbt)
    }
}

load(sessionStorage.getItem("current_user_report_link"))