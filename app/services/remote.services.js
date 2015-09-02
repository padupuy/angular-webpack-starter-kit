import angular from 'angular';

class Remote {
  constructor($http) {
    this.$http = $http;
    this.fakeAPI = 'http://jsonplaceholder.typicode.com';
  }

  getUsers() {
      return this.$http.get(this.fakeAPI + '/users');
  }
}

export default angular.module('services.remote', [])
  .service('remote', Remote)
  .name;

angular.module('services.remote').$inject = ['$http'];
