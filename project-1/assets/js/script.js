window.onload = function() {

    sliderHome = document.getElementById('sliderHome')
    console.log('\nsliderHome: '+sliderHome+'\n')
    sliderHomeInner = sliderHome.children[1]
    console.log('\nsliderHomeInner: '+sliderHomeInner+'\n')
    sliderQuantidade = sliderHomeInner.childElementCount
    console.log('\nsliderQuantidade: '+sliderQuantidade+'\n')
    slides = sliderHomeInner.children
    console.log('\nslides: '+slides+'\n')
    console.log('\nslides[0]: '+slides[0]+'\n')
    imagens = [
        'http://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        'https://pics.freeartbackgrounds.com/fullhd/Country_Landscape_Background-198.jpg',
        'https://wallpaperplay.com/walls/full/f/1/a/31817.jpg'
    ]
    titulos = ['titulo 1','titulo 2', 'titulo 3 ']
    legendas = ['legenda 1','legenda 2', 'legenda 3 ']

    for(let i = 0; i < sliderQuantidade; i++){
        slides[i].firstElementChild.setAttribute('src', imagens[i])
        slides[i].firstElementChild.setAttribute('alt', titulos[i] + ' | '+legendas[i])
        slides[i].children[1].innerText = titulos[i]

    } 


}