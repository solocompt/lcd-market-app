(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('AppSettings', {
            appName: 'Solo Market',
            appVersion: 0.1,
            apiUrl: 'https://api.market.soloweb.pt',
            systemId: 4
        });
})();