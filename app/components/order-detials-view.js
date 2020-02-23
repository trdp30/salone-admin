import Component from '@ember/component';
import { inject as service } from '@ember/service';
import moment from 'moment';
import { computed } from '@ember/object';

export default Component.extend({
  toast: service(),

  willDestroyElement() {
    this.get('model').rollbackAttributes()
  },

  minDate: moment().toDate(),

  enableConfirm: computed('model.staus', function() {
    return this.get('model.status') == 1
  }),

  enableInProgress: computed('model.staus', function() {
    return this.get('model.status') == 2
  }),

  enableCancel: computed('model.staus', function() {
    return this.get('model.status') == 1 || this.get('model.status') == 2
  }),

  enableComplete: computed('model.staus', function() {
    return this.get('model.status') == 4
  }),

  actions: {
    changeStatus(status_id) {
      this.set('model.status', status_id)
    },
    save() {
      if(this.get('model.status') == 5 && !this.get('model.total_paid')) {
        return this.get('toast').error('Please enter the amount that has paid')
      }
      if(this.get('model.status') == 2 && (!this.get('model.confirm_from') || !this.get('model.confirm_to'))) {
        return this.get('toast').error('Please enter the Confirm slot')
      }
      return this.get('model').save()
      .then(() => {
        this.get('toast').success('Appointment updated successfully')
        this.send('back')
      })
      .catch((e) => {
        if(e.errors && e.errors.length) {
          e.errors.forEach(error => {
            this.get('toast').error(error.title, error.details)
          });
        } else {
          return this.get('toast').error(e);
        }
      })
    },
    back() {
      window.history.back()
    }
  }
});
