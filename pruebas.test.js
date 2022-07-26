// @ts-check
import test from "node:test";
import assert from "node:assert";
test("examples", () => {
    assert.equal(1, 0, "1 is not equal to 0");
});

test("example object test ", () => {
    assert.deepEqual({ a: 1 }, { a: 1 }, "objects are not equal");
});

test("example of async test", async () => {
    const result = await Promise.resolve(1);
    assert.equal(result, 1, "1 is not equal to 1");
});

test("should find last even number", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const lastEvenNumber = numbers.findLast((n) => n % 2 === 0);
    assert.equal(lastEvenNumber, 10);
});
test("should fin last index even number", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const lastEvenNumber = numbers.findLastIndex((n) => n % 2 === 0);
    assert.equal(lastEvenNumber, 9);
});
test("should fetch data from jsonplaceholder", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    assert.equal(response.status, 200);
});

test("should throw an exception at fetch", () => {
    const fetching = async () => {
        const resp = await fetch("123");
        return resp;
    };
    assert.rejects(fetching, {
        message: "Failed to parse URL from 123",
    });
});
