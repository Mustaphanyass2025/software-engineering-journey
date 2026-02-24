/* Exercise 1 — Create Nested AfriBuildTrack Company

Create object:

company
  name
  location
  subscription
    plan
    price

Log:

plan
price*/

const company = {
    name: "Ellipse Construction",
    location: "Bakau",
    subscription: {
        plan: "Yearly",
        price: 1000
    }
};

// log plan and price 
console.log(company.subscription.plan);
console.log(company.subscription.price);

/* Exercise 2 — Modify Nested Property

Change subscription plan.

Log before and after.

Observe memory behavior.*/

//memory before
console.log(company.subscription.plan);
// update subsciption
company.subscription.plan = "Monthly";
// memory after
console.log(company.subscription.plan);

/*Exercise 3 — Reference Test

Create:

const subscriptionRef = company.subscription;

Modify using subscriptionRef.

Log original company.

Explain why it changed.*/

const subscriptionRef = company.subscription;

// modify using subscriptionRef
subscriptionRef.price = 500;
console.log(company);
console.log(subscriptionRef);
console.log(company.subscription.price);