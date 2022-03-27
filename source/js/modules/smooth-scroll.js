const anchors = document.querySelectorAll('[data-anchor]');
const header = document.querySelector('.header');
let headerHight;
if (header) {
  headerHight = header.getBoundingClientRect().height;
} else {
  headerHight = 0;
}

const moveTo = new window.MoveTo({
  tolerance: `${headerHight}`,
});

export const initAnchors = () => {
  anchors.forEach((anchor) => {
    moveTo.registerTrigger(anchor);
  });
};
