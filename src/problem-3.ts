{
    // problem 3 solved
    

    const countWordOccurrences = (title: string, find: string): number => {
        // input value split than esay value check
        const crateArray: string[] = title.toLowerCase().split(/[\s$&,!#@()]+/)
        const findData = crateArray?.filter((elemt: string) => elemt === find).length
        return findData;


    }
    const output = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript") as number

    console.log(output)



    //
}