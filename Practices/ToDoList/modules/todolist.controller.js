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

      todolist.unfinishedTask = service.getTask();

      todolist.newTask = function () {
        var promise = service.insertNewTask(todolist.task);
        
      }

    };

  }

)();
