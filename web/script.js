
    // 1. Toggle the navigation menu (for mobile or small screens)
    function togglemenu() {
        const menu = document.getElementById("box5");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }

    // 2. Read More button interaction
    const readMoreButton = document.querySelector(".info-section button");
    readMoreButton.addEventListener("click", function () {
        alert("Thank you for your interest! More content coming soon.");
    });

    // 3. Tooltips for icons
    document.getElementById("house-icon").title = "Home Address";
    document.getElementById("email-icon").title = "Email Us";
    document.getElementById("phone-icon").title = "Call Us";

    // 4. Optional smooth scroll (for future internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 5. Search form validation
    const searchForm = document.getElementById("search");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", function (e) {
        if (searchInput.value.trim() === "") {
            e.preventDefault();
            alert("Please enter something to search.");
        }
    });
