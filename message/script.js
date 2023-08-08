const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getMessage();
    }
});

document.querySelector("#submit").addEventListener("click", () => {
    getMessage();
});

function getMessage() {
    const messageOutput = document.getElementById("message-output");
    messageOutput.innerHTML = messageInput.value;
    messageInput.value = "";
}

