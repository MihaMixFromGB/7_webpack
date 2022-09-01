const toggleButtons = document.getElementsByClassName("toggleButton");
const forms = document.getElementsByClassName("taskForm");

function handleToggleButton(event) {
    const formId = event.target.dataset.form;

    for (let form of forms) {
        form.style.display = (form.getAttribute("id") === formId) ? "block" : "none";
    }
}

for (let btn of toggleButtons) {
    btn.addEventListener("click", handleToggleButton);
}