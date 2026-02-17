const input=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

addBtn.addEventListener("click",function(){
  const taskText=input.value;

  if(taskText === "") return;

  const li=document.createElement("li");
  const checkbox=document.createElement("input");
  const span =document.createElement("span");
  const deleteBtn=document.createElement("button");
  const editBtn=document.createElement("button");

  checkbox.type ="checkbox";
  span.textContent=taskText;
  deleteBtn.textContent="Delete";
  editBtn.textContent="Edit";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);


  taskList.appendChild(li);
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("done");
    } else {
      span.classList.remove("done");
    }
  });



  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });

editBtn.addEventListener("click", function(){
  const editinput=document.createElement("input");
  editinput.type="text";
  editinput.value=span.textContent;

  li.insertBefore(editinput, span);
  li.removeChild(span);

  editinput,focus()

  editinput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      span.textContent=editinput.value;
      li.replaceChild(span, editinput);
    }
  });
});

  input.value="";

});