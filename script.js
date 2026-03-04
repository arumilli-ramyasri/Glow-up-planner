
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.textContent = "Enter valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
});


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button onclick="removeTask(this)">❌</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}


function removeTask(button) {
    button.parentElement.remove();
}

window.onload = function() {

    const moodSelect = document.getElementById("moodSelect");

    moodSelect.addEventListener("change", function() {

        document.body.classList.remove("happy", "focus", "chill");

        if (this.value !== "default") {
            document.body.classList.add(this.value);
        }

    });

};

document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});