// Bolog 1

The significance of union and intersection types in Typescript.
Union Type:
A nuin type in typescript allows a variable and  have one of several types. It is detail use the | operator.
Example: type Animal =  "Cat" | "Bird";

Union Intersection: 
An intersection type combines multiple types into a single type, detail the combination of all types. It is detail use the & operator.
Example: type Info = { name: string } & { number: number };