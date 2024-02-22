import { getElement } from "./uiControl";

export const showToast = (message, displayTime = 3000) => {
  const toastSelector = getElement(".toast");
  const toastMessage = getElement(".toast-message");
  console.log(toastMessage !== null);
  console.log(toastSelector !== null);
  if (toastSelector !== null && toastMessage !== null) {
    toastSelector.classList.add("show");
    toastMessage.innerHTML = message;
    setTimeout(() => {
      toastSelector.classList.remove("show");
    }, displayTime);
  }
};
