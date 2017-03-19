export const ThemingConfig = function($mdThemingProvider) {
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
