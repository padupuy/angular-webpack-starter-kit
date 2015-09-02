import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './cuisine.routes';
import CuisineController from './cuisine.controller';
import dishesServices from '../../services/dish.services';

export default angular.module('app.cuisine', [uirouter, dishesServices])
  .config(routing)
  .controller('CuisineController', CuisineController)
  .name;
