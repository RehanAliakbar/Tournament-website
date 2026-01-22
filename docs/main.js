document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const backToTop = document.getElementById;
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const icon = mobileMenuButton.querySelector("i");
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // close menu when clicking in a link

  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  mobileMenuLinks.forEach((links) => {
    links.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");

      const icon = mobileMenuButton.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Nav scroll effect

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")("back-to-top");

    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // Show hide to back to top button

    if (window.scrollY > 300) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  // Back to top when button clicked

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  //   Animated Stats Counter

  const stateElements = {
    "live-players": { target: 1284, prefix: "", suffix: "" },
    "active-tournaments": { target: 23, prefix: "", suffix: "" },
    "total-prize": { target: 245000, prefix: "$", suffix: "" },
    "teams-registered": { target: 156, prefix: "", suffix: "" },
  };

  Object.keys(stateElements).forEach((id) => {
    const element = document.getElementById(id);

    if (element) {
      animateCounter(element, stateElements[id]);
    }
  });

  // Tournament countdown timer

  const TournamentTimer = document.querySelectorAll(".tournament-timer");
  TournamentTimer.forEach((timer) => {
    const endTime = new Date(timer.dataset.time).getTime();
    updateCountDown(timer, endTime);
    setInterval(() => updateCountDown(timer, endTime), 1000);
  });
});
