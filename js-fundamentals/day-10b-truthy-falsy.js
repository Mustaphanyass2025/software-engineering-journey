/* Exercise 2 — BuildTrack Project Readiness

let project = {
  staffAssigned: 0,
  budgetAllocated: 5000,
  clientReady: null
};


Log "Project ready" only if all fields are truthy

Log "Project not ready" otherwise

Hint: Use && logic.*/


let project = {
    staffAssigned: 0,
    budgetAllocated: 5000,
    clientReady: null
};

if (project.staffAssigned && project.budgetAllocated && project.clientReady) {
    console.log("Project ready!");
} else {
    console.log("Project not ready!");
}


/* let a = 'false';
let b = ' ';
let c = undefined;

if (a) console.log("a truthy");
if (b) console.log("b truthy");
if (c) console.log("c truthy");
*/

let a = 'false';
let b = ' ';
let c = undefined;

if (a) console.log("a truthy");
if (b) console.log("b truthy");
if (c) console.log("c truthy");


/* 5️⃣ Mini BuildTrack Task

Scenario: Dashboard readiness check

Each project in BuildTrack:

{
  staffAssigned: Number,
  budgetAllocated: Number,
  clientReady: String
}


Task:

Write checkProjectReady(project) function

Log "Project ready" if all fields are truthy

Log "Project not ready" if any falsy

Test 3 projects: fully ready, missing staff, missing budget

Draw stack/heap memory diagrams for each*/

let project1 = {
    staffAssigned: 1,
    budgetAllocated: 50000,
    clientReady: "yes"
};

let project2 = {
    staffAssigned: 0,
    budgetAllocated: 20000,
    clientReady: "yes"
};

let project3 = {
    staffAssigned: 2,
    budgetAllocated: 0,
    clientReady: "yes"
};

function checkProjectReady(project) {
    if (project.staffAssigned && project.budgetAllocated && project.clientReady) {
        console.log("Project ready!");
    } else {
        console.log("Project not ready");
    }
}

checkProjectReady(project1);
checkProjectReady(project2);
checkProjectReady(project3);

/* let budget = 0;
let staff = '0';
let client = '';
let files = [];
let result = budget || staff || client || files;
console.log(result);
*/

let budget = 0;
let staff = '0';
let client = '';
let files = [];
let result = budget || staff || client || files;
console.log(result);
