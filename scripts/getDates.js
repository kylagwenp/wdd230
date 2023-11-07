document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();

    var footerCopyright = document.querySelector("footer p:first-child");
    footerCopyright.innerHTML = "&copy;" + currentYear + " Kyla Papa | Philippines <span class='flag-icon'><img src='images/ph.png' alt='Philippine Flag'></span>";

    var lastModified = document.lastModified;
    var lastModifiedParagraph = document.querySelector("#lastModified");
    lastModifiedParagraph.textContent = "Last Modified: " + lastModified;
});
