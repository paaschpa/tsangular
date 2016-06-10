module todos {
    interface ITodo {
        completed: boolean;
        title: string;
    }

    export class Todo implements ITodo {
        completed: boolean;
        title: string;
    }

    var todomvc = angular.module('todomvc', []);

    todomvc.controller('TodoCtrl', function TodoCtrl($scope) {
        var testTodo = new Todo();
        testTodo.completed = false;
        testTodo.title = 'Test';
        $scope.todos = [testTodo];
        $scope.editing = {};

        $scope.createTodo = function (t: ITodo): ITodo {
            var newTodo = angular.copy(t);
            $scope.todos.push(newTodo);
            return newTodo;
        } 

        $scope.editTodo = function(idx: number) {
            $scope.editing[idx] = true; 
        }

        $scope.saveTodo = function (idx: number, t: ITodo) {
            var editTodo = $scope.todos[idx];
            editTodo.title = t.title;
            editTodo.completed = t.completed;
            $scope.editing[idx] = false; 
        }
    });
}