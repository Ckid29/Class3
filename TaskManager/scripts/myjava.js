const iconImportant = "iImportant fas fa-heart";
const iconNonImportant = "iImportant fas fa-heart-broken";
var important = false;
var panelVisible = true;

function toggleImportance() {
  if(important){
    // from imp to not imp
    $("#iImportant").removeClass(iconImportant).addClass(iconNonImportant);
    important = false;
  } else {
    // no imp to imp
    $("#iImportant").removeClass(iconNonImportant).addClass(iconImportant);
    important = true;
  }
}

function togglePanel() {
    if (panelVisible) {
    //form show btn to hide form
       $("#form").hide();
       panelVisible = false;
    } else {
       // form to list
       $("#form").show();
       panelVisible = true;
    }   
}

function saveTask() {
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let dueDate = $("#selDate").val();
    let location = $("#txtLocation").val();
    let invites = $("#txtinvites").val();
    let color = $("#selColor").val();
    let frequency = $("#selFrequency").val();
    let status = $("#selStatus").val();

    //create an object

    let task = new Task(important, title, desc, dueDate, location, invites, color, frequency, status);
    console.log(task);
    displayTask(task);
}

function getStatusText(Status) {
    switch(Status) {
        case "1":
            return "Pending";
        case "2": 
            return "In progress";
        case "3":
            return "Paused";
        case "4": 
            return "Completed";
        case "5":
            return "Abandoned";
        default:
            return "Other";
    }
}
function getFrequencyText(val) {
    switch(val) {
        case "0":
            return "One Time";
        case "1":
            return "Daily";
        case "2":
            return "Weekly";
        case "3": 
         return "Monthly";
    
        default:
             return "";
    }
}

function displayTask(task) {
    let iconClass = iconNonImportant;
    if(task.important) {
        iconClass = iconImportant;
    }
    let syntax = `<div class="task-item" style="border: 1px solid ${task.color};">
    <div class= "icon">
     <i class="${iconClass}"></i>
     </div>

      <div class="info-1">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
      </div>
    
      <div class="info-2">
        <label>${task.dueDate}</label>
        <label>${task.location}</label>
      </div>

      <div class="info-3">
        <p>${task.invites}</p>
      </div>


      <div class="info-2">
        <label>${getStatusText(task.Status)}</label>
        <label>${getFrequencyText(task.frequency)}</label>
      </div>
    
    </div>`;

    $("#tasks").append(syntax);
}

function init() {
  console.log("Task manager page");

  // assign events
  $("#iImportant").click(toggleImportance);
  $("#btnTogglePanel").click(togglePanel);
  $("#btnSave").click(saveTask);

  // load data
}

window.onload = init;