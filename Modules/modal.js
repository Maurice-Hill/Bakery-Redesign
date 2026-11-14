const modal = document.querySelector(".inquiryModal");
const button = document.querySelector(".orderButton");

button.addEventListener("click", () => 
{
    modal.showModal();
});

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();

    const clickedOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside) {
        modal.close();
    }
});
