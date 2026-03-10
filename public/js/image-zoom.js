// Simple image zoom/lightbox for feature images
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    var overlay = document.getElementById('image-zoom-overlay');
    var zoomImg = document.getElementById('image-zoom-img');
    if (!overlay || !zoomImg) return;

    // Click handler for all zoomable images
    document.querySelectorAll('[data-zoomable]').forEach(function(img) {
      img.addEventListener('click', function() {
        // Calculate 150% of the rendered size, but cap to 90% of viewport
        var renderedWidth = img.offsetWidth;
        var renderedHeight = img.offsetHeight;
        var targetWidth = renderedWidth * 1.5;
        var targetHeight = renderedHeight * 1.5;
        var maxWidth = window.innerWidth * 0.9;
        var maxHeight = window.innerHeight * 0.9;

        if (targetWidth > maxWidth || targetHeight > maxHeight) {
          var scale = Math.min(maxWidth / targetWidth, maxHeight / targetHeight);
          targetWidth *= scale;
          targetHeight *= scale;
        }

        zoomImg.src = img.src;
        zoomImg.alt = img.alt;
        zoomImg.style.width = targetWidth + 'px';
        zoomImg.style.height = 'auto';
        zoomImg.style.maxWidth = '90vw';
        zoomImg.style.maxHeight = '90vh';
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
        document.body.style.overflow = 'hidden';
      });
    });

    // Dismiss on click anywhere
    overlay.addEventListener('click', close);

    // Dismiss on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        close();
      }
    });

    function close() {
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }
})();
