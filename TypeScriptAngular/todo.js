var todos;
(function (todos) {
    var Todo = (function () {
        function Todo() {
        }
        return Todo;
    })();
    todos.Todo = Todo;
    var todomvc = angular.module('todomvc', []);
    todomvc.controller('TodoCtrl', function TodoCtrl($scope) {
        var testTodo = new Todo();
        testTodo.completed = false;
        testTodo.title = 'Test';
        $scope.todos = [testTodo];
        $scope.editing = {};
        $scope.createTodo = function (t) {
            var newTodo = angular.copy(t);
            $scope.todos.push(newTodo);
            return newTodo;
        };
        $scope.editTodo = function (idx) {
            $scope.editing[idx] = true;
        };
        $scope.saveTodo = function (idx, t) {
            var editTodo = $scope.todos[idx];
            editTodo.title = t.title;
            editTodo.completed = t.completed;
            $scope.editing[idx] = false;
        };
    });
})(todos || (todos = {}));
//# sourceMappingURL=todo.js.map