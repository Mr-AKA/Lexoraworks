const portfolioItems = document.querySelectorAll(".portfolio-item");
const previewImage = document.getElementById("previewImage");

portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("data-img");
    previewImage.src = imgSrc;

    const modal = new bootstrap.Modal(
      document.getElementById("imagePreviewModal")
    );
    modal.show();
  });
});
