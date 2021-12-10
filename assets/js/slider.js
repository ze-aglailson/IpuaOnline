window.addEventListener('load', function(){
    const slider = document.querySelector('.slider')

    slides = Array.from(document.querySelectorAll('.slide'))
    console.log(slides)
    let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID = 0
        currentIndex = 0

    slides.forEach((slide, index)=>{
        //slideImage  
        const slideInfo = slide.querySelector('.informacoes-slide') 
        slideInfo.addEventListener('dragstart', (e)=>e.preventDefault())

        //Touch events
        slide.addEventListener('touchstart', touchStart(index))
        slide.addEventListener('touchend', touchEnd)
        slide.addEventListener('touchmove', touchMove)

        //Mouse events
        slide.addEventListener('mousedown', touchStart(index))
        slide.addEventListener('mouseup', touchEnd)
        slide.addEventListener('mouseleave', touchEnd)
        slide.addEventListener('mousemove',touchMove)

    })

    //Functions
    /*Desativa o menu do botão direito em cima do banner*/
/*     window.oncontextmenu = function(event){
        event.preventDefault()
        event.stopPropagation()
        return false
    } */

    function touchStart(index){

        return function(event){

            currentIndex = index
            startPos = getPositionX(event)
            console.log(startPos)
            isDragging = true

            //animação de arrastar
            animationID = requestAnimationFrame(animation)
            slider.classList.add('grabbing')

        }

    }

    function touchEnd(){

        isDragging = false
        cancelAnimationFrame(animationID)

        const movedBy = currentTranslate - prevTranslate

        if(movedBy < -100 && currentIndex < slides.length - 1)
            currentIndex += 1
        
        if(movedBy > 100 && currentIndex > 0)
            currentIndex -= 1

        setPositionByIndex()

        slider.classList.remove('grabbing')
    }

    function touchMove(event){

        if(isDragging){

            const currentPosition = getPositionX(event)
            currentTranslate = prevTranslate + currentPosition - startPos
        }
    }

    function getPositionX(event){

        return event.type.includes('mouse') ? event.pageX :
        event.touches[0].clientX //captura o inicio

    }

    //Animação de arraste
    function animation(){

        setSliderPosition()

        if(isDragging) requestAnimationFrame(animation)

    }

    //Seta a posição do slider
    function setSliderPosition(){
        slider.style.transform = `translateX(${currentTranslate}px)`
    }

    //Seta o proximo slide ??
    function setPositionByIndex(){
        currentTranslate = currentIndex * -window.innerWidth
        prevTranslate = currentTranslate
        setSliderPosition()
    }

})