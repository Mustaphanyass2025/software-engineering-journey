/* Exercise 1 — Create Company Object

Create object:

companyName
location
staffCount
activeProjects

Log each property.*/

//Company
const company = {
    companyName: "EllipeConstruction",
    location: "17 Garba Jahumpa",
    staffCount: 50,
    activeProjects: 10
};

//Log each property
console.log(company.companyName);
console.log(company.location);
console.log(company.staffCount);
console.log(company.activeProjects);

// modify object
company.staffCount = 55;
console.log(company.staffCount);

// add new property
company.subscriptionActive = true;
console.log(company.subscriptionActive);
console.log(company);