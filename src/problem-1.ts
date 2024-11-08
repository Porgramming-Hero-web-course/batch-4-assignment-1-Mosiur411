{
    // problem 1 solved

    // 3 step use solved my problem

    // 1. create input array
    const sumvalueArray: number[] = [1,2,3,4,5,6]

    // 2. create sumArray arrow funtion value received  number array and retrun just number value
    
    const sumArray = (params: number[]): number => {
        // sum store number count variable in 
        let count:number = 0;
        params?.map((elemt:number) => {
            count = count + elemt
        })
        return count;
    }
    // 3. call arrow funtion
    const output = sumArray(sumvalueArray) as number // retun number value
  
    console.log(`Output Total = ${output}`) // Output Total = 3
    


    //
}