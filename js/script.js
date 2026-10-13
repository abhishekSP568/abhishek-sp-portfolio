// Customize these placeholders before publishing your portfolio.
const SITE_CONFIG = {
  email: "abhisheksp2004abhi@gmail.com",
  phone: "7625032730",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/abhishek-s-p-a61b3927b",
  projects: {
    segmentation: "https://github.com/yourusername/customer-segmentation",
    "fake-job": "https://github.com/yourusername/fake-job-prediction",
    hospital: "https://github.com/yourusername/hospital-management-system",
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");
const navAnchors = [...document.querySelectorAll(".nav-link")];

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  navLinks.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navAnchors.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

function updateHeader() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.href = `mailto:${SITE_CONFIG.email}`;
});
document.querySelectorAll("[data-email-text]").forEach((element) => {
  element.textContent = SITE_CONFIG.email;
});
document.querySelectorAll("[data-phone-link]").forEach((link) => {
  link.href = `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`;
});
document.querySelectorAll("[data-phone-text]").forEach((element) => {
  element.textContent = SITE_CONFIG.phone;
});
document.querySelector('[data-social="github"]').href = SITE_CONFIG.github;
document.querySelector('[data-social="linkedin"]').href = SITE_CONFIG.linkedin;

document.querySelectorAll("[data-project]").forEach((link) => {
  const projectUrl = SITE_CONFIG.projects[link.dataset.project];
  link.href = projectUrl;
});

document.getElementById("current-year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = formData.get("name").toString().trim();
  const senderEmail = formData.get("email").toString().trim();
  const message = formData.get("message").toString().trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\n${message}`);

  formFeedback.textContent = `Your email app should open with a message addressed to ${SITE_CONFIG.email}.`;
  window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
});
