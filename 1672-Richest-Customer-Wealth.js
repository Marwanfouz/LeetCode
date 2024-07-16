/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    let max = 0

    accounts.forEach((element) => {
        let sum = element.reduce((partialSum, a) => partialSum + a, 0)
        if (sum > max)
            max = sum
    })

    return max
};
