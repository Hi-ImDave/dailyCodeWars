function validPhoneNumber(phoneNumber){
  let bool = false;  
  if(phoneNumber[0] == '(' && phoneNumber[4] == ')' && phoneNumber[9] == '-' && phoneNumber.length == 14){
      bool = true
  }
  return bool
}
