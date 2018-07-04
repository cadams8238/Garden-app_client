export const required = value => value ? undefined : 'Required';

export const notEmpty = value => '' ? 'Must not be empty' : undefined;

export const isSixCharLong = value => value.length >= 6 ? undefined : 'Must be at least 6 characters';

export const lessThanSeventyTwoChar = value => value.length <= 72 ? undefined : 'Must be less than 72 characters';

export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with whitespace';




// uses regex
//      (.) matches any single char except newline
//      (.)+ matches any multi string char except newlines
//      @ matches @ symbol

//      /(.)+@(.)+/g matches if there are characters before and after an @ symbol
//          ie: my.name_Sam-Sir@some-mail.name
const regex = /(.)+@(.)+/g;
// const regex = /\S+@\S+\.\S+/;

//NOT WORKING...coming back as false for some reason...
export const isEmail = value => value === regex.test(value) ? undefined : 'Must be a valid email';
