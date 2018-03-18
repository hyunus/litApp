/**
 * Created by Haneya Yunus
 */
litApp.controller('dashboardController', ['$scope', '$window', function($scope, $window) {
    $scope.step1 = true;
    $scope.step2 = false;
    $scope.step3 = false;
    $scope.profile;
    var mind;
    var energy;
    var intro_observe = [];
    var intro_creative = [];
    var extra_observe = [];
    var extra_creative = ["Bake cookies", "Listen to music", "Pet your cat", "Go on an adventure", "Play bingo", "Watch TV", "Take a nap"];
    var masterList;
    var listIndex;

    function addNextTask() {
        $scope.tasks.unshift(masterList[listIndex]);
        listIndex++;
    }

    function removeCurrentTask(index) {
        $scope.tasks.splice(index, 1);
    }

    $scope.generateList = function() {
        mind = $scope.profile[0];
        energy = $scope.profile[1];

        if(mind === 'E' && energy === 'N') {
            masterList = extra_creative;
        } else if (mind === "E" && energy === 'S') {
            masterList = extra_observe;
        } else if (mind === 'I' && energy === 'N') {
            masterList = intro_creative;
        } else if (mind === 'I' && energy === 'S') {
            masterList = intro_observe;
        }
    
        $scope.tasks = masterList.slice(0, 3);
        listIndex = 3;
        $scope.completed = [];
        $scope.step2 = false;
        $scope.step3 = true;
    }

    $scope.open = function() {
        $scope.step1 = false;
        $scope.step2 = true;
        window.open("https://www.16personalities.com/free-personality-test");
    }

    $scope.complete = function(index) {
        $scope.completed.unshift($scope.tasks[index]);
        removeCurrentTask(index);
        addNextTask();
    };

    $scope.delete = function(index) {
        removeCurrentTask(index);
        addNextTask();
    };
}]);
