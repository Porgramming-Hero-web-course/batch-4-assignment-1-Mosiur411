"use strict";
{
    const updateProfile = (person, value) => {
        return Object.assign(Object.assign({}, person), value);
    };
    const myProfile = { name: "Alice", age: 25, contact: 1, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
    //
}
