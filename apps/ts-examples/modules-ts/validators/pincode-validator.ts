// pincode-validator.ts
import { StringValidator } from './string-validator';

export const numberRegexp = /^[0-9]+$/;

export class PincodeValidator implements StringValidator {
   isValid(s: string): boolean {
      return s.length === 6 && numberRegexp.test(s);
   }
}
