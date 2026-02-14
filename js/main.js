window.addEventListener('error', function (event) {
  try {
    const fn = event.filename || '';
    if (fn.indexOf && (fn.indexOf('contentScript.js') !== -1 || fn.indexOf('chrome-extension://') === 0 || fn.indexOf('moz-extension://') === 0)) {
      event.preventDefault();
      return true;
    }
  } catch (e) {
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for in-page links
  const anchors = document.querySelectorAll('a[href^="#"]');
  if (anchors && anchors.length) {
    anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    });
  }

});
