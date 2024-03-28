document.addEventListener("DOMContentLoaded", function () {
    // Define alternate image sources
    const alternateImageSources = {
        "./tie.JPG": "./alternate-tie.JPG",
        "./pin.png": "./alternate-pin.png",
        "./cutlery.JPG": "./alternate-cutlery.JPG",
        "./leaf.JPG": "./alternate-leaf.JPG",
        "./binder.JPG": "./alternate-binder.JPG",
        "./20.JPG": "./alternate-20.JPG",
        "./earbuds.JPG": "./alternate-earbuds.JPG",
        "./glove.png": "./alternate-glove.png",
        "./glass.png": "./alternate-glass.png",
        "./cup.png": "./alternate-cup.png"
    };

    // Keep track of the current state of the images and grid layout
    let isToggled = false;

    // Function to toggle images and grid layout
    function toggleImages() {
        const grid = document.querySelector(".grid");
        const gridItems = document.querySelectorAll(".grid-item img");

        // Toggle image sources
        gridItems.forEach(img => {
            const currentSrc = img.getAttribute("src");
            const alternateSrc = alternateImageSources[currentSrc];
            if (alternateSrc) {
                img.setAttribute("src", isToggled ? alternateSrc : currentSrc);
            }
        });

        // Toggle grid layout
        grid.classList.toggle("single-row");

        // Toggle the state
        isToggled = !isToggled;
    }

    // Attach toggle event to the button
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleImages);
});
