var currentTab = 0;

function showTab(val) {
  var formDivs = document.getElementsByClassName("fcenter");
  formDivs[val].style.display = "block";
}

function validateForm() {
  var formDivs = document.getElementsByClassName("fcenter");
  var inputs = formDivs[currentTab].getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      alert("Please fill the gap");
      return true;
    }
  }
  return false;
}

function nextPrev(val) {
  console.log($("#estimate_homevalue").val());
  if (val == 1) {
    if (validateForm()) {
      return;
    }
    var formDivs = document.getElementsByClassName("fcenter");
    formDivs[currentTab].style.display = "none";
    currentTab = currentTab + 1;
    showTab(currentTab);
  }
}

function submitForm() {
  var postData = {};
  postData["credit_rating"] = $("input[name='credit_rating']:checked").val();
  postData["property_type"] = $("input[name='property_type']:checked").val();
  postData["estimate_homevalue"] = $("#estimate_homevalue").val();
  postData["mortgage_balance"] = $("#mortgage_balance").val();
  postData["desired_loan_amount"] = $("#desired_loan_amount").val();
  postData["best_time_to_call"] = $("#best_time_to_call").val();
  postData["primary_residence"] = $(
    "input[name='primary_residence']:checked"
  ).val();
  postData["generate_rental_income"] = $(
    "input[name='generate_rental_income']:checked"
  ).val();
  postData["condo_maintenance_fees"] = $(
    "input[name='condo_maintenance_fees']:checked"
  ).val();
  postData["multiple_properties"] = $(
    "input[name='multiple_properties']:checked"
  ).val();
  postData["address"] = $("#address").val();
  postData["zip"] = $("#zip").val();
  postData["firstname"] = $("#firstname").val();
  postData["lastname"] = $("#lastname").val();
  postData["email"] = $("#email").val();
  postData["phone"] = $("#phone").val();
  console.log(postData);
  fetch("http://localhost:3000/submitMortgage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
    });
}
