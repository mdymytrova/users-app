window.onload = () => {
  const openModal = document.getElementsByClassName("open-modal");
  const closeModal = document.getElementsByClassName("close-modal");
  
//   Open edit form for each user
  Array.prototype.forEach.call(openModal, (button => {
    button.addEventListener("click", function() {
        const modal = document.querySelector(`[data-modal='${button.dataset.open}']`);
        modal.classList.add("show");
    });
  }));

    //   Close edit form for each user
  Array.prototype.forEach.call(closeModal, (button => {
      button.addEventListener("click", function() {
        let modal = document.querySelector(`[data-modal='${button.dataset.close}']`);
        modal.classList.remove("show");
      });
  }));
  
};
