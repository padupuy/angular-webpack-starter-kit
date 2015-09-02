import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './remote.routes';
import RemoteController from './remote.controller';
import remoteServices from '../../services/remote.services';

export default angular.module('app.remote', [uirouter, remoteServices])
  .config(routing)
  .controller('RemoteController', RemoteController)
  .name;
