(
  function(){
    "use strict";
    angular.module("ToDoList")
    .service("TaskService", TaskService);

    function TaskService(){
      var service = this;
      var list = [];

      service.insertNewTask = function (newTask) {
        console.log("Inserting new Task.");
        list.push(newTask);
        console.log("Inserted ", list," succesfully");

      }

      service.getTask = function () {
        return list;
      }

    };

  }
)();
