(function burgerOperations() {
    document.querySelector(".burger").addEventListener("click", () => {
        
        let burgerIcon = document.querySelector(".burger-icon");
        let navLinks = document.querySelector(".nav-links");

        if (navLinks.classList.contains("burger-menu-open")) {

            navLinks.classList.remove("burger-menu-open");
            navLinks.classList.add("burger-menu-close");

            burgerIcon.classList.remove("fa-times");
            burgerIcon.classList.add("fa-bars");
        }else{
            navLinks.classList.remove("burger-menu-close");
            navLinks.classList.add("burger-menu-open");

            burgerIcon.classList.remove("fa-bars");
            burgerIcon.classList.add("fa-times");
        }
    });
})();