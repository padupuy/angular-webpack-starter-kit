routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('remote', {
      url: '/remote',
      template: require('./remote.html'),
      controller: 'RemoteController',
      controllerAs: 'remote'
    });
}
