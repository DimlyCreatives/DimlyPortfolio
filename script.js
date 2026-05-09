const cards = document.querySelectorAll(".card");
const slider = document.querySelector(".cards-list");

if (slider && cards.length) {
    const setPauseState = (state) => {
        slider.style.animationPlayState = state;
    };

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => setPauseState("paused"));
        card.addEventListener("mouseleave", () => setPauseState("running"));
    });
}

document.getElementById("dimly-email").addEventListener("click", () => {
    const text = "DimlyDimlyStudios@gmail.com";
    navigator.clipboard.writeText(text)
        .then(() => alert("Email copied to your clipboard: " + text))
        .catch(err => console.error("Copy failed:", err));
});

function showDropdown() {
    const dropdown = document.getElementById("nav-dropdown");
    const menuButton = document.getElementById("menu-button");
    dropdown.classList.add("show");
    menuButton.onclick = hideDropdown;
}

function hideDropdown() {
    const dropdown = document.getElementById("nav-dropdown");
    const menuButton = document.getElementById("menu-button");
    dropdown.classList.remove("show");
    menuButton.onclick = showDropdown;
}