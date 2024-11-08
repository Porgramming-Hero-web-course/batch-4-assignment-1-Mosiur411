{
    // problem 2 solved

    // 3 step use solved my problem

    // 1. create input array duplicates value
    const duplicatenumberArray: number[] = [1, 2, 2, 3, 3, 4, 5, 6]

    // 2. create removeDuplicates arrow funtion 
    const removeDuplicates = (params: number[]): number[] => {
        // remove duplicate value use new Set method
        let newarray: number[] = [...new Set(params)]
        return newarray;
    }
    // 3. call arrow funtion
    const output = removeDuplicates(duplicatenumberArray) as number[] // retun number array

    console.log(output) // [ 1, 2, 3, 4, 5, 6 ]



    //
}