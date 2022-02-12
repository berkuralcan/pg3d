console.log("berk here")

let playing = true

const playButton = document.getElementById("playButton");
const playButtonContent = document.getElementById("playButtonContent")
const mainTest = document.getElementById("3dTest")
const changeButton = document.getElementById("change")

const rotation = function() {
    console.log("Performing rotation.")
    if(playing) {
        playButtonContent.innerHTML = "⏸"
        mainTest.setAttribute("auto-rotate", "")
        mainTest.setAttribute("camera-controls", "")

    } else {
        playButtonContent.innerHTML = "▶️"
        mainTest.removeAttribute("auto-rotate")
        mainTest.removeAttribute("camera-controls")
        
    }

}

playButton.addEventListener("click", function() {
    console.log("Button clicked.")
    playing = !playing
    console.log(playing)
    rotation()
})

var currentIndex = 0

const changed = function() {
    console.log("Performing change")
    if(currentIndex < 3) {
        currentIndex += 1
        mainTest.setAttribute("src", `${currentIndex}.gltf`)
         mainTest.setAttribute("ios-src", `${currentIndex}.usdz`)
         console.log("Current index is", currentIndex)
    } else {
        currentIndex = 0
        mainTest.setAttribute("src", "0.gltf")
        mainTest.setAttribute("ios-src", "0.usdz")
    }
}

changeButton.addEventListener("click", function() {
    changed()
})




