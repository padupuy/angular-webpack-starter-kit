import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import cuisine from './features/cuisine';
import remote from './features/remote';

import ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';

angular.module('app', [uirouter, ngMaterial, home, cuisine, remote])
  .config(routing)
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
		  .primaryPalette('blue')
		  .accentPalette('red');
  });
