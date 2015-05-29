angular.module('MyApp').controller('LanguageCtrl', ['$translate', '$scope',
  function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
}])