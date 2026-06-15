"use strict";

// Sidebar Toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Portfolio Filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function filterFunc(value) {
  filterItems.forEach((item) => {
    if (value === "all" || item.dataset.category === value) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

if (select) {
  select.addEventListener("click", () => {
    select.classList.toggle("active");
  });
}

selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const value = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    select.classList.remove("active");
    filterFunc(value);
  });
});

let lastBtn = filterBtns[0];

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText.toLowerCase();

    filterFunc(value);

    lastBtn.classList.remove("active");
    btn.classList.add("active");

    lastBtn = btn;
  });
});

// Contact Form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form) {
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

// Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pageName = link.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      page.classList.remove("active");
    });

    navigationLinks.forEach((nav) => {
      nav.classList.remove("active");
    });

    const activePage = document.querySelector(`[data-page="${pageName}"]`);

    if (activePage) {
      activePage.classList.add("active");
    }

    link.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
