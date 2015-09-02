routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('cuisine', {
      url: '/cuisine',
      views: {
        '' : {
          template: require('./cuisine.html'),
          controller: 'CuisineController',
          controllerAs: 'data',
        },
        'dataTable@cuisine': {   template: require('./cuisine.partial.table.html') }
      }
    });
}
