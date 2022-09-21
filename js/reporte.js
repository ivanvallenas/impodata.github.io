
//codigo para que el gif loeder se oculte cuando la página terminó decargar
var loader =document.getElementById("preloader");
window.addEventListener("load",function(){
     loader.style.display="none";
 })

//una funcion para poder insertar un script en el html que incluye link al reporte de manera dinamica
function load(link){
    var src= document.createElement("script")
    src.setAttribute("type","text/javascript")
    src.setAttribute("src",link)
    document.getElementsByTagName("head")[0].appendChild(src)
}

//se crea un script el script con el link del usurio que inicio sesion
load(sessionStorage.getItem("current_user_report_link"))