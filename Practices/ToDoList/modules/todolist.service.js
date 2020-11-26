(
  function(){
    "use strict";
    angular.module("ToDoList")
    .service("TaskService", TaskService);

    function TaskService(){
      var service = this;
      var list = [];
      var checkedTask = [];

      service.insertNewTask = function (newTask) {
        console.log("Inserting new Task.");

        if (newTask == "") {
          list.push("nothing");
        }else {
          list.push(newTask);
        }
        console.log("Inserted ", list," succesfully");

      }

      service.checkTask = function (index) {

          // putting it on ongoing task
          checkedTask.push(list[index]);
          
          // removed it from the ongoing task
          list.splice(index, 1);
          console.log("removed ",list[index]);
        }

      service.getTask = function () {
        return list;
      }

      service.getCheckTask = function () {
        return checkedTask;
      }
    };

  }
)();
