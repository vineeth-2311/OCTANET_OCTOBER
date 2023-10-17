document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("js-todo-list"); // Updated selector
    const todoInput = document.querySelector(".input");

    // Function to add a new todo
    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const todoItem = document.createElement("li");
            todoItem.className = "todo-item";

            // Create a span element for the todo text
            const todoTextElement = document.createElement("span");
            todoTextElement.textContent = todoText;
            todoTextElement.className = "todo-text"; // Add a class for text styling

            // Create a delete button
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.addEventListener("click", () => {
                todoItem.remove();
            });

            // Append elements to the todo item
            todoItem.appendChild(todoTextElement);
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);
            todoInput.value = "";
        }
    }

    // Handle form submission to add a new todo
    document.querySelector(".form").addEventListener("submit", function (e) {
        e.preventDefault();
        addTodo();
    });

    // Handle pressing Enter to add a new todo
    todoInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTodo();
        }
    });

    // Handle clicking on the todo item to toggle the "completed" status
    todoList.addEventListener("click", function (e) {
        if (e.target.classList.contains("todo-text")) {
            const todoTextElement = e.target;
            todoTextElement.classList.toggle("completed");
        }
    });
});