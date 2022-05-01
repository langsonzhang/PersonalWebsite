var hueVal = 0
var blurVal = "0px"
var contrastVal = "100%"
var invertVal = "15%"
var brightnessVal = "120%"

var video = document.getElementById("video")
var videoCont = document.getElementById("cont1")
videoCont.addEventListener('mousemove', updateFilters)
updateFilters()

function updateFilters(event) {
    var filterVal = `hue-rotate(${Math.floor(hueVal / 15) % 360}deg)`
    filterVal += `brightness(${brightnessVal}) contrast(${contrastVal}) blur(${blurVal}) saturate(110%) invert(${invertVal})`
    video.style.filter = filterVal
    hueVal--
}