{
    //  problem 5 solved


    const getProperty = <T, X extends keyof T>(infoObject: T, objectkey: X):T[X] => {
      return infoObject[objectkey]
       
       
    }

    const person = { name: "Alice",age:23 };

    const output = getProperty(person, 'age')

    console.log(output);




    //
}