(function () {
    angular.module("turtleFacts").controller("listCtrl", ListController);

    ListController.$inject = ["quizMetrics", "dataService"];

    function ListController(quizMetrics, dataService) {
        var vm = this;
        vm.data = dataService.turtleList;

        vm.quizMetrics = quizMetrics;

        vm.activeTurtle = {};

        vm.changeActiveTurtle = changeActiveTurtle;

        vm.search =  "";

        vm.activateQuiz = activateQuiz;

        function activateQuiz(){
            quizMetrics.quizActive = !quizMetrics.quizActive;
        }

        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }

    }

})()