function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    const btn = document.getElementById("dark-mode-toggle");
    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️";
        localStorage.setItem("tema", "dark"); 
    } else {
        btn.innerHTML = "🌙";
        localStorage.setItem("tema", "light");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        const btn = document.getElementById("dark-mode-toggle");
        if(btn) btn.innerHTML = "☀️";
    }
});

let themeButton = document.getElementById("btnScrollUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        themeButton.style.display = "block";
    } else {
        themeButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}