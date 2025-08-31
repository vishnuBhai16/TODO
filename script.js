function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  let li = document.createElement("li");
  li.textContent = taskText;
  // Toggle done on click
  li.onclick = function () {
    li.classList.toggle("done");
  };
  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
