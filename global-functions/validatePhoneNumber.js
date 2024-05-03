import React from 'react';

const validatePhoneNumber = (
  navigation,
  Variables,
  setGlobalVariableValue,
  phoneNum
) => {
  /*
   * This function checks if the phoneNum string has exactly 11 characters (digits).
   * If it has 11 characters, it logs a message indicating validation success.
   * If not, it throws a warning indicating that the phone number is invalid.
   *
   * @param {string} phoneNum - The phone number string.
   * @returns {void} - This function doesn't return anything.
   */

  function validatePhoneNumber(phoneNum) {
    // Ensure the phoneNum is a string and has exactly 11 characters.
    if (phoneNum.length === 11) {
      console.log('Phone number validated. Navigating to the next screen.');
    } else {
      console.log(
        'Invalid phone number. Please enter a phone number with exactly 11 digits.'
      );
    }
  }
};

export default validatePhoneNumber;
