export const initJs = () => {
  const disabledElements = document.querySelectorAll('.no-js');
  disabledElements.forEach((element) => {
    element.classList.remove('no-js');
  });
};
