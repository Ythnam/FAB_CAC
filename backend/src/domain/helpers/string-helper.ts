import { isNil, trim } from 'lodash';

export class StringHelper {
  static isStringEmpty(input: string): boolean {
    return isNil(input) || trim(input) === '';
  }
}
