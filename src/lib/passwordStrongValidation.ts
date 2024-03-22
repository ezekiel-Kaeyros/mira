
function validatePassword(password: any) {
    // Minimum length of 8 characters
    if (password.length < 8) {
      return false;
    }
  
    // Contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // Contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    // Contains at least one digit
    if (!/[0-9]/.test(password)) {
      return false;
    }
  
    // Contains at least one special character
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      return false;
    }
  
    // Passes all validation criteria
    return true;
}

export default validatePassword;