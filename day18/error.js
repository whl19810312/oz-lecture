const showError = (message) => {
    const resultElement = document.getElementById("result");
    resultElement.classList.remove("d-none", "alert-info");
    resultElement.classList.add("alert-danger");
    resultElement.textContent = message;
};
