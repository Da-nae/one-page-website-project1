
let x = document.querySelector("img#logo-header")
let y = document.querySelector("link[rel~='icon']");
let i = 0;

x.addEventListener("click", function() {
    i++
    if(i == 1) {
        x.src = "logo2.png"
        y.href = "favicon2.ico"
    }
    if(i == 2) {
        x.src = "logo3.png"
        y.href = "favicon3.ico"
    }
    if(i == 3) {
        x.src = "logo.png"
        y.href = "favicon.ico"
        i = 0
    }
})

