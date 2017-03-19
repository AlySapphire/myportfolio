export const AlyRoutes = function($stateProvider, $urlRouterProvider, $locationProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('aly', {
            url: '/',
            redirectTo: '/home',
            component: 'alyMain'
        })
        .state('aly.home', {
            url: 'home',
            component: 'alyHome'
        })
}
