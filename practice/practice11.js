/*
TASK-PART-1
Create a class called Customer
- Create a constructor for this class which takes 4 arguments: 
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format: 
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership() 
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*/
class Customer {
    constructor(name, age, membershipType, membershipCost){
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`;
    }
    upgradeMembership() {
        this.membershipType = 'Premium';
        this.membershipCost = this.membershipCost + (this.membershipCost * 20/100);
    }
}

/*
TASK-PART-2
Create a class called VIPCustomer and inherit the Customer class
- Create a constructor for this class which takes 4 arguments: 
    name
    age
    membershipType
    membershipCost
    - Inherit the Customer class constructor and the other methods
- Create a method called applyDiscount() which applies a discount of 10% to the VIP customer's membershipCost.
*/
class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost){
        super(name, age, membershipType, membershipCost)
    }
    applyDiscount() {
        this.membershipCost = this.membershipCost - (this.membershipCost * (10/100)); // or this.membershipCost * 90/100
    }
}

/*
TASK-PART-3
Create a class called BusinessCustomer and inherit the Customer class
- Create a constructor for this class which takes 5 arguments: 
    name
    age
    membershipType
    membershipCost
    duration
    - Inherit the Customer class constructor and the other methods
- Create a method called extendContract() which extends the business customer's contract by 1 year and decreases the cost by %15.
*/
class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration){
        super(name, age, membershipType, membershipCost);
        this.duration = duration;
    }
    extendContract() {
        this.duration = this.duration + 1;
        this.membershipCost = this.membershipCost - (this.membershipCost * (15/100));
    }
}

/*
TASK-PART-4
Create a customer object with below information
customer1 = { name: 'Jane Smith', age: 35, membershipType: 'Basic', membershipCost: 50 }
*/
const customer1 = new Customer('John Doe', 30, 'Basic', 50);

/*
TASK-PART-5
Create a VIP customer object with below information
vipCustomer = { name: 'Jane Smith', age: 35, membershipType: 'Gold', membershipCost: 100 }
*/
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);

/*
TASK-PART-6
Create a business customer object with below information
businessCustomer = { name: 'David Johnson', age: 40, membershipType: 'Platinum', membershipCost: 200, duration: 2 }
*/
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

/*
TASK-PART-7
Execute the upgradeMembership() method for customer1
    -this will upgrade the membership type of customer1 to 'Premium'
Execute the applyDiscount() method for vipCustomer
    -this will apply a discount of 10% to the membership type of vipCustomer
Execute the extendContract() method for businessCustomer
    -this will extend the contract of businessCustomer by 1 year
*/
customer1.upgradeMembership();
vipCustomer.applyDiscount();
businessCustomer.extendContract();

/*
TASK-PART-8
Print information of all the customers using getDetails() method

EXPECTED OUTPUT:
John Doe is 30 years old and has a Premium membership with $60.
Jane Smith is 35 years old and has a Gold membership with $90.
David Johnson is 40 years old and has a Platinum membership with $170.
*/

console.log(customer1.getDetails());
console.log(vipCustomer.getDetails());
console.log(businessCustomer.getDetails());

// NOTE: You can do the same task using Prototypes instead of ES6 classes.
