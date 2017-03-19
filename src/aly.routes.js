export const AlyRoutes = function($stateProvider, $urlRouterProvider, $locationProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('aly', {
            url: '/main',
            component: 'alyMain'
        });
}
