import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('category', function() {
    this.route('create');
    this.route('edit', { path: 'edit/:category_id'});
  });
  this.route('item', function() {
    this.route('create');
    this.route('edit', { path: 'edit/:item_id'});
  });
  this.route('package', function() {
    this.route('create');
    this.route('edit', {path: 'edit/:package_id'});
  });
});

export default Router;
