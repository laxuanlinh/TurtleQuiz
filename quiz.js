(function(){
    
    angular.module("turtleFacts")
        .controller("quizCtrl", QuizController);
    
    QuizController.$inject = ["quizMetrics", "dataService"];

    function QuizController(quizMetrics, dataService){
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = dataService;
        vm.activeQuestion = 0;
        vm.setActiveQuestion = SetActiveQuestion;
        vm.questionAnswered = QuestionAnswered;
        vm.selectAnswer = SelectAnswer;
        vm.numQuestionsAnswered = 0;
        vm.selectQuestion = SelectQuestion;

        function SelectQuestion(index){
            this.activeQuestion = index;
        }

        function SelectAnswer(index){
            dataService.quizQuestions[vm.activeQuestion].selected = index;
        }

        function QuestionAnswered(){
            // alert("testing");
            // vm.activeQuestion++;

            var quizLength = dataService.quizQuestions.length;
            if(dataService.quizQuestions[vm.activeQuestion].selected !== null){
                this.numQuestionsAnswered++;
                if(this.numQuestionsAnswered >= quizLength){
                    //finallize the quiz
                }
            }
            this.setActiveQuestion();
        }

        function SetActiveQuestion(){
            var breakOut = false;
            var quizLength = dataService.quizQuestions.length - 1;
            while(!breakOut){
                vm.activeQuestion = vm.activeQuestion < quizLength ? vm.activeQuestion+1 : 0;
                if(dataService.quizQuestions[vm.activeQuestion].selected === null){
                    breakOut = true;
                }
            }
        }

    }


})()