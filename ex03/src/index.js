class Person {
    static display() {
        return message;
    }
    show() {
       console.log("Static method is invoked from Person class")
    }
}

var message = new Person();
message.show();
module.exports = Person;