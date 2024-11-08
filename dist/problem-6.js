"use strict";
{
    const getPersonInfo = (person, value) => {
        return Object.assign(Object.assign({}, person), value);
    };
    const myProfile = { name: "Alice", age: 25, contact: 1, email: "alice@example.com" };
    console.log(getPersonInfo(myProfile, { age: 26 }));
    //
}
