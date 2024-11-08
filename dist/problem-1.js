"use strict";
{
    // problem 1 solved
    // 3 step use solved my problem
    // 1. create input array
    const sumvalueArray = [1, 2, 3, 4, 5, 6];
    // 2. create sumArray arrow funtion value received  number array and retrun just number value
    const sumArray = (params) => {
        // sum store number count variable in 
        let count = 0;
        params === null || params === void 0 ? void 0 : params.map((elemt) => {
            count = count + elemt;
        });
        return count;
    };
    // 3. call arrow funtion
    const output = sumArray(sumvalueArray); // retun number value
    console.log(`Output Total = ${output}`); // Output Total = 3
    //
}
