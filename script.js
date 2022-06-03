
let x = document.querySelector('img#logo-header');
let y = document.querySelector("link[rel~='icon']");
let z = document.querySelector('img#logo-footer');
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
        x.src = "logo4.png"
        y.href = "favicon4.ico"
    }
    if(i == 4) {
        x.src = "logo5.png"
        y.href = "favicon5.ico"
    }
    if(i == 5) {
        x.src = "logo6.png"
        y.href = "favicon6.ico"
    }
    if(i == 6) {
        x.src = "logo.png"
        y.href = "favicon.ico"
        i = 0
    }
})

z.addEventListener("click", function() {
    i++
    if(i == 1) {
        z.src = "logo2.png"
    }
    if(i == 2) {
        z.src = "logo3.png"
    }
    if(i == 3) {
        z.src = "logo4.png"
    }
    if(i == 4) {
        z.src = "logo5.png"
    }
    if(i == 5) {
        z.src = "logo6.png"
    }
    if (i == 6) {
        z.src = "logo.png"
        i = 0
    }
})

