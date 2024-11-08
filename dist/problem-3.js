"use strict";
{
    // problem 3 solved
    const countWordOccurrences = (title, find) => {
        // input value split than esay value check
        const crateArray = title.toLowerCase().split(/[\s$&,!#@()]+/);
        const findData = crateArray === null || crateArray === void 0 ? void 0 : crateArray.filter((elemt) => elemt === find).length;
        return findData;
    };
    const output = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(output);
    //
}
