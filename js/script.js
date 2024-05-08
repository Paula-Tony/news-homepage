let navbarIcon = document.querySelector(".navbar-toggler");
let navbarMenu = document.querySelector(".navbar-collapse");
let btnClose = document.querySelector(".btn-close");
let overlay = null;

navbarIcon.addEventListener("click", function () {
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("modal-backdrop", "fade");
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add("show"), 100);
  } else {
    overlay.classList.remove("show");
    setTimeout(() => {
      overlay.remove();
      overlay = null;
    }, 100);
  }
  navbarMenu.classList.add("open");
});
btnClose.addEventListener("click", function () {
  navbarIcon.click();
  navbarMenu.classList.remove("open");
});
