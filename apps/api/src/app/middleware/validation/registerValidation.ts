import Validator from 'validator'
import isEmpty from 'is-empty'

function validateRegisterInput(data:any) {
 // let errors = {};
  let errors:any={}
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.rePassword = !isEmpty(data.rePassword) ? data.rePassword : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
   
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.rePassword)) {
    errors.rePassword = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.rePassword)) {
    errors.rePassword = "Passwords must match";
  }
return {
  errors,  
  isValid:isEmpty(errors)  
  };
};

export default validateRegisterInput