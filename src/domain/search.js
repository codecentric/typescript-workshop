export const combineSearchResults = (firstResults, secondResults) => {
    return [...firstResults, ...secondResults];
};

const firstResult = combineSearchResults([1, 2, 3], ["a", "b", "c"]); // Expected output: [1, 2, 3, "a", "b", "c"]
const secondResult = combineSearchResults(firstResult, [{ a: "123" }]); // Expected output: [1, 2, 3, "a", "b", "c", {a: "123"}]
