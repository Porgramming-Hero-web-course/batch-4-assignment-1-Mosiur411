{
    //  problem 6 solved

    // interface
    interface PersonInfo {
        name: string,
        email: string,
        age: number;
        contact: number;
    }

    const getPersonInfo = <T extends PersonInfo>(person: T, value: Partial<T>):T => {

        return {...person,...value}
    }


    const myProfile = { name: "Alice", age: 25, contact: 1, email: "alice@example.com" };
    console.log(getPersonInfo(myProfile, { age: 26 }));



    //
}