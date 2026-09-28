const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

// Create lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="close">&times;</button>
    <button class="prev">&#10094;</button>
    <img class="lightbox-image" src="" alt="Large Image">
    <button class="next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeButton = lightbox.querySelector(".close");
const prevButton = lightbox.querySelector(".prev");
const nextButton = lightbox.querySelector(".next");

// Show image
function showImage(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].src;
    lightbox.style.display = "flex";
}

// Click image
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        showImage(index);
    });
});

// Next image
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Previous image
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Close lightbox
closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});