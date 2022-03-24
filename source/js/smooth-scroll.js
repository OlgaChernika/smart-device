// import {moveTo} from './vendor/move-to';

const anchors = document.querySelectorAll('[data-anchor]');
const header = document.querySelector('.header');
const headerHight = header.getBoundingClientRect().height;

const moveToAnchor = new window.MoveTo({
  tolerance: `${headerHight}`,
});

export const initAnchors = () => {
  anchors.forEach((anchor) => {
    moveToAnchor.registerTrigger(anchor);
  });
};
