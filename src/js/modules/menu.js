const menu = (triggersSelector, menuSelector, subMenuSelector) => {
  const menuOpenUpBtns = document.querySelectorAll(triggersSelector),
    menu = document.querySelector(menuSelector),
    activeMenu = document.querySelector(subMenuSelector),
    triggers = document.querySelectorAll(triggersSelector);

  triggers.forEach((btn) => {
    btn.addEventListener("mouseover", (e) => {
      menu.style.display = "block";
    });

    btn.addEventListener("mouseleave", (e) => {
      let related = e.relatedTarget ? e.relatedTarget : "unknown";

      if (related === activeMenu || related === menu) {
        menu.addEventListener("mouseleave", () => {
          menu.style.display = "none";
        });
      } else {
        menu.style.display = "none";
      }
      //
    });
  });
};

export default menu;
