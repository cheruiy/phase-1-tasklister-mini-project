document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Get the task description entered by the user
      const taskDescription = document.getElementById("new-task-description").value;

      // Create a new task element
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Append the new task element to the task list
      taskList.appendChild(taskItem);

      // Reset the input field
      form.reset();
  });
});
