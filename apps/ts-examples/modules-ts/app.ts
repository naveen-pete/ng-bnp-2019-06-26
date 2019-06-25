// app.ts
import { PincodeValidator } from './validators/pincode-validator';
import { PincodeValidator as PV } from './validators/pincode-validator';
import * as Validator from './validators/pincode-validator';
import * as AllValidators from './validators/validators';
import LettersOnlyValidator from "./validators/letters-only-validator";

const pv = new PincodeValidator();
console.log(pv.isValid('123456'));  // true

const pv1 = new PV();
console.log(pv1.isValid('12345'));   // false

const pv2 = new Validator.PincodeValidator();
console.log(pv2.isValid('ABC123'));   // false

console.log(Validator.numberRegexp);   // /^[0-9]+$/

const uv = new AllValidators.UsernameValidator();
console.log(uv.isValid('hari krishna')); // false

console.log(AllValidators.numberRegexp);   // /^[0-9]+$/

const lv = new LettersOnlyValidator();
console.log(lv.isValid('shiv12'));
