/**
 * Created by Haneya Yunus
 */
litApp.controller('dashboardController', ['$scope', '$window', function($scope, $window) {
    $scope.step1 = true;
    $scope.step2 = false;
    $scope.step3 = false;
    $scope.completedTasks = 0;
    $scope.profile;
    var mind;
    var energy;
    var intro_observe = ["Go for a walk","Get a massage","Pick up Golf" ,"Adopt a pet","Enjoy birdwatching","Get a fish tank","Invest in local companies","Cut clutter by selling online","Start couponing" ,"Try yoga","Catch up on current events","Grow a Bonsai","Schedule a pet visit"];
    var intro_creative = ["Grow a Herb Garden" ,"Cook new recipes","Build a Computer","Start quilting" ,"Start a blog","Learn an instrument","D.I.Y Project","Learn photography","Car restoration","Online poker","Online chess","Read at the library","Listen to a new podcast","Freelance writing","Sell your crafts online (etsy)","Try origami","Make a time capsule","Colouring","Try water colour painting"];
    var extra_observe = ["Participate in a charity walk","Become a Referee" ,"Fishing","Take a trip in an RV","Volunteer" ,"Become a mentor","Join a sports league" ,"Hold a garage sale","Become an Uber driver","Host or attend a bingo night"];
    var extra_creative = ["Swim at your YMCA","Join a local theatre group","Get on social media","Scrapbook with family","Find a penpal","Practice photography","Start a dance class","Teach a class","Trivia night","Make a family cookbook","Attend a local free show","Neighborhood cleanup","Play a family board game"];
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
        $scope.completedTasks++;
        $scope.completed.unshift($scope.tasks[index]);
        removeCurrentTask(index);
        addNextTask();
    };

    $scope.delete = function(index) {
        removeCurrentTask(index);
        addNextTask();
    };
}]);
