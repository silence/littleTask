import "./main.scss"
import "normalize.css"
//import hammer from "hammerjs"

const sHeight = document.querySelector(".a").clientHeight
const sLength = document.querySelectorAll(".section").length
const mainWrap = document.querySelector(".main-wrap")
const main = document.querySelector(".main")
const PCT = 0.1 //移动多少百分比触发scroll
let sIndex = 0
let isScroll = false
let sMoveStart, sMoveEnd, sMove, percentage

let scrollTo = i => {
    isScroll = true
    main.style.top = `${-i * sHeight}px`
    setTimeout(() => {
        isScroll = false
    }, 700)
}

mainWrap.addEventListener("touchstart", e => {
    sMoveStart = e.changedTouches[0].clientY
    mainWrap.addEventListener("touchend", e => {
        sMoveEnd = e.changedTouches[0].clientY
        sMove = sMoveStart - sMoveEnd
        percentage = Math.abs(sMove) / sHeight
        if (
            sMove > 0 &&
            percentage > PCT &&
            !isScroll &&
            sIndex !== sLength - 1
        ) {
            sIndex++
            scrollTo(sIndex)
        }
        if (sMove < 0 && percentage > PCT && !isScroll && sIndex !== 0) {
            sIndex--
            scrollTo(sIndex)
        }
    })
})

Array.from(document.querySelector(".a").querySelectorAll("p")).forEach(p => {
    p.addEventListener("click", () => {
        sIndex = 1
        scrollTo(1)
    })
})

document
    .querySelector(".d")
    .querySelector("span")
    .addEventListener("click", () => {
        sIndex = 0
        scrollTo(0)
    })



