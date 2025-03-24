document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");

    // Dynamic Footer (Updates Year Automatically)
    const footer = document.getElementById("footer");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `<p>Trishala Bhasker | Powered by CS | © ${currentYear}</p>`;

    // Highlight Active Page in Navigation
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#nav-menu li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Sidebar Toggle (For Small Screens)
    const sidebar = document.getElementById("sidebar");
    sidebar.addEventListener("click", function() {
        sidebar.classList.toggle("collapsed");
    });
});
