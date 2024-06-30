const navAnimation = () => {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}





function page2Animation() {

    let rightElems = document.querySelectorAll(".right-elem")
    rightElems.forEach((rightElem) => {
        rightElem.addEventListener("mouseenter", () => {
            gsap.to(rightElem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        rightElem.addEventListener("mouseleave", () => {
            gsap.to(rightElem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        rightElem.addEventListener("mousemove", (dets) => {
            gsap.to(rightElem.childNodes[3], {
                x: dets.x - rightElem.getBoundingClientRect().x - 50,
                y: dets.y - rightElem.getBoundingClientRect().y - 130
            })
        })
    })
}

navAnimation()
page2Animation()