function load(link){
    var src= document.createElement("script")
    src.setAttribute("type","text/javascript")
    src.setAttribute("src",link)
    document.getElementsByTagName("head")[0].appendChild(src)
}

load(sessionStorage.getItem("tercera"))