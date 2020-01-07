import { helper as buildHelper } from '@ember/component/helper';
import { get } from '@ember/object';

export function getProperty(object) {
  return get(object[0], object[1]);
}

export default buildHelper(getProperty);
