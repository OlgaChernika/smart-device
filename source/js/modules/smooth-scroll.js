const anchors = document.querySelectorAll('[data-anchor]');
const header = document.querySelector('.header');
const headerHight = header.getBoundingClientRect().height;

const moveTo = new window.MoveTo({
  tolerance: `${headerHight}`,
});

export const initAnchors = () => {
  anchors.forEach((anchor) => {
    moveTo.registerTrigger(anchor);
  });
};
