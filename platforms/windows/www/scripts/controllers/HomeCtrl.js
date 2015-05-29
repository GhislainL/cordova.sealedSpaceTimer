angular.module('MyApp')
    .controller('HomeCtrl', ['$scope', function ($scope) {
      $scope.shape = 'rectangle';
      $scope.hauteur = 0;
      $scope.largeur = 0;
      $scope.longueur = 0;
      $scope.rayon = 0;
      $scope.volume = 0;
      $scope.nbPersonne = 1;
      $scope.timerRunning = false;

      //http://en.wikipedia.org/wiki/Volume
      $scope.computeVolume = function () {
        switch($scope.shape) {
          case 'rectangle':
            return $scope.hauteur * $scope.longueur * $scope.largeur;
            break;
          case 'sphere':
            return (4 * Math.PI * Math.pow($scope.rayon,3))/3;
            break;
          case 'cylindre':
            return Math.PI * Math.pow($scope.rayon,2) * $scope.hauteur;
            break;
          default:
            return $scope.volume;
        };
      };

      $scope.isEnoughSpace = function(){
        var res = ($scope.computeVolume() /( 0.1 * $scope.nbPersonne) >= 1);
        return res ? true : false;
      };

      $scope.computeTimeLeft = function(){
        if($scope.isEnoughSpace()){
          var timeLeft = 1.5 * $scope.computeVolume() / $scope.nbPersonne;
          // timerLeft en h * 60 * 60
          return timeLeft * 3600;
        }
        
        return 0;
      };

      $scope.startTimer = function () {
          $scope.$broadcast('timer-start');
          $scope.timerRunning = true;
      };

}])