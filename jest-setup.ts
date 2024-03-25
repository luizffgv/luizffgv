import "@testing-library/jest-dom";

// As jsdom doesn't support HTMLDialogElement, we need to mock it
// See https://github.com/jsdom/jsdom/issues/3294
HTMLDialogElement.prototype.showModal = jest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});
HTMLDialogElement.prototype.close = jest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = false;
});
