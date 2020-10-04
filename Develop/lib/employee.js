// TODO: Write code to define and export the Employee class
class Employee {
    // class variables
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      // set the class variables for id and email
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
  }

  module.exports = Employee