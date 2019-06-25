// letters-only-validator.ts
import { StringValidator } from './string-validator';

const lettersRegexp = /^[A-Za-z]+$/;

export default class LettersOnlyValidator implements StringValidator {
   isValid(s: string) {
      return lettersRegexp.test(s);
   }
}
