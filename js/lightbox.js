
document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.querySelector(".gallery");
	const gallery2 = document.querySelector(".gallery2");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = lightbox.querySelector(".lightbox-close");

    let previousFocus = null;

    // Open the selected image
    function openLightbox(image) {
        previousFocus = image;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.hidden = false;
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        closeButton.focus();
    }

    // Close the overlay
    function closeLightbox() {
        lightbox.hidden = true;
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";
        document.body.style.overflow = "";

        if (previousFocus) {
            previousFocus.focus();
        }
    }

    // Handle all current and future gallery images
    gallery.addEventListener("click", function (event) {
        const image = event.target.closest("img");

        if (image && gallery.contains(image)) {
            openLightbox(image);
        }
    });
	
	// Handle all current and future gallery images
    gallery2.addEventListener("click", function (event) {
        const image = event.target.closest("img");

        if (image && gallery2.contains(image)) {
            openLightbox(image);
        }
    });

    // Support keyboard navigation
    gallery.querySelectorAll("img").forEach(function (image) {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label",
            "Enlarge painting: " + image.alt);

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });
	
	// Support keyboard navigation
    gallery2.querySelectorAll("img").forEach(function (image) {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label",
            "Enlarge painting: " + image.alt);

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    // Close button
    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking the dark background
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close with Escape
    document.addEventListener("keydown", function (event) {
        if (!lightbox.hidden && event.key === "Escape") {
            closeLightbox();
        }
    });

});
