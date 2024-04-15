const menuButton = document.querySelector(".menu-button");
const mobileMenuButton = document.querySelector(".burger-menu");
const closeMenu = document.querySelectorAll(".menu");

function toggleModal() {
    const modalDiv = document.querySelector(".sidebar");
    modalDiv.classList.toggle("show");
}

menuButton.addEventListener("click", toggleModal);
mobileMenuButton.addEventListener("click", toggleModal);
closeMenu.forEach(link => {
    link.addEventListener("click", toggleModal);
});


/*window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;

    if (verticalScrollPx < 500) {
        document.body.style.backgroundColor = "#F8F8F8";
    } else if (verticalScrollPx > 500 && verticalScrollPx < 1500) {
        document.body.style.backgroundColor = "#EEEEE6";
    } else if (verticalScrollPx > 1500 && verticalScrollPx < 2500) {
        document.body.style.backgroundColor = "#F8F8F8";
    } else if (verticalScrollPx > 2500 && verticalScrollPx < 6000) {
        document.body.style.backgroundColor = "#EEEEE6";
    } else {
        document.body.style.backgroundColor = "whitesmoke";
    }
});

console.log("Page height:", document.body.scrollHeight);*/