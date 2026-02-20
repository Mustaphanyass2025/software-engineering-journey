/* Mini Project — BuildTrack Company Model (IMPORTANT)

Create object representing BuildTrack company:

Properties:

name
location
staffCount
activeProjects
subscriptionActive
subscriptionType

Log entire object.

This simulates real SaaS database record.*/

const buildTrackCompany = {
    name: "Taf Construction",
    location: "Banjul",
    staffCount: 100,
    activeProjects: 20,
    subscriptionActive: true,
    subscriptionType: "yearly"
};

console.log(buildTrackCompany);

// function to show dashboard
function showDashboard(company) {
    if (company.subscriptionActive) {
        console.log(company);
    } else {
        console.log("Please activate subscription");
    }
}

showDashboard(buildTrackCompany);