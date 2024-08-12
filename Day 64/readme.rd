in todays article we had a look on type annotations in objects inwe're defining an object named personExTwo with specific type annotations for its properties:

name is a required string property for the person's name.
age is a required number property for the person's age.
jobTitle is an optional string property for the person's job title, indicated by jobTitle?: string.
address is an object with two required properties: street (string) and city (string).
We initialize personExTwo with specific values for each property. Later in the code, we modify some properties. Finally, we use console.log to display the property values of personExTwo. typescript:

