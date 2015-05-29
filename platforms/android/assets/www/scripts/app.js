angular.module('MyApp', ['timer', 'ngRoute', 'ui.bootstrap', 'pascalprecht.translate'])
.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
        when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }
])
.config(['$translateProvider',
   function ($translateProvider) {
       $translateProvider.useStaticFilesLoader({
           prefix: 'lang/locale-',
           suffix: '.json'
       });
       $translateProvider.preferredLanguage('fr');
       $translateProvider.useSanitizeValueStrategy('escaped');
   }
]);