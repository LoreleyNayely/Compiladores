
let sound = new Audio('./jingle-bells-christmas-hip-hop-128137.mp3')

playBtn.addEventListener('click',()=>{
    sound.play()
})

pauseBtn.addEventListener('click',()=>{
    sound.pause()
})
