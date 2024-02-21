function video() {
    let video = document.querySelector('.videos')
    gsap.to(".videos", {
        x: '-400vw',
        ease: 'none',
        scrollTrigger: {
            trigger: '.main',
            start: 'top top',
            end: `+=${video.offsetWidth}`,
            pin: ".main",
            scrub: 1
        }
    })
}
video()


var bgimages = document.querySelectorAll(".bgimage")
var page2 = document.querySelector(".page2")
bgimages.forEach(function (image) {
    image.addEventListener("mouseenter", function () {
        var background = image.getAttribute("data-img")
        page2.style.backgroundImage = `url(${background})`
    })
    image.addEventListener("mouseleave", function () {
        page2.style.backgroundImage = "none"
    })
})
var closer = document.querySelector("#close")
var contact = document.querySelector(".contact-btn")
var contactPage = document.querySelector(".contact")
contact.addEventListener("click", function () {
    contactPage.style.transform = "translateY(0%)"
    closer.style.display = "block"
})

closer.addEventListener("click", function () {
    contactPage.style.transform = "translateY(-100%)"
    closer.style.display = "none"
})