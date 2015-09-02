import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNamesServices from '../../services/randomNames.services';

export default angular.module('app.home', [uirouter, randomNamesServices])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
