Answer in your own words:

What is a variable really? A variable is a named reference to a location in memory.

Where does data live when a program is running? Data lives in memory (RAM) while a program is running.

What is the difference between a variable and a value?  A value is the actual data stored in memory. A variable is the name that refers to the memory location holding that value.

What is state in a software system?  State is the complete set of all data values in a system at a specific moment in time. It represents the current condition of the application.


Give 3 examples of state from your construction SaaS.  currentUser = Mustapha

userRole = Project Manager

activeCompany = ABC Construction

Describe one possible state-related bug in your SaaS and why it would happen.  Cross-Company Data Leak After Switching Accounts
Scenario:

A user logs into Company A.

The frontend loads all Company A projects.

The user logs out.

The same browser logs into Company B.

The UI still shows Company A’s projects temporarily.

Why Would This Happen?

Because state was not fully cleared.

The system failed to reset:

activeCompany

cached project data

in-memory frontend state

The backend may be correct.

But the frontend still holds stale state from the previous session.