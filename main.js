let img = document.querySelector(".profile-respon");
let myfan= function() {
    window.scrollBy(0, -110);
}
img.onclick = function() {
    setTimeout(myfan, 800);
}

let button = document.querySelector("button");
let open = 0;
let ul = document.querySelector(".ul-respon");
let shfaf = document.querySelector(".shfaf");
button.onclick = function() {
    if (open == 0) {
        open = 1;
        button.style.color = "white";
        button.style.borderColor = "white";
        ul.style.display = "block";
        shfaf.style.display = "block";
    }
    else {
        open = 0;
        button.style.color = "#b5d1f6";
        button.style.borderColor = "#b5d1f6";
        ul.style.display = "none";
        shfaf.style.display = "none"
    }
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("eve") == 0) {
        open = 0;
        button.style.color = "#b5d1f6";
        button.style.borderColor = "#b5d1f6";
        ul.style.display = "none";
        shfaf.style.display = "none"
    }
});

let li = document.querySelectorAll(".ele-respon");
for (i = 0; i < li.length; i++) {
    if (i != li.length-1) {
        li[i].onclick = function() {
            setTimeout(myfan, 800);
        }
    }
    else {
        break;
    }
}

let sections = document.querySelectorAll(".section");
let eles = document.querySelectorAll(".ele");
window.onscroll = function() {
    for (i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop-150) {
            for (j = 0; j < eles.length; j++) {
                eles[j].style.color = "#b5d1f6";
                eles[j].classList.remove("active");
            }
            eles[i].style.color = "white";
            eles[i].classList.add("active");
        }
    }
    if (window.scrollY < sections[0].offsetTop-150) {
        for (j = 0; j < eles.length; j++) {
            eles[j].style.color = "#b5d1f6";
            eles[j].classList.remove("active");
        }
    }
}

for (i = 0; i < eles.length; i++) {
    eles[i].onmouseover = function() {
        this.style.color = "white";
    }
    eles[i].onmouseout = function() {
        if (this.classList.contains("active")) {
            this.style.color = "white";
        }
        else {
            this.style.color = "#b5d1f6";
        }
    } 
}