import Component from '@ember/component';
import TableCommon from '../mixins/table-common';
import _ from 'lodash';

export default Component.extend(TableCommon, {
  didInsertElement() {
    this.set('totalWidth', _.sumBy(this.get('columns'), 'width'))
  }
});
