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
        .state('aly.contact', {
            url: 'contact',
            component: 'alyContact'
        });
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
    controller: function AlyNavbarComponent($scope, $state, $mdSidenav, $mdMedia) {
        "ngInject";

        let sidenavId = 'left';

        $scope.smallScreen = function() {
            return $mdMedia('xs');
        };

        $scope.openSidenav = function() {
            return $mdSidenav(sidenavId).open();
        };

        $scope.getSelectedTab = function() {
            return $state.current.name.split('.')[1];
        };

        function setState() {
            if ($state.current.name === 'aly') {
                $state.go('aly.home');
            }
        }

        $scope.$watch($state.current.name, setState());
    }
};

var alySidenavComponent = {
    templateUrl: './templates/aly-sidenav.html',
    controller: function AlySidenavComponent($scope, $state, $mdColors, $mdSidenav) {
        "ngInject";

        let sidenavId = 'left';

        $scope.closeSidenav = function() {
            return $mdSidenav(sidenavId).close();
        };

        $scope.stateSelected = function(state) {
            return state === $state.current.name;
        };

        $scope.getStyleByState = function(state) {
            let selected = $scope.stateSelected(state);

            let styles = {
                'background-color': selected ? $mdColors.getThemeColor('accent') : $mdColors.getThemeColor('background')
            };

            return styles;
        };

        $scope.sidenavItems = [
            {
                state: 'aly.home',
                getStyle: function() {
                    return $scope.getStyleByState(this.state);
                },
                text: 'Home'
            },
            {
                state: 'aly.projects',
                getStyle: function() {
                    return $scope.getStyleByState(this.state);
                },
                text: 'Projects'
            },
            {
                state: 'aly.contact',
                getStyle: function() {
                    return $scope.getStyleByState(this.state);
                },
                text: 'Contact'
            }
        ];
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

var alyContactComponent = {
    templateUrl: './templates/aly-contact.html',
    controller: function AlyContactComponent($scope) {
        "ngInject";

        $scope.submitForm = function() {
            console.log('TODO: Implement contact form submission');
        };
    }
};

// Module

var AlyModule = angular.module('aly', ['ui.router', 'ngMaterial'])
    .component('alyHome', alyHomeComponent)
    .component('alyMain', alyMainComponent)
    .component('alyNavbar', alyNavbarComponent)
    .component('alySidenav', alySidenavComponent)
    .component('alyProjects', alyProjectsComponent)
    .component('alyContact', alyContactComponent)
    .config(routesConfig)
    .config(themingConfig)
