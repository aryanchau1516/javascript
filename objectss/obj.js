// objects in js is the form of key and value par and nested objects and function which is separated by comma,
let firname;
let lastName
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    /** or functon
     * fullName() {
      return this.firstName + " " + this.lastName;
    }
     */
    notes :{
    introd:" hello aryan"
    }
  };
console.log(person.fullName())
console.log(person.notes.introd)
console.log(person.firstName)