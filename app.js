$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    appendDom(formData);
    appendMonthly(formData);

    clearForm();
  });
});

function appendDom(emp) {
  var $emp = $('<div class="employees"></div>'); // create a div jQuery object
  var $id = $('<div class="idNumber"></div>');
  var $title = $('<div class="jobTitle"></div>');
  var $annSal = $('<div class="annualSalary"></div>');


  $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  $id.append('<p>' + emp.employeeIdNumber + '</p>');
  $title.append('<p>' + emp.employeeJobTitle + '</p>');
  $annSal.append('<p>' + emp.employeeSalary + '</p>');


  $('#employees').append($emp); // append our div to the DOM
  $('#idNumber').append($id);
  $('#jobTitle').append($title);
  $('#annualSalary').append($annSal);
}

function appendMonthly(emp) {
  var $monthlyExpenses = 0;
  $monthlyExpenses = Number($('.monthlyCost1').text());
  var $monthlyCost = $('<div class="monthlyCost1"></div>');
  $monthlyExpenses = $monthlyExpenses += Number(emp.employeeSalary / 12);

  $('.monthlyCost1').remove();

  $monthlyCost.append('<p>' + $monthlyExpenses  + '</p>');

  $('#monthlyCost').append($monthlyCost);
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}
