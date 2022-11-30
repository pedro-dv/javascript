function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var date = new Date()
    var hora = date.getHours()
    var minuto = date.getMinutes()
    
    msg.innerHTML=`Agora são /<strong>${hora}</strong> :<strong>${minuto}</strong> / minutos.`
    
    if (hora >= 0 && hora < 12){
        img.src = "manha.webp"
        //bom dia!
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde!
        img.src = "tarde.webp"
        document.body.style.backgroud = "#b9846f"
    } else {
        //boa noite!
        img.src = "noite.webp"
        document.body.style.background = "#515154"
    }
}  

