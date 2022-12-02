function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
         window.alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src','bebe-homem.webp')
            } else if ( idade < 21) {
                //jovem
                img.setAttribute('src','jovem-homem.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulto-homem.webp')
            } else {
                //idoso
                img.setAttribute('src','velho-homem.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','bebe-mulher.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem-mulher.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulta-mulher.webp')
            } else {
                //idoso
                img.setAttribute('src','velha-mulher.webp')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
      
}

