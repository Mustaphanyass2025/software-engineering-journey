/* Mini Project Task — AfriBuildTrack Project Model

Create object:

project
  name
  budget
  client
    name
    country
  manager
    name
    experience

Tasks:

Log client name
Log manager experience
Modify budget
Modify client country*/

const project = {
    name: "Apartment Complex",
    budget: 10000000,
    client: {
        name: "Sainabou Bawor",
        country: "Gambia",
        manager: {
            name: "Mustapha Nyass",
            experience: "Expert"
        }
    }
};

//log the entire project
console.log(project);

// log client 
console.log(project.client.name);

// log manager experience
console.log(project.client.manager.experience);

// modify budget
project.budget = 20000000;
console.log(project.budget);

// modify client country
project.client.country = "Senegal";
console.log(project.client.country);

// now after all the modification log the entire project again 

console.log(project);