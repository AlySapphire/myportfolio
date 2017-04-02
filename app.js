var routesConfig = function($stateProvider, $urlRouterProvider, $locationProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('aly', {
            url: '/',
            redirectTo: '/home'
        })
        .state('aly.home', {
            url: 'home',
            component: 'alyHome'
        })
}

var themingConfig = function($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('pink')
        .accentPalette('pink')
        .dark();

    $mdThemingProvider.enableBrowserColor({
        theme: 'default',
        palette: 'primary',
        hue: '500'
    });
}

var alyHomeComponent = {
    templateUrl: './templates/aly-home.html',
    controller: function AlyHomeComponent() {
        "ngInject";
    }
};

var alyMainComponent = {
    templateUrl: './templates/aly-main.html',
    controller: function AlyMainComponent() {
        "ngInject";
    }
};

var alyNavbarComponent = {
    templateUrl: './templates/aly-navbar.html',
    controller: function AlyNavbarComponent($scope, $state) {
        "ngInject";

        $scope.getSelectedTab = function() {
            return $state.current.name.split('.')[1];
        }
    }
};


var AlyModule = angular.module('aly', ['ui.router', 'ngMaterial'])
    .component('alyHome', alyHomeComponent)
    .component('alyMain', alyMainComponent)
    .component('alyNavbar', alyNavbarComponent)
    .config(routesConfig)
    .config(themingConfig)
