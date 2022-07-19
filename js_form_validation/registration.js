function validateControls() {
  //FirstName
  const fname = document.getElementById("fname");
  if (fname.value == "") {
    window.alert("please enter your first name");
    fname.focus();
    return false;
  }
  //LastName
  const lname = document.getElementById("lname");
  if (lname.value == "") {
    window.alert("please enter your last name");
    lname.focus();
    return false;
  }

  const email = document.getElementById("email");
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value) || email.value == "") {
    alert("Please provide a valid email address");
    email.focus;
    return false;
  }

  const mobile = document.getElementById("mobile");
  const filter1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (!filter1.test(mobile.value) || mobile.value == "") {
    window.alert("please enter your 10 digits mobile no.");
    mobile.focus();
    return false;
  }

  //Address
  const address = document.getElementById("address");
  if (address.value == "") {
    window.alert("please enter your address details");
    address.focus();
    return false;
  }

  getControlValues();
  document.myform.reset(); // clear all details of form

}
function getControlValues() {
  alert(
    "First Name= " +
      fname.value +
      "\n" +
      "Last Name= " +
      lname.value +
      "\n" +
      "Email= " +
      email.value +
      "\n" +
      "Mobile= " +
      mobile.value +
      "\n" +
      "Address= " +
      address.value
  );
}

