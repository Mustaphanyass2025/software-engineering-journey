What is control flow? Control flow is the system that determines how a program makes decisions and what instructions execute next based on the current state of the system.

What is the difference between sequential and conditional execution?  Sequential execution means instructions run one after another in a fixed order without making decisions and conditional execution means the program makes decisions and chooses different paths depending on the conditions.

Why must conditions always resolve to true or false? Conditions must always resolve to true or false because computers require precise, unambiguous decisions. The CPU cannot interpret vaque or partial answers like "maybe" or "almost true". It must know exactly which path to follow.

Give 5 examples of conditions in your SaaS.
Example 1:  
Does the current user belong to the active company?  
This prevents users from accessing another company's data.

Example 2:  
Is the user’s role admin?  
This determines whether the user can perform administrative actions.

Example 3:  
Is the project status "active"?  
This determines whether the project can still be edited.

Example 4:  
Is the staff member active?  
This prevents assigning inactive staff to projects.

Example 5:  
Is the user logged in?  
This ensures only authenticated users can access the system.


Describe a dangerous bug that could happen from incorrect conditional logic. A dangerous bug could occur if the system checks whether a user is logged in but fails to check whether the user belongs to the correct company.


Explain how state and control flow work together.  State represents the current data and condition of the system, while control flow uses that state to decide what actions to take.
