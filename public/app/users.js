app.controller('UsersCtrl', function($scope, User, ngProgress, toaster) {

    $scope.user = new User();

    var refresh = function() {
        $scope.users = User.query();
        $scope.user ="";
    }
    refresh();

    $scope.add = function(user) {
        User.save(user,function(user){
            refresh();
        });
    };

    

})