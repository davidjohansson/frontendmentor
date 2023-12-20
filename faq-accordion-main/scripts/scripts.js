const listener = (e) => {
    const idOfClicked = e.target.id
    const idOfHidden = `${idOfClicked}Over`;
  //
  // Get the reference to the element you want to hide
   var elementToHide = document.getElementById(idOfHidden);

       if (elementToHide.style.maxHeight){
      elementToHide.style.maxHeight = null;
      e.target.src = "./assets/images/icon-plus.svg" 
    } else {
      elementToHide.style.maxHeight = elementToHide.scrollHeight + "px";
      e.target.src = "./assets/images/icon-minus.svg" 
    } }

[1, 2, 3, 4].forEach(i => {
document.querySelector(`#id${i}`).addEventListener("click", listener    );
})

