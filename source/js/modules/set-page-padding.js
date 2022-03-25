const paddingWrapper = document.querySelector('.intro-content');
const header = document.querySelector('.header');

const setPageWrapperPadding = () => {
  const breakpoint = window.matchMedia('(min-width:1024px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      paddingWrapper.style.paddingTop = `${header.getBoundingClientRect().height}px`;
    } else {
      paddingWrapper.style.paddingTop = '0px';
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

setPageWrapperPadding();

export const resizeWindow = () => {
  setPageWrapperPadding();
};
