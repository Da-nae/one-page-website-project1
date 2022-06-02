
let x = document.querySelector("img#logo-header")
let i = 0;

x.addEventListener("click", function() {
    i++
    if(i == 1) {
        x.src = "logo2.png"
    }
    if(i == 2) {
        x.src = "logo3.png"
    }
    if(i == 3) {
        x.src = "logo.png"
        i = 0
    }
})

