// username-validator.ts
import { StringValidator } from './string-validator';

class UsernameValidator implements StringValidator {
   isValid(s: string): boolean {
      return s.indexOf(' ') < 0;
   }
}

export { UsernameValidator };
export { UsernameValidator as UserValidator };
