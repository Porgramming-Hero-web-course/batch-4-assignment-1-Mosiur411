"use strict";
{
    //  problem 8 solved
    const validateKeys = (obj, keys) => {
        const result = keys.every(key => obj[key]);
        return result;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const output = validateKeys(person, ["name", "age"]); //output boolean
    console.log(output);
    //
}
