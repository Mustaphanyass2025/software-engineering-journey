/* Implement the following functions:

Task 1:

Create a function that displays a welcome message for a company.

Input:

company name

Output:

welcome message displayed*/

const greet = function (companyName) {
    let message = "Welcome, " + companyName.charAt(0).toUpperCase() + companyName.slice(1) + "!";
    console.log(message);
}

greet("ellipseconstruction");

/* Task 2:

Create a function that accepts:

project name
client name

Output:

display project creation message*/


function createProject(projectName, clientName) {
    let message = `Project ${projectName} for client ${clientName} created!`;
    console.log(message);
}

createProject("Aky Villa", "Muhammed Njie");


/* Task 3:

Create a function that accepts:

user role

Output:

return true if role is admin
return false otherwise*/

function isAdmin(userRole) {
    if (userRole === "admin") {
        return true;
    } else {
        return false;
    }
}

console.log(isAdmin("admin"));

/* Task 4:

Create a function that accepts:

material cost
labor cost

Output:

return total project cost*/

function calCost(materialCost, laborCost) {
    const total = materialCost + laborCost;
    return total;
}

console.log(calCost(10000, 3000));