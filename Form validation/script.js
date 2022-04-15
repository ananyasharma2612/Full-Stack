function validate() {
  var password = document.myform.pass.value;
  var cpassword = document.myform.cpass.value;

  if (password != cpassword) {
    alert(
      'password : ' +
        password +
        ' and confirm password' +
        cpassword +
        ' fields do not match!!!!'
    );

    document.myform.pass.value = '';
    document.myform.cpass.value = '';
    document.myform.pass.focus();
    return false;
  }
  return true;
}
