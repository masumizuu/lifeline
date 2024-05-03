import React from 'react';

const is11 = phoneNum => {
  /*
   * This code snippet checks if the string's length is equal to 11 digits
   *
   * @param textInputValue - The string to be checked. Add this as a parameter to your existing function.
   * @returns {boolean} - Returns true if the length of the string is equal to 11, else false
   */

  // Check if length of string is equal to 11
  if (phoneNum.length === 11) return 1;
  else {
    console.log('HINDI YAN 11 DIGITS.');
    return 0;
  }

  /*
Warnings: 
Make sure the input is of string type to avoid undefined errors. 
This won't check if string contains only digits, it only checks the length.
*/
};

export default is11;
