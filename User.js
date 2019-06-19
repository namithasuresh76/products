class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        this.printName = this.printName.bind(this);
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    printName(){
        return this.getFirstName() + this.getLastName();
    }
}