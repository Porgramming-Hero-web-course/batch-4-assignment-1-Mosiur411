{
    //  problem 8 solved


    const validateKeys = <T,X extends (keyof T)[]>(obj: T, keys:X):boolean => {
        const result = keys.every(key => obj[key])
        return result;
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    const output = validateKeys(person, ["name", "age"]) as boolean; //output boolean
    console.log(output)

    //
}