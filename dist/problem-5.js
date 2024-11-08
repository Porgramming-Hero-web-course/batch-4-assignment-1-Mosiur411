"use strict";
{
    //  problem 5 solved
    const getProperty = (infoObject, objectkey) => {
        return infoObject[objectkey];
    };
    const person = { name: "Alice", age: 23 };
    const output = getProperty(person, 'age');
    console.log(output);
    //
}
