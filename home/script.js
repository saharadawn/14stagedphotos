window.addEventListener('DOMContentLoaded', function() {
    var currentImageIndex = 0;
    var images = document.querySelectorAll('#image-container img');
    var totalImages = images.length;

    function cycleImages() {
      images[currentImageIndex].style.display = 'none';
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      images[currentImageIndex].style.display = 'block';
    }

    setInterval(cycleImages, 200); // Change the interval as needed (milliseconds)
  });

   // JavaScript code to handle the click events
   document.getElementById("foundPhotos").addEventListener("click", function() {
    // Replace the URL below with the desired destination URL for "Found Photos"
    window.location.href = "found_photos.html";
});

document.getElementById("stagedCounterparts").addEventListener("click", function() {
    // Replace the URL below with the desired destination URL for "Staged Counterparts"
    window.location.href = "staged_counterparts.html";
});