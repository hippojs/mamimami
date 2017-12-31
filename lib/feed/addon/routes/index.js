import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Route.extend({
  store: service(),
  model() {
    var update = this.get('store').createRecord('update', {
      title: 'EmberFire is flaming hot!',
      body: 'You can store and sync data in realtime without a backend.',
    });
    update.save();
  },
});
