// Splash Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("app").style.display = "block";
    }, 2000);
});

// Dark Mode
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        darkBtn.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        darkBtn.innerHTML = "🌙";
    }
});

// Load Theme
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkBtn.innerHTML = "☀️";
    }
};

// Card Click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

        let title = card.querySelector("h3").innerText;

        alert("Opening " + title);

    });
});

// Bottom Navigation
document.querySelectorAll("nav button").forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Coming Soon");

    });

});

// Internet Status
window.addEventListener("online", () => {
    console.log("Internet Connected");
});

window.addEventListener("offline", () => {
    alert("No Internet Connection");
});

// Register Service Worker
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js");

}
// Search

document
.getElementById("searchBtn")
.addEventListener("click",()=>{

let value=document
.getElementById("searchInput")
.value;

if(value==""){

alert("Please type something.");

}else{

alert("Searching : "+value);

}

});

// Category Click

document
.querySelectorAll(".category")
.forEach(item=>{

item.onclick=()=>{

alert(item.innerText);

};

});