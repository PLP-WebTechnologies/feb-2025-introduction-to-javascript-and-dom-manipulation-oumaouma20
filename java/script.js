// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("textContent").textContent = "The text has been changed successfully!";
});

// Modify CSS styles via JavaScript
document.getElementById("toggleStyleBtn").addEventListener("click", function() {
    let body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// Add or remove an element when a button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    let container = document.getElementById("newElementContainer");
    let newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added element!";
    container.appendChild(newElement);
});
