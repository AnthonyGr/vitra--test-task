const smoothScroll = (trigger) => {
  let upBtn = document.querySelector(trigger);

  function runScroll() {
    scrollTo(document.documentElement, 0, 600);
  }
  upBtn.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      runScroll();
    },
    false
  );

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = (difference / duration) * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop == to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }
};

export default smoothScroll;
