var app = angular.module('angularApp', []);

app.controller('Controller', function () {

  var info = this;

  info.employees = [];

  info.totalSalary = 0;

  // info.totalSalary = 0;

  info.addEmp = function() {
    info.employees.push(angular.copy(info.employee)); // make copy of object
    info.calcMonthly();
    info.employee = null; //empties form fields after submit
  };



  info.calcMonthly = function () {
    info.totalSalary = 0;
    info.employees.forEach(function(employee) {
      info.totalSalary += Number(employee.salary);
    });
     (info.totalSalary /= 12).toFixed(2);
  };


// removes employee from employees array and forces recalculation of monthly cost
  info.deleteEmp = function(index) {
    console.log(index);
    info.employees.splice(index, 1);
    info.calcMonthly();
  }
});
