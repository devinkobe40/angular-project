(
  function(){
    "use strict";
    angular.module("ToDoList",[])
    .controller("ToDoListController", ToDoListController);

    ToDoListController.inject = ["TaskService"];
    function ToDoListController(TaskService){
      var service = TaskService;
      var todolist = this;
      todolist.task = "";
      todolist.finished = "";

      // Tasks thats not done
      // todolist.unFinishedTask = service.getTask();

      // Tasks that are completed
      // todolist.listFinishedTask = service.getCheckTask();

      todolist.newTask = function () {
        service.insertNewTask(todolist.task);
        // Empties the input box
        todolist.task = "";
      }

      todolist.finishedTask = function (index) {
        service.checkTask(index);
        console.log("index of",index);
      }

      todolist.unFinishedTask = function () {
        return service.getTask();
      }

      todolist.listFinishedTask = function () {
        return service.getCheckTask();
      }
    };

  }

)();
