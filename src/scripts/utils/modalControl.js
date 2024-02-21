import { getElement } from "./uiControl";

export const openModal = (modalSelector) => {
  const modal = getElement(modalSelector);
  modal.style.display = "block";
};

export const closeModal = (modalSelector) => {
  const modal = getElement(modalSelector);
  modal.style.display = "none";
};
