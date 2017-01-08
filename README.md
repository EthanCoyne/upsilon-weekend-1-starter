# Weekend 1 Challenge

## Created by Ethan Coyne on 1/8/17

#Synopsis
This project will take in employee data (Name, employee ID number, job title, and annual salary) and create an index table of all employees added. It then takes the total anual salary information and calculates monthly salary costs for the company.

#Code Example
After creating the form fields for first name, last name, id#, job title, and annual salary, an empty formData array is created, and the formData is then serialized into an array, for later use.
var formData = {};
var formAsArray = $(this).serializeArray();

This formData array is passed into a function that appends the DOM with the pertinent information:
function appendDom(emp) {
var $emp = $('<div class="employees"></div>'); // create a div jQuery object

$emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add employee data

$('#employees').append($emp); // append new div to the DOM

The total annual salaries of all employees are added together, and divided by 12 to obtain the total monthly expenses:
var $monthlyExpenses = 0;
$monthlyExpenses = Number($('.monthlyCost1').text());
var $monthlyCost = $('<div class="monthlyCost1"></div>');
$monthlyExpenses = $monthlyExpenses += Number(emp.employeeSalary / 12);

When adding new employees, the previous monthly cost is removed:
$('.monthlyCost1').remove();

Then the new total cost is added to the DOM:
$monthlyCost.append('<p>' + $monthlyExpenses  + '</p>');
$('#monthlyCost').append($monthlyCost);

Finally, every time a new employee is submitted, the forms are cleared, ready to add a new employee:
function clearForm() {
  $('form').find('input[type=text]').val('');
}

#Motivation
This will allow a company to know their exact monthly expenses as they add new employees, as well as see a list of all current employees and their pertinent information.

#API Reference
This project was created using the jQuery library.
