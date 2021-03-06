(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    console.log('CLICK');
    console.log('MENU: ', mobileMenuRef);

    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  document.body.addEventListener(
    "touchmove",
    function (e) {
      // console.log(e.changedTouches[0].pageX); // показ коррдинат места прикосновения по X-у.
      mobileMenuRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      menuBtnRef.setAttribute("aria-expanded", false);
    },
    false
  );
})();