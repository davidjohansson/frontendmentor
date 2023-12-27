const listener = (e) => {
  const idOfClicked = e.target.id
  const identifier = idOfClicked.substr(0, idOfClicked.indexOf('_'));
  const idOfHidden = `${identifier}Over`;
  const image = document.getElementById(`${identifier}_img`)

  // Get the reference to the element you want to hide
  const elementToHide = document.getElementById(idOfHidden);

  if (elementToHide.style.maxHeight) {
    elementToHide.style.maxHeight = null;
    image.src = "./assets/images/icon-plus.svg"
  } else {
    elementToHide.style.maxHeight = elementToHide.scrollHeight + "px";
    image.src = "./assets/images/icon-minus.svg"
  }
}

[1, 2, 3, 4].forEach(i => {
  document.querySelector(`#id${i}_btn`).addEventListener("click", listener);
})

