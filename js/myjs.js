document.getElementById("viewProjectsBtn").addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page filename (e.g., "blog.html")
    let currentPage = window.location.pathname.split("/").pop();

    // Select all navbar links
    let navLinks = document.querySelectorAll(".nav-links li a");

    // Loop through links and add "active" class if it matches the current URL
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });
});


function openModal(project) {
    let modal = document.getElementById("modal");
    let modalImages = document.getElementById("modalImages");

    // Clear previous images
    modalImages.innerHTML = "";

    // Define images per project
    let images = [];

    if (project === "project1") {
        images = [
            "images/artwork_tattoo (1).jpg",
            "images/artwork_tattoo (2).jpg",
            "images/artwork_tattoo (3).jpg",
            "images/artwork_tattoo (4).jpg",
            "images/artwork_tattoo (5).jpg",
            "images/artwork_tattoo (6).jpg",
            "images/artwork_tattoo (7).jpg",
            "images/artwork_tattoo (8).jpg",
            "images/artwork_tattoo (9).jpg",
            "images/artwork_tattoo (10).jpg",
            "images/artwork_tattoo (11).jpg",
            "images/artwork_tattoo (12).jpg",
            "images/artwork_tattoo (13).jpg",
            "images/artwork_tattoo (14).jpg",
            "images/artwork_tattoo (15).jpg",
            "images/artwork_tattoo (16).jpg",
            "images/artwork_tattoo (17).jpg",
            "images/artwork_tattoo (18).jpg",
            "images/artwork_tattoo (19).jpg",
            "images/artwork_tattoo (20).jpg",
            "images/artwork_tattoo (21).jpg",
            "images/artwork_tattoo (22).jpg",
            "images/artwork_tattoo (23).jpg",

            
        ];
    } else if (project === "project2") {
        images = [
            "images/project4_output_1.png",
            "images/project4_output_2.png",
            "images/project4_output_3.png"
        ];
    } else if (project === "project3") {
        images = [
            "images/project2_output_1.png",
            "images/project2_output_2.png",
            "images/project2_output_3.png"
        ];
    }
    else if (project === "project4") {
        images = [
            "images/orderabout.png",
            "images/orderhome.png",
            "images/ordercontact.png"
        ];
    }

    // Add images dynamically with grid styling
    images.forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("modal-image"); // ✅ Apply uniform styling
        modalImages.appendChild(img);
    });

    // Show the modal
    modal.style.display = "flex";
}

// Close Modal Function
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
