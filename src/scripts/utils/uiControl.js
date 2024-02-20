// Create an element with an optional CSS class
export const createElement = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
};

// Retrieve an element from the DOM
export const getElement = (selector) => {
  const element = document.querySelector(selector);
  return element;
};
