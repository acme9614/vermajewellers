const menuToggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  drawer.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// drawers menu
function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}


     AOS.init({
      duration: 600,
      once: false
    });


// brandingSwiper 
const swiper = new Swiper(".brandingSwiper", {
        effect: "coverflow",
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            const circle = document.querySelector(".autoplay-progress svg");
            const content = document.querySelector(".autoplay-progress span");
            circle.style.setProperty("--progress", 1 - progress);
            content.textContent = `${Math.ceil(time / 1000)}s`;
          },
        },
      });



       // services

      AOS.init({
        duration: 800,
        once: false,
        disable: false, // 👈 Add this line
      });

      let expanded = false;
      function toggleBoxes() {
        const container = document.getElementById("boxContainer");
        const arrow = document.getElementById("arrowIcon");

        if (!expanded) {
          container.classList.remove("max-h-[13.5rem]");
          arrow.classList.add("rotate-180");
          expanded = true;
        } else {
          container.classList.add("max-h-[13.5rem]");
          arrow.classList.remove("rotate-180");
          expanded = false;
        }
      }

