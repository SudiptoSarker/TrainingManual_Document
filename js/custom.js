// Google Translate API
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en', includedLanguages: 'ja,en', autoDisplay: false},
        'google_translate_element'
    );
}
function showLoader() {
    document.getElementById('loader').style.display = 'block'; // Show loader
    document.getElementById('wrap').style.display = 'none'; // Hide content
}

// Function to hide the loader and show the content
function hideLoader() {
    document.getElementById('loader').style.display = 'none'; // Hide loader
    document.getElementById('wrap').style.display = 'block'; // Show content
}
showLoader();

// Function to Auto-Translate to Japanese
function translateToJapanese() {
    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = "ja"; // Set Japanese as the default translation
        select.dispatchEvent(new Event("change"));
    }
    hideLoader();
}

// Wait for Google Translate to Load
setTimeout(translateToJapanese, 1000);

// Manual Language Switcher
document.getElementById("language-select").addEventListener("change", function () {
    var selectedLang = this.value;
    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = selectedLang;
        select.dispatchEvent(new Event("change"));
    }
});

// Listen for the translation to complete
document.addEventListener('DOMContentLoaded', function () {
    var translateElement = document.querySelector('.goog-te-combo');
    if (translateElement) {
        translateElement.addEventListener('change', function () {
            hideLoader(); // Hide loader after translation is complete
        });
    }
});

// Toggle Checklist Submenu
$("#Checklist_toggle").click(function (e) {
    e.preventDefault();
    $("#Checklist_id").slideToggle();
});