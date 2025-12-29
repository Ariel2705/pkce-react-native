import { isRejectedWithValue } from "@reduxjs/toolkit";

const getErrorMessage = (errorData: any) => {
  let { message } = errorData;
  if (errorData.fieldErrors) {
    errorData.fieldErrors.forEach((fErr: any) => {
      message += `\nfield: ${fErr.field},  Object: ${fErr.objectName}, message: ${fErr.message}\n`;
    });
  }
  return message;
};

export default () => (next: any) => (action: any) => {
  /**
   *
   * The error middleware serves to log error messages from dispatch
   * It need not run in production
   * TODO: Replace DEVELOPMENT constant with proper env check
   */
  if (true) {
    const { error } = action;
    if (error) {
      console.error(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);
      if (error.response && error.response.data) {
        const message = getErrorMessage(error.response.data);
        console.error(`Actual cause: ${message}`);
      }
      if (isRejectedWithValue(action)) {
        console.error('❌ Error global:', {
          action: action.type,
          message: action.payload,
        });
      }
    }
  }
  // Dispatch initial action
  return next(action);
};
