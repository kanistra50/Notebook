angular.module('myApp', ['popUpWindow'] )
  .controller('mainCtrl', function($scope) {
  
        $scope.tasks = [
            {date: "2016-05-10", description: 'Apply for SoftServe course', done: 'true'},
            {date: "2016-05-22", description: 'Visiting EPAM conference', done: 'false'},
            {date: "2016-06-29", description: 'Online test in Binary Studio',   done: 'false'},
            {date: "2016-07-15", description: 'ITEA. Final test in AngularJS',  done: 'false'},
        ];
        $scope.limitValue = "10";
        $scope.limitRange = [];

        for (var i = (0 - $scope.tasks.length); i <= $scope.tasks.length; i++) {
            $scope.limitRange.push(i.toString());
        };

        $scope.addTask = function () {
            //console.log($scope.new.date);
            //console.log($scope.new.description);
            $scope.tasks.push( {
                date: $scope.new.date, 
                description: $scope.new.description
            });
            $scope.new.date = '';
            $scope.new.description = '';
        };

        $scope.getDaysLeft = function (task) {
          
            var curNum = this.$index;
            var now = new Date();
            var daysNum = now.getDate();
            var curMonth = now.getMonth()+1; 
            var monthNum =  $scope.tasks[curNum].date.slice(5, 7);
            var taskDaysNum = $scope.tasks[curNum].date.slice(8, 10); 
            //console.log($scope.task)
          
            if ((monthNum==curMonth) && (taskDaysNum > daysNum)) {
              
                var temp=now.setDate(taskDaysNum - daysNum);
                $scope.tasks[curNum].dLeft.push.temp;
              
            } else if (monthNum>curMonth) {
              
                var temp=now.setDate(taskDaysNum - daysNum);
                $scope.tasks[curNum].dLeft.push.temp; 
              
            } else  {
                  $scope.tasks[curNum].dLeft = "Done"; 
            };
            //console.log($scope.task);
        }; 

        $scope.removeTask = function (task) {
            $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        }; 

        $scope.sorterDaysLeft = function (value) {
          return value
        };

});


    angular.module('popUpWindow', [])
      .directive('newForm', function () {
        return {
          restrict: 'E',
          scope: {tesT: 'bind'} ,
          templateUrl: 'forms/form.html'
        }
});  
