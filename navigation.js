window.addEventListener("load", () => {
  const mainNav = document.querySelector(".main-nav");
  const hamburger = document.querySelector(".hamburger-icon");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeIcon = document.querySelector(".close-menu-icon");
  const dimmedOverlay = document.querySelector(".dimmed-overlay");
  const mobileNavPattern = document.querySelector(".mobile-nav-pattern-1");

  function toggleNavigation() {
    if (window.innerWidth >= 768) {
      hamburger.classList.add("hidden");
      mainNav.classList.remove("hidden");
      mobileNav.classList.add("hidden");
      mobileNavPattern.classList.add("hidden");
      dimmedOverlay.classList.add("hidden");
    } else {
      mainNav.classList.add("hidden");
      hamburger.classList.remove("hidden");
      mobileNav.classList.add("hidden");
      mobileNavPattern.classList.add("hidden");
      dimmedOverlay.classList.add("hidden");
    }
  }

  toggleNavigation();
  window.addEventListener("resize", () => toggleNavigation());

  function showMobileNav() {
    hamburger.classList.add("hidden");
    mobileNav.classList.remove("hidden");
    mobileNavPattern.classList.remove("hidden");
    dimmedOverlay.classList.remove("hidden");
  }

  hamburger.addEventListener("click", () => showMobileNav());

  function hideMobileNav() {
    hamburger.classList.remove("hidden");
    mobileNav.classList.add("hidden");
    mobileNavPattern.classList.add("hidden");
    dimmedOverlay.classList.add("hidden");
  }

  closeIcon.addEventListener("click", () => hideMobileNav());
});
