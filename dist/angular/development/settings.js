(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('AppSettings', {
            appName: 'LCD Market',
            appVersion: 0.1,
            apiUrl: 'http://api.market.soloweb.pt',
            systemId: 4
        });
})();