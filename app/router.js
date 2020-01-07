import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('category', function() {
    this.route('create');
    this.route('edit');
  });
  this.route('item', function() {
    this.route('create');
    this.route('edit');
  });
});

export default Router;
