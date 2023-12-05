import { sum } from "../sum";

test("sum is", () => {
    const result = sum(5,2);

    //Assertion
    expect(result).toBe(7);
})