const paddingWrapper = document.querySelector('.intro-content');
const header = document.querySelector('.header');

const setPageWrapperPadding = () => {
  paddingWrapper.style.paddingTop = `${header.getBoundingClientRect().height}px`;
};

setPageWrapperPadding();

export const resizeWindow = () => {
  setPageWrapperPadding();
};
