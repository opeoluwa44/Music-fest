function createMarquee() {

    const marquee = document.querySelector("span")

    const title = "FIFTY Music Festival — November 10–12, Desert Valley"

    const marqueeText = Array(50).fill(title).join("_")

    marquee.textContent += marqueeText

}

createMarquee()


const circles = document.querySelectorAll(".circle")
const squiggles = document.querySelectorAll(".squiggle")
//console.log(squiggles)

for(let i=0; i<circles.length; i++){
    circles[i].animate([
        {transform: 'scale(.5)'},
        {transform:'scale(1)'},
        {transform:'scale(.5)'}

    ], { duration:2000, 
         iterations:Infinity,
         delay: 300 * i

        
    })
}

const artists = document.querySelectorAll("li")

artists.forEach((artist, index)=>{
    const delay = 300*index
    artist.style.transitionDelay = `${delay}ms`
})

squiggles.forEach((squiggle, index)=>{
    squiggle.animate([
        {transform: 'rotate(0)', transform:'translate(-300PX, 100PX)'},
        {transform: 'rotate(180deg)'},
        {transform:'rotate(0)', transform:'translate(0, 0)'}
    ], {
        duration:3000,
        iterations:Infinity,
        delay:300*index
    })
})

inView('.section')
.on('enter', putIt=> {
    putIt.classList.add ('in-viewport')
})
.on('exit', putIt => {
    putIt.classList.remove ('in-viewport')
})

inView.threshold (0.2)



