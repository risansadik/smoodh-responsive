const image = document.getElementById('spinImage')

window.addEventListener('scroll' , function(){

    const scrollPosition = window.scrollY;

    const rotation = scrollPosition * 0.5;

    image.style.transform = `rotate(${rotation}deg)`
})