import { getElement } from "./uiControl";

export const openModal = (modalSelector) => {
  const modal = getElement(modalSelector);
  modal.style = "display: block; background-color: rgba(0,0,0,0.7);";
};

export const closeModal = (modalSelector) => {
  const modal = getElement(modalSelector);
  modal.style.display = "none";
};
