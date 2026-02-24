const databaseProject = {
    id: 1,
    name: "Highway Construction",
    budget: 500000,
    status: "Active"
};

// Create safe clone for editing
//const editingProject = { ...databaseProject };

// modify clone
//editingProject.budget = 750000;

console.log("Database Project:", databaseProject);
//console.log("Editing Project:", editingProject);

// create a function to clone project

function cloneProject(project) {
    return { ...project }
}


const editingProject = cloneProject(databaseProject);
editingProject.budget = 750000;
console.log("Editing Project:", editingProject);