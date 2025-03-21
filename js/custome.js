// Toggle menu for mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
});

// Language dropdown change
document.getElementById("language-select").addEventListener("change", function () {
    var selectedLang = this.value;
    alert("Language changed to: " + selectedLang);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar ul li a");
    const submenus = document.querySelectorAll(".sidebar ul li.has-submenu > a");

    // Function to remove active class from all menu items
    function removeActiveClasses() {
        menuItems.forEach(item => item.classList.remove("active"));
    }

    // Function to toggle submenu on click
    submenus.forEach(menu => {
        menu.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            let parentLi = this.closest(".has-submenu");
            let submenu = parentLi.querySelector("ul");

            if (submenu.style.display === "block") {
                submenu.style.display = "none"; // Collapse submenu
                parentLi.classList.remove("open"); // Remove the "open" class to change icon
            } else {
                // Close all other submenus before opening the clicked one
                document.querySelectorAll(".sidebar ul li ul").forEach(sub => {
                    sub.style.display = "none";
                    sub.closest(".has-submenu").classList.remove("open"); // Reset other icons
                });

                submenu.style.display = "block"; // Expand submenu
                parentLi.classList.add("open"); // Add "open" class to change icon
            }
        });
    });

    // Function to add active class to the clicked menu item
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            removeActiveClasses();
            this.classList.add("active");
        });
    });
});


// Translation JS
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en', includedLanguages: 'ja,en', autoDisplay: false},
        'google_translate_element'
    );
}
