document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("voteCheckbox");
  const submitBtn = document.getElementById("submitBtn");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      submitBtn.disabled = false;
      submitBtn.classList.add("enabled");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("enabled");
    }
  });
});
