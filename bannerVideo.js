var hueVal = 0
var blurVal = 0
var contrastVal = 100
var invertVal = 15
var brightnessVal = 110

var video = document.getElementById("video")
var overlay = document.getElementById("video-overlay")
overlay.addEventListener('mousemove', updateFilters)
updateFilters()

function updateFilters(event) {
    var filterVal = `hue-rotate(${Math.floor(hueVal / 15) % 360}deg)`
    filterVal += `brightness(${brightnessVal}%) contrast(${contrastVal}%) blur(${blurVal}px) saturate(110%) invert(${invertVal}%)`
    video.style.filter = filterVal
    hueVal--
}