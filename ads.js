/* ================================
   Camcookie Ads Loader
   Version 1.0
   ================================ */

(function () {

  // URL of your iframe ads page
  const AD_IFRAME_URL = "https://camcookie876.github.io/ads/";

  // Automatically find all ad slots on the page
  function init() {
    const slots = document.querySelectorAll("[data-camcookie-ad]");

    slots.forEach(slot => {
      loadAdInto(slot);
    });
  }

  // Load the iframe into a slot
  function loadAdInto(slot) {
    const width = slot.getAttribute("data-width") || "320px";
    const height = slot.getAttribute("data-height") || "250px";
    const radius = slot.getAttribute("data-radius") || "14px";

    const iframe = document.createElement("iframe");
    iframe.src = AD_IFRAME_URL;
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.style.border = "none";
    iframe.style.borderRadius = radius;
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";

    slot.appendChild(iframe);
  }

  // Start automatically
  document.addEventListener("DOMContentLoaded", init);

})();