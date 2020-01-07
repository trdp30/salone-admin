import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    return this.router.replaceWith('category')
  }
});
