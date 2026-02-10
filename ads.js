/* ================================
   Camcookie Ads Loader
   Version 2.0 — Styled + Left Aligned
   ================================ */

(function () {

  const AD_IFRAME_URL = "https://camcookie876.github.io/ads/";

  function init() {
    const slots = document.querySelectorAll("[data-camcookie-ad]");
    slots.forEach(slot => loadAdInto(slot));
  }

  function loadAdInto(slot) {

    // Force slot styling (overrides page CSS)
    slot.style.display = "block";
    slot.style.margin = "20px 0";          // left aligned
    slot.style.textAlign = "left";         // left aligned
    slot.style.padding = "10px";
    slot.style.border = "2px solid #2563eb";  // Camcookie blue outline
    slot.style.borderRadius = "12px";
    slot.style.background = "#f0f7ff";        // soft blue background
    slot.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    slot.style.width = "fit-content";         // shrink to content
    slot.style.maxWidth = "100%";             // responsive

    // Read optional attributes
    const width = slot.getAttribute("data-width") || "320px";
    const height = slot.getAttribute("data-height") || "250px";
    const radius = slot.getAttribute("data-radius") || "10px";

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.src = AD_IFRAME_URL;
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.style.border = "none";
    iframe.style.borderRadius = radius;
    iframe.style.display = "block";

    slot.appendChild(iframe);
  }

  document.addEventListener("DOMContentLoaded", init);

})();
