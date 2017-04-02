// Config functions

var routesConfig = function($stateProvider, $urlRouterProvider, $locationProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('aly', {
            url: '/'
        })
        .state('aly.home', {
            url: 'home',
            component: 'alyHome'
        })
        .state('aly.projects', {
            url: 'projects',
            component: 'alyProjects'
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

// Components

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

        function setState() {
            if ($state.current.name === 'aly') {
                $state.go('aly.home');
            }
        }

        $scope.$watch($state.current.name, setState());
    }
};

var alyHomeComponent = {
    templateUrl: './templates/aly-home.html',
    controller: function AlyHomeComponent() {
        "ngInject";
    }
};

var alyProjectsComponent = {
    templateUrl: './templates/aly-projects.html',
    controller: function AlyProjectsComponent() {
        "ngInject";
    }
};

// Module

var AlyModule = angular.module('aly', ['ui.router', 'ngMaterial'])
    .component('alyHome', alyHomeComponent)
    .component('alyMain', alyMainComponent)
    .component('alyNavbar', alyNavbarComponent)
    .component('alyProjects', alyProjectsComponent)
    .config(routesConfig)
    .config(themingConfig)
